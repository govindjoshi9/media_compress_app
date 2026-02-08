"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap, Shield, HardDrive, Layers,
  Gauge, Lock, Cpu, FileVideo
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Compress GB-sized videos in minutes using optimized FFmpeg encoding. No more waiting hours.',
  },
  {
    icon: Shield,
    title: '100% Offline',
    description: 'Your videos never leave your device. No cloud uploads, no privacy concerns, no internet required.',
  },
  {
    icon: HardDrive,
    title: 'No Size Limits',
    description: 'Handle massive 5-6GB+ files without breaking a sweat. Built for heavy-duty compression.',
  },
  {
    icon: Layers,
    title: 'Batch Processing',
    description: 'Queue multiple videos and compress them all at once. Perfect for content creators.',
  },
  {
    icon: Gauge,
    title: 'Quality Control',
    description: 'Choose between High, Balanced, or Maximum compression. You decide the quality-size trade-off.',
  },
  {
    icon: Lock,
    title: 'Private & Secure',
    description: 'Your files stay on your machine. We never see, store, or access your videos.',
  },
  {
    icon: Cpu,
    title: 'FFmpeg Powered',
    description: 'Industry-standard FFmpeg ensures professional-grade compression with CRF optimization.',
  },
  {
    icon: FileVideo,
    title: 'Multiple Formats',
    description: 'Output to MP4, MKV, WebM, and more. Perfect for WhatsApp, YouTube, or Instagram.',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 lg:py-32 bg-background">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-white/[0.02] to-background pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-4"
          >
            Powerful Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Compress Like a Pro
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Built with Tauri, Rust, and FFmpeg for blazing-fast performance.
            No bloat, no subscriptions, just pure compression power.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.05] transition-all hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-indigo-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}