'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { STRIP_LOGOS } from '@/data/customer-results';

export function CompanyBar() {
 

  return (
    <section 
      aria-labelledby="customer-results-title" 
      className="bg-white py-8 lg:py-12"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Logo Marquee Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white"
        >
          <div className="relative overflow-hidden">
            <div className="flex items-center gap-12 py-6 animate-marquee">
              {[...STRIP_LOGOS, ...STRIP_LOGOS].map((name, i) => (
                <span 
                  key={`${name}-${i}`}
                  className="shrink-0 px-4 py-2 text-xl font-bold uppercase tracking-wider text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
          
          {/* Gradient Fade */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-transparent to-white opacity-90" 
               style={{
                 maskImage: 'linear-gradient(90deg, transparent, black 12%, black 88%, transparent)'
               }}
          />
        </motion.div>
      </div>

     
      {/* Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scroll-up {
          from { transform: translateY(0); }
          to { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          from { transform: translateY(-50%); }
          to { transform: translateY(0); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-scroll-up {
          animation: scroll-up 40s linear infinite;
        }
        .animate-scroll-down {
          animation: scroll-down 40s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee,
          .animate-scroll-up,
          .animate-scroll-down {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
