'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';

export function EmployerPricingFAQ() {
  const t = useTranslations('pricing.employer');
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const faqItems = [
    {
      questionKey: 'faq.q1.question',
      answerKey: 'faq.q1.answer'
    },
    {
      questionKey: 'faq.q2.question',
      answerKey: 'faq.q2.answer'
    },
    {
      questionKey: 'faq.q3.question',
      answerKey: 'faq.q3.answer'
    },
    {
      questionKey: 'faq.q4.question',
      answerKey: 'faq.q4.answer'
    },
    {
      questionKey: 'faq.q5.question',
      answerKey: 'faq.q5.answer'
    },
    {
      questionKey: 'faq.q6.question',
      answerKey: 'faq.q6.answer'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 lg:mb-6"
          >
            {t('faqTitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg lg:text-xl text-gray-600 dark:text-gray-300"
          >
            {t('faqSubtitle')}
          </motion.p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100 pr-4">
                  {t(item.questionKey)}
                </h3>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openItems.includes(index) ? (
                    <Minus className="w-6 h-6 text-emerald-600" />
                  ) : (
                    <Plus className="w-6 h-6 text-gray-400" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-gray-100 dark:border-gray-700">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed pt-4 text-sm sm:text-base">
                        {t(item.answerKey)}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 lg:mt-16"
        >
          <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 text-white">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4">
              {t('stillHaveQuestions')}
            </h3>
            <p className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 text-emerald-100">
              {t('contactDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base lg:text-lg hover:bg-gray-50 transition-all duration-300"
              >
                {t('contactSales')}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base lg:text-lg transition-all duration-300"
              >
                {t('bookDemo')}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
