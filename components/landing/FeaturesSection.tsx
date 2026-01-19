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
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Shield,
    title: '100% Offline',
    description: 'Your videos never leave your device. No cloud uploads, no privacy concerns, no internet required.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: HardDrive,
    title: 'No Size Limits',
    description: 'Handle massive 5-6GB+ files without breaking a sweat. Built for heavy-duty compression.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Layers,
    title: 'Batch Processing',
    description: 'Queue multiple videos and compress them all at once. Perfect for content creators.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Gauge,
    title: 'Quality Control',
    description: 'Choose between High, Balanced, or Maximum compression. You decide the quality-size trade-off.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Lock,
    title: 'Private & Secure',
    description: 'Your files stay on your machine. We never see, store, or access your videos.',
    color: 'from-rose-500 to-red-500',
  },
  {
    icon: Cpu,
    title: 'FFmpeg Powered',
    description: 'Industry-standard FFmpeg ensures professional-grade compression with CRF optimization.',
    color: 'from-cyan-500 to-teal-500',
  },
  {
    icon: FileVideo,
    title: 'Multiple Formats',
    description: 'Output to MP4, MKV, WebM, and more. Perfect for WhatsApp, YouTube, or Instagram.',
    color: 'from-amber-500 to-yellow-500',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 lg:py-32 bg-[#0F0D1A]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0D1A] via-[#1A1625] to-[#0F0D1A]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-4"
          >
            Powerful Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Compress Like a Pro
            </span>
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
              <div className="relative bg-white/[0.03] border border-white/5 rounded-2xl p-6 hover:border-indigo-500/30 transition-all h-full">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}