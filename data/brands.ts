export interface Brand {
  id: string;
  name: string;
  logo: string;
  category: string;
  description: string;
  website?: string;
}

export const BRANDS: Brand[] = [
  {
    id: 'albayrak-grup',
    name: 'Albayrak Grubu',
    logo: '/images/brands/albayrak-grup.png',
    category: 'Holding',
    description: 'Türkiye\'nin önde gelen holding şirketlerinden biri'
  },
  {
    id: 'cevtem-temizlik',
    name: 'Çevtem Temizlik',
    logo: '/images/brands/cevtem-temizlik.png',
    category: 'Temizlik Hizmetleri',
    description: 'Profesyonel temizlik hizmetleri ve çevre dostu çözümler'
  },
  {
    id: 'fa-grup',
    name: 'FA Grup',
    logo: '/images/brands/fa-grup.png',
    category: 'Grup Şirketi',
    description: 'Çok sektörlü faaliyet gösteren grup şirketi'
  },
  {
    id: 'akmercan-grup',
    name: 'Akmercan Grup',
    logo: '/images/brands/akmercan-grup.png',
    category: 'Grup Şirketi',
    description: 'İnşaat ve gayrimenkul alanında faaliyet gösteren grup'
  },
  {
    id: 'agt-seramik',
    name: 'AGT Seramik',
    logo: '/images/brands/agt-seramik.png',
    category: 'Seramik & Yapı',
    description: 'Türkiye\'nin lider seramik üreticilerinden'
  },
  {
    id: 'kaanlar-hikmet-gida',
    name: 'Kaanlar Hikmet Gıda',
    logo: '/images/brands/kaanlar-hikmet-gida.png',
    category: 'Gıda',
    description: 'Kaliteli gıda ürünleri üretimi ve dağıtımı'
  },
  {
    id: 'akgun-grup',
    name: 'Akgün Grup',
    logo: '/images/brands/akgun-grup.png',
    category: 'Grup Şirketi',
    description: 'Turizm ve inşaat sektörlerinde faaliyet gösteren grup'
  },
  {
    id: 'cift-geyik-karaca',
    name: 'Çift Geyik Karaca',
    logo: '/images/brands/cift-geyik-karaca.png',
    category: 'Tekstil',
    description: 'Geleneksel Türk tekstil markası'
  },
  {
    id: 'tursat',
    name: 'Türsat',
    logo: '/images/brands/tursat.png',
    category: 'Telekomünikasyon',
    description: 'Uydu haberleşmesi ve teknoloji çözümleri'
  },
  {
    id: 'sanko',
    name: 'Sanko Holding',
    logo: '/images/brands/sanko.png',
    category: 'Holding',
    description: 'Türkiye\'nin büyük holding şirketlerinden biri'
  },
  {
    id: 'mlpcare-liv-hospital',
    name: 'MLPCare (Liv Hospital)',
    logo: '/images/brands/mlpcare-liv-hospital.png',
    category: 'Sağlık',
    description: 'Özel hastane zinciri ve sağlık hizmetleri'
  },
  {
    id: 'proteinocean',
    name: 'ProteinOcean',
    logo: '/images/brands/proteinocean.png',
    category: 'Gıda Ürünleri',
    description: 'Protein bazlı beslenme ürünleri'
  },
  {
    id: 'wunder',
    name: 'Wunder',
    logo: '/images/brands/wunder.png',
    category: 'Ayakkabı',
    description: 'Modern ayakkabı tasarımı ve e-ticaret'
  },
  {
    id: 'miniso',
    name: 'Miniso',
    logo: '/images/brands/miniso.png',
    category: 'Kozmetik',
    description: 'Yaşam tarzı ürünleri ve kozmetik'
  },
  {
    id: 'online-ciftci',
    name: 'Online Çiftçi',
    logo: '/images/brands/online-ciftci.png',
    category: 'Gıda Ürünleri',
    description: 'Tarım ürünleri ve organik gıda'
  },
  {
    id: 'mugo',
    name: 'Mugo',
    logo: '/images/brands/mugo.png',
    category: 'Tekstil & Giyim',
    description: 'Modern giyim ve moda'
  },
  {
    id: 'sm-bebek',
    name: 'SM Bebek',
    logo: '/images/brands/sm-bebek.png',
    category: 'Anne & Bebek Ürünleri',
    description: 'Bebek ve çocuk ürünleri'
  }
];

export const BRAND_CATEGORIES = [
  'Holding',
  'Grup Şirketi', 
  'Tekstil & Giyim',
  'Gıda',
  'Gıda Ürünleri',
  'Sağlık',
  'Seramik & Yapı',
  'Telekomünikasyon',
  'Temizlik Hizmetleri',
  'Ayakkabı',
  'Kozmetik',
  'Anne & Bebek Ürünleri'
] as const;
