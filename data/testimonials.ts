export type Testimonial = {
  id: number;
  name: string;
  title: string;
  company: string;
  companyLogo: string;
  avatar: string;
  location: string;
  industry: string;
  employeeCount: string;
  rating: number;
  testimonialTr: string;
  testimonialEn: string;
  results: { metricTr: string; metricEn: string; value: string; color: string }[];
  background: string;
  tags: string[];
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Ömer B.',
    title: 'İş Geliştirme Müdürü',
    company: 'ALBAYRAK GRUBU',
    companyLogo: '/images/companies/albayrak-grubu.png',
    avatar: '/images/avatars/mock-ceo.png',
    location: 'İstanbul, Türkiye',
    industry: 'Holding',
    employeeCount: '20,000+',
    rating: 5,
    testimonialTr: '"Albayrak Grubu olarak Bravioo ile çalışan bağlılığımızı ve motivasyonumuzu artırdık. Tüm grup şirketlerinde %96 aktif kullanım oranına ulaştık. Dijital dönüşümümüzde kritik bir rol oynadı."',
    testimonialEn: '"As Albayrak Group, we increased employee engagement and motivation with Bravioo. We achieved 96% active usage across all group companies. It played a critical role in our digital transformation."',
    results: [
      { metricTr: 'Aktif Kullanım', metricEn: 'Active Usage', value: '96%', color: 'text-green-500' },
      { metricTr: 'Çalışan Bağlılığı', metricEn: 'Employee Engagement', value: '+250%', color: 'text-blue-500' },
      { metricTr: 'Verimlilik', metricEn: 'Productivity', value: '+125%', color: 'text-purple-500' },
    ],
    background: 'from-blue-500 to-cyan-600',
    tags: ['Holding', 'Personel', 'Verimlilik'],
  },
  {
    id: 2,
    name: 'Ayşe Y.',
    title: 'Operasyon Direktörü',
    company: 'ÇEVTEM TEMİZLİK',
    companyLogo: '/images/companies/cevtem_logo.svg',
    avatar: '/images/avatars/mock-dev-girl.png',
    location: 'İstanbul, Türkiye',
    industry: 'Hizmet',
    employeeCount: '5,000+',
    rating: 5,
    testimonialTr: '"Çevtem olarak saha ekiplerimizi Bravioo ile daha verimli yönetiyoruz. Görev takibi ve planlama süreçlerimizde %60 zaman tasarrufu sağladık. Müşteri memnuniyetimiz %98 seviyesine ulaştı."',
    testimonialEn: '"As Çevtem, we manage our field teams more efficiently with Bravioo. We saved 60% time in task tracking and planning processes. Our customer satisfaction reached 98% level."',
    results: [
      { metricTr: 'Zaman Tasarrufu', metricEn: 'Time Savings', value: '60%', color: 'text-green-500' },
      { metricTr: 'Müşteri Memnuniyeti', metricEn: 'Customer Satisfaction', value: '98%', color: 'text-blue-500' },
      { metricTr: 'Operasyonel Verimlilik', metricEn: 'Operational Efficiency', value: '+85%', color: 'text-purple-500' },
    ],
    background: 'from-emerald-500 to-teal-600',
    tags: ['Hizmet', 'Personel', 'Verimlilik'],
  },
  {
    id: 3,
    name: 'Mehmet Ö.',
    title: 'İnsan Kaynakları Müdürü',
    company: 'AGT',
    companyLogo: '/images/companies/agt-renkli.jpeg',
    avatar: '/images/avatars/mock-dev.png',
    location: 'Ankara, Türkiye',
    industry: 'Seramik',
    employeeCount: '1,200+',
    rating: 5,
    testimonialTr: "\"AGT olarak, Bravioo'nun sunduğu çözümlerle çalışanlarımızın motivasyonu arttı. Özellikle ödül sistemi ve gamification özelliklerinin etkisi inanılmazdı. ROI'mız 6 ay içinde 4 katına çıktı.\"",
    testimonialEn: '"As AGT, our employees\' motivation increased with the solutions Bravioo offered. The impact of the reward system and gamification features was incredible. Our ROI quadrupled within 6 months."',
    results: [
      { metricTr: 'ROI', metricEn: 'ROI', value: '400%', color: 'text-gold-500' },
      { metricTr: 'Ekip Performansı', metricEn: 'Team Performance', value: '+250%', color: 'text-green-500' },
      { metricTr: 'Çalışan Bağlılığı', metricEn: 'Employee Loyalty', value: '+180%', color: 'text-blue-500' },
    ],
    background: 'from-purple-500 to-pink-600',
    tags: ['Seramik', 'Personel', 'Verimlilik'],
  },
];
