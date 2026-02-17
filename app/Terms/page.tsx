"use client";

import React from 'react';
import Link from 'next/link';
import { createPageUrl } from '@/lib/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText } from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

export default function Terms() {
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
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white">Terms of Service</h1>
            </div>

            <p className="text-gray-400 mb-8">Last updated: January 15, 2025</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-8 text-gray-300"
          >
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By downloading, installing, or using MediaCompressor Pro (&quot;the Software&quot;), you agree to be bound
                by these Terms of Service. If you do not agree to these terms, do not use the Software.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">2. License Grant</h2>
              <p>
                Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Download and install the Software on compatible devices</li>
                <li>Use the Software for personal or commercial video compression</li>
                <li>Use the free tier with daily usage limits</li>
                <li>Upgrade to paid plans for unlimited usage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">3. Free Tier Limitations</h2>
              <p>
                The free version of MediaCompressor Pro includes:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>3 video compressions per day</li>
                <li>All compression presets and features</li>
                <li>No file size limitations</li>
              </ul>
              <p className="mt-4">
                Daily limits reset at midnight UTC. We reserve the right to modify free tier limits with notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">4. Paid Subscriptions</h2>
              <p>
                Paid plans are available for users who need unlimited compressions:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li><strong>Monthly Plan:</strong> ₹50/month, billed monthly</li>
                <li><strong>Yearly Plan:</strong> ₹500/year, billed annually</li>
              </ul>
              <p className="mt-4">
                Subscriptions auto-renew unless cancelled. Refunds are available within 7 days of purchase
                if you have not used the premium features.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">5. Prohibited Uses</h2>
              <p>
                You may NOT:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Reverse engineer, decompile, or disassemble the Software</li>
                <li>Circumvent any usage limits or license restrictions</li>
                <li>Redistribute, sell, or sublicense the Software</li>
                <li>Use the Software for illegal activities</li>
                <li>Remove or alter any proprietary notices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">6. Intellectual Property</h2>
              <p>
                MediaCompressor Pro and its original content, features, and functionality are owned by us
                and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
              <p className="mt-4">
                FFmpeg is used under the LGPL/GPL license. FFmpeg copyright belongs to the FFmpeg project.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">7. Disclaimer of Warranties</h2>
              <p>
                The Software is provided &quot;AS IS&quot; without warranty of any kind. We do not guarantee that:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>The Software will meet your specific requirements</li>
                <li>The Software will be uninterrupted or error-free</li>
                <li>Compression results will meet particular quality standards</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">8. Limitation of Liability</h2>
              <p>
                In no event shall we be liable for any indirect, incidental, special, consequential, or
                punitive damages, including loss of data or profits, arising from your use of the Software.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">9. Updates and Modifications</h2>
              <p>
                We may update the Software and these Terms from time to time. Continued use after changes
                constitutes acceptance of the modified terms. Major changes will be communicated via email
                or in-app notification.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">10. Termination</h2>
              <p>
                We may terminate or suspend your access to the Software immediately, without prior notice,
                for any breach of these Terms. Upon termination, your license to use the Software will cease.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">11. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India,
                without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">12. Contact Us</h2>
              <p>
                For questions about these Terms, please contact us at:
              </p>
              <p className="mt-4">
                <strong>Email:</strong> legal@mediacompressor.pro
              </p>
            </section>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}