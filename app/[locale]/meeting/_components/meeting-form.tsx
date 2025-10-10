'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { 
  Calendar, 
  Clock, 
  Users, 
  Building2, 
  Mail, 
  Phone, 
  CheckCircle,
  Loader2,
  AlertCircle 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocale, useTranslations } from 'next-intl';

// Form validation schema
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
});

type MeetingFormData = z.infer<typeof meetingFormSchema>;

interface MeetingFormProps {
  className?: string;
  defaultDemoType?: 'quick' | 'standard' | 'comprehensive';
}

export function MeetingForm({ className = '', defaultDemoType = 'standard' }: MeetingFormProps) {
  const locale = useLocale();
  const t = useTranslations('meeting.form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<MeetingFormData>({
    resolver: zodResolver(meetingFormSchema),
    defaultValues: {
      demoType: defaultDemoType,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
  });

  const selectedDemoType = watch('demoType');

  const demoTypes = [
    {
      value: 'quick',
      title: t('demoTypes.quick.title'),
      duration: t('demoTypes.quick.duration'),
      description: t('demoTypes.quick.description'),
      icon: Clock,
    },
    {
      value: 'standard',
      title: t('demoTypes.standard.title'),
      duration: t('demoTypes.standard.duration'),
      description: t('demoTypes.standard.description'),
      icon: Users,
      popular: true,
    },
    {
      value: 'comprehensive',
      title: t('demoTypes.comprehensive.title'),
      duration: t('demoTypes.comprehensive.duration'),
      description: t('demoTypes.comprehensive.description'),
      icon: Building2,
    },
  ];

  const employeeOptions = [
    { value: '1-10', label: '1-10' },
    { value: '11-50', label: '11-50' },
    { value: '51-200', label: '51-200' },
    { value: '201-1000', label: '201-1000' },
    { value: '1000+', label: '1000+' },
  ];

  // Generate preferred time options: 08:00 to 18:00 (inclusive), every 30 minutes
  const timeOptions = React.useMemo(() => {
    const options: string[] = [];
    for (let hour = 8; hour <= 18; hour++) {
      for (const minute of [0, 30]) {
        if (hour === 18 && minute === 30) continue; // cap at 18:00
        const hh = hour.toString().padStart(2, '0');
        const mm = minute === 0 ? '00' : '30';
        options.push(`${hh}:${mm}`);
      }
    }
    return options;
  }, []);

  const onSubmit = async (data: MeetingFormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Get UTM parameters from URL
      const urlParams = new URLSearchParams(window.location.search);
      const utmData = {
        utmSource: urlParams.get('utm_source') || '',
        utmCampaign: urlParams.get('utm_campaign') || '',
        utmMedium: urlParams.get('utm_medium') || '',
        utmTerm: urlParams.get('utm_term') || '',
        utmContent: urlParams.get('utm_content') || '',
      };

      const formData = {
        ...data,
        ...utmData,
        pageUrl: window.location.href,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString(),
      };

      // Submit to our API endpoint
      const response = await fetch('/api/meeting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Form submission failed');
      }

      setIsSubmitted(true);
      reset();

      // Track successful submission
      if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag!('event', 'meeting_request', {
          event_category: 'engagement',
          event_label: data.demoType,
          value: 1,
        });
      }

    } catch (err) {
      console.error('Form submission error:', err);
      setError(t('error.submit'));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        className={`bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-emerald-200 dark:border-emerald-600 ${className}`}
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-emerald-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {t('success.title')}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {t('success.message')}
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
          >
            {t('success.newRequest')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 ${className}`}>
      {/* Demo Type Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
          {t('demoTypeLabel')}
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {demoTypes.map((type) => {
            const Icon = type.icon;
            const isSelected = selectedDemoType === type.value;
            
            return (
              <label key={type.value} className="relative cursor-pointer">
                <input
                  {...register('demoType')}
                  type="radio"
                  value={type.value}
                  className="sr-only"
                />
                <div className={`
                  p-4 rounded-xl border-2 transition-all duration-200 hover:shadow-md
                  ${isSelected 
                    ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20' 
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                  }
                `}>
                  {type.popular && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {t('demoTypes.standard.popular')}
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className={`w-5 h-5 ${isSelected ? 'text-emerald-600' : 'text-gray-500'}`} />
                    <span className="font-semibold text-gray-900 dark:text-gray-100">{type.title}</span>
                  </div>
                  <div className="text-emerald-600 font-bold mb-1">{type.duration}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{type.description}</div>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            {t('labels.firstName')} *
          </label>
          <input
            {...register('firstName')}
            type="text"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-gray-100 transition-colors"
            placeholder={t('placeholders.firstName')}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            {t('labels.lastName')} *
          </label>
          <input
            {...register('lastName')}
            type="text"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-gray-100 transition-colors"
            placeholder={t('placeholders.lastName')}
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            <Mail className="w-4 h-4 inline mr-2" />
            {t('labels.email')} *
          </label>
          <input
            {...register('email')}
            type="email"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-gray-100 transition-colors"
            placeholder={t('placeholders.email')}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            <Phone className="w-4 h-4 inline mr-2" />
            {t('labels.phone')}
          </label>
          <input
            {...register('phone')}
            type="tel"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-gray-100 transition-colors"
            placeholder={t('placeholders.phone')}
          />
        </div>
      </div>

      {/* Company Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            <Building2 className="w-4 h-4 inline mr-2" />
            {t('labels.company')} *
          </label>
          <input
            {...register('company')}
            type="text"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-gray-100 transition-colors"
            placeholder={t('placeholders.company')}
          />
          {errors.company && (
            <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            {t('employees.label')} *
          </label>
          <select
            {...register('employees')}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-gray-100 transition-colors"
          >
            <option value="">{t('employees.select')}</option>
            {employeeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.employees && (
            <p className="mt-1 text-sm text-red-600">{errors.employees.message}</p>
          )}
        </div>
      </div>

      {/* Job Title */}
      <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            {t('labels.jobTitle')}
        </label>
        <input
          {...register('jobTitle')}
          type="text"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-gray-100 transition-colors"
            placeholder={t('placeholders.jobTitle')}
        />
      </div>

      {/* Interests removed as requested */}

      {/* Preferred Meeting Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            <Calendar className="w-4 h-4 inline mr-2" />
            {t('labels.preferredDate')}
          </label>
          <input
            {...register('preferredDate')}
            type="date"
            min={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-gray-100 transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            <Clock className="w-4 h-4 inline mr-2" />
            {t('labels.preferredTime')}
          </label>
          <select
            {...register('preferredTime')}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-gray-100 transition-colors"
          >
            <option value="">
              {locale === 'tr' ? 'Seçiniz' : 'Select'}
            </option>
            {timeOptions.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Additional Message */}
      <div>
        <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
          {t('labels.additionalMessage')}
        </label>
        <textarea
          {...register('message')}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-gray-100 transition-colors resize-none"
          placeholder={t('placeholders.message')}
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-600 rounded-xl">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
        </div>
      )}

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            {t('submit.submitting')}
          </>
        ) : (
          <>
            <Calendar className="w-5 h-5" />
            {t('submit.label')}
          </>
        )}
      </Button>

      {/* Privacy Note */}
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
        {t('privacy.prefix')}
        <Link href={`/${locale}/legal/privacy`} className="text-emerald-600 hover:underline">
          {t('privacy.policy')}
        </Link>
        {t('privacy.suffix')}
      </p>
    </form>
  );
}
