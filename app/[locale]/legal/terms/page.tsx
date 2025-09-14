import React from 'react';
import { getTranslations } from 'next-intl/server';
import { FileText, AlertTriangle, CheckCircle } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  return {
    title: `Terms of Use | Bravioo`,
    description: 'Bravioo Terms of Use - Terms and conditions for using our employee recognition platform.',
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;

  return (
    <div className="p-8 md:p-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-ink-900">Terms of Use</h1>
            <p className="text-ink-600">Last updated: January 15, 2025</p>
          </div>
        </div>
        <p className="text-lg text-ink-600 leading-relaxed">
          These Terms of Use govern your access to and use of the Bravioo platform and services. 
          By using our services, you agree to be bound by these terms.
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">Acceptance of Terms</h2>
            <p className="text-ink-600 leading-relaxed">
              By accessing or using the Bravioo platform, you acknowledge that you have read, 
              understood, and agree to be bound by these Terms of Use and our Privacy Policy. 
              If you do not agree to these terms, you may not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">Description of Service</h2>
            <p className="text-ink-600 leading-relaxed mb-4">
              Bravioo provides an employee recognition and rewards platform that enables organizations to:
            </p>
            <ul className="list-disc list-inside text-ink-600 space-y-2 ml-4">
              <li>Recognize and reward employee achievements</li>
              <li>Track engagement and performance metrics</li>
              <li>Facilitate peer-to-peer recognition</li>
              <li>Manage company culture initiatives</li>
              <li>Access analytics and reporting tools</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">User Accounts and Registration</h2>
            <div className="space-y-4">
              <p className="text-ink-600 leading-relaxed">
                To use certain features of our service, you must create an account. You agree to:
              </p>
              <ul className="list-disc list-inside text-ink-600 space-y-2 ml-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Notify us immediately of any unauthorized use</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Use the service only for lawful purposes</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">Acceptable Use Policy</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">Prohibited Activities</h3>
                  <p className="text-yellow-700 text-sm">
                    You agree not to engage in any activities that could harm our service or other users.
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-ink-600 leading-relaxed mb-4">You may not use our service to:</p>
            <ul className="list-disc list-inside text-ink-600 space-y-2 ml-4">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful, offensive, or inappropriate content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the normal operation of the service</li>
              <li>Use the service for commercial purposes without authorization</li>
              <li>Collect user information without consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">Intellectual Property</h2>
            <p className="text-ink-600 leading-relaxed mb-4">
              The Bravioo platform, including all content, features, and functionality, is owned by 
              Bravioo Technology Ltd. and is protected by copyright, trademark, and other intellectual 
              property laws.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-ink-800 mb-2">Our Rights</h3>
                <p className="text-ink-600 leading-relaxed">
                  We retain all rights, title, and interest in the Bravioo platform, our trademarks, 
                  logos, and proprietary technology.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-ink-800 mb-2">Your Content</h3>
                <p className="text-ink-600 leading-relaxed">
                  You retain ownership of content you create, but grant us a license to use, 
                  display, and distribute it as necessary to provide our services.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">Privacy and Data Protection</h2>
            <p className="text-ink-600 leading-relaxed">
              Your privacy is important to us. Our collection and use of personal information 
              is governed by our{' '}
              <a href={`/${locale}/legal/privacy`} className="text-brand-600 hover:text-brand-700 font-medium">
                Privacy Policy
              </a>, which is incorporated into these Terms by reference.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">Payment and Billing</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-ink-800 mb-2">Subscription Fees</h3>
                <p className="text-ink-600 leading-relaxed">
                  Some features of our service require a paid subscription. Fees are billed in advance 
                  and are non-refundable except as required by law.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-ink-800 mb-2">Payment Terms</h3>
                <ul className="list-disc list-inside text-ink-600 space-y-2 ml-4">
                  <li>Payments are due according to your billing cycle</li>
                  <li>We may suspend service for non-payment</li>
                  <li>You're responsible for all taxes and fees</li>
                  <li>Price changes will be communicated in advance</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">Service Availability</h2>
            <p className="text-ink-600 leading-relaxed">
              While we strive to provide reliable service, we cannot guarantee 100% uptime. 
              We may temporarily suspend service for maintenance, updates, or other operational reasons.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">Limitation of Liability</h2>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">Important Legal Notice</h3>
                  <p className="text-red-700 text-sm">
                    Our liability is limited as described below. Please read carefully.
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-ink-600 leading-relaxed">
              To the maximum extent permitted by law, Bravioo shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages, including loss of profits, 
              data, or business interruption.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">Termination</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-ink-800 mb-2">By You</h3>
                <p className="text-ink-600 leading-relaxed">
                  You may terminate your account at any time by contacting us or using the 
                  account settings in our platform.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-ink-800 mb-2">By Us</h3>
                <p className="text-ink-600 leading-relaxed">
                  We may terminate or suspend your account if you violate these Terms or 
                  for other legitimate business reasons.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">Changes to Terms</h2>
            <p className="text-ink-600 leading-relaxed">
              We may modify these Terms from time to time. We will notify users of material 
              changes via email or platform notification. Continued use of the service 
              constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">Governing Law</h2>
            <p className="text-ink-600 leading-relaxed">
              These Terms are governed by the laws of Turkey. Any disputes will be resolved 
              in the courts of Istanbul, Turkey.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">Contact Information</h2>
            <p className="text-ink-600 leading-relaxed mb-4">
              If you have questions about these Terms, please contact us:
            </p>
            
            <div className="bg-brand-50 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-brand-800 mb-2">Legal Department</h3>
                  <div className="text-brand-700 space-y-1">
                    <div>Email: legal@bravioo.com</div>
                    <div>Phone: +90 (212) 555-0123</div>
                    <div>Address: Maslak Mahallesi, Büyükdere Caddesi No: 123, Sarıyer, İstanbul 34485, Turkey</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
