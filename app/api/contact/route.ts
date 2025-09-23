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
          utm_source: data.utm_source,
          utm_campaign: data.utm_campaign,
          utm_medium: data.utm_medium,
          utm_term: data.utm_term,
          utm_content: data.utm_content,
        } as const;

        const fields: Record<string, string | number | boolean> = {};
        for (const [key, value] of Object.entries(rawFields)) {
          if (value !== undefined) {
            fields[key] = value as string | number | boolean;
          }
        }

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
        await sendMailViaGraph({
          to: ['feyza.ozel@bravioo.com', 'sales@bravioo.com'],
          subject: `New Bravioo Contact: ${data.company}`,
          htmlContent: emailTemplates.contactForm({
            name: data.name,
            email: data.email,
            company: data.company,
            employees: data.employees,
            message: data.message,
          }),
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue even if email fails
      }
    }

    return NextResponse.json({ ok: true });
    
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
