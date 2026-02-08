"use client";

import React from 'react';
import Link from 'next/link';
import { createPageUrl } from '@/lib/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Zap } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10 blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-10 lg:p-20 rounded-3xl border-white/10"
        >
          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-indigo-500/10 flex items-center justify-center">
            <Zap className="w-10 h-10 text-indigo-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to Compress?
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Join 50,000+ users who trust MediaCompressor Pro for their video compression needs.
            Start free, no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={createPageUrl('Download')}>
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/10 w-full sm:w-auto">
                <Download className="w-5 h-5 mr-2" />
                Download for Free
              </Button>
            </Link>
            <Link href={createPageUrl('Pricing')}>
              <Button variant="ghost" className="text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full w-full sm:w-auto">
                View Pricing
              </Button>
            </Link>
          </div>

          {/* Trust Text */}
          <p className="mt-8 text-sm text-gray-500 font-medium">
            ✓ 3 free compressions daily &nbsp;•&nbsp; ✓ No signup required &nbsp;•&nbsp; ✓ 100% offline
          </p>
        </motion.div>
      </div>
    </section>
  );
}