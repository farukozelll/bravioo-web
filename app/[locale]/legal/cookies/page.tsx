import React from 'react';
import { getTranslations } from 'next-intl/server';
import { Cookie, Settings, Shield, BarChart3, Target, Globe } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;

  return {
    title: `Cookie Policy | Bravioo`,
    description: 'Bravioo Cookie Policy - How we use cookies and similar technologies on our platform.',
  };
}

export default async function CookiesPage({ params }: Props) {
  const { locale } = await params;

  const cookieTypes = [
    {
      icon: Shield,
      title: 'Essential Cookies',
      description: 'Necessary for the website to function properly',
      color: 'from-green-500 to-emerald-600',
      examples: [
        'Authentication tokens',
        'Security preferences',
        'Load balancing',
        'CSRF protection'
      ],
      retention: 'Session or up to 1 year',
      canDisable: false
    },
    {
      icon: BarChart3,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website',
      color: 'from-blue-500 to-indigo-600',
      examples: [
        'Google Analytics',
        'Page views and traffic sources',
        'User behavior patterns',
        'Performance metrics'
      ],
      retention: 'Up to 2 years',
      canDisable: true
    },
    {
      icon: Target,
      title: 'Marketing Cookies',
      description: 'Used to deliver relevant advertisements and track campaigns',
      color: 'from-purple-500 to-pink-600',
      examples: [
        'Facebook Pixel',
        'Google Ads conversion tracking',
        'LinkedIn Insight Tag',
        'Retargeting pixels'
      ],
      retention: 'Up to 1 year',
      canDisable: true
    },
    {
      icon: Settings,
      title: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization',
      color: 'from-orange-500 to-red-600',
      examples: [
        'Language preferences',
        'Theme settings',
        'Chat widget state',
        'Form auto-fill data'
      ],
      retention: 'Up to 1 year',
      canDisable: true
    }
  ];

  return (
    <div className="p-8 md:p-12">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center">
            <Cookie className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-ink-900">Cookie Policy</h1>
            <p className="text-ink-600">Last updated: January 15, 2025</p>
          </div>
        </div>
        <p className="text-lg text-ink-600 leading-relaxed">
          This Cookie Policy explains how Bravioo uses cookies and similar technologies 
          to recognize you when you visit our platform. It explains what these technologies 
          are and why we use them.
        </p>
      </div>

      {/* Content */}
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-ink-900 mb-4">What Are Cookies?</h2>
          <p className="text-ink-600 leading-relaxed mb-4">
            Cookies are small data files that are placed on your computer or mobile device 
            when you visit a website. Cookies are widely used by website owners to make 
            their websites work more efficiently and to provide reporting information.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <h3 className="font-semibold text-blue-800 mb-2">Types of Cookies</h3>
            <div className="text-blue-700 space-y-2">
              <div><strong>First-party cookies:</strong> Set directly by our website</div>
              <div><strong>Third-party cookies:</strong> Set by external services we use</div>
              <div><strong>Session cookies:</strong> Temporary, deleted when you close your browser</div>
              <div><strong>Persistent cookies:</strong> Remain on your device for a set period</div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink-900 mb-6">How We Use Cookies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {cookieTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div key={index} className="bg-white border border-sand-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ink-900 mb-1">{type.title}</h3>
                      <p className="text-ink-600 text-sm">{type.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-ink-800 mb-2">Examples:</h4>
                      <ul className="text-sm text-ink-600 space-y-1">
                        {type.examples.map((example, i) => (
                          <li key={i}>• {example}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between items-center pt-3 border-t border-sand-200">
                      <div className="text-xs text-ink-500">
                        Retention: {type.retention}
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        type.canDisable 
                          ? 'bg-yellow-100 text-yellow-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {type.canDisable ? 'Optional' : 'Required'}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink-900 mb-4">Third-Party Services</h2>
          <p className="text-ink-600 leading-relaxed mb-4">
            We use various third-party services that may set cookies on your device:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Google Analytics', purpose: 'Website analytics', link: 'https://policies.google.com/privacy' },
              { name: 'Google Ads', purpose: 'Advertising and conversion tracking', link: 'https://policies.google.com/privacy' },
              { name: 'Facebook Pixel', purpose: 'Social media advertising', link: 'https://www.facebook.com/privacy/policy' },
              { name: 'LinkedIn Insight', purpose: 'Professional network advertising', link: 'https://www.linkedin.com/legal/privacy-policy' },
              { name: 'HubSpot', purpose: 'Customer relationship management', link: 'https://legal.hubspot.com/privacy-policy' },
              { name: 'Microsoft Clarity', purpose: 'User session recording', link: 'https://privacy.microsoft.com/privacystatement' }
            ].map((service, index) => (
              <div key={index} className="bg-sand-50 rounded-xl p-4 border border-sand-200">
                <h4 className="font-semibold text-ink-900 mb-1">{service.name}</h4>
                <p className="text-sm text-ink-600 mb-2">{service.purpose}</p>
                <a 
                  href={service.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-brand-600 hover:text-brand-700 font-medium"
                >
                  Privacy Policy →
                </a>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink-900 mb-4">Managing Your Cookie Preferences</h2>
          <p className="text-ink-600 leading-relaxed mb-6">
            You have several options for managing cookies:
          </p>
          
          <div className="space-y-4">
            <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Settings className="h-5 w-5 text-brand-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-brand-800 mb-2">Cookie Consent Manager</h3>
                  <p className="text-brand-700 mb-3">
                    Use our cookie consent manager to customize your preferences for optional cookies.
                  </p>
                  <button className="bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    Manage Cookie Settings
                  </button>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white border border-sand-200 rounded-xl p-4">
                <h4 className="font-semibold text-ink-900 mb-2">Browser Settings</h4>
                <p className="text-sm text-ink-600 mb-3">
                  Most browsers allow you to control cookies through their settings.
                </p>
                <ul className="text-xs text-ink-500 space-y-1">
                  <li>• Block all cookies</li>
                  <li>• Block third-party cookies</li>
                  <li>• Delete cookies after each session</li>
                  <li>• Get notified before cookies are set</li>
                </ul>
              </div>
              
              <div className="bg-white border border-sand-200 rounded-xl p-4">
                <h4 className="font-semibold text-ink-900 mb-2">Opt-Out Tools</h4>
                <p className="text-sm text-ink-600 mb-3">
                  Use industry opt-out tools for advertising cookies.
                </p>
                <ul className="text-xs text-ink-500 space-y-1">
                  <li>• Network Advertising Initiative</li>
                  <li>• Digital Advertising Alliance</li>
                  <li>• European Interactive Digital Advertising Alliance</li>
                  <li>• Google Ad Settings</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink-900 mb-4">Impact of Disabling Cookies</h2>
          <p className="text-ink-600 leading-relaxed mb-4">
            Disabling certain cookies may affect your experience on our platform:
          </p>
          
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <h4 className="font-semibold text-red-800 mb-2">Essential Cookies</h4>
              <p className="text-red-700 text-sm">
                Disabling these cookies will prevent the website from functioning properly. 
                You may not be able to log in or use key features.
              </p>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Optional Cookies</h4>
              <p className="text-yellow-700 text-sm">
                Disabling these cookies may result in less personalized content, 
                reduced functionality, and less relevant advertising.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink-900 mb-4">Mobile Applications</h2>
          <p className="text-ink-600 leading-relaxed mb-4">
            Our mobile applications may use similar technologies to cookies, including:
          </p>
          
          <ul className="space-y-2 text-ink-600 ml-4">
            <li>• Mobile device identifiers</li>
            <li>• Local storage</li>
            <li>• Push notification tokens</li>
            <li>• Analytics SDKs</li>
          </ul>
          
          <p className="text-ink-600 leading-relaxed mt-4">
            You can manage these through your device settings or app preferences.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink-900 mb-4">Updates to This Policy</h2>
          <p className="text-ink-600 leading-relaxed">
            We may update this Cookie Policy from time to time to reflect changes in 
            our practices or for other operational, legal, or regulatory reasons. 
            Please check this page regularly for updates.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-ink-900 mb-4">Contact Us</h2>
          <p className="text-ink-600 leading-relaxed mb-4">
            If you have questions about our use of cookies, please contact us:
          </p>
          
          <div className="bg-sand-50 rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <Globe className="h-5 w-5 text-brand-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-ink-900 mb-2">Data Protection Team</h3>
                <div className="text-ink-700 space-y-1 text-sm">
                  <div>Email: privacy@bravioo.com</div>
                  <div>Subject: Cookie Policy Inquiry</div>
                  <div>Response time: Within 3 business days</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
