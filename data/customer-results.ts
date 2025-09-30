import { TestimonialTile } from '@/types/customer-showcase';

export const TILES: TestimonialTile[] = [
  {
    id: 'albayrak',
    type: 'video',
    variant: 'Video',
    logo: '/images/brands/Albayrak_Grubu_Logo2.png',
    closedBg: undefined,
    openBg: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/aFgE02DYx0A',
    title: 'Albayrak Grup – 96% aktif kullanım',
  },
  {
    id: 'cevtem',
    type: 'video',
    variant: 'Video',
    logo: '/images/companies/cevtem-temizlik.png',
    closedBg: undefined,
    openBg: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/aFgE02DYx0A',
    title: 'Çevtem Temizlik – Operasyonel mükemmellik',
  },
  {
    id: 'agt',
    type: 'video',
    variant: 'Video',
    logo: '/images/brands/agt-renkli.jpeg',
    closedBg: undefined,
    openBg: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1600&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/y9x8SZOWIGg',
    title: 'AGT Grup – Performans ve ROI artışı',
  },
];

export const STRIP_LOGOS = [
  'ALBAYRAK GRUBU',
  'ÇEVTEM TEMİZLİK',
  'AGT SERAMİK',
];
export const ALL_BRANDS_LOGOS = [
  'ALBAYRAK GRUBU',
  'ÇEVTEM TEMİZLİK',
  'AGT SERAMİK',
];