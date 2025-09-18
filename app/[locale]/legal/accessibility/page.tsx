import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Eye, Heart, Users, Zap, CheckCircle, Mail } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  return {
    title: `Accessibility Statement | Bravioo`,
    description: 'Bravioo Accessibility Statement - Our commitment to digital accessibility and inclusive design.',
  };
}

export default async function AccessibilityPage({ params }: Props) {
  const { locale } = await params;

  const accessibilityFeatures = [
    {
      icon: Eye,
      title: 'Visual Accessibility',
      description: 'High contrast ratios, scalable fonts, and screen reader compatibility',
      features: [
        'WCAG 2.1 AA compliant color contrast',
        'Resizable text up to 200% without loss of functionality',
        'Alternative text for all images and graphics',
        'Clear visual focus indicators'
      ]
    },
    {
      icon: Users,
      title: 'Motor Accessibility',
      description: 'Keyboard navigation and accessible interactive elements',
      features: [
        'Full keyboard navigation support',
        'Large click targets (minimum 44px)',
        'No time-based interactions',
        'Accessible drag and drop alternatives'
      ]
    },
    {
      icon: Zap,
      title: 'Cognitive Accessibility',
      description: 'Clear navigation, consistent layout, and simple language',
      features: [
        'Consistent navigation and layout',
        'Clear and simple language',
        'Error prevention and clear error messages',
        'Multiple ways to find content'
      ]
    },
    {
      icon: Heart,
      title: 'Inclusive Design',
      description: 'Designed for users of all abilities and backgrounds',
      features: [
        'Multilingual support',
        'Cultural sensitivity in design',
        'Flexible user preferences',
        'Progressive enhancement approach'
      ]
    }
  ];

  return (
    <div className="p-8 md:p-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-gold-600 rounded-2xl flex items-center justify-center">
            <Eye className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-ink-900">Accessibility Statement</h1>
            <p className="text-ink-600">Last updated: January 15, 2025</p>
          </div>
        </div>
        <p className="text-lg text-ink-600 leading-relaxed">
          At Bravioo, we&apos;re committed to ensuring digital accessibility for people with disabilities. 
          We continually improve the user experience for everyone and apply relevant accessibility standards.
        </p>
      </div>

      {/* Content */}
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-ink-900 mb-4">Our Commitment</h2>
          <p className="text-ink-600 leading-relaxed mb-4">
            We believe that everyone should have equal access to information and functionality. 
            Our accessibility efforts are guided by the Web Content Accessibility Guidelines (WCAG) 2.1 
            Level AA standards, ensuring our platform is usable by people with diverse abilities.
          </p>
          
          <div className="bg-brand-50 rounded-2xl p-6 border-l-4 border-brand-500">
            <h3 className="font-semibold text-brand-800 mb-2">Our Goal</h3>
            <p className="text-brand-700">
              To create an inclusive employee recognition platform that empowers all users to 
              participate fully in workplace culture and recognition programs.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink-900 mb-6">Accessibility Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accessibilityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white border border-sand-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-ink-900 mb-2">{feature.title}</h3>
                      <p className="text-ink-600 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.features.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-brand-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-ink-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink-900 mb-4">Standards Compliance</h2>
          <div className="space-y-4">
            <p className="text-ink-600 leading-relaxed">
              Our platform is designed to conform to the following accessibility standards:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-700 mb-1">WCAG 2.1</div>
                <div className="text-sm text-green-600">Level AA Compliance</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-700 mb-1">Section 508</div>
                <div className="text-sm text-blue-600">US Federal Standards</div>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-700 mb-1">EN 301 549</div>
                <div className="text-sm text-purple-600">European Standards</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink-900 mb-4">Assistive Technologies</h2>
          <p className="text-ink-600 leading-relaxed mb-4">
            Our platform is tested and compatible with the following assistive technologies:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="font-semibold text-ink-800">Screen Readers</h3>
              <ul className="space-y-2 text-ink-600">
                <li>• JAWS (Windows)</li>
                <li>• NVDA (Windows)</li>
                <li>• VoiceOver (macOS/iOS)</li>
                <li>• TalkBack (Android)</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-ink-800">Other Tools</h3>
              <ul className="space-y-2 text-ink-600">
                <li>• Voice control software</li>
                <li>• Switch navigation devices</li>
                <li>• Magnification software</li>
                <li>• High contrast displays</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink-900 mb-4">Ongoing Efforts</h2>
          <p className="text-ink-600 leading-relaxed mb-4">
            We continuously work to improve accessibility through:
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5" />
              <span className="text-ink-700">Regular accessibility audits and testing</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5" />
              <span className="text-ink-700">Staff training on accessibility best practices</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5" />
              <span className="text-ink-700">User feedback integration and improvements</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5" />
              <span className="text-ink-700">Collaboration with disability advocacy groups</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-brand-600 mt-0.5" />
              <span className="text-ink-700">Implementation of emerging accessibility technologies</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink-900 mb-4">Known Limitations</h2>
          <p className="text-ink-600 leading-relaxed mb-4">
            While we strive for full accessibility, we acknowledge some current limitations:
          </p>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            <ul className="space-y-2 text-yellow-800">
              <li>• Some third-party integrations may have accessibility gaps</li>
              <li>• Legacy features are being updated to meet current standards</li>
              <li>• Complex data visualizations are being enhanced for screen readers</li>
            </ul>
            <p className="text-yellow-700 mt-4 text-sm">
              We're actively working to address these limitations in upcoming releases.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink-900 mb-4">Feedback and Support</h2>
          <p className="text-ink-600 leading-relaxed mb-6">
            We welcome your feedback on the accessibility of our platform. If you encounter 
            any accessibility barriers or have suggestions for improvement, please contact us.
          </p>
          
          <div className="bg-brand-50 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-brand-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-brand-800 mb-2">Accessibility Team</h3>
                <div className="text-brand-700 space-y-1">
                  <div>Email: accessibility@bravioo.com</div>
                  <div>Phone: +90 (212) 555-0123</div>
                  <div>Response time: Within 2 business days</div>
                </div>
                <p className="text-brand-600 mt-3 text-sm">
                  We're committed to providing alternative access methods for any 
                  content or functionality that may not be fully accessible.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink-900 mb-4">Legal Information</h2>
          <p className="text-ink-600 leading-relaxed">
            This accessibility statement was prepared in accordance with applicable 
            accessibility legislation and reflects our current accessibility efforts. 
            We review and update this statement regularly as we continue to improve 
            our platform's accessibility.
          </p>
        </section>
      </div>
    </div>
  );
}
