"use client";

import React from 'react';
import Link from 'next/link';
import { createPageUrl } from '@/lib/navigation';
import { Button } from '@/components/ui/button';
import { Download, Play, Shield, Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-500/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-purple-500/10 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-sm text-gray-300 font-medium">3 Free Compressions Daily</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6"
          >
            Compress Large Videos
            <br />
            <span className="text-gradient-primary">
              Offline & Securely
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Shrink 5-6GB videos in minutes without losing quality. 
            No cloud uploads, no internet needed—100% private.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href={createPageUrl('Download')}>
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/10">
                <Download className="w-5 h-5 mr-2" />
                Download for Free
              </Button>
            </Link>
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white hover:bg-white/5 px-8 py-6 text-lg rounded-full transition-all"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="w-5 h-5 mr-2" />
              See How It Works
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-gray-500 font-medium"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-indigo-400" />
              <span>100% Offline Privacy</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-indigo-400" />
              <span>FFmpeg Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4 text-indigo-400" />
              <span>50,000+ Downloads</span>
            </div>
          </motion.div>
        </div>

        {/* App Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 lg:mt-24 relative animate-float"
        >
          <div className="relative mx-auto max-w-4xl">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl" />

            {/* Screenshot Container */}
            <div className="relative bg-gradient-to-b from-[#1A1625] to-[#0F0D1A] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              {/* Window Controls */}
              <div className="flex items-center gap-2 px-4 py-3 bg-black/30 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-4 text-sm text-gray-500">MediaCompressor Pro</span>
              </div>

              {/* App Preview */}
              <div className="p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Upload Area */}
                  <div className="border-2 border-dashed border-indigo-500/30 rounded-xl p-8 text-center bg-indigo-500/5 hover:bg-indigo-500/10 transition-colors">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                      <Download className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white font-medium mb-1">Drop your video here</p>
                    <p className="text-sm text-gray-500">or click to browse</p>
                  </div>

                  {/* Compression Stats */}
                  <div className="space-y-4">
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-400">Original Size</span>
                        <span className="text-white font-mono">5.2 GB</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-400">Compressed</span>
                        <span className="text-green-400 font-mono">1.8 GB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Saved</span>
                        <span className="text-indigo-400 font-mono">65%</span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-4 text-center">
                      <p className="text-white font-medium">Compression Complete!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}