export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Oğuzhan AÇIKGÖZ',
    position: 'Co‑Founder & CEO',
    bio: 'Ürün vizyonu ve büyümeden sorumlu kurucu ortak.',
    image: '/images/avatars/mock-ceo-oa.png',
    linkedin: '#',
    twitter: '#'
  },
  {
    id: '2',
    name: 'Ömer Faruk ALBAYRAK',
    position: 'Co‑Founder & CTO',
    bio: 'Teknoloji stratejisi ve mimarinin lideri.',
    image: '/images/avatars/mock-ceo.png',
    linkedin: '#'
  },
 {
    id: '3',
    name: 'Sühan ŞİŞMAN',
    position: 'Project Manager',
    bio: 'Çapraz ekip koordinasyonu ve teslim süreçleri.',
    image: '/images/avatars/mock-ceo.png',
    linkedin: '#'
  },
  {
    id: '4',
    name: 'BURAK ŞİMŞEK',
    position: 'Mobile Developer',
    bio: 'iOS ve Android için yüksek kaliteli mobil deneyimler.',
    image: '/images/avatars/mock-dev.png',
    linkedin: '#'
  },
  {
    id: '5',
    name: 'TALHA KÖSE',
    position: 'Backend Developer',
    bio: 'Güvenli API’ler ve dayanıklı servis mimarisi.',
    image: '/images/avatars/mock-dev.png',
    linkedin: '#'
  },  {
    id: '6',
    name: 'FARUK ÖZEL',
    position: 'Frontend Web Developer',
    bio: 'Ölçeklenebilir web arayüzleri ve performans optimizasyonu.',
    image: '/images/avatars/mock-dev.png',
    linkedin: '#'
  },
  {
    id: '7',
    name: 'FATMA FEYZA ÖZEL',
    position: 'Business Manager',
    bio: 'Büyüme, operasyon ve iş ortaklıklarının yöneticisi.',
    image: '/images/avatars/mock-dev-girl.png',
    linkedin: '#'
  },
 
];


