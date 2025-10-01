import { NextResponse } from 'next/server';
import { z } from 'zod';
import { submitHubSpotForm } from '@/lib/hubspot';
import { sendMailViaGraph, emailTemplates } from '@/lib/graph-mail';

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

    // Send email notification (if configured)
    let emailResult = null;
    if (process.env.AZ_TENANT_ID && process.env.AZ_CLIENT_ID && process.env.AZ_CLIENT_SECRET) {
      try {
        const emailContent = `
        <h2>🎯 New Demo Meeting Request</h2>
        
        <h3>👤 Contact Information</h3>
        <ul>
          <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
          <li><strong>Email:</strong> ${data.email}</li>
          <li><strong>Phone:</strong> ${data.phone || 'Not provided'}</li>
          <li><strong>Job Title:</strong> ${data.jobTitle || 'Not provided'}</li>
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
          <li><strong>Timezone:</strong> ${data.timezone || 'Not specified'}</li>
          <li><strong>Interests:</strong> ${data.interests?.join(', ') || 'None specified'}</li>
        </ul>

        <h3>💬 Additional Message</h3>
        <p>${data.message || 'No additional message'}</p>

        <h3>📊 Tracking Information</h3>
        <ul>
          <li><strong>UTM Source:</strong> ${data.utmSource || 'Direct'}</li>
          <li><strong>UTM Campaign:</strong> ${data.utmCampaign || 'N/A'}</li>
          <li><strong>UTM Medium:</strong> ${data.utmMedium || 'N/A'}</li>
          <li><strong>Page URL:</strong> ${data.pageUrl || 'N/A'}</li>
          <li><strong>Referrer:</strong> ${data.referrer || 'Direct'}</li>
          <li><strong>Submission Time:</strong> ${data.timestamp || new Date().toISOString()}</li>
        </ul>

        <hr>
        <p><em>This demo request was submitted through the Bravioo website meeting form.</em></p>
        `;

        emailResult = await sendMailViaGraph({
          to: ['feyza.ozel@bravioo.com', process.env.CONTACT_EMAIL || 'info@bravioo.com'],
          subject: `🎯 New Demo Request: ${data.demoType} - ${data.company}`,
          htmlContent: emailContent,
          textContent: `
New Demo Meeting Request

Contact: ${data.firstName} ${data.lastName} (${data.email})
Company: ${data.company} (${data.employees} employees)
Demo Type: ${demoTypeDescriptions[data.demoType].en}
Preferred Date: ${data.preferredDate || 'No preference'}
Preferred Time: ${data.preferredTime || 'No preference'}
Message: ${data.message || 'No additional message'}
UTM Source: ${data.utmSource || 'Direct'}
Submission Time: ${data.timestamp || new Date().toISOString()}
          `,
        });

        // Send confirmation email to user
        const confirmationEmailContent = `
        <h2>Thank you for your demo request! 🎉</h2>
        
        <p>Hi ${data.firstName},</p>
        
        <p>We've received your request for a <strong>${demoTypeDescriptions[data.demoType].en}</strong> and are excited to show you how Bravioo can transform your employee experience!</p>
        
        <h3>What happens next?</h3>
        <ul>
          <li>✅ We'll review your request within 24 hours</li>
          <li>📞 A member of our team will contact you to confirm the meeting details</li>
          <li>📅 We'll schedule the demo at your preferred time</li>
          <li>🎯 We'll customize the demo based on your interests and company needs</li>
        </ul>

        <h3>Your Demo Request Details:</h3>
        <ul>
          <li><strong>Demo Type:</strong> ${demoTypeDescriptions[data.demoType].en}</li>
          <li><strong>Company:</strong> ${data.company}</li>
          <li><strong>Preferred Date:</strong> ${data.preferredDate || 'We\'ll discuss this with you'}</li>
          <li><strong>Preferred Time:</strong> ${data.preferredTime || 'We\'ll discuss this with you'}</li>
        </ul>

        <p>In the meantime, feel free to explore our <a href="https://bravioo.com/features">features</a> and <a href="https://bravioo.com/customers">customer success stories</a>.</p>
        
        <p>If you have any urgent questions, don't hesitate to reach out to us at <a href="mailto:info@bravioo.com">info@bravioo.com</a>.</p>
        
        <p>Best regards,<br>The Bravioo Team</p>
        
        <hr>
        <p><small>This is an automated confirmation email. If you didn't request this demo, please ignore this email.</small></p>
        `;

        await sendMailViaGraph({
          to: data.email,
          subject: '🎯 Demo Request Confirmed - Bravioo Team Will Contact You Soon',
          htmlContent: confirmationEmailContent,
          textContent: `
Thank you for your demo request!

Hi ${data.firstName},

We've received your request for a ${demoTypeDescriptions[data.demoType].en} and will contact you within 24 hours to schedule the meeting.

Demo Details:
- Type: ${demoTypeDescriptions[data.demoType].en}
- Company: ${data.company}
- Preferred Date: ${data.preferredDate || 'To be discussed'}
- Preferred Time: ${data.preferredTime || 'To be discussed'}

Best regards,
The Bravioo Team
          `,
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Don't fail the request if email fails
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
