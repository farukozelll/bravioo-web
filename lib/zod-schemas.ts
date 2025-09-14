import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  employees: z.enum(['1-50', '51-200', '201-1000', '1000+'], {
    required_error: 'Please select company size',
  }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  agree: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the terms and conditions' }),
  }),
  utm_source: z.string().optional(),
  utm_campaign: z.string().optional(),
  utm_medium: z.string().optional(),
  utm_term: z.string().optional(),
  utm_content: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const consentSchema = z.object({
  necessary: z.boolean().default(true),
  analytics: z.boolean().default(false),
  marketing: z.boolean().default(false),
  functional: z.boolean().default(false),
  timestamp: z.date().default(() => new Date()),
  version: z.string().default('1.0'),
});

export type ConsentData = z.infer<typeof consentSchema>;
