"use client";

import React from 'react';
import Link from 'next/link';
import { createPageUrl, PageName } from '@/lib/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Gift, Crown, ArrowRight, Zap } from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

const plans = [
  {
    name: 'Free',
    description: 'Perfect for occasional use',
    price: '₹0',
    period: 'forever',
    icon: Gift,
    color: 'from-gray-500 to-gray-600',
    features: [
      '3 video compressions per day',
      'All compression presets',
      'No file size limit',
      '100% offline processing',
      'All output formats',
      'Drag & drop interface',
    ],
    cta: 'Download Free',
    ctaLink: 'Download',
    popular: false,
  },
  {
    name: 'Monthly Pro',
    description: 'For power users',
    price: '₹50',
    period: '/ month',
    icon: Sparkles,
    color: 'from-indigo-500 to-purple-600',
    features: [
      'Unlimited compressions',
      'Priority processing speed',
      'Batch processing',
      'All formats supported',
      'Email support',
      'Early access to features',
    ],
    cta: 'Get Started',
    ctaLink: 'Download',
    popular: true,
  },
  {
    name: 'Yearly Pro',
    description: 'Best value',
    price: '₹500',
    period: '/ year',
    savings: 'Save ₹100 (17%)',
    icon: Crown,
    color: 'from-amber-500 to-orange-500',
    features: [
      'Everything in Monthly',
      '2 months free',
      'Priority support',
      'Exclusive updates',
      'Beta feature access',
      'License for 2 devices',
    ],
    cta: 'Get Yearly',
    ctaLink: 'Download',
    popular: false,
  },
];

const comparisonFeatures = [
  { feature: 'Daily Compressions', free: '3 / day', pro: 'Unlimited' },
  { feature: 'File Size Limit', free: 'No limit', pro: 'No limit' },
  { feature: 'Compression Presets', free: 'All 3 presets', pro: 'All 3 presets' },
  { feature: 'Batch Processing', free: '✓', pro: '✓' },
  { feature: 'Processing Speed', free: 'Standard', pro: 'Priority' },
  { feature: 'Support', free: 'Community', pro: 'Email' },
  { feature: 'Early Access', free: '—', pro: '✓' },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#0B0A14]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pb-24 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6"
          >
            <Zap className="w-4 h-4 text-indigo-400" />
            <span className="text-sm text-indigo-300 font-medium">Simple, Transparent Pricing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Choose Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"> Plan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Start free with 3 daily compressions. Upgrade anytime for unlimited access.
          </motion.p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium shadow-lg shadow-indigo-500/25">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </span>
                  </div>
                )}

                <div className={`h-full rounded-3xl p-8 transition-all duration-300 ${plan.popular
                    ? 'glass-card border-indigo-500/30 shadow-2xl shadow-indigo-500/10'
                    : 'glass-card hover:border-indigo-500/30'
                  }`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center shadow-lg`}>
                      <plan.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                      <p className="text-sm text-gray-500">{plan.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                    {plan.savings && (
                      <p className="text-sm text-emerald-400 mt-1 font-medium">{plan.savings}</p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-gray-300">
                        <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-indigo-400' : 'text-emerald-400'}`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={createPageUrl(plan.ctaLink as PageName)} className="block mt-auto">
                    <Button className={`w-full py-6 rounded-xl font-semibold transition-all ${plan.popular
                        ? 'bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/10'
                        : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                      }`}>
                      {plan.cta}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Feature Comparison</h2>

          <div className="glass-card overflow-hidden">
            <div className="grid grid-cols-3 bg-white/5 p-4 border-b border-white/5">
              <div className="text-gray-400 font-medium">Feature</div>
              <div className="text-center text-gray-400 font-medium">Free</div>
              <div className="text-center text-indigo-400 font-medium">Pro</div>
            </div>

            {comparisonFeatures.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 p-4 ${index < comparisonFeatures.length - 1 ? 'border-b border-white/5' : ''}`}
              >
                <div className="text-gray-300 font-medium">{row.feature}</div>
                <div className="text-center text-gray-400">{row.free}</div>
                <div className="text-center text-white font-medium">{row.pro}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 mb-4">Have questions about pricing?</p>
          <Link href={createPageUrl('Home') + '#faq'}>
            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
              View FAQ
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}