"use client";

import React from 'react';
import Link from 'next/link';
import { createPageUrl, PageName } from '@/lib/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Lock, Eye, Server } from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#0F0D1A]">
      <Navbar />

      <section className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={createPageUrl('Home')}>
            <Button variant="ghost" className="text-gray-400 hover:text-white mb-6 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">Privacy Policy</h1>
            </div>

            <p className="text-gray-400 mb-8">Last updated: January 15, 2025</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="prose prose-invert max-w-none"
          >
            {/* Privacy Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 mb-12 not-prose">
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-center">
                <Lock className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-white font-medium">100% Offline</p>
                <p className="text-sm text-gray-500">Files never uploaded</p>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-center">
                <Eye className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-white font-medium">No Tracking</p>
                <p className="text-sm text-gray-500">We don't spy on you</p>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 text-center">
                <Server className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-white font-medium">Local Processing</p>
                <p className="text-sm text-gray-500">Your device only</p>
              </div>
            </div>

            <div className="space-y-8 text-gray-300">
              <section>
                <h2 className="text-xl font-semibold text-white mb-4">1. Overview</h2>
                <p>
                  MediaCompressor Pro ("we", "our", or "the app") is designed with privacy as a core principle.
                  We believe your files are your business, and we've built our software to ensure they stay that way.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">2. Data We DON'T Collect</h2>
                <p>MediaCompressor Pro does NOT:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Upload your videos to any server</li>
                  <li>Access your files beyond what you explicitly select</li>
                  <li>Track your video content or metadata</li>
                  <li>Store any personal information about your files</li>
                  <li>Share data with third parties</li>
                  <li>Use analytics that identify individual users</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">3. Data We May Collect</h2>
                <p>To improve our service and verify licenses, we may collect:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li><strong>License Information:</strong> Email address for paid license verification</li>
                  <li><strong>Anonymous Usage Statistics:</strong> App version, OS type, crash reports (no file data)</li>
                  <li><strong>Payment Information:</strong> Processed securely through third-party payment providers</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">4. How Compression Works</h2>
                <p>
                  All video compression happens entirely on your local device using bundled FFmpeg binaries.
                  Your files are:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Read from your local storage</li>
                  <li>Processed using your device's CPU</li>
                  <li>Saved back to your local storage</li>
                </ul>
                <p className="mt-4">
                  At no point do your video files leave your computer or connect to our servers.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">5. Third-Party Services</h2>
                <p>We may use the following third-party services:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li><strong>Payment Processing:</strong> Razorpay/Stripe for handling payments securely</li>
                  <li><strong>Crash Reporting:</strong> Anonymous error reports to improve stability</li>
                  <li><strong>Update Checking:</strong> Version checks to notify you of updates</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>Request deletion of any data we hold about you</li>
                  <li>Opt out of anonymous analytics</li>
                  <li>Export your license information</li>
                  <li>Contact us with privacy concerns</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">7. Contact Us</h2>
                <p>
                  For any privacy-related questions or concerns, please contact us at:
                </p>
                <p className="mt-4">
                  <strong>Email:</strong> privacy@mediacompressor.pro
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white mb-4">8. Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. We will notify you of any changes
                  by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}