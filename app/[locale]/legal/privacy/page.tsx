import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Shield, Mail, Phone, MapPin, Calendar } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });

  return {
    title: `Privacy Policy | Bravioo`,
    description: 'Bravioo Privacy Policy - How we collect, use, and protect your personal data.',
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;

  return (
    <div className="p-8 md:p-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-emerald-600 rounded-2xl flex items-center justify-center">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-ink-900">Privacy Policy</h1>
            <p className="text-ink-600">Last updated: January 15, 2025</p>
          </div>
        </div>
        <p className="text-lg text-ink-600 leading-relaxed">
          At Bravioo, we take your privacy seriously. This Privacy Policy explains how we collect, 
          use, disclose, and safeguard your information when you use our employee recognition platform.
        </p>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-ink-800 mb-2">Personal Information</h3>
                <p className="text-ink-600 leading-relaxed">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us. This may include:
                </p>
                <ul className="list-disc list-inside text-ink-600 space-y-2 mt-3 ml-4">
                  <li>Name, email address, and contact information</li>
                  <li>Company information and job title</li>
                  <li>Profile photos and other content you choose to provide</li>
                  <li>Recognition messages and feedback</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ink-800 mb-2">Usage Information</h3>
                <p className="text-ink-600 leading-relaxed">
                  We automatically collect certain information about your use of our services, including:
                </p>
                <ul className="list-disc list-inside text-ink-600 space-y-2 mt-3 ml-4">
                  <li>Device information (type, operating system, browser)</li>
                  <li>IP address and location data</li>
                  <li>Usage patterns and feature interactions</li>
                  <li>Log files and analytics data</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">How We Use Your Information</h2>
            <p className="text-ink-600 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-ink-600 space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Monitor and analyze trends and usage patterns</li>
              <li>Personalize your experience</li>
              <li>Detect, investigate, and prevent fraudulent activity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">Information Sharing</h2>
            <p className="text-ink-600 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. 
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-ink-600 space-y-2 ml-4">
              <li>With your consent or at your direction</li>
              <li>With service providers who help us operate our business</li>
              <li>To comply with legal obligations or protect our rights</li>
              <li>In connection with a business transaction (merger, acquisition, etc.)</li>
              <li>With other users as part of the recognition platform features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">Data Security</h2>
            <p className="text-ink-600 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside text-ink-600 space-y-2 mt-3 ml-4">
              <li>Encryption in transit and at rest</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication requirements</li>
              <li>Employee training on data protection</li>
              <li>Incident response procedures</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">Your Rights</h2>
            <p className="text-ink-600 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-ink-600 space-y-2 ml-4">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a portable format</li>
              <li><strong>Objection:</strong> Object to certain processing activities</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">Cookies and Tracking</h2>
            <p className="text-ink-600 leading-relaxed">
              We use cookies and similar tracking technologies to collect and use personal information. 
              For detailed information about our use of cookies, please see our{' '}
              <a href={`/${locale}/legal/cookies`} className="text-brand-600 hover:text-brand-700 font-medium">
                Cookie Policy
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">International Transfers</h2>
            <p className="text-ink-600 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place to protect your personal information 
              in accordance with applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">Changes to This Policy</h2>
            <p className="text-ink-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any 
              material changes by posting the new Privacy Policy on this page and updating 
              the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-ink-900 mb-4">Contact Us</h2>
            <p className="text-ink-600 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or our privacy practices, 
              please contact us:
            </p>
            
            <div className="bg-sand-50 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-600" />
                <span className="text-ink-700">privacy@bravioo.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-600" />
                <span className="text-ink-700">+90 (212) 555-0123</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-600 mt-0.5" />
                <div className="text-ink-700">
                  <div>Bravioo Technology Ltd.</div>
                  <div>Maslak Mahallesi, Büyükdere Caddesi</div>
                  <div>No: 123, Sarıyer, İstanbul 34485, Turkey</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
