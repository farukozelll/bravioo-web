import { Metadata } from 'next';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { ArrowRight, Check, Sparkles, Building2, Shield, LifeBuoy, Users, Gift, MessageSquare } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateSEOMetadata({
    title: locale === 'tr' 
      ? 'Fiyatlandırma - Bravioo'
      : 'Pricing - Bravioo',
    description: locale === 'tr'
      ? 'Bravioo fiyatlandırma planları. Ücretsiz marka indirimleri veya personel sayısına göre özel teklifler.'
      : 'Bravioo pricing plans. Free brand discounts or custom offers based on employee count.',
    locale: locale === 'tr' ? 'tr_TR' : 'en_US',
    url: `https://bravioo.com/${locale}/pricing`,
  });
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const t = (tr: string, en: string) => (locale === 'tr' ? tr : en);

  // legacy steps removed in favor of two-model diagram

  const freeBullets = [
    t('Marka indirimleri', 'Partner discounts'),
    t('Temel takdir', 'Basic recognition'),
    t('E-posta bildirimleri', 'Email notifications'),
    t('Temel raporlama', 'Basic reporting'),
  ];

  const proBullets = [
    t('Gelişmiş analitik', 'Advanced analytics'),
    t('Slack/Teams entegrasyonu', 'Slack/Teams integration'),
    t('Özel markalama', 'Custom branding'),
    t('Öncelikli destek', 'Priority support'),
  ];

  // Optional FAQ block can be added later

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-sand-50 via-white to-brand-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-ink-900 dark:text-white">
              {t('Basit ve Şeffaf Fiyatlandırma', 'Simple, Transparent Pricing')}
            </h1>
            <p className="mt-4 text-lg text-ink-600 dark:text-gray-300">
              {t('Bir bakışta sistemin işleyişi ve size uygun yol.', 'At-a-glance system flow and your best path.')}
            </p>
          </div>
        </section>

        {/* Two-Model System Diagram */}
        <section className="mx-auto max-w-7xl px-6 -mt-8">
          <div className="rounded-3xl border border-sand-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 lg:p-10 shadow-xl">
            <h2 className="text-xl font-bold text-ink-900 dark:text-white mb-8 text-center">
              {t('İki Model / Aynı Ekosistem - Bravioo', 'Two Models / One Ecosystem -Bravioo')}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 items-stretch gap-6">
              {/* Employer Model */}
              <div className="rounded-2xl border border-brand-200 dark:border-brand-900/30 bg-white dark:bg-gray-800 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="w-5 h-5 text-brand-600" />
                  <div className="text-lg font-bold text-ink-900 dark:text-white">{t('İşveren Modeli', 'Employer Model')}</div>
                </div>
                <p className="text-sm text-ink-700 dark:text-gray-300 mb-4">
                  {t('Şirketler, aktif çalışan sayısına göre ücretlendirilen planla ekosisteme katılır.', 'Companies join with a plan billed by active employees.')}
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-ink-700 dark:text-gray-300"><Check className="w-4 h-4 text-brand-600" /> {t('Kişiselleştirilmiş çalışan avantajları tanımlama', 'Define personalized employee benefits')}</li>
                  <li className="flex items-center gap-2 text-ink-700 dark:text-gray-300"><Check className="w-4 h-4 text-brand-600" /> {t('İK modülleri: çekiliş, anket, geri bildirim', 'HR modules: giveaways, surveys, feedback')}</li>
                  <li className="flex items-center gap-2 text-ink-700 dark:text-gray-300"><Check className="w-4 h-4 text-brand-600" /> {t('Kullanıcı yönetimi ve rol/SSO', 'User management and roles/SSO')}</li>
                </ul>
              </div>

              {/* Employees (center) */}
              <div className="rounded-2xl border border-sand-200 dark:border-gray-700 bg-sand-50 dark:bg-gray-900/40 p-6 flex flex-col items-center justify-center text-center">
                <Users className="w-8 h-8 text-emerald-600 mb-2" />
                <div className="text-lg font-bold text-ink-900 dark:text-white">{t('Çalışanlar', 'Employees')}</div>
                <p className="text-sm text-ink-700 dark:text-gray-300 max-w-xs mt-2">
                  {t('Çalışanlar platformda avantajlara erişir, ödüller kazanır; İK akışları ile etkileşir.', 'Employees access benefits, earn rewards, and engage via HR flows.')}
                </p>
                <div className="hidden lg:flex items-center gap-3 mt-4">
                  <ArrowRight className="w-5 h-5 text-ink-400 dark:text-gray-500" />
                  <ArrowRight className="w-5 h-5 rotate-180 text-ink-400 dark:text-gray-500" />
                </div>
              </div>

              {/* Brand Partners */}
              <div className="rounded-2xl border border-emerald-200 dark:border-emerald-900/30 bg-white dark:bg-gray-800 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Gift className="w-5 h-5 text-emerald-600" />
                  <div className="text-lg font-bold text-ink-900 dark:text-white">{t('Marka Partnerliği (Ücretsiz)', 'Brand Partnership (Free)')}</div>
                </div>
                <p className="text-sm text-ink-700 dark:text-gray-300 mb-4">
                  {t('Markalar, çalışanlara özel avantajlar sunar; büyük kitleye erişip görünürlük kazanır.', 'Brands offer employee-only deals; reach a large audience and gain exposure.')}
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-ink-700 dark:text-gray-300"><Check className="w-4 h-4 text-emerald-600" /> {t('Ücretsiz konumlandırma ve kampanyalar', 'Free placement and campaigns')}</li>
                  <li className="flex items-center gap-2 text-ink-700 dark:text-gray-300"><Check className="w-4 h-4 text-emerald-600" /> {t('Segment bazlı hedefleme', 'Segment-based targeting')}</li>
                  <li className="flex items-center gap-2 text-ink-700 dark:text-gray-300"><Check className="w-4 h-4 text-emerald-600" /> {t('Gerçek zamanlı performans', 'Realtime performance')}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Included sections */}
        <section className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="rounded-3xl border border-brand-200 dark:border-brand-900/30 bg-white dark:bg-gray-800 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="w-5 h-5 text-brand-600" />
              <h3 className="text-lg font-bold text-ink-900 dark:text-white">{t('Ücretli Model', 'Paid Model')}</h3>
            </div>
            <ul className="space-y-2 text-sm">
              {proBullets.map((b, i) => (
                <li key={i} className="flex items-center gap-2 text-ink-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-brand-600" /> {b}
                </li>
              ))}
            </ul>
          </div> 
           <div className="rounded-3xl border border-emerald-200 dark:border-emerald-900/30 bg-white dark:bg-gray-800 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-emerald-600" />
              <h3 className="text-lg font-bold text-ink-900 dark:text-white">{t('Ücretsiz Model', 'Free Model')}</h3>
            </div>
            <ul className="space-y-2 text-sm">
              {freeBullets.map((b, i) => (
                <li key={i} className="flex items-center gap-2 text-ink-700 dark:text-gray-300">
                  <Check className="w-4 h-4 text-emerald-600" /> {b}
                </li>
              ))}
            </ul>
          </div>
   
        </section>


        {/* CTA */}
        <section className="mx-auto max-w-5xl px-6 pb-20 text-center">
          <div className="bg-gradient-to-r from-brand-500 to-brand-600 rounded-3xl px-8 py-12 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {t('Hangi model sizin için uygun?', 'Which model is right for you?')}
            </h3>
            <p className="text-brand-100 mb-6">
              {t('Uzmanlarımızla konuşun ve en iyi yolu birlikte belirleyelim.', 'Talk to our experts and choose the best path.')}
            </p>
            <a href={`/${locale}/contact`} className="inline-flex items-center gap-2 bg-white text-brand-600 hover:bg-sand-50 px-6 py-3 rounded-xl font-semibold">
              {t('Ücretsiz randevu al', 'Get Free   ')}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
