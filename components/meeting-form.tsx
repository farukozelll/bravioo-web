'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
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
import { useLocale } from 'next-intl';

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
      title: locale === 'tr' ? 'Hızlı Demo' : 'Quick Demo',
      duration: '15 min',
      description: locale === 'tr' 
        ? 'Platform genel özellikleri' 
        : 'Platform overview',
      icon: Clock,
    },
    {
      value: 'standard',
      title: locale === 'tr' ? 'Standart Demo' : 'Standard Demo',
      duration: '30 min',
      description: locale === 'tr'
        ? 'Detaylı platform turu'
        : 'Detailed platform tour',
      icon: Users,
      popular: true,
    },
    {
      value: 'comprehensive',
      title: locale === 'tr' ? 'Kapsamlı Demo' : 'Comprehensive Demo',
      duration: '60 min',
      description: locale === 'tr'
        ? 'Tüm modüller ve entegrasyon'
        : 'All modules and integration',
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

  const interestOptions = [
    { value: 'recognition', label: locale === 'tr' ? 'Takdir Sistemi' : 'Recognition System' },
    { value: 'surveys', label: locale === 'tr' ? 'Anketler' : 'Surveys' },
    { value: 'analytics', label: locale === 'tr' ? 'Analitik' : 'Analytics' },
    { value: 'integrations', label: locale === 'tr' ? 'Entegrasyonlar' : 'Integrations' },
    { value: 'mobile', label: locale === 'tr' ? 'Mobil App' : 'Mobile App' },
    { value: 'automation', label: locale === 'tr' ? 'Otomasyon' : 'Automation' },
  ];

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
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'meeting_request', {
          event_category: 'engagement',
          event_label: data.demoType,
          value: 1,
        });
      }

    } catch (err) {
      console.error('Form submission error:', err);
      setError(
        locale === 'tr'
          ? 'Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
          : 'An error occurred while submitting the form. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-emerald-200 dark:border-emerald-600 ${className}`}
      >
        <div className="text-center">
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-emerald-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {locale === 'tr' ? 'Demo Talebiniz Alındı!' : 'Demo Request Received!'}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {locale === 'tr'
              ? '24 saat içinde sizinle iletişime geçeceğiz ve demo toplantısı planlayacağız.'
              : 'We\'ll contact you within 24 hours to schedule your demo meeting.'
            }
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            variant="outline"
            className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
          >
            {locale === 'tr' ? 'Yeni Talep Oluştur' : 'Create New Request'}
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`space-y-6 ${className}`}>
      {/* Demo Type Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
          {locale === 'tr' ? 'Demo Türü Seçin' : 'Choose Demo Type'}
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
                        {locale === 'tr' ? 'Popüler' : 'Popular'}
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
            {locale === 'tr' ? 'Ad' : 'First Name'} *
          </label>
          <input
            {...register('firstName')}
            type="text"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-gray-100 transition-colors"
            placeholder={locale === 'tr' ? 'Adınız' : 'Your first name'}
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            {locale === 'tr' ? 'Soyad' : 'Last Name'} *
          </label>
          <input
            {...register('lastName')}
            type="text"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-gray-100 transition-colors"
            placeholder={locale === 'tr' ? 'Soyadınız' : 'Your last name'}
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
            {locale === 'tr' ? 'E-posta' : 'Email'} *
          </label>
          <input
            {...register('email')}
            type="email"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-gray-100 transition-colors"
            placeholder={locale === 'tr' ? 'ornek@email.com' : 'example@email.com'}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            <Phone className="w-4 h-4 inline mr-2" />
            {locale === 'tr' ? 'Telefon' : 'Phone'}
          </label>
          <input
            {...register('phone')}
            type="tel"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-gray-100 transition-colors"
            placeholder={locale === 'tr' ? '+90 555 123 45 67' : '+1 (555) 123-4567'}
          />
        </div>
      </div>

      {/* Company Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            <Building2 className="w-4 h-4 inline mr-2" />
            {locale === 'tr' ? 'Şirket' : 'Company'} *
          </label>
          <input
            {...register('company')}
            type="text"
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-gray-100 transition-colors"
            placeholder={locale === 'tr' ? 'Şirket adınız' : 'Your company name'}
          />
          {errors.company && (
            <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            {locale === 'tr' ? 'Çalışan Sayısı' : 'Number of Employees'} *
          </label>
          <select
            {...register('employees')}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-gray-100 transition-colors"
          >
            <option value="">
              {locale === 'tr' ? 'Seçiniz' : 'Select'}
            </option>
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
          {locale === 'tr' ? 'Pozisyon' : 'Job Title'}
        </label>
        <input
          {...register('jobTitle')}
          type="text"
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-gray-100 transition-colors"
          placeholder={locale === 'tr' ? 'İK Müdürü, CEO, vb.' : 'HR Manager, CEO, etc.'}
        />
      </div>

      {/* Interests */}
      <div>
        <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-3">
          {locale === 'tr' ? 'İlgilendiğiniz Özellikler' : 'Features of Interest'}
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {interestOptions.map((interest) => (
            <label key={interest.value} className="flex items-center space-x-2 cursor-pointer">
              <input
                {...register('interests')}
                type="checkbox"
                value={interest.value}
                className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 focus:ring-2"
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">{interest.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Preferred Meeting Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
            <Calendar className="w-4 h-4 inline mr-2" />
            {locale === 'tr' ? 'Tercih Ettiğiniz Tarih' : 'Preferred Date'}
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
            {locale === 'tr' ? 'Tercih Ettiğiniz Saat' : 'Preferred Time'}
          </label>
          <select
            {...register('preferredTime')}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-gray-100 transition-colors"
          >
            <option value="">
              {locale === 'tr' ? 'Seçiniz' : 'Select'}
            </option>
            <option value="09:00">09:00</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="14:00">14:00</option>
            <option value="15:00">15:00</option>
            <option value="16:00">16:00</option>
            <option value="17:00">17:00</option>
          </select>
        </div>
      </div>

      {/* Additional Message */}
      <div>
        <label className="block text-sm font-medium text-gray-900 dark:text-gray-100 mb-2">
          {locale === 'tr' ? 'Ek Mesaj' : 'Additional Message'}
        </label>
        <textarea
          {...register('message')}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:text-gray-100 transition-colors resize-none"
          placeholder={locale === 'tr' 
            ? 'Demo ile ilgili özel talepleriniz veya sorularınız...'
            : 'Any specific requirements or questions about the demo...'
          }
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
            {locale === 'tr' ? 'Gönderiliyor...' : 'Submitting...'}
          </>
        ) : (
          <>
            <Calendar className="w-5 h-5" />
            {locale === 'tr' ? 'Demo Toplantısı Planla' : 'Schedule Demo Meeting'}
          </>
        )}
      </Button>

      {/* Privacy Note */}
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
        {locale === 'tr'
          ? 'Bu formu göndererek, '
          : 'By submitting this form, you agree to our '
        }
        <a href="/legal/privacy" className="text-emerald-600 hover:underline">
          {locale === 'tr' ? 'Gizlilik Politikamızı' : 'Privacy Policy'}
        </a>
        {locale === 'tr' ? ' kabul etmiş olursunuz.' : '.'}
      </p>
    </form>
  );
}
