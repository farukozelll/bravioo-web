import { NextResponse } from 'next/server';
import { contactSchema } from '@/lib/zod-schemas';
import { submitHubSpotForm } from '@/lib/hubspot';
import { sendMailViaGraph, emailTemplates } from '@/lib/graph-mail';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validationResult = contactSchema.safeParse(body);
    
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

    // Submit to HubSpot (if configured)
    if (process.env.HS_PORTAL_ID && process.env.HS_FORM_ID) {
      try {
        // Build fields with explicit typing and skip undefined UTM fields
        const rawFields = {
          email: data.email,
          firstname: data.name.split(' ')[0],
          lastname: data.name.split(' ').slice(1).join(' ') || '',
          company: data.company,
          employees: data.employees,
          message: data.message,
          ...(data.utm_source && { utm_source: data.utm_source }),
          ...(data.utm_campaign && { utm_campaign: data.utm_campaign }),
          ...(data.utm_medium && { utm_medium: data.utm_medium }),
          ...(data.utm_term && { utm_term: data.utm_term }),
          ...(data.utm_content && { utm_content: data.utm_content }),
        };

        const fields: Record<string, string | number | boolean> = rawFields;

        await submitHubSpotForm({
          portalId: process.env.HS_PORTAL_ID,
          formId: process.env.HS_FORM_ID,
          fields,
        });
      } catch (hubspotError) {
        console.error('HubSpot submission failed:', hubspotError);
        // Continue with email sending even if HubSpot fails
      }
    }

    // Send email notification (if configured)
    if (process.env.AZ_TENANT_ID && process.env.AZ_CLIENT_ID && process.env.AZ_CLIENT_SECRET) {
      try {
        const utms = {
          source: data.utm_source || 'Direct',
          campaign: data.utm_campaign || 'N/A',
          medium: data.utm_medium || 'N/A',
          term: data.utm_term || 'N/A',
          content: data.utm_content || 'N/A',
        };

        const html = `
          <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto;">
            <h2 style="color:#0f766e">New Contact Submission</h2>
            <h3>Contact</h3>
            <ul>
              <li><strong>Name:</strong> ${data.name}</li>
              <li><strong>Email:</strong> ${data.email}</li>
              <li><strong>Company:</strong> ${data.company}</li>
              <li><strong>Employees:</strong> ${data.employees}</li>
            </ul>
            <h3>Message</h3>
            <div style="padding:12px; background:#f8fafc; border-left:4px solid #0ea5e9">${(data.message || '').replace(/\n/g,'<br>')}</div>
            <h3 style="margin-top:20px">UTM</h3>
            <ul>
              <li><strong>Source:</strong> ${utms.source}</li>
              <li><strong>Campaign:</strong> ${utms.campaign}</li>
              <li><strong>Medium:</strong> ${utms.medium}</li>
              <li><strong>Term:</strong> ${utms.term}</li>
              <li><strong>Content:</strong> ${utms.content}</li>
            </ul>
          </div>
        `;

        await sendMailViaGraph({
          to: ['feyza.ozel@bravioo.com', 'info@bravioo.com'],
          subject: `New Bravioo Contact: ${data.company}`,
          htmlContent: html,
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue even if email fails
      }
    }

    return NextResponse.json({ ok: true, data });
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        ok: false, 
        error: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return NextResponse.json({}, { status: 200 });
}
