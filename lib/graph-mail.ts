import { ClientSecretCredential } from '@azure/identity';
import { Client } from '@microsoft/microsoft-graph-client';
import 'isomorphic-fetch';

export interface EmailData {
  to: string[];
  subject: string;
  html: string;
  cc?: string[];
  bcc?: string[];
  from?: string;
}

// Initialize Microsoft Graph client
async function getGraphClient() {
  const credential = new ClientSecretCredential(
    process.env.AZ_TENANT_ID!,
    process.env.AZ_CLIENT_ID!,
    process.env.AZ_CLIENT_SECRET!
  );

  const token = await credential.getToken('https://graph.microsoft.com/.default');

  return Client.init({
    authProvider: (done) => {
      done(null, token!.token);
    },
  });
}

export async function sendMailViaGraph({
  to,
  subject,
  html,
  cc = [],
  bcc = [],
  from = 'noreply@bravioo.com',
}: EmailData) {
  try {
    const client = await getGraphClient();

    const message = {
      message: {
        subject,
        body: {
          contentType: 'HTML' as const,
          content: html,
        },
        toRecipients: to.map((email) => ({
          emailAddress: {
            address: email,
          },
        })),
        ccRecipients: cc.map((email) => ({
          emailAddress: {
            address: email,
          },
        })),
        bccRecipients: bcc.map((email) => ({
          emailAddress: {
            address: email,
          },
        })),
      },
      saveToSentItems: true,
    };

    await client.api(`/users/${from}/sendMail`).post(message);
    
    console.log('Email sent successfully via Microsoft Graph');
  } catch (error) {
    console.error('Microsoft Graph email error:', error);
    throw new Error('Failed to send email via Microsoft Graph');
  }
}

// Email templates
export const emailTemplates = {
  contactForm: ({
    name,
    email,
    company,
    employees,
    message,
  }: {
    name: string;
    email: string;
    company: string;
    employees: string;
    message: string;
  }) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #3A9355; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0;">New Contact Form Submission</h1>
      </div>
      <div style="padding: 20px; background: #f9f9f9;">
        <h2 style="color: #3A9355;">Contact Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Company:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd; font-weight: bold;">Company Size:</td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${employees}</td>
          </tr>
        </table>
        
        <h2 style="color: #3A9355; margin-top: 30px;">Message</h2>
        <div style="background: white; padding: 15px; border-left: 4px solid #3A9355; margin-top: 10px;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        
        <div style="margin-top: 30px; text-align: center;">
          <a href="mailto:${email}" style="background: #3A9355; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">Reply to Contact</a>
        </div>
      </div>
      <div style="background: #f0f0f0; padding: 15px; text-align: center; color: #666; font-size: 12px;">
        This email was sent from the Bravioo contact form at ${new Date().toLocaleString()}
      </div>
    </div>
  `,
};
