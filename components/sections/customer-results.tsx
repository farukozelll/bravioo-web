'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocale } from 'next-intl';
import { 
  X,
  TrendingUp,
  Users,
  Award,
  DollarSign,
  Building,
  Calendar,
  Target,
  ArrowUpRight,
  BarChart3,
  Heart,
  Star,
  MapPin,
  Quote
} from 'lucide-react';
import Image from 'next/image';

export function CustomerResultsSection() {
  const locale = useLocale();
  const [selectedCompany, setSelectedCompany] = useState<number | null>(null);

  const companies = [
    {
      id: 1,
      name: 'AKMERCAN',
      logo: '/markalar/akmercan.svg',
      industry: locale === 'tr' ? 'Teknoloji' : 'Technology',
      location: 'İstanbul, Türkiye',
      employees: '2,500+',
      since: '2021',
      primaryColor: 'from-blue-500 to-cyan-600',
      accentColor: 'blue',
      overview: locale === 'tr' 
        ? 'Teknoloji sektöründe lider bir şirket olan AKMERCAN, Bravioo ile çalışan deneyimini dönüştürdü.'
        : 'AKMERCAN, a leading company in the technology sector, transformed employee experience with Bravioo.',
      challenge: locale === 'tr'
        ? 'Hızla büyüyen ekipler arasında iletişim ve motivasyon eksikliği'
        : 'Lack of communication and motivation among rapidly growing teams',
      solution: locale === 'tr'
        ? 'Peer-to-peer takdir sistemi ve gamification ile çalışan bağlılığı artırıldı'
        : 'Employee engagement increased with peer-to-peer recognition system and gamification',
      metrics: [
        {
          title: locale === 'tr' ? 'Çalışan Memnuniyeti' : 'Employee Satisfaction',
          value: '185%',
          change: '+185%',
          icon: Heart,
          description: locale === 'tr' ? 'Artan iş tatmini' : 'Increased job satisfaction'
        },
        {
          title: locale === 'tr' ? 'Verimlilik Artışı' : 'Productivity Increase',
          value: '120%',
          change: '+120%',
          icon: TrendingUp,
          description: locale === 'tr' ? 'Genel performans artışı' : 'Overall performance improvement'
        },
        {
          title: locale === 'tr' ? 'İşten Ayrılma' : 'Turnover Rate',
          value: '2.3%',
          change: '-60%',
          icon: Users,
          description: locale === 'tr' ? 'Düşen işten ayrılma oranı' : 'Decreased turnover rate'
        },
        {
          title: locale === 'tr' ? 'ROI' : 'ROI',
          value: '450%',
          change: '+450%',
          icon: DollarSign,
          description: locale === 'tr' ? 'Yatırım getirisi' : 'Return on investment'
        },
        {
          title: locale === 'tr' ? 'Takdir Sayısı' : 'Recognition Count',
          value: '15,420',
          change: '+2,300%',
          icon: Award,
          description: locale === 'tr' ? 'Aylık takdir sayısı' : 'Monthly recognition count'
        },
        {
          title: locale === 'tr' ? 'Sistem Kullanımı' : 'System Adoption',
          value: '94%',
          change: '+94%',
          icon: Target,
          description: locale === 'tr' ? 'Aktif kullanım oranı' : 'Active usage rate'
        }
      ],
      testimonial: {
        text: locale === 'tr'
          ? '"Bravioo ile çalışan deneyimimizi tamamen dönüştürdük. Ekip motivasyonu ve şirket kültürümüz güçlendi."'
          : '"We completely transformed our employee experience with Bravioo. Team motivation and our company culture strengthened."',
        author: 'Ahmet Yılmaz',
        position: locale === 'tr' ? 'İnsan Kaynakları Direktörü' : 'HR Director'
      }
    },
    {
      id: 2,
      name: 'AGT',
      logo: '/markalar/agt-renkli.jpeg',
      industry: locale === 'tr' ? 'Otomotiv' : 'Automotive',
      location: 'Ankara, Türkiye',
      employees: '1,200+',
      since: '2020',
      primaryColor: 'from-purple-500 to-pink-600',
      accentColor: 'purple',
      overview: locale === 'tr'
        ? 'Otomotiv sektöründe faaliyet gösteren AGT, Bravioo ile operasyonel mükemmelliği yakaladı.'
        : 'AGT, operating in the automotive sector, achieved operational excellence with Bravioo.',
      challenge: locale === 'tr'
        ? 'Üretim hatlarında düşük motivasyon ve kalite sorunları'
        : 'Low motivation and quality issues on production lines',
      solution: locale === 'tr'
        ? 'Anlık takdir sistemi ve performans gamification ile kalite artırıldı'
        : 'Quality improved with instant recognition system and performance gamification',
      metrics: [
        {
          title: locale === 'tr' ? 'Kalite Puanı' : 'Quality Score',
          value: '98.5%',
          change: '+25%',
          icon: Star,
          description: locale === 'tr' ? 'Üretim kalitesi' : 'Production quality'
        },
        {
          title: locale === 'tr' ? 'Ekip Performansı' : 'Team Performance',
          value: '250%',
          change: '+250%',
          icon: TrendingUp,
          description: locale === 'tr' ? 'Genel performans artışı' : 'Overall performance improvement'
        },
        {
          title: locale === 'tr' ? 'Üretim Verimliliği' : 'Production Efficiency',
          value: '180%',
          change: '+80%',
          icon: BarChart3,
          description: locale === 'tr' ? 'Üretim hızı artışı' : 'Production speed increase'
        },
        {
          title: 'ROI',
          value: '400%',
          change: '+400%',
          icon: DollarSign,
          description: locale === 'tr' ? 'Yatırım getirisi' : 'Return on investment'
        },
        {
          title: locale === 'tr' ? 'Güvenlik Skoru' : 'Safety Score',
          value: '99.2%',
          change: '+15%',
          icon: Award,
          description: locale === 'tr' ? 'İş güvenliği artışı' : 'Workplace safety improvement'
        },
        {
          title: locale === 'tr' ? 'Çalışan Bağlılığı' : 'Employee Engagement',
          value: '88%',
          change: '+180%',
          icon: Heart,
          description: locale === 'tr' ? 'Şirket bağlılığı' : 'Company loyalty'
        }
      ],
      testimonial: {
        text: locale === 'tr'
          ? '"AGT olarak, Bravioo ile operasyonel mükemmelliği yakaladık. ROI\'mız 6 ay içinde 4 katına çıktı."'
          : '"As AGT, we achieved operational excellence with Bravioo. Our ROI quadrupled within 6 months."',
        author: 'Mehmet Özkan',
        position: 'CEO'
      }
    },
    {
      id: 3,
      name: 'TÜRKSAT',
      logo: '/markalar/turksat_logo.png',
      industry: locale === 'tr' ? 'Telekomünikasyon' : 'Telecommunications',
      location: 'Ankara, Türkiye',
      employees: '5,000+',
      since: '2019',
      primaryColor: 'from-green-500 to-emerald-600',
      accentColor: 'green',
      overview: locale === 'tr'
        ? 'Türkiye\'nin öncü telekomünikasyon şirketi TÜRKSAT, Bravioo ile dijital dönüşümünü tamamladı.'
        : 'TÜRKSAT, Turkey\'s leading telecommunications company, completed its digital transformation with Bravioo.',
      challenge: locale === 'tr'
        ? 'Büyük organizasyonda çalışan tanıma ve motivasyon eksikliği'
        : 'Lack of employee recognition and motivation in large organization',
      solution: locale === 'tr'
        ? 'Kapsamlı tanıma platformu ve çok seviyeli ödül sistemi'
        : 'Comprehensive recognition platform and multi-level reward system',
      metrics: [
        {
          title: locale === 'tr' ? 'Sistem Benimsenme' : 'System Adoption',
          value: '92%',
          change: '+92%',
          icon: Target,
          description: locale === 'tr' ? 'Çalışan kullanımı' : 'Employee usage'
        },
        {
          title: locale === 'tr' ? 'Çalışan Bağlılığı' : 'Employee Loyalty',
          value: '200%',
          change: '+200%',
          icon: Heart,
          description: locale === 'tr' ? 'Şirket bağlılığı artışı' : 'Company loyalty increase'
        },
        {
          title: locale === 'tr' ? 'Operasyonel Tasarruf' : 'Operational Savings',
          value: '₺2.1M',
          change: '+₺2.1M',
          icon: DollarSign,
          description: locale === 'tr' ? 'Yıllık tasarruf' : 'Annual savings'
        },
        {
          title: locale === 'tr' ? 'Müşteri Memnuniyeti' : 'Customer Satisfaction',
          value: '89%',
          change: '+25%',
          icon: Star,
          description: locale === 'tr' ? 'Hizmet kalitesi' : 'Service quality'
        },
        {
          title: locale === 'tr' ? 'İnovasyon Projeleri' : 'Innovation Projects',
          value: '156',
          change: '+300%',
          icon: Award,
          description: locale === 'tr' ? 'Yıllık proje sayısı' : 'Annual project count'
        },
        {
          title: locale === 'tr' ? 'Liderlik Puanı' : 'Leadership Score',
          value: '91%',
          change: '+45%',
          icon: TrendingUp,
          description: locale === 'tr' ? 'Yöneticilik etkinliği' : 'Management effectiveness'
        }
      ],
      testimonial: {
        text: locale === 'tr'
          ? '"TÜRKSAT olarak, Bravioo ile çalışan tanıma sistemimizi modernize ettik ve olağanüstü sonuçlar elde ettik."'
          : '"As TÜRKSAT, we modernized our employee recognition system with Bravioo and achieved extraordinary results."',
        author: 'Ayşe Demir',
        position: locale === 'tr' ? 'Operasyon Müdürü' : 'Operations Manager'
      }
    },
    {
      id: 4,
      name: 'Acıbadem',
      logo: '/markalar/Acıbadem Tüm Hastaneleri-Tıp Merkezleri.png',
      industry: locale === 'tr' ? 'Sağlık' : 'Healthcare',
      location: 'İstanbul, Türkiye',
      employees: '15,000+',
      since: '2020',
      primaryColor: 'from-red-500 to-pink-600',
      accentColor: 'red',
      overview: locale === 'tr'
        ? 'Türkiye\'nin önde gelen sağlık kurumu Acıbadem, Bravioo ile hasta bakım kalitesini artırdı.'
        : 'Acıbadem, Turkey\'s leading healthcare institution, improved patient care quality with Bravioo.',
      challenge: locale === 'tr'
        ? 'Sağlık personeli arasında motivasyon düşüklüğü ve hasta memnuniyet sorunları'
        : 'Low motivation among healthcare staff and patient satisfaction issues',
      solution: locale === 'tr'
        ? 'Hasta odaklı takdir sistemi ve multidisipliner takım motivasyonu'
        : 'Patient-focused recognition system and multidisciplinary team motivation',
      metrics: [
        {
          title: locale === 'tr' ? 'Hasta Memnuniyeti' : 'Patient Satisfaction',
          value: '96%',
          change: '+35%',
          icon: Heart,
          description: locale === 'tr' ? 'Hasta puanlaması' : 'Patient rating'
        },
        {
          title: locale === 'tr' ? 'Personel Devir Hızı' : 'Staff Turnover',
          value: '8%',
          change: '-45%',
          icon: Users,
          description: locale === 'tr' ? 'Düşen ayrılma oranı' : 'Decreased turnover rate'
        },
        {
          title: locale === 'tr' ? 'Bakım Kalitesi' : 'Care Quality',
          value: '98%',
          change: '+28%',
          icon: Star,
          description: locale === 'tr' ? 'Klinik kalite puanı' : 'Clinical quality score'
        },
        {
          title: locale === 'tr' ? 'İş Tatmini' : 'Job Satisfaction',
          value: '160%',
          change: '+160%',
          icon: Award,
          description: locale === 'tr' ? 'Personel memnuniyeti' : 'Staff satisfaction'
        },
        {
          title: locale === 'tr' ? 'Güvenlik Olayları' : 'Safety Incidents',
          value: '85%',
          change: '-85%',
          icon: Target,
          description: locale === 'tr' ? 'Olay azalması' : 'Incident reduction'
        },
        {
          title: locale === 'tr' ? 'Operasyonel Verimlilik' : 'Operational Efficiency',
          value: '140%',
          change: '+40%',
          icon: TrendingUp,
          description: locale === 'tr' ? 'Süreç iyileştirme' : 'Process improvement'
        }
      ],
      testimonial: {
        text: locale === 'tr'
          ? '"Sağlık sektöründe çalışan motivasyonu hasta bakımını doğrudan etkiliyor. Bravioo ile her ikisini de artırdık."'
          : '"In healthcare, employee motivation directly affects patient care. With Bravioo, we improved both."',
        author: 'Dr. Fatma Kaya',
        position: locale === 'tr' ? 'İnsan Kaynakları Müdürü' : 'HR Director'
      }
    },
    {
      id: 5,
      name: 'Karaca',
      logo: '/markalar/karaca-beyaz.png',
      industry: locale === 'tr' ? 'Perakende' : 'Retail',
      location: 'İstanbul, Türkiye',
      employees: '3,500+',
      since: '2021',
      primaryColor: 'from-orange-500 to-red-600',
      accentColor: 'orange',
      overview: locale === 'tr'
        ? 'Ev dekorasyonu ve yaşam ürünleri lideri Karaca, Bravioo ile müşteri deneyimini dönüştürdü.'
        : 'Home decoration and lifestyle products leader Karaca transformed customer experience with Bravioo.',
      challenge: locale === 'tr'
        ? 'Mağaza personeli arasında düşük motivasyon ve satış performans sorunları'
        : 'Low motivation among store staff and sales performance issues',
      solution: locale === 'tr'
        ? 'Satış odaklı gamification ve müşteri memnuniyet takdir sistemi'
        : 'Sales-focused gamification and customer satisfaction recognition system',
      metrics: [
        {
          title: locale === 'tr' ? 'Satış Performansı' : 'Sales Performance',
          value: '190%',
          change: '+90%',
          icon: TrendingUp,
          description: locale === 'tr' ? 'Satış artışı' : 'Sales increase'
        },
        {
          title: locale === 'tr' ? 'Müşteri Puanı' : 'Customer Score',
          value: '4.8/5',
          change: '+75%',
          icon: Star,
          description: locale === 'tr' ? 'Müşteri değerlendirmesi' : 'Customer rating'
        },
        {
          title: locale === 'tr' ? 'Ekip Motivasyonu' : 'Team Motivation',
          value: '240%',
          change: '+140%',
          icon: Heart,
          description: locale === 'tr' ? 'Personel motivasyonu' : 'Staff motivation'
        },
        {
          title: locale === 'tr' ? 'Mağaza Verimliliği' : 'Store Efficiency',
          value: '165%',
          change: '+65%',
          icon: BarChart3,
          description: locale === 'tr' ? 'Operasyonel verimlilik' : 'Operational efficiency'
        },
        {
          title: locale === 'tr' ? 'Çapraz Satış' : 'Cross-Selling',
          value: '280%',
          change: '+180%',
          icon: Award,
          description: locale === 'tr' ? 'Ek ürün satışı' : 'Additional product sales'
        },
        {
          title: locale === 'tr' ? 'Personel Bağlılığı' : 'Staff Loyalty',
          value: '92%',
          change: '+85%',
          icon: Users,
          description: locale === 'tr' ? 'Çalışan sadakati' : 'Employee loyalty'
        }
      ],
      testimonial: {
        text: locale === 'tr'
          ? '"Perakende sektöründe çalışan deneyimi müşteri deneyimini doğrudan etkiliyor. Bravioo ile her ikisini de iyileştirdik."'
          : '"In retail, employee experience directly affects customer experience. With Bravioo, we improved both."',
        author: 'Özlem Şahin',
        position: locale === 'tr' ? 'Genel Müdür' : 'General Manager'
      }
    },
    {
      id: 6,
      name: 'Liv Hospital',
      logo: '/markalar/liv-hospital2359.jpg',
      industry: locale === 'tr' ? 'Sağlık' : 'Healthcare',
      location: 'İstanbul, Türkiye',
      employees: '2,800+',
      since: '2022',
      primaryColor: 'from-blue-600 to-indigo-700',
      accentColor: 'indigo',
      overview: locale === 'tr'
        ? 'Özel sağlık hizmetleri alanında lider Liv Hospital, Bravioo ile hasta bakım standardını yükseltti.'
        : 'Liv Hospital, a leader in private healthcare services, raised patient care standards with Bravioo.',
      challenge: locale === 'tr'
        ? 'Yoğun çalışma temposu ve sağlık personeli tükenmişliği'
        : 'Intense work pace and healthcare staff burnout',
      solution: locale === 'tr'
        ? 'Wellbeing odaklı takdir sistemi ve ekip destek programları'
        : 'Wellbeing-focused recognition system and team support programs',
      metrics: [
        {
          title: locale === 'tr' ? 'Personel Wellbeing' : 'Staff Wellbeing',
          value: '220%',
          change: '+120%',
          icon: Heart,
          description: locale === 'tr' ? 'Sağlık personeli refahı' : 'Healthcare staff wellbeing'
        },
        {
          title: locale === 'tr' ? 'Hasta Güvenliği' : 'Patient Safety',
          value: '99.5%',
          change: '+18%',
          icon: Target,
          description: locale === 'tr' ? 'Güvenlik puanı' : 'Safety score'
        },
        {
          title: locale === 'tr' ? 'Takım Çalışması' : 'Teamwork',
          value: '195%',
          change: '+95%',
          icon: Users,
          description: locale === 'tr' ? 'Ekip işbirliği' : 'Team collaboration'
        },
        {
          title: locale === 'tr' ? 'Hasta Memnuniyeti' : 'Patient Satisfaction',
          value: '97%',
          change: '+42%',
          icon: Star,
          description: locale === 'tr' ? 'Hasta geri bildirimi' : 'Patient feedback'
        },
        {
          title: locale === 'tr' ? 'Klinik Kalite' : 'Clinical Quality',
          value: '96%',
          change: '+32%',
          icon: Award,
          description: locale === 'tr' ? 'Tıbbi standartlar' : 'Medical standards'
        },
        {
          title: locale === 'tr' ? 'Verimlilik' : 'Efficiency',
          value: '175%',
          change: '+75%',
          icon: TrendingUp,
          description: locale === 'tr' ? 'Operasyonel verimlilik' : 'Operational efficiency'
        }
      ],
      testimonial: {
        text: locale === 'tr'
          ? '"Bravioo ile sağlık personelimizin motivasyonu arttı, hasta bakım kalitemiz yükseldi."'
          : '"With Bravioo, our healthcare staff\'s motivation increased and our patient care quality improved."',
        author: 'Dr. Cemil Özkan',
        position: locale === 'tr' ? 'Başhekim' : 'Chief Medical Officer'
      }
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-sand-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-brand-200 to-emerald-200 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-emerald-600 rounded-2xl flex items-center justify-center">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <motion.span 
            className="inline-block px-6 py-3 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {locale === 'tr' ? 'Müşteri Sonuçları' : 'Customer Results'}
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink-900 mb-6 font-display">
            {locale === 'tr' ? 'Kanıtlanmış' : 'Proven'}
            <br />
            <span className="bg-gradient-to-r from-brand-600 to-emerald-600 bg-clip-text text-transparent">
              {locale === 'tr' ? 'Başarı Hikayeleri' : 'Success Stories'}
            </span>
          </h2>
          
          <p className="text-xl text-ink-600 max-w-3xl mx-auto leading-relaxed">
            {locale === 'tr'
              ? 'Farklı sektörlerden şirketlerin Bravioo ile elde ettiği gerçek sonuçları keşfedin. Her logo bir başarı hikayesi.'
              : 'Discover the real results companies from different sectors achieved with Bravioo. Every logo is a success story.'
            }
          </p>
        </motion.div>

        {/* Company Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.button
                onClick={() => setSelectedCompany(selectedCompany === company.id ? null : company.id)}
                className={`w-full aspect-square bg-white rounded-2xl border-2 transition-all duration-300 p-6 hover:shadow-xl ${
                  selectedCompany === company.id
                    ? 'border-brand-500 shadow-2xl scale-105'
                    : 'border-sand-200 hover:border-brand-300 group-hover:scale-105'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className={`object-contain transition-all duration-300 ${
                      selectedCompany === company.id ? 'grayscale-0' : 'grayscale hover:grayscale-0'
                    }`}
                    sizes="200px"
                  />
                </div>
                
                {/* Hover indicator */}
                <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                  selectedCompany === company.id 
                    ? `bg-gradient-to-br ${company.primaryColor} opacity-10`
                    : 'bg-brand-500/5 opacity-0 group-hover:opacity-100'
                }`} />
                
                {/* Click indicator */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="h-4 w-4 text-brand-500" />
                </div>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Expanded Company Details */}
        <AnimatePresence>
          {selectedCompany && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: 20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {(() => {
                const company = companies.find(c => c.id === selectedCompany);
                if (!company) return null;

                return (
                  <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${company.primaryColor} text-white`}>
                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedCompany(null)}
                      className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all"
                    >
                      <X className="h-5 w-5" />
                    </button>

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-full"></div>
                      <div className="absolute top-32 right-16 w-24 h-24 border border-white/30 rounded-full"></div>
                      <div className="absolute bottom-16 left-32 w-40 h-40 border border-white/30 rounded-full"></div>
                    </div>

                    <div className="relative p-8 md:p-12">
                      {/* Header */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
                        {/* Company Info */}
                        <div className="lg:col-span-2">
                          <div className="flex items-center gap-6 mb-6">
                            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center">
                              <Image
                                src={company.logo}
                                alt={company.name}
                                width={60}
                                height={60}
                                className="object-contain"
                              />
                            </div>
                            <div>
                              <h3 className="text-3xl font-bold mb-2">{company.name}</h3>
                              <div className="flex flex-wrap gap-4 text-white/80">
                                <div className="flex items-center gap-1">
                                  <Building className="h-4 w-4" />
                                  {company.industry}
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="h-4 w-4" />
                                  {company.location}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users className="h-4 w-4" />
                                  {company.employees}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  {locale === 'tr' ? 'Müşteri Since' : 'Customer Since'} {company.since}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-xl text-white/90 leading-relaxed mb-6">
                            {company.overview}
                          </p>

                          {/* Challenge & Solution */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white/10 rounded-2xl p-6">
                              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                                <Target className="h-5 w-5" />
                                {locale === 'tr' ? 'Zorluk' : 'Challenge'}
                              </h4>
                              <p className="text-white/80 text-sm leading-relaxed">
                                {company.challenge}
                              </p>
                            </div>
                            <div className="bg-white/10 rounded-2xl p-6">
                              <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                                <Award className="h-5 w-5" />
                                {locale === 'tr' ? 'Çözüm' : 'Solution'}
                              </h4>
                              <p className="text-white/80 text-sm leading-relaxed">
                                {company.solution}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Testimonial */}
                        <div className="bg-white/10 rounded-2xl p-6 h-fit">
                          <Quote className="h-8 w-8 text-white/50 mb-4" />
                          <blockquote className="text-white/90 leading-relaxed mb-6">
                            {company.testimonial.text}
                          </blockquote>
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                              <span className="text-sm font-bold">
                                {company.testimonial.author.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <div className="font-semibold text-white">{company.testimonial.author}</div>
                              <div className="text-white/70 text-sm">{company.testimonial.position}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Metrics Grid */}
                      <div>
                        <h4 className="text-2xl font-bold text-white mb-8 text-center">
                          {locale === 'tr' ? 'Elde Edilen Sonuçlar' : 'Achieved Results'}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {company.metrics.map((metric, index) => {
                            const Icon = metric.icon;
                            return (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.05 }}
                                className="bg-white/10 rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 group"
                              >
                                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                  <Icon className="h-8 w-8 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-white mb-2">
                                  {metric.value}
                                </div>
                                <div className="text-lg font-semibold text-white/90 mb-2">
                                  {metric.change}
                                </div>
                                <div className="text-white/80 font-medium mb-2">
                                  {metric.title}
                                </div>
                                <div className="text-white/60 text-sm">
                                  {metric.description}
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-ink-900 to-brand-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-32 h-32 border border-white/30 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-24 h-24 border border-white/30 rounded-full"></div>
            </div>
            
            <div className="relative">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 font-display">
                {locale === 'tr' 
                  ? 'Siz de Bu Başarı Hikayelerinin Parçası Olun'
                  : 'Be Part of These Success Stories'
                }
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                {locale === 'tr'
                  ? 'Bravioo ile çalışan deneyiminizi dönüştürün ve ölçülebilir sonuçlar elde edin. Ücretsiz demo ile başlayın.'
                  : 'Transform your employee experience with Bravioo and achieve measurable results. Start with a free demo.'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all transform hover:scale-105">
                  {locale === 'tr' ? 'Ücretsiz Demo Al' : 'Get Free Demo'}
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-ink-900 px-8 py-4 rounded-2xl font-semibold transition-all">
                  {locale === 'tr' ? 'Başarı Hikayelerini İncele' : 'Explore Success Stories'}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
