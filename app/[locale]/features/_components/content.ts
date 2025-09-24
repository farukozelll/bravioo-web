'use client';

import { Laptop, Users, Send, ClipboardCheck, TrendingUp, Smartphone, Gift, MessageSquare, Heart } from 'lucide-react';

export type StepItem = {
  title: string;
  body: string;
  dashboardImage: string;
  mobileImage: string;
  icon: any;
  highlight: string;
  animation?: 'send';
};

export type JourneyMap = {
  hr: StepItem[];
  employee: StepItem[];
};

export const journeySteps: JourneyMap = {
  hr: [
    {
      title: 'Kontrolü Elinize Alın',
      body:
        'Web tabanlı İK panelinizle tüm çalışan deneyimini yönetin. Modern, kullanıcı dostu arayüz ile saniyeler içinde işlem yapın.',
      dashboardImage: '/images/features/hero2.png',
      mobileImage: '/images/features/hero2.png',
      icon: Laptop,
      highlight: 'Web Dashboard',
    },
    {
      title: 'Ekibinizi Kolayca Davet Edin',
      body:
        'CSV dosyası veya manuel giriş ile çalışanlarınızı platforma ekleyin. Otomatik e-posta davetleri ile onboarding sürecini başlatın.',
      dashboardImage: '/images/features/hero.png',
      mobileImage: '/images/features/hero.png',
      icon: Users,
      highlight: 'Otomatik Davet',
    },
    {
      title: 'Anında İletişim Kurun',
      body:
        'Önemli duyuruları tek tıkla tüm ekibinize gönderin. Push bildirimler ve in-app mesajlarla 100% erişim garantisi.',
      dashboardImage: '/images/features/hero2.png',
      mobileImage: '/images/features/hero2.png',
      icon: Send,
      highlight: 'Push Bildirim',
      animation: 'send',
    },
    {
      title: 'Geri Bildirim Toplayın',
      body:
        'Anket modülü ile çalışan memnuniyetini ölçün. Gerçek zamanlı sonuçlar ve detaylı analitiklerle karar verin.',
      dashboardImage: '/images/features/hero2.png',
      mobileImage: '/images/features/hero2.png',
      icon: ClipboardCheck,
      highlight: 'Canlı Analitik',
    },
    {
      title: 'Başarıyı Görün',
      body:
        "Gelişmiş dashboard'lar ile katılım oranları, memnuniyet skorları ve trendleri takip edin. Veri odaklı kararlar alın.",
      dashboardImage: '/images/features/hero.png',
      mobileImage: '/images/features/hero.png',
      icon: TrendingUp,
      highlight: 'Smart Analytics',
    },
  ],
  employee: [
    {
      title: 'Platformu Keşfedin',
      body:
        'Mobil uygulamadan şirketinizin özel platformuna giriş yapın. Güncel kampanyalar, duyurular ve fırsatlar sizi bekliyor.',
      dashboardImage: '/images/features/hero.png',
      mobileImage: '/images/features/hero.png',
      icon: Smartphone,
      highlight: 'Mobil Erişim',
    },
    {
      title: 'Kampanyalardan Yararlanın',
      body:
        'Markalardan gelen özel indirimler ve kuponları keşfedin. Tek tıkla kaydedin ve mağazalarda kullanın.',
      dashboardImage: '/images/features/hero2.png',
      mobileImage: '/images/features/hero2.png',
      icon: Gift,
      highlight: 'Özel Fırsatlar',
    },
    {
      title: 'Sesini Duyur',
      body:
        'Anketlere katılın, geri bildirim verin ve şirket kararlarında etkili olun. Fikirleriniz değerli!',
      dashboardImage: '/images/features/hero.png',
      mobileImage: '/images/features/hero.png',
      icon: MessageSquare,
      highlight: 'Aktif Katılım',
    },
    {
      title: 'Ödülleri Kazan',
      body:
        'Aktif katılımınızla özel ödüller ve tanınma kazanın. Başarılarınızı kutlayın!',
      dashboardImage: '/images/features/hero2.png',
      mobileImage: '/images/features/hero2.png',
      icon: Heart,
      highlight: 'Ödül Sistemi',
    },
  ],
};

export const stepThumbs: string[] = [
  '/images/features/hero2.png',
  '/images/features/hero.png',
  '/images/features/hero2.png',
];

export function getBenefitTitle(selected: 'hr' | 'employee', step: number): string {
  if (selected === 'hr') {
    switch (step) {
      case 0:
        return 'Deneyimin Orkestra Şefi Olun';
      case 1:
        return 'Kültürel Dönüşümü Anında Başlatın';
      case 2:
        return 'Mesajınız %100 Yerine Ulaşsın';
      case 3:
        return 'Veriyi Bilgeliğe Dönüştürün';
      case 4:
        return 'Etkiyi Ölçün, Başarıyı Raporlayın';
      default:
        return '';
    }
  }
  switch (step) {
    case 0:
      return 'Ayrıcalıklar Dünyasına Adım Atın';
    case 1:
      return 'Size Özel Fırsatları Yakalayın';
    case 2:
      return 'Sesiniz Kararları Şekillendirsin';
    case 3:
      return 'Katılımınız Ödüle Dönüşsün';
    default:
      return '';
  }
}

export function getBenefitBody(selected: 'hr' | 'employee', step: number): string {
  if (selected === 'hr') {
    switch (step) {
      case 0:
        return 'Tüm çalışan deneyimini tek bir stratejik merkezden yönetin. Dağınık süreçler yerine, kurum kültürünüzü bir orkestra şefi gibi uyum içinde yönetmenin gücünü keşfedin.';
      case 1:
        return 'Tüm organizasyonunuzu dakikalar içinde dijital bir çatı altında toplayın. Manuel ve zaman alan süreçleri geride bırakın, enerjinizi insan odaklı stratejilere ayırın.';
      case 2:
        return 'Kritik duyurularınızın e‑posta kutularında kaybolmasına izin vermeyin. Hedef odaklı bildirimlerle mesajınızın her çalışana anında ve etkili şekilde ulaştığından emin olun.';
      case 3:
        return 'Varsayımlarla değil, gerçek verilerle hareket edin. Çalışanlarınızın nabzını tutun, görünmeyen sorunları ortaya çıkarın ve her kararı somut analitiklerle güçlendirin.';
      case 4:
        return 'Çalışan deneyimine yaptığınız yatırımın geri dönüşünü net rakamlarla görün. Etkileşim, bağlılık ve memnuniyet metriklerini üst yönetime güçlü ve anlaşılır raporlarla sunun.';
      default:
        return '';
    }
  }
  switch (step) {
    case 0:
      return 'Şirketinizin size özel sunduğu fırsatlar, duyurular ve kampanyalar artık cebinizde. Sadece bir çalışan değil, değerli bir topluluğun parçası olduğunuzu hissedin.';
    case 1:
      return 'Yüzlerce seçkin markanın yalnızca size özel sunduğu indirim ve avantajları keşfedin. Maaşınızdan daha fazlasını kazanın, yaşam kalitenizi artırın.';
    case 2:
      return 'Anketlere katılın, geri bildirim verin ve şirket kararlarında söz sahibi olun. Sesiniz kültürü şekillendirsin.';
    case 3:
      return 'Katılımınız ve katkınız görünür olsun; özel ödüller ve tanıma ile başarınız taçlansın.';
    default:
      return '';
  }
}


