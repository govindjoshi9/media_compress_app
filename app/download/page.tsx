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
    <div className="min-h-screen bg-[#0F0D1A]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6"
          >
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-300">100% Safe & Secure</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Download
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> MediaCompressor</span>
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
                className={`relative cursor-pointer rounded-3xl p-8 transition-all ${selectedPlatform === platform.name
                  ? 'bg-gradient-to-b from-indigo-500/20 to-purple-500/10 border-2 border-indigo-500/40'
                  : 'bg-white/[0.03] border border-white/10 hover:border-white/20'
                  }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center`}>
                    <platform.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{platform.name}</h3>
                    <p className="text-sm text-gray-500">{platform.version} • {platform.size}</p>
                  </div>
                </div>

                <a href={platform.downloadUrl} target="_blank" rel="noopener noreferrer">
                  <Button className={`w-full py-6 rounded-xl mb-6 ${selectedPlatform === platform.name
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700'
                    : 'bg-white/5 hover:bg-white/10'
                    } text-white`}>
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
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-indigo-400" />
                System Requirements ({selectedPlatform})
              </h3>
              <ul className="space-y-3">
                {platforms.find(p => p.name === selectedPlatform)?.requirements.map((req) => (
                  <li key={req} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Installation Steps */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-purple-400" />
                Installation Guide
              </h3>
              <ol className="space-y-3">
                {installSteps[selectedPlatform as keyof typeof installSteps]?.map((step, index) => (
                  <li key={step} className="flex items-start gap-3 text-gray-300">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 text-sm font-medium flex items-center justify-center">
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
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">What You Get</h3>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>FFmpeg-powered</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-400" />
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

            <div className="mt-6">
              <Link href={createPageUrl('Pricing')}>
                <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">
                  View Pricing Plans
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}