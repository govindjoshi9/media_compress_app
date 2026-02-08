"use client";

import React from 'react';
import Link from 'next/link';
import { createPageUrl, PageName } from '@/lib/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Download, Monitor, Apple, Shield, Zap,
  CheckCircle, HardDrive, Cpu, MemoryStick,
  ArrowRight
} from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

const platforms = [
  {
    name: 'Windows',
    icon: Monitor,
    version: 'v1.0.0',
    size: '45 MB',
    file: 'MediaCompressor-Setup.exe',
    requirements: [
      'Windows 10 or later',
      '64-bit processor',
      '4 GB RAM minimum',
      '100 MB disk space',
    ],
    color: 'from-blue-500 to-cyan-500',
    downloadUrl: '#', // Replace with actual download URL
  },
  {
    name: 'macOS',
    icon: Apple,
    version: 'v1.0.0',
    size: '42 MB',
    file: 'MediaCompressor.dmg',
    requirements: [
      'macOS 10.15 or later',
      'Apple Silicon or Intel',
      '4 GB RAM minimum',
      '100 MB disk space',
    ],
    color: 'from-gray-500 to-gray-600',
    downloadUrl: '#', // Replace with actual download URL
  },
];

const installSteps = {
  Windows: [
    'Download the .exe installer',
    'Run the installer and follow prompts',
    'Allow through Windows Defender if prompted',
    'Launch from Start Menu or Desktop',
  ],
  macOS: [
    'Download the .dmg file',
    'Open the downloaded file',
    'Drag app to Applications folder',
    'Launch from Applications or Launchpad',
  ],
};

export default function DownloadPage() {
  const [selectedPlatform, setSelectedPlatform] = React.useState('Windows');

  return (
    <div className="min-h-screen bg-[#0B0A14]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
          >
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-300 font-medium">100% Safe & Secure</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Download
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"> MediaCompressor</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Available for Windows and macOS. Start compressing in under 2 minutes.
          </motion.p>
        </div>
      </section>

      {/* Download Cards */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => setSelectedPlatform(platform.name)}
                className={`relative cursor-pointer rounded-3xl p-8 transition-all duration-300 ${selectedPlatform === platform.name
                  ? 'glass-card border-indigo-500/50 shadow-2xl shadow-indigo-500/10 scale-[1.02]'
                  : 'glass-card hover:border-indigo-500/30 hover:scale-[1.01]'
                  }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center shadow-lg`}>
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{platform.name}</h3>
                    <p className="text-sm text-gray-500">{platform.version} • {platform.size}</p>
                  </div>
                </div>

                <a href={platform.downloadUrl} target="_blank" rel="noopener noreferrer">
                  <Button className={`w-full py-6 rounded-xl mb-6 font-semibold transition-all ${selectedPlatform === platform.name
                    ? 'bg-white text-black hover:bg-gray-100 shadow-lg shadow-white/10'
                    : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                    }`}>
                    <Download className="w-5 h-5 mr-2" />
                    Download for {platform.name}
                  </Button>
                </a>

                <p className="text-xs text-gray-500 text-center">
                  {platform.file}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Requirements */}
            <div className="glass-card p-8">
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
                <Cpu className="w-5 h-5 text-indigo-400" />
                System Requirements ({selectedPlatform})
              </h3>
              <ul className="space-y-4">
                {platforms.find(p => p.name === selectedPlatform)?.requirements.map((req) => (
                  <li key={req} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Installation Steps */}
            <div className="glass-card p-8">
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-3">
                <HardDrive className="w-5 h-5 text-purple-400" />
                Installation Guide
              </h3>
              <ol className="space-y-4">
                {installSteps[selectedPlatform as keyof typeof installSteps]?.map((step, index) => (
                  <li key={step} className="flex items-start gap-3 text-gray-300">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold flex items-center justify-center border border-indigo-500/30">
                      {index + 1}
                    </span>
                    <span className="text-sm">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Features Reminder */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 pointer-events-none" />
            <div className="relative z-10">
                <h3 className="text-xl font-semibold text-white mb-6">What You Get</h3>
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span>FFmpeg-powered</span>
                </div>
                <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-emerald-400" />
                    <span>100% Offline</span>
                </div>
                <div className="flex items-center gap-2">
                    <HardDrive className="w-4 h-4 text-blue-400" />
                    <span>No Size Limits</span>
                </div>
                <div className="flex items-center gap-2">
                    <Download className="w-4 h-4 text-purple-400" />
                    <span>3 Free Daily</span>
                </div>
                </div>

                <div className="mt-8">
                <Link href={createPageUrl('Pricing')}>
                    <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 px-6 rounded-full">
                    View Pricing Plans
                    <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                </Link>
                </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}