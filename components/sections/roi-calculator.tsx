'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Users, DollarSign } from 'lucide-react';

export function ROICalculator() {
  const t = useTranslations('whyBravioo.roi');
  const [employees, setEmployees] = useState(100);
  const [currentCost, setCurrentCost] = useState(500);

  // ROI Calculations
  const monthlyBraviooCost = Math.ceil(employees * 2.99); // ₺2.99 per employee
  const monthlySavings = currentCost - monthlyBraviooCost;
  const yearlyROI = ((monthlySavings * 12) / (monthlyBraviooCost * 12)) * 100;
  const paybackMonths = Math.ceil(monthlyBraviooCost / monthlySavings);

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            {t('title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t('subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <Calculator className="w-8 h-8 text-emerald-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                {t('calculator.title')}
              </h3>
            </div>

            <div className="space-y-6">
              {/* Employee Count */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  {t('calculator.employees')}
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    min="1"
                    max="10000"
                  />
                </div>
              </div>

              {/* Current Cost */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  {t('calculator.currentCost')}
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={currentCost}
                    onChange={(e) => setCurrentCost(Number(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    min="0"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {t('calculator.currentCostDesc')}
                </p>
              </div>

              {/* Range Sliders */}
              <div className="pt-4">
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {t('calculator.employeeRange')}
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    value={employees}
                    onChange={(e) => setEmployees(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>10</span>
                    <span>1000</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Monthly Cost */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t('results.monthlyCost')}</h4>
                  <p className="text-sm text-gray-600">{t('results.monthlyCostDesc')}</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-emerald-600">
                ₺{monthlyBraviooCost.toLocaleString()}/ay
              </div>
            </div>

            {/* Monthly Savings */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t('results.monthlySavings')}</h4>
                  <p className="text-sm text-gray-600">{t('results.monthlySavingsDesc')}</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-blue-600">
                ₺{monthlySavings > 0 ? monthlySavings.toLocaleString() : 0}/ay
              </div>
            </div>

            {/* Annual ROI */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{t('results.annualROI')}</h4>
                  <p className="text-sm text-gray-600">{t('results.annualROIDesc')}</p>
                </div>
              </div>
              <div className="text-3xl font-bold text-purple-600">
                %{yearlyROI > 0 ? Math.round(yearlyROI) : 0}
              </div>
            </div>

            {/* Payback Period */}
            <div className="bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl p-6 text-white">
              <h4 className="font-bold text-xl mb-2">{t('results.payback')}</h4>
              <div className="text-2xl font-bold">
                {paybackMonths > 0 && paybackMonths < 100 ? `${paybackMonths} ${t('results.months')}` : t('results.immediate')}
              </div>
              <p className="text-emerald-100 text-sm mt-2">
                {t('results.paybackDesc')}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('cta.title')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('cta.description')}
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              {t('cta.button')}
            </button>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </section>
  );
}
