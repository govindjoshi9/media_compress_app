"use client";

import React from 'react';
import Link from 'next/link';
import { createPageUrl } from '@/lib/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, ArrowRight, Gift } from 'lucide-react';

export default function PricingPreview() {
  return (
    <section className="relative py-24 lg:py-32 bg-background">
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-4"
          >
            Simple Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Start Free, Upgrade
            <br />
            <span className="text-gradient-primary">
              When You Need More
            </span>
          </motion.h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-8 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col h-full hover:bg-white/[0.04] transition-colors"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5">
                <Gift className="w-6 h-6 text-gray-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Free Forever</h3>
                <p className="text-gray-500 text-sm">No credit card required</p>
              </div>
            </div>

            <div className="mb-8">
              <span className="text-4xl font-bold text-white">₹0</span>
              <span className="text-gray-500 ml-2 font-medium">/ forever</span>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {[
                '3 video compressions per day',
                'All compression presets',
                'Unlimited file size',
                '100% offline processing',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link href={createPageUrl('Download')}>
              <Button variant="outline" className="w-full py-6 rounded-xl border-white/10 hover:bg-white/5 hover:text-white transition-all">
                Download Free
              </Button>
            </Link>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative p-8 rounded-3xl bg-indigo-600/10 border border-indigo-500/20 flex flex-col h-full hover:bg-indigo-600/15 transition-colors"
          >
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-indigo-500 text-white text-xs font-bold tracking-wide uppercase shadow-lg shadow-indigo-500/25">
                <Sparkles className="w-3 h-3" />
                Most Popular
              </span>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/20">
                <Sparkles className="w-6 h-6 text-indigo-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Pro License</h3>
                <p className="text-indigo-200 text-sm">One-time payment</p>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">₹1499</span>
                <span className="text-lg text-gray-400 line-through">₹2999</span>
              </div>
              <p className="text-sm text-indigo-300 mt-2">Lifetime access, no monthly fees</p>
            </div>

            <ul className="space-y-4 mb-8 flex-grow">
              {[
                'Unlimited compressions',
                'Priority support',
                'Batch processing (Unlimited)',
                'Commercial usage rights',
                'Future updates included',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-white">
                  <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link href={createPageUrl('Pricing')}>
              <Button className="w-full py-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 active:scale-95">
                Get Pro Access
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}