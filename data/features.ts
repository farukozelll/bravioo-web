export type FeatureSection = {
  title: string;
  body: string;
  image: string;
};

export type Feature = {
  slug: 'recognition' | 'surveys' | 'analytics' | 'automation' | 'integrations' | 'mobile' | 'polls' | 'giveaways' | 'feedback' | 'campaigns' | 'announcements' | 'userManagement';
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
  {
    slug: 'polls',
    name: 'Anket Sistemi',
    description: 'Çalışan memnuniyeti ve görüşlerini toplayın, analiz edin ve raporlayın.',
    heroImage: '/images/features/polls-hero.jpg',
    sections: [
      {
        title: 'Anket Oluşturma',
        body: 'Sürükle-bırak editör ile kolayca anket tasarlayın, sorular ekleyin ve hedef kitleyi belirleyin. Çoklu seçenekli, açık uçlu ve rating ölçekli sorularla kapsamlı anketler oluşturun.',
        image: '/images/features/polls-create.jpg',
      },
      {
        title: 'Gerçek Zamanlı Analiz',
        body: 'Anket sonuçlarını gerçek zamanlı izleyin, departman bazında karşılaştırmalı raporlar alın ve trend analizleri yapın.',
        image: '/images/features/polls-analytics.jpg',
      },
    ],
  },
  {
    slug: 'giveaways',
    name: 'Çekiliş & Kampanyalar',
    description: 'Çalışan motivasyonunu artırmak için çekiliş ve kampanya sistemleri.',
    heroImage: '/images/features/giveaways-hero.jpg',
    sections: [
      {
        title: 'Kampanya Yönetimi',
        body: 'Çekiliş kampanyaları oluşturun, ödülleri tanımlayın ve katılım kurallarını belirleyin. Otomatik çekiliş ve sonuç duyuru sistemleri.',
        image: '/images/features/giveaways-management.jpg',
      },
      {
        title: 'Katılım Takibi',
        body: 'Kampanya performansını takip edin, katılım oranlarını analiz edin ve en etkili kampanya türlerini belirleyin.',
        image: '/images/features/giveaways-tracking.jpg',
      },
    ],
  },
  {
    slug: 'feedback',
    name: 'Geri Bildirim Yönetimi',
    description: 'Çalışanlardan gelen geri bildirimleri topla, kategorize et ve işleme al.',
    heroImage: '/images/features/feedback-hero.jpg',
    sections: [
      {
        title: 'Geri Bildirim Toplama',
        body: 'Anonim ve açık geri bildirim kanalları, özel formlar ve kategorize edilmiş geri bildirim sistemleri ile çalışan sesini dinleyin.',
        image: '/images/features/feedback-collection.jpg',
      },
      {
        title: 'İşlem Takibi',
        body: 'Geri bildirimlerin durumunu takip edin, sorumlu kişiler atayın ve çözüm süreçlerini yönetin. Otomatik bildirim sistemi.',
        image: '/images/features/feedback-processing.jpg',
      },
    ],
  },
  {
    slug: 'campaigns',
    name: 'Kampanya Yönetimi',
    description: 'Çalışan bağlılığını artırmak için özel kampanya ve etkinlik yönetimi.',
    heroImage: '/images/features/campaigns-hero.jpg',
    sections: [
      {
        title: 'Kampanya Planlama',
        body: 'Hedefli kampanyalar tasarlayın, dönem belirleyin ve katılım kriterlerini tanımlayın. Segmentasyon ve kişiselleştirme özellikleri.',
        image: '/images/features/campaigns-planning.jpg',
      },
      {
        title: 'Performans Analizi',
        body: 'Kampanya etkinliğini ölçün, ROI analizleri yapın ve gelecek kampanyalar için optimizasyon önerileri alın.',
        image: '/images/features/campaigns-analysis.jpg',
      },
    ],
  },
  {
    slug: 'announcements',
    name: 'Duyuru Sistemi',
    description: 'Önemli duyuruları tüm çalışanlara etkin şekilde iletmek için merkezi sistem.',
    heroImage: '/images/features/announcements-hero.jpg',
    sections: [
      {
        title: 'Duyuru Yönetimi',
        body: 'Prioriteli duyuru sistemi, hedef kitle seçimi ve zamanlanmış yayınlama ile önemli bilgileri etkili şekilde iletin.',
        image: '/images/features/announcements-management.jpg',
      },
      {
        title: 'Etkileşim Takibi',
        body: 'Duyuru okunma oranları, etkileşim metrikleri ve geri bildirim analizi ile iletişim etkinliğini ölçün.',
        image: '/images/features/announcements-tracking.jpg',
      },
    ],
  },
  {
    slug: 'userManagement',
    name: 'Kullanıcı Yönetimi',
    description: 'Çalışan hesapları, roller ve yetkilendirme işlemlerini merkezi olarak yönetin.',
    heroImage: '/images/features/user-management-hero.jpg',
    sections: [
      {
        title: 'Rol & Yetki Yönetimi',
        body: 'Detaylı rol tanımları, departman bazında yetkilendirme ve güvenlik politikaları ile sistemin güvenliğini sağlayın.',
        image: '/images/features/user-roles.jpg',
      },
      {
        title: 'Kullanıcı Yaşam Döngüsü',
        body: 'Otomatik hesap oluşturma, deaktivasyonu ve veri yedekleme süreçleri ile kullanıcı yönetimini kolaylaştırın.',
        image: '/images/features/user-lifecycle.jpg',
      },
    ],
  },
];
