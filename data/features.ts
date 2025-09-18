export type FeatureSection = {
  title: string;
  body: string;
  image: string;
  items?: string[];
};

export type Feature = {
  slug: 'campaigns' | 'giveaways' | 'surveys' | 'announcements' | 'feedback' | 'user-management' | 'recognition' | 'subsidiaries' | 'analytics' | 'mobile' | 'brands' | 'personalization';
  name: string;
  description: string;
  heroImage: string;
  sections: FeatureSection[];
};

export const FEATURES: Feature[] = [
  {
    slug: 'campaigns',
    name: 'Kampanyalar',
    description: 'Hedefli kampanyalar tasarlayın, segmentlere özel mesajlar iletin ve gerçek zamanlı performans takibi yapın.',
    heroImage: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1400&q=80',
    sections: [
      {
        title: 'Kampanya Tasarımı ve Planlama',
        body: 'Sürükle-bırak editörle görsel kampanyalar oluşturun, hedef kitleyi segmentlere ayırın ve zamanlama yapın.',
        image: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1400&q=80',
        items: [
          'Görsel kampanya editörü',
          'Departman, bölge ve rol bazlı segmentasyon',
          'Zamanlanmış gönderim ve tekrarlama',
          'A/B test desteği',
          'Çoklu kanal yayını (e-posta, push, SMS)'
        ]
      },
      {
        title: 'Performans Analizi ve ROI',
        body: 'Kampanya etkisini ölçün, dönüşüm hunisini analiz edin ve gelecek kampanyalar için optimizasyon önerileri alın.',
        image: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a0b?auto=format&fit=crop&w=1400&q=80',
        items: [
          'Gerçek zamanlı katılım metrikleri',
          'Dönüşüm hunisi analizi',
          'ROI hesaplama ve raporlama',
          'Cohort analizi',
          'Otomatik optimizasyon önerileri'
        ]
      }
    ]
  },
  {
    slug: 'giveaways',
    name: 'Çekilişler',
    description: 'Adil ve şeffaf çekiliş süreçleri yürütün, katılım kuralları belirleyin ve otomatik kazanan seçimi yapın.',
    heroImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=80',
    sections: [
      {
        title: 'Çekiliş Kuralları ve Katılım Yönetimi',
        body: 'Katılım koşullarını belirleyin, hak sayısını puan/başarıya göre ayarlayın ve sahte katılımları önleyin.',
        image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1400&q=80',
        items: [
          'Puan bazlı hak sistemi',
          'Çoklu katılım kontrolü',
          'KVKK/GDPR uyumlu veri toplama',
          'Yaş ve bölge kısıtlamaları',
          'Sahte hesap tespiti'
        ]
      },
      {
        title: 'Otomatik Çekiliş ve Sonuç Yönetimi',
        body: 'Kriptografik rastgelelik ile adil çekiliş yapın, kazananları otomatik belirleyin ve şeffaf sonuç duyurusu gönderin.',
        image: 'https://images.unsplash.com/photo-1494173853739-c21f58b16055?auto=format&fit=crop&w=1400&q=80',
        items: [
          'Kriptografik rastgele sayı üretimi',
          'Şeffaflık için hash doğrulama',
          'Otomatik kazanan bildirimi',
          'Yedek kazanan sistemi',
          'Çekiliş arşivi ve raporlama'
        ]
      }
    ]
  },
  {
    slug: 'surveys',
    name: 'Anketler',
    description: 'Nabız yoklamaları, eNPS ölçümleri ve 360° geri bildirim anketleri ile ekip sağlığını ölçün.',
    heroImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80',
    sections: [
      {
        title: 'Anket Tasarımı ve Dağıtımı',
        body: 'Sürükle-bırak editörle profesyonel anketler oluşturun, çeşitli soru tiplerini kullanın ve hedef kitleyi belirleyin.',
        image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80',
        items: [
          'Çoktan seçmeli, Likert ölçeği, rating',
          'Koşullu soru akışları',
          'Anonim/isimli yanıt seçenekleri',
          'Hedef kitle segmentasyonu',
          'Otomatik hatırlatıcı sistemi'
        ]
      },
      {
        title: 'Analiz ve Raporlama',
        body: 'Anlık sonuçları görüntüleyin, departman bazında karşılaştırmalar yapın ve trend analizleri ile gelişim izleyin.',
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1400&q=80',
        items: [
          'Gerçek zamanlı sonuç paneli',
          'Departman/bölge kırılımları',
          'eNPS skoru hesaplama',
          'Trend analizi ve benchmark',
          'Ham veri dışa aktarma (Excel, CSV)'
        ]
      }
    ]
  },
  {
    slug: 'announcements',
    name: 'Duyurular',
    description: 'Kurumsal duyuruları öncelik sırasına göre yayınlayın, hedef kitleye ulaştırın ve okunma takibi yapın.',
    heroImage: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1600&q=80',
    sections: [
      {
        title: 'Duyuru CRUD Operasyonları',
        body: 'Duyuru oluşturma, düzenleme, arşivleme ve listeleme işlemlerini kullanıcı dostu arayüzlerle yönetin.',
        image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1400&q=80',
        items: [
          'Create: Rich text editör ile duyuru oluşturma',
          'Read: Filtreleme ve arama ile duyuru listesi',
          'Update: Versiyonlama ile güncelleme',
          'Delete: Soft delete ile güvenli silme',
          'List: Öncelik ve kategori bazlı sıralama'
        ]
      },
      {
        title: 'Dağıtım ve Etkileşim Takibi',
        body: 'Hedef kitle belirleyin, zamanlanmış yayın yapın ve okunma oranlarını, tıklamaları takip edin.',
        image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8b?auto=format&fit=crop&w=1400&q=80',
        items: [
          'Departman/rol bazlı hedefleme',
          'Zamanlanmış yayın ve tekrarlama',
          'Okundu/okunmadı takibi',
          'Link tıklama analizi',
          'Push bildirim entegrasyonu'
        ]
      }
    ]
  },
  {
    slug: 'feedback',
    name: 'Geri Bildirim',
    description: 'Anonim ve açık geri bildirim kanalları ile çalışan sesini dinleyin, kategorize edin ve aksiyona dönüştürün.',
    heroImage: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1400&q=80',
    sections: [
      {
        title: 'Geri Bildirim Toplama ve Kategorizasyon',
        body: 'Çoklu kanal üzerinden geri bildirim toplayın, otomatik etiketleme yapın ve öncelik sırası belirleyin.',
        image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=1400&q=80',
        items: [
          'Anonim/isimli geri bildirim seçenekleri',
          'Kategori bazlı otomatik etiketleme',
          'Öncelik seviyesi belirleme',
          'Dosya/görsel ekleme desteği',
          'Çoklu dil desteği'
        ]
      },
      {
        title: 'Süreç Yönetimi ve Aksiyon Takibi',
        body: 'Geri bildirimleri iş akışına alın, sorumlu atayın, durum güncellemeleri yapın ve kapanış anketi gönderin.',
        image: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1400&q=80',
        items: [
          'Durum akışı yönetimi (Yeni/İnceleniyor/Çözüldü)',
          'Sorumlu atama ve bilgilendirme',
          'SLA takibi ve uyarı sistemi',
          'Kapanış memnuniyet anketi',
          'Trend analizi ve raporlama'
        ]
      }
    ]
  },
  {
    slug: 'user-management',
    name: 'Kullanıcı Yönetimi',
    description: 'Kapsamlı kullanıcı hesap yönetimi, rol tabanlı yetkilendirme ve güvenli yaşam döngüsü kontrolü.',
    heroImage: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80',
    sections: [
      {
        title: 'Rol ve Yetki Yönetimi',
        body: 'Hiyerarşik rol yapısı kurun, detaylı izin setleri oluşturun ve departman bazlı yetkilendirme yapın.',
        image: 'https://images.unsplash.com/photo-1544726795-7db3e3ccfbe0?auto=format&fit=crop&w=1400&q=80',
        items: [
          'Hiyerarşik rol sistemi',
          'Granüler izin yönetimi',
          'Departman/bölge bazlı yetkilendirme',
          'Rol şablonları ve kalıtım',
          'Denetim kayıtları (audit logs)'
        ]
      },
      {
        title: 'Kullanıcı Yaşam Döngüsü',
        body: 'Toplu kullanıcı oluşturma, otomatik devre dışı bırakma, güvenli veri devri ve GDPR uyumlu silme işlemleri.',
        image: 'https://images.unsplash.com/photo-1522071901873-411886a10065?auto=format&fit=crop&w=1400&q=80',
        items: [
          'Toplu kullanıcı içe aktarma (CSV/Excel)',
          'SCIM/SSO entegrasyon desteği',
          'Otomatik hesap deaktivasyon',
          'Veri devri ve arşivleme',
          'GDPR uyumlu veri silme'
        ]
      }
    ]
  },
  {
    slug: 'recognition',
    name: 'Ödüllendirme',
    description: 'Çalışan takdir kültürü oluşturun, peer-to-peer takdir sistemi kurun ve ödül pazarı ile motivasyonu artırın.',
    heroImage: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1600&q=80',
    sections: [
      {
        title: 'Takdir Kültürü ve Sosyal Akış',
        body: 'Kudo kartları, rozetler ve sosyal takdir akışları ile takdir kültürünü yaygınlaştırın.',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
        items: [
          'Peer-to-peer takdir sistemi',
          'Rozet ve başarı koleksiyonu',
          'Sosyal takdir akışı',
          'Managerial onay mekanizması',
          'Çapraz departman takdiri'
        ]
      },
      {
        title: 'Ödül Pazarı ve Bütçe Yönetimi',
        body: 'Esnek bütçe sistemi, çoklu para birimi desteği ve yerel/global ödül kataloğu ile ödüllendirme yapın.',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80',
        items: [
          'Departman bazlı bütçe yönetimi',
          'Çoklu para birimi desteği',
          'Yerel/global ödül kataloğu',
          'Hediye kartı entegrasyonları',
          'Vergi ve uyum yönetimi'
        ]
      }
    ]
  },
  {
    slug: 'subsidiaries',
    name: 'Alt Şirketler',
    description: 'Holding yapılarında çoklu organizasyon yönetimi, merkezi kontrol ve konsolide raporlama.',
    heroImage: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1600&q=80',
    sections: [
      {
        title: 'Çoklu Organizasyon Yapısı',
        body: 'Alt şirket, bölge ve mağaza bazlı hiyerarşik yapı kurun, yetkiler devredin ve yerel ayarlar yapın.',
        image: 'https://images.unsplash.com/photo-1581091215367-59ab6b66d3d6?auto=format&fit=crop&w=1400&q=80',
        items: [
          'Hiyerarşik organizasyon yapısı',
          'Şirket bazlı yetki devri',
          'Yerel ayarlar ve özelleştirmeler',
          'Çapraz şirket veri paylaşımı',
          'Merkezi politika yönetimi'
        ]
      },
      {
        title: 'Konsolide Raporlama ve Analiz',
        body: 'Şirket bazlı KPI karşılaştırmaları, konsolide panolar ve yetki bazlı veri görünürlüğü.',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1400&q=80',
        items: [
          'Şirket bazlı performans karşılaştırması',
          'Konsolide dashboard görünümü',
          'Yetki bazlı veri filtreleme',
          'Çoklu şirket benchmark',
          'Holding seviyesi raporlama'
        ]
      }
    ]
  },
  {
    slug: 'analytics',
    name: 'Analitik',
    description: 'Gerçek zamanlı veri analizi, AI destekli içgörüler ve öngörülü analitik ile bilinçli kararlar alın.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80',
    sections: [
      {
        title: 'Gerçek Zamanlı Panolar ve Metrikler',
        body: 'Katılım, anket ve ödüllendirme metriklerini canlı panolarda görüntüleyin, filtreleyin ve analiz edin.',
        image: 'https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?auto=format&fit=crop&w=1400&q=80',
        items: [
          'Gerçek zamanlı veri akışı',
          'İnteraktif dashboard bileşenleri',
          'Çoklu filtre ve segmentasyon',
          'Zaman serisi analizi',
          'Drill-down detay görünümü'
        ]
      },
      {
        title: 'AI İçgörüleri ve Öngörüler',
        body: 'Makine öğrenmesi algoritmaları ile anomali tespiti, trend öngörüleri ve aksiyon önerileri alın.',
        image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1400&q=80',
        items: [
          'Anomali tespit algoritmaları',
          'Öngörülü analitik modelleri',
          'Otomatik içgörü bildirimleri',
          'Risk skoru hesaplama',
          'Personalize edilmiş öneriler'
        ]
      }
    ]
  },
  {
    slug: 'mobile',
    name: 'Mobil Uygulama',
    description: 'iOS ve Android native uygulamaları ile saha çalışanları ve ofis personeli arasında köprü kurun.',
    heroImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80',
    sections: [
      {
        title: 'Mobil Uygulama Ekranları',
        body: 'Ana sayfa, takdir akışı, anket yanıtlama, kampanya görüntüleme ve duyuru okuma ekranları.',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80',
        items: [
          'Kişiselleştirilmiş ana sayfa',
          'Takdir verme/alma akışı',
          'Anket yanıtlama arayüzü',
          'Kampanya katılım ekranları',
          'Duyuru ve bildirim merkezi'
        ]
      },
      {
        title: 'Mobil Optimizasyon ve Güvenlik',
        body: 'Offline çalışma, push bildirimler, biyometrik güvenlik ve MDM entegrasyonu.',
        image: 'https://images.unsplash.com/photo-1510552776732-01accd43a7d2?auto=format&fit=crop&w=1400&q=80',
        items: [
          'Offline veri senkronizasyonu',
          'Zengin push bildirimler',
          'Biyometrik kimlik doğrulama',
          'MDM (Mobile Device Management) uyumu',
          'Over-the-air (OTA) güncellemeler'
        ]
      }
    ]
  },
  {
    slug: 'brands',
    name: 'Markalar',
    description: 'Kurumsal marka kimliği yönetimi, logo kütüphanesi ve marka kullanım rehberleri.',
    heroImage: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1600&q=80',
    sections: [
      {
        title: 'Marka Varlıkları Yönetimi',
        body: 'Logo, tipografi, renk paletleri ve görsel kimlik öğelerini merkezi olarak yönetin.',
        image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1400&q=80',
        items: [
          'Logo varyasyonları ve formatları',
          'Renk paleti ve hex kodları',
          'Tipografi ve font kütüphanesi',
          'Dosya versiyonlama sistemi',
          'Paylaşılabilir marka linkleri'
        ]
      },
      {
        title: 'Kullanım Rehberi ve Şablonlar',
        body: 'Doğru/yanlış kullanım örnekleri, hazır şablonlar ve otomatik boyutlandırma araçları.',
        image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8b?auto=format&fit=crop&w=1400&q=80',
        items: [
          'İnteraktif kullanım rehberi',
          'Hazır şablon koleksiyonu',
          'Otomatik logo boyutlandırma',
          'Marka uygunluk kontrolü',
          'Yazdırma kalitesi optimizasyonu'
        ]
      }
    ]
  },
  {
    slug: 'personalization',
    name: 'Kişiselleştirilebilir',
    description: 'Tema, dil, rol ve davranış bazlı kişiselleştirme ile her kullanıcıya özel deneyim sunun.',
    heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
    sections: [
      {
        title: 'Tema ve Yerelleştirme',
        body: 'Açık/koyu tema, çoklu dil desteği, bölgesel tarih/saat formatları ve kültürel adaptasyon.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80',
        items: [
          'Dinamik tema değiştirme',
          'RTL dil desteği',
          'Tarih/saat yerelleştirme',
          'Para birimi formatları',
          'Kültürel renk uyarlaması'
        ]
      },
      {
        title: 'Akıllı İçerik Kişiselleştirme',
        body: 'Davranışsal analiz, makine öğrenmesi ve kullanıcı tercihlerine dayalı dinamik içerik sunumu.',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1400&q=80',
        items: [
          'Davranış bazlı içerik önerileri',
          'Kişiselleştirilmiş dashboard widget\'ları',
          'Adaptif kullanıcı arayüzü',
          'Öncelik bazlı bildirim filtreleme',
          'Özel sayfa düzenleri'
        ]
      }
    ]
  }
];