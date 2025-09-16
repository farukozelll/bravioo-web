export type FeatureSection = {
  title: string;
  body: string;
  image: string;
};

export type Feature = {
  slug: 'recognition' | 'surveys' | 'analytics' | 'automation' | 'integrations' | 'mobile';
  name: string;
  description: string;
  heroImage: string;
  sections: FeatureSection[];
};

export const FEATURES: Feature[] = [
  {
    slug: 'recognition',
    name: 'Tanıma & Ödüllendirme',
    description: 'Anında geri bildirim, rozetler, puanlar ve ödüllerle motivasyonu artırın.',
    heroImage: '/images/features/recognition-hero.jpg',
    sections: [
      {
        title: 'Anında Takdir Kültürü',
        body: 'Kanallar arası çalışan takdiri, herkesin başarıları anında görmesini sağlar. Kudo kartları, rozetler ve özelleştirilebilir akışlarla yaygınlaştırın.',
        image: '/images/features/recognition-1.jpg',
      },
      {
        title: 'Ödül Pazarı ve Bütçeler',
        body: 'Esnek bütçeler, çoklu para birimi ve yerel/uluslararası ödüllerle tek merkezden ödüllendirin.',
        image: '/images/features/recognition-2.jpg',
      },
    ],
  },
  {
    slug: 'surveys',
    name: 'Anketler',
    description: 'Nabız yoklamaları, eNPS ve 360° geri bildirim ile anlık içgörüler edinin.',
    heroImage: '/images/features/surveys-hero.jpg',
    sections: [
      {
        title: 'Nabız Anketleri',
        body: 'Kısa ve düzenli anketlerle ekibinizin nabzını tutun, trendleri takip edin.',
        image: '/images/features/surveys-1.jpg',
      },
      {
        title: '360° Geri Bildirim',
        body: 'Rol bazlı değerlendirmeler ve hedeflerle gelişimi hızlandırın.',
        image: '/images/features/surveys-2.jpg',
      },
    ],
  },
  {
    slug: 'analytics',
    name: 'Analitik',
    description: 'Gösterge panoları, cohort analizleri ve yapay zeka destekli içgörüler.',
    heroImage: '/images/features/analytics-hero.jpg',
    sections: [
      {
        title: 'Gerçek Zamanlı Panolar',
        body: 'Katılım, takdir ve anket sonuçlarını tek bir ekranda izleyin.',
        image: '/images/features/analytics-1.jpg',
      },
      {
        title: 'AI İçgörüleri',
        body: 'Anomali tespiti ve önerilerle aksiyon alın.',
        image: '/images/features/analytics-2.jpg',
      },
    ],
  },
  {
    slug: 'automation',
    name: 'Otomasyon',
    description: 'Kural tabanlı iş akışları ve tetikleyicilerle süreçleri otomatize edin.',
    heroImage: '/images/features/automation-hero.jpg',
    sections: [
      {
        title: 'Kural Motoru',
        body: 'Olay bazlı tetikleyiciler (doğum günü, işe giriş, hedef tamamlanması) ile otomatik aksiyonlar.',
        image: '/images/features/automation-1.jpg',
      },
      {
        title: 'Onay & Bildirimler',
        body: 'Rol bazlı onay akışları ve çok kanallı bildirimlerle kontrol sizde.',
        image: '/images/features/automation-2.jpg',
      },
    ],
  },
  {
    slug: 'integrations',
    name: 'Entegrasyonlar',
    description: 'HRIS, SSO, iletişim ve üretkenlik araçlarıyla tek tık entegrasyon.',
    heroImage: '/images/features/integrations-hero.jpg',
    sections: [
      {
        title: 'HR & SSO',
        body: 'SAP, Workday, Logo, Netsis ve SAML/SCIM ile kolay kurulum.',
        image: '/images/features/integrations-1.jpg',
      },
      {
        title: 'İletişim & Üretkenlik',
        body: 'Slack, Teams, Gmail ve takvim entegrasyonlarıyla akıcı deneyim.',
        image: '/images/features/integrations-2.jpg',
      },
    ],
  },
  {
    slug: 'mobile',
    name: 'Mobil Uygulama',
    description: 'iOS ve Android için native uygulamalarla her yerden bağlı kalın.',
    heroImage: '/images/features/mobile-hero.jpg',
    sections: [
      {
        title: 'Push Bildirimler',
        body: 'Gerçek zamanlı bildirimlerle gelişmelerden anında haberdar olun.',
        image: '/images/features/mobile-1.jpg',
      },
      {
        title: 'Çevrimdışı Deneyim',
        body: 'Zayıf bağlantıda bile kritik işlemleri sürdürün.',
        image: '/images/features/mobile-2.jpg',
      },
    ],
  },
];
