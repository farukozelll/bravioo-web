export type ScreenItem = {
  id: string;
  group: string; // e.g., recognition, analytics, mobile
  titleTr: string;
  titleEn: string;
  descriptionTr: string;
  descriptionEn: string;
  image: string; // /screens/*.{png,jpg,jpeg,webp,svg}
};

export const SCREENS: ScreenItem[] = [
  {
    id: 'recognition-feed',
    group: 'recognition',
    titleTr: 'Takdir Akışı',
    titleEn: 'Recognition Feed',
    descriptionTr: 'Ekip çapında takdirlerin merkezi akışı',
    descriptionEn: 'Company-wide recognition stream',
    image: '/screens/recognition-feed.png'
  },
  {
    id: 'rewards',
    group: 'recognition',
    titleTr: 'Ödüller',
    titleEn: 'Rewards',
    descriptionTr: 'Ödül kataloğundan seçim',
    descriptionEn: 'Choose from reward catalog',
    image: '/screens/rewards.webp'
  },
  {
    id: 'analytics-dashboard',
    group: 'analytics',
    titleTr: 'Analitik Paneli',
    titleEn: 'Analytics Dashboard',
    descriptionTr: 'KPI ve trend analizleri',
    descriptionEn: 'KPI and trends',
    image: '/screens/analytics-dashboard.jpg'
  },
  {
    id: 'mobile-home',
    group: 'mobile',
    titleTr: 'Mobil Ana Ekran',
    titleEn: 'Mobile Home',
    descriptionTr: 'Mobilde hızlı erişim',
    descriptionEn: 'Fast access on mobile',
    image: '/screens/mobile-home.svg'
  }
];


