import nodemailer from 'nodemailer';

type MailOptions = {
  to: string | string[];
  subject: string;
  html: string;
};

/**
 * Creates a Nodemailer transporter using environment variables.
 * Required envs for SMTP: MAIL_HOST, MAIL_PORT, MAIL_USER, MAIL_PASS
 * Optional: MAIL_FROM (defaults to MAIL_USER)
 */
function createTransport() {
  const host = process.env.MAIL_HOST;
  const port = process.env.MAIL_PORT ? Number(process.env.MAIL_PORT) : undefined;
  const user = process.env.MAIL_USER;
  const pass = process.env.MAIL_PASS;

  if (!host || !port || !user || !pass) {
    return null; // Not configured
  }

  const isSecure = port === 465; // Common convention

  return nodemailer.createTransport({
    host,
    port,
    secure: isSecure,
    auth: { user, pass },
  });
}

export async function sendMail(options: MailOptions) {
  const transporter = createTransport();
  if (!transporter) {
    throw new Error('SMTP transporter is not configured');
  }

  const from = process.env.MAIL_FROM || process.env.MAIL_USER as string;

  await transporter.sendMail({
    from,
    to: Array.isArray(options.to) ? options.to.join(',') : options.to,
    subject: options.subject,
    html: options.html,
  });
}


