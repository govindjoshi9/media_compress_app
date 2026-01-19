"use client";

import React from 'react';
import Link from 'next/link';
import { createPageUrl } from '@/lib/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, ArrowRight, Gift } from 'lucide-react';

export default function PricingPreview() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0F0D1A]">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4"
          >
            Simple Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Start Free, Upgrade
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
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
            className="relative bg-white/[0.03] border border-white/10 rounded-3xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gray-700 flex items-center justify-center">
                <Gift className="w-6 h-6 text-gray-300" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Free Forever</h3>
                <p className="text-gray-500 text-sm">No credit card required</p>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-bold text-white">₹0</span>
              <span className="text-gray-500 ml-2">/ forever</span>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                '3 video compressions per day',
                'All compression presets',
                'Unlimited file size',
                '100% offline processing',
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-300">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link href={createPageUrl('Download')}>
              <Button variant="outline" className="w-full border-white/10 text-white hover:bg-white/5 py-6 rounded-xl">
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
            className="relative"
          >
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Most Popular
              </span>
            </div>

            <div className="bg-gradient-to-b from-indigo-500/20 to-purple-500/10 border border-indigo-500/30 rounded-3xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Unlimited Pro</h3>
                  <p className="text-indigo-300 text-sm">For power users</p>
                </div>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">₹50</span>
                <span className="text-gray-400 ml-2">/ month</span>
                <p className="text-sm text-gray-500 mt-1">or ₹500 / year (save 17%)</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'Unlimited compressions',
                  'Priority processing speed',
                  'All formats supported',
                  'Batch processing',
                  'Email support',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-200">
                    <Check className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={createPageUrl('Pricing')}>
                <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-6 rounded-xl group">
                  View All Plans
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}