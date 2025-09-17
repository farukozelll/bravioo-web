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
    name: 'Ahmet Yılmaz',
    title: 'İnsan Kaynakları Direktörü',
    company: 'AKMERCAN',
    companyLogo: '/images/brands/akmercan.svg',
    avatar: '/images/avatars/mock-dev-girl.png',
    location: 'İstanbul, Türkiye',
    industry: 'Teknoloji',
    employeeCount: '2,500+',
    rating: 5,
    testimonialTr: '"Bravioo ile çalışan deneyimimizi tamamen dönüştürdük. 3 ay içinde ekip motivasyonu %185 arttı, şirket kültürümüz güçlendi. Özellikle peer-to-peer takdir sistemi çalışanlarımız tarafından çok sevildi."',
    testimonialEn: '"We completely transformed our employee experience with Bravioo. In 3 months, team motivation increased by 185%, and our company culture strengthened. Especially the peer-to-peer recognition system was loved by our employees."',
    results: [
      { metricTr: 'Çalışan Memnuniyeti', metricEn: 'Employee Satisfaction', value: '+185%', color: 'text-green-500' },
      { metricTr: 'İşten Ayrılma Oranı', metricEn: 'Turnover Rate', value: '-60%', color: 'text-blue-500' },
      { metricTr: 'Verimlilik', metricEn: 'Productivity', value: '+120%', color: 'text-purple-500' },
    ],
    background: 'from-blue-500 to-cyan-600',
    tags: ['HR Tech', 'Employee Engagement', 'Culture'],
  },
  {
    id: 2,
    name: 'Mehmet Özkan',
    title: 'CEO',
    company: 'AGT Teknoloji',
    companyLogo: '/images/brands/agt-renkli.jpeg',
    avatar: '/images/avatars/mock-dev-girl.png',
    location: 'Ankara, Türkiye',
    industry: 'Otomotiv',
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
    tags: ['ROI', 'Performance', 'Gamification'],
  },
  {
    id: 3,
    name: 'Ayşe Demir',
    title: 'Operasyon Müdürü',
    company: 'TÜRKSAT',
    companyLogo: '/images/companies/turksat_logo.png',
    avatar: '/images/avatars/mock-dev-girl.png',
    location: 'Ankara, Türkiye',
    industry: 'Telekomünikasyon',
    employeeCount: '5,000+',
    rating: 5,
    testimonialTr: "\"TÜRKSAT'ta Bravioo ile çalışan tanıma ve ödüllendirme sistemimizi modernize ettik. Çalışanlarımızın motivasyonu ve şirket bağlılığı önemli ölçüde arttı. Sistem kullanımı %92 seviyesinde.\"",
    testimonialEn: '"At TÜRKSAT, we modernized our employee recognition and rewards system with Bravioo. Our employees\' motivation and company loyalty increased significantly. System usage is at 92% level."',
    results: [
      { metricTr: 'Sistem Kullanımı', metricEn: 'System Usage', value: '92%', color: 'text-green-500' },
      { metricTr: 'Çalışan Bağlılığı', metricEn: 'Employee Loyalty', value: '+200%', color: 'text-blue-500' },
      { metricTr: 'Tasarruf', metricEn: 'Cost Savings', value: '₺2.1M', color: 'text-purple-500' },
    ],
    background: 'from-green-500 to-emerald-600',
    tags: ['Government', 'Scale', 'Adoption'],
  },
  {
    id: 4,
    name: 'Dr. Fatma Kaya',
    title: 'İnsan Kaynakları Müdürü',
    company: 'Acıbadem Hastaneleri',
    companyLogo: '/images/brands/Acıbadem Tüm Hastaneleri-Tıp Merkezleri.png',
    avatar: '/images/avatars/mock-dev-girl.png',
    location: 'İstanbul, Türkiye',
    industry: 'Sağlık',
    employeeCount: '15,000+',
    rating: 5,
    testimonialTr: '"Sağlık sektöründe çalışan motivasyonu kritik öneme sahip. Bravioo ile hem doktorlarımızın hem de sağlık personelimizin iş tatmini arttı. Hasta memnuniyet puanlarımız da %35 yükseldi."',
    testimonialEn: '"Employee motivation is critically important in the healthcare sector. With Bravioo, job satisfaction of both our doctors and healthcare staff increased. Our patient satisfaction scores also rose by 35%."',
    results: [
      { metricTr: 'Hasta Memnuniyeti', metricEn: 'Patient Satisfaction', value: '+35%', color: 'text-blue-500' },
      { metricTr: 'Personel Devir Hızı', metricEn: 'Staff Turnover', value: '-45%', color: 'text-green-500' },
      { metricTr: 'İş Tatmini', metricEn: 'Job Satisfaction', value: '+160%', color: 'text-purple-500' },
    ],
    background: 'from-red-500 to-pink-600',
    tags: ['Healthcare', 'Patient Care', 'Retention'],
  },
  {
    id: 5,
   name: 'Dr. Ayşegül Aydın',
    title: 'Medikal Direktör',
    company: 'İstanbul Ticaret Üniversitesi',
    companyLogo: '/images/brands/İstanbul Ticaret.png',
    avatar: '/images/avatars/mock-dev-girl.png',
    location: 'İstanbul, Türkiye',
    industry: 'Sağlık',
    employeeCount: '10,000+',
    rating: 5,
      testimonialTr: '"İstanbul Ticaret Üniversitesi olarak, Bravioo ile çalışanlarımızın motivasyonu arttı. Özellikle ödül sistemi ve gamification özelliklerinin etkisi inanılmazdı. ROI mız 6 ay içinde 4 katına çıktı."',
    testimonialEn: '"Employee motivation is critically important in the healthcare sector. With Bravioo, job satisfaction of both our doctors and healthcare staff increased. Our patient satisfaction scores also rose by 35%."',
    results: [
      { metricTr: 'ROI', metricEn: 'ROI', value: '400%', color: 'text-gold-500' },
      { metricTr: 'Ekip Performansı', metricEn: 'Team Performance', value: '+250%', color: 'text-green-500' },
      { metricTr: 'Çalışan Bağlılığı', metricEn: 'Employee Loyalty', value: '+180%', color: 'text-blue-500' },
      { metricTr: 'Verimlilik', metricEn: 'Productivity', value: '+120%', color: 'text-purple-500' },
    ],
    background: 'from-red-500 to-pink-600',
    tags: ['Healthcare', 'Patient Care', 'Retention'],
  },
];


