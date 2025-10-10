import { NextResponse } from 'next/server';
import { z } from 'zod';
import { submitHubSpotForm } from '@/lib/hubspot';
import { sendMailViaGraph, emailTemplates } from '@/lib/graph-mail';
import { sendMail } from '@/lib/mailer';

// Validation schema for meeting form
const meetingFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().min(2, 'Company name is required'),
  jobTitle: z.string().optional(),
  employees: z.string(),
  demoType: z.enum(['quick', 'standard', 'comprehensive']),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  timezone: z.string().optional(),
  interests: z.array(z.string()).optional(),
  message: z.string().optional(),
  utmSource: z.string().optional(),
  utmCampaign: z.string().optional(),
  utmMedium: z.string().optional(),
  utmTerm: z.string().optional(),
  utmContent: z.string().optional(),
  pageUrl: z.string().optional(),
  referrer: z.string().optional(),
  userAgent: z.string().optional(),
  timestamp: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validationResult = meetingFormSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          ok: false, 
          error: 'Validation failed',
          errors: validationResult.error.format() 
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Prepare demo type descriptions
    const demoTypeDescriptions = {
      quick: {
        en: 'Quick Demo (15 min) - Platform overview',
        tr: 'Hızlı Demo (15 dk) - Platform özellikleri'
      },
      standard: {
        en: 'Standard Demo (30 min) - Detailed platform tour',
        tr: 'Standart Demo (30 dk) - Detaylı platform turu'
      },
      comprehensive: {
        en: 'Comprehensive Demo (60 min) - All modules and integration',
        tr: 'Kapsamlı Demo (60 dk) - Tüm modüller ve entegrasyon'
      }
    };

    // Submit to HubSpot (if configured)
    let hubspotResult = null;
    if (process.env.HS_PORTAL_ID && process.env.HS_MEETING_FORM_ID) {
      try {
        hubspotResult = await submitHubSpotForm({
          portalId: process.env.HS_PORTAL_ID,
          formId: process.env.HS_MEETING_FORM_ID,
          fields: {
            email: data.email,
            firstname: data.firstName,
            lastname: data.lastName,
            phone: data.phone || '',
            company: data.company,
            jobtitle: data.jobTitle || '',
            employees: data.employees,
            demo_type: data.demoType,
            preferred_date: data.preferredDate || '',
            preferred_time: data.preferredTime || '',
            timezone: data.timezone || '',
            interests: data.interests?.join(', ') || '',
            message: data.message || '',
            utm_source: data.utmSource || '',
            utm_campaign: data.utmCampaign || '',
            utm_medium: data.utmMedium || '',
            utm_term: data.utmTerm || '',
            utm_content: data.utmContent || '',
            page_url: data.pageUrl || '',
            referrer: data.referrer || '',
            user_agent: data.userAgent || '',
            submission_date: data.timestamp || new Date().toISOString(),
            lead_source: 'Website Meeting Form',
            lifecycle_stage: 'lead',
          },
        });
      } catch (hubspotError) {
        console.error('HubSpot submission failed:', hubspotError);
        // Continue with email sending even if HubSpot fails
      }
    }

    // Send email notification - prefer Graph, fallback to SMTP if explicitly enabled
    let emailResult = null;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 720px; margin: 0 auto;">
        <h2 style="margin:0 0 12px 0">🎯 New Demo Meeting Request</h2>

        <h3>👤 Contact Information</h3>
        <ul>
          <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Phone:</strong> ${data.phone || '—'}</li>
          <li><strong>Job Title:</strong> ${data.jobTitle || '—'}</li>
        </ul>

        <h3>🏢 Company Information</h3>
        <ul>
          <li><strong>Company:</strong> ${data.company}</li>
          <li><strong>Employees:</strong> ${data.employees}</li>
        </ul>

        <h3>📅 Demo Details</h3>
        <ul>
          <li><strong>Demo Type:</strong> ${demoTypeDescriptions[data.demoType].en}</li>
          <li><strong>Preferred Date:</strong> ${data.preferredDate || 'No preference'}</li>
          <li><strong>Preferred Time:</strong> ${data.preferredTime || 'No preference'}</li>
          <li><strong>Timezone:</strong> ${data.timezone || '—'}</li>
        </ul>

        <h3>💬 Additional Message</h3>
        <div style="padding:12px; background:#f8fafc; border-left:4px solid #0ea5e9">${(data.message || '').replace(/\n/g,'<br>') || '—'}</div>

        <h3 style="margin-top:20px">📊 Tracking</h3>
        <ul>
          <li><strong>UTM Source:</strong> ${data.utmSource || 'Direct'}</li>
          <li><strong>UTM Campaign:</strong> ${data.utmCampaign || 'N/A'}</li>
          <li><strong>UTM Medium:</strong> ${data.utmMedium || 'N/A'}</li>
          <li><strong>UTM Term:</strong> ${data.utmTerm || 'N/A'}</li>
          <li><strong>UTM Content:</strong> ${data.utmContent || 'N/A'}</li>
          <li><strong>Page URL:</strong> ${data.pageUrl || 'N/A'}</li>
          <li><strong>Referrer:</strong> ${data.referrer || 'N/A'}</li>
          <li><strong>User Agent:</strong> ${data.userAgent || 'N/A'}</li>
          <li><strong>Submission Time:</strong> ${data.timestamp || new Date().toISOString()}</li>
        </ul>

        <hr />
        <p><em>Submitted via Bravioo website meeting form.</em></p>
      </div>
    `;

    const smtpEnabled = process.env.MAIL_SMTP_ENABLED === 'true'
      && !!process.env.MAIL_HOST && !!process.env.MAIL_PORT && !!process.env.MAIL_USER && !!process.env.MAIL_PASS;

    if (process.env.AZ_TENANT_ID && process.env.AZ_CLIENT_ID && process.env.AZ_CLIENT_SECRET) {
      try {
        await sendMailViaGraph({
          to: [process.env.CONTACT_EMAIL || 'info@bravioo.com'],
          subject: `🎯 New Demo Request: ${data.demoType} - ${data.company}`,
          htmlContent: emailHtml,
          from: process.env.GRAPH_FROM_EMAIL || 'faruk.ozel@bravioo.com',
          replyTo: data.email,
        });
        emailResult = { via: 'graph' };
      } catch (graphError) {
        console.error('Graph email sending failed:', graphError);
        if (smtpEnabled) {
          try {
            await sendMail({
              to: [process.env.CONTACT_EMAIL || 'info@bravioo.com'],
              subject: `🎯 New Demo Request: ${data.demoType} - ${data.company}`,
              html: emailHtml,
            });
            emailResult = { via: 'smtp' };
          } catch (smtpError) {
            console.error('SMTP email sending failed:', smtpError);
          }
        }
      }
    } else if (smtpEnabled) {
      try {
        await sendMail({
          to: [process.env.CONTACT_EMAIL || 'info@bravioo.com'],
          subject: `🎯 New Demo Request: ${data.demoType} - ${data.company}`,
          html: emailHtml,
        });
        emailResult = { via: 'smtp' };
      } catch (smtpError) {
        console.error('SMTP email sending failed:', smtpError);
      }
    }

    // Return success response
    return NextResponse.json({
      ok: true,
      message: 'Demo request submitted successfully',
      data: {
        id: hubspotResult?.inboundDbId || `meeting_${Date.now()}`,
        submissionTime: data.timestamp || new Date().toISOString(),
        demoType: data.demoType,
        hubspotSubmitted: !!hubspotResult,
        emailSent: !!emailResult,
      },
    });

  } catch (error) {
    console.error('Meeting form submission error:', error);
    
    return NextResponse.json(
      { 
        ok: false, 
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error occurred',
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new NextResponse(null, { 
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
