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
import { CheckCircle, AlertCircle, Send, Loader2, ArrowRight, ArrowLeft, User, Building, Phone, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactFormTabsProps {
  className?: string;
}

type FormStep = 'contact' | 'details';

export function ContactFormTabs({ className }: ContactFormTabsProps) {
  const t = useTranslations('contact');
  const [currentStep, setCurrentStep] = useState<FormStep>('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
    watch,
  } = useForm<ContactFormData & {
    phone?: string;
    jobTitle?: string;
    industry?: string;
    budget?: string;
    timeline?: string;
    painPoints?: string;
    currentSolution?: string;
    decisionMakers?: string;
  }>({
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

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // First, save partial data when moving to step 2
      if (currentStep === 'contact') {
        // Save contact info to localStorage or send to API for lead capture
        const contactData = {
          name: data.name,
          email: data.email,
          company: data.company,
          employees: data.employees,
          phone: data.phone,
          jobTitle: data.jobTitle,
          timestamp: new Date().toISOString(),
          step: 'contact_info_completed'
        };
        
        // Save to localStorage for recovery
        localStorage.setItem('bravioo_lead_partial', JSON.stringify(contactData));
        
        // Send partial data to API for lead tracking
        try {
          await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...contactData,
              message: 'Partial form submission - contact info collected',
              isPartial: true
            }),
          });
        } catch (error) {
          console.log('Partial data save failed, continuing...', error);
        }

        analytics.formSubmit('contact_partial', true);
        return;
      }

      // Full form submission
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
        localStorage.removeItem('bravioo_lead_partial');
        analytics.formSubmit('contact_full', true);
      } else {
        setSubmitStatus('error');
        analytics.formSubmit('contact_full', false);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      analytics.formSubmit('contact_full', false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextStep = async () => {
    const isValid = await trigger(['name', 'email', 'company', 'employees']);
    if (isValid) {
      await handleSubmit(onSubmit)();
      setCurrentStep('details');
    }
  };

  const tabs = [
    {
      id: 'contact',
      name: t('tabs.contact') || 'Contact Info',
      icon: User,
      description: t('tabs.contactDesc') || 'Basic information about you and your company'
    },
    {
      id: 'details',
      name: t('tabs.details') || 'Project Details',
      icon: Building,
      description: t('tabs.detailsDesc') || 'Tell us more about your needs and goals'
    }
  ];

  return (
    <div className={className}>
      {/* Tab Navigation */}
      <div className="mb-8">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentStep === tab.id;
            const isCompleted = currentStep === 'details' && tab.id === 'contact';
            
            return (
              <button
                key={tab.id}
                onClick={() => tab.id === 'contact' || currentStep === 'details' ? setCurrentStep(tab.id as FormStep) : null}
                disabled={tab.id === 'details' && currentStep === 'contact'}
                className={cn(
                  'flex-1 group relative min-w-0 overflow-hidden bg-white py-4 px-6 text-center text-sm font-medium rounded-xl border-2 transition-all duration-300',
                  isActive 
                    ? 'border-brand-500 text-brand-600 bg-brand-50' 
                    : isCompleted
                    ? 'border-green-500 text-green-600 bg-green-50 hover:bg-green-100'
                    : currentStep === 'details'
                    ? 'border-sand-200 text-ink-600 bg-white hover:bg-sand-50'
                    : 'border-sand-200 text-ink-400 bg-sand-50 cursor-not-allowed'
                )}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Icon className={cn(
                    'h-5 w-5',
                    isActive ? 'text-brand-600' : isCompleted ? 'text-green-600' : 'text-ink-400'
                  )} />
                  <span className="font-semibold">{tab.name}</span>
                  {isCompleted && <CheckCircle className="h-4 w-4 text-green-600" />}
                </div>
                <p className={cn(
                  'mt-1 text-xs',
                  isActive ? 'text-brand-500' : isCompleted ? 'text-green-500' : 'text-ink-400'
                )}>
                  {tab.description}
                </p>
              </button>
            );
          })}
        </nav>
      </div>

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

        {/* Step 1: Contact Information */}
        {currentStep === 'contact' && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-ink-900 mb-2">
                {t('steps.contact.title') || 'Let\'s get to know you'}
              </h3>
              <p className="text-ink-600">
                {t('steps.contact.subtitle') || 'We\'ll use this information to personalize your experience'}
              </p>
            </div>

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

              {/* Phone Field */}
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-ink-800">
                  {t('form.phone')}
                </label>
                <Input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  placeholder={t('form.phonePlaceholder')}
                />
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

              {/* Job Title Field */}
              <div className="space-y-2">
                <label htmlFor="jobTitle" className="text-sm font-medium text-ink-800">
                  {t('form.jobTitle')}
                </label>
                <Input
                  id="jobTitle"
                  {...register('jobTitle')}
                  placeholder={t('form.jobTitlePlaceholder')}
                />
              </div>
            </div>

            {/* Next Button */}
            <div className="flex justify-end">
              <Button
                type="button"
                onClick={handleNextStep}
                disabled={isSubmitting}
                className="bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-600 hover:to-emerald-700"
                size="lg"
              >
                {isSubmitting ? (
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                ) : (
                  <ArrowRight className="h-5 w-5 mr-2" />
                )}
                {t('form.next') || 'Next Step'}
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Project Details */}
        {currentStep === 'details' && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-ink-900 mb-2">
                {t('steps.details.title') || 'Tell us about your project'}
              </h3>
              <p className="text-ink-600">
                {t('steps.details.subtitle') || 'This helps us prepare a more relevant demo for you'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Industry Field */}
              <div className="space-y-2">
                <label htmlFor="industry" className="text-sm font-medium text-ink-800">
                  {t('form.industry')}
                </label>
                <select
                  id="industry"
                  {...register('industry')}
                  className="flex h-11 w-full rounded-lg border border-sand-200 bg-white px-4 py-2 text-sm text-ink-800 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                >
                  <option value="">{t('form.industryPlaceholder')}</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Timeline Field */}
              <div className="space-y-2">
                <label htmlFor="timeline" className="text-sm font-medium text-ink-800">
                  {t('form.timeline')}
                </label>
                <select
                  id="timeline"
                  {...register('timeline')}
                  className="flex h-11 w-full rounded-lg border border-sand-200 bg-white px-4 py-2 text-sm text-ink-800 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                >
                  <option value="">{t('form.timelinePlaceholder')}</option>
                  <option value="immediate">Immediate (1-30 days)</option>
                  <option value="short">Short term (1-3 months)</option>
                  <option value="medium">Medium term (3-6 months)</option>
                  <option value="long">Long term (6+ months)</option>
                  <option value="exploring">Just exploring</option>
                </select>
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
                rows={4}
                className={errors.message ? 'border-red-500 focus:border-red-500' : ''}
              />
              {errors.message && (
                <p className="text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            {/* Pain Points Field */}
            <div className="space-y-2">
              <label htmlFor="painPoints" className="text-sm font-medium text-ink-800">
                {t('form.painPoints')}
              </label>
              <Textarea
                id="painPoints"
                {...register('painPoints')}
                placeholder={t('form.painPointsPlaceholder')}
                rows={3}
              />
            </div>

            {/* Current Solution Field */}
            <div className="space-y-2">
              <label htmlFor="currentSolution" className="text-sm font-medium text-ink-800">
                {t('form.currentSolution')}
              </label>
              <Input
                id="currentSolution"
                {...register('currentSolution')}
                placeholder={t('form.currentSolutionPlaceholder')}
              />
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

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <Button
                type="button"
                onClick={() => setCurrentStep('contact')}
                variant="outline"
                size="lg"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                {t('form.previous') || 'Previous'}
              </Button>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-600 hover:to-emerald-700"
                size="lg"
              >
                {isSubmitting ? (
                  <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                ) : (
                  <Send className="h-5 w-5 mr-2" />
                )}
                {isSubmitting ? 'Sending...' : t('form.submit')}
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
