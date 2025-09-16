export type TourStep = {
  id: string;
  titleTr: string;
  titleEn: string;
  descriptionTr: string;
  descriptionEn: string;
  mockup: string; // image key
  color: string; // gradient tailwind classes
  featuresTr: string[];
  featuresEn: string[];
};

export const PRODUCT_TOUR_STEPS: TourStep[] = [
  {
    id: 'connect',
    titleTr: 'Bağlan',
    titleEn: 'Connect',
    descriptionTr: 'Ekibinizi platforma hızlıca entegre edin',
    descriptionEn: 'Onboard your team in minutes',
    mockup: 'connect',
    color: 'from-brand-500 to-emerald-600',
    featuresTr: ['5 dakikada kurulum', 'Kolay entegrasyon', 'Mobil ve web erişim'],
    featuresEn: ['5-min setup', 'Easy integrations', 'Mobile & web access']
  },
  {
    id: 'recognize',
    titleTr: 'Tanı',
    titleEn: 'Recognize',
    descriptionTr: 'Anında tanıma ve ödüllendirme',
    descriptionEn: 'Instant recognition & rewards',
    mockup: 'recognize',
    color: 'from-purple-500 to-pink-600',
    featuresTr: ['Anlık takdir', 'Ödül kataloğu', 'Sosyal akış'],
    featuresEn: ['Instant kudos', 'Reward catalog', 'Social feed']
  },
  {
    id: 'engage',
    titleTr: 'Etkileşim',
    titleEn: 'Engage',
    descriptionTr: 'Takım motivasyonunu artırın',
    descriptionEn: 'Boost team motivation',
    mockup: 'engage',
    color: 'from-orange-500 to-red-600',
    featuresTr: ['Takım yarışmaları', 'Rozet ve seviyeler', 'Kişiselleştirme'],
    featuresEn: ['Team challenges', 'Badges & levels', 'Personalization']
  },
  {
    id: 'analyze',
    titleTr: 'Analiz Et',
    titleEn: 'Analyze',
    descriptionTr: 'Performansı ölçün ve iyileştirin',
    descriptionEn: 'Measure and improve performance',
    mockup: 'analyze',
    color: 'from-blue-500 to-indigo-600',
    featuresTr: ['Derin analitik', 'ROI raporları', 'Trendler'],
    featuresEn: ['Deep analytics', 'ROI reports', 'Trends']
  }
];


