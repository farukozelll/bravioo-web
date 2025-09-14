'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactSchema, type ContactFormData } from '@/lib/zod-schemas';
import { analytics } from '@/components/analytics';
import { CheckCircle, AlertCircle, Send, Loader2 } from 'lucide-react';

interface ContactFormProps {
  className?: string;
}

export function ContactForm({ className }: ContactFormProps) {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      utm_source: typeof window !== 'undefined' ? 
        new URLSearchParams(window.location.search).get('utm_source') || undefined : undefined,
      utm_campaign: typeof window !== 'undefined' ? 
        new URLSearchParams(window.location.search).get('utm_campaign') || undefined : undefined,
      utm_medium: typeof window !== 'undefined' ? 
        new URLSearchParams(window.location.search).get('utm_medium') || undefined : undefined,
      utm_term: typeof window !== 'undefined' ? 
        new URLSearchParams(window.location.search).get('utm_term') || undefined : undefined,
      utm_content: typeof window !== 'undefined' ? 
        new URLSearchParams(window.location.search).get('utm_content') || undefined : undefined,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.ok) {
        setSubmitStatus('success');
        reset();
        analytics.formSubmit('contact', true);
      } else {
        setSubmitStatus('error');
        analytics.formSubmit('contact', false);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      analytics.formSubmit('contact', false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Success/Error Messages */}
        {submitStatus === 'success' && (
          <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
            <CheckCircle className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm">{t('form.success')}</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm">{t('form.error')}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-ink-800">
              {t('form.name')} <span className="text-red-500">*</span>
            </label>
            <Input
              id="name"
              {...register('name')}
              placeholder={t('form.namePlaceholder')}
              className={errors.name ? 'border-red-500 focus:border-red-500' : ''}
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-ink-800">
              {t('form.email')} <span className="text-red-500">*</span>
            </label>
            <Input
              id="email"
              type="email"
              {...register('email')}
              placeholder={t('form.emailPlaceholder')}
              className={errors.email ? 'border-red-500 focus:border-red-500' : ''}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Company Field */}
          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium text-ink-800">
              {t('form.company')} <span className="text-red-500">*</span>
            </label>
            <Input
              id="company"
              {...register('company')}
              placeholder={t('form.companyPlaceholder')}
              className={errors.company ? 'border-red-500 focus:border-red-500' : ''}
            />
            {errors.company && (
              <p className="text-sm text-red-600">{errors.company.message}</p>
            )}
          </div>

          {/* Company Size Field */}
          <div className="space-y-2">
            <label htmlFor="employees" className="text-sm font-medium text-ink-800">
              {t('form.employees')} <span className="text-red-500">*</span>
            </label>
            <select
              id="employees"
              {...register('employees')}
              className={`flex h-11 w-full rounded-lg border bg-white px-4 py-2 text-sm text-ink-800 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20 ${
                errors.employees ? 'border-red-500 focus:border-red-500' : 'border-sand-200'
              }`}
            >
              <option value="">{t('form.employeesPlaceholder')}</option>
              <option value="1-50">{t('employeeOptions.1-50')}</option>
              <option value="51-200">{t('employeeOptions.51-200')}</option>
              <option value="201-1000">{t('employeeOptions.201-1000')}</option>
              <option value="1000+">{t('employeeOptions.1000+')}</option>
            </select>
            {errors.employees && (
              <p className="text-sm text-red-600">{errors.employees.message}</p>
            )}
          </div>
        </div>

        {/* Message Field */}
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-ink-800">
            {t('form.message')} <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            {...register('message')}
            placeholder={t('form.messagePlaceholder')}
            rows={5}
            className={errors.message ? 'border-red-500 focus:border-red-500' : ''}
          />
          {errors.message && (
            <p className="text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Agreement Checkbox */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="agree"
            {...register('agree')}
            className="mt-1 h-4 w-4 rounded border-sand-300 text-brand-600 focus:ring-brand-500"
          />
          <label htmlFor="agree" className="text-sm text-ink-700">
            {t('form.agree')} <span className="text-red-500">*</span>
          </label>
        </div>
        {errors.agree && (
          <p className="text-sm text-red-600">{errors.agree.message}</p>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto"
          size="lg"
        >
          {isSubmitting ? (
            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
          ) : (
            <Send className="h-5 w-5 mr-2" />
          )}
          {isSubmitting ? 'Sending...' : t('form.submit')}
        </Button>
      </form>
    </div>
  );
}
