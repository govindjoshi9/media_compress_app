"use client";

import React from 'react';
import Link from 'next/link';
import { createPageUrl } from '@/lib/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Zap } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0A0910] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 rounded-3xl p-8 lg:p-12 backdrop-blur-xl"
        >
          {/* Icon */}
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-indigo-500/25">
            <Zap className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Compress?
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8">
            Join 50,000+ users who trust MediaCompressor Pro for their video compression needs.
            Start free, no credit card required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={createPageUrl('Download')}>
              <Button className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all group">
                <Download className="w-5 h-5 mr-2" />
                Download for Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href={createPageUrl('Pricing')}>
              <Button variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/5 px-8 py-6 text-lg rounded-full">
                View Pricing
              </Button>
            </Link>
          </div>

          {/* Trust Text */}
          <p className="mt-8 text-sm text-gray-500">
            ✓ 3 free compressions daily &nbsp;•&nbsp; ✓ No signup required &nbsp;•&nbsp; ✓ 100% offline
          </p>
        </motion.div>
      </div>
    </section>
  );
}