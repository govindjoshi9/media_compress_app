"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Why is offline compression better?',
    answer: 'Offline compression means your videos never leave your device. No upload times, no privacy concerns, no internet dependency. Your files stay 100% private and secure on your machine.',
  },
  {
    question: 'What is CRF and how does it affect quality?',
    answer: 'CRF (Constant Rate Factor) is a quality setting used by FFmpeg. Lower values (18-23) mean higher quality and larger files. Higher values (24-28) mean more compression with slight quality reduction. Our presets automatically optimize this for you.',
  },
  {
    question: 'Is FFmpeg safe to use?',
    answer: 'Absolutely! FFmpeg is an open-source, industry-standard tool used by YouTube, Netflix, and professional video editors worldwide. It\'s trusted by millions and has been developed for over 20 years.',
  },
  {
    question: 'Will my video quality drop significantly?',
    answer: 'With our Balanced preset, you can reduce file size by 50-70% with virtually no visible quality loss. Only if you choose Maximum Compression will you notice any difference, and even then, it\'s minimal for most use cases.',
  },
  {
    question: 'What video formats are supported?',
    answer: 'We support all major formats including MP4, MKV, AVI, MOV, WebM, and more. You can output to any format, making it perfect for WhatsApp, YouTube, Instagram, or professional workflows.',
  },
  {
    question: 'How long does compression take?',
    answer: 'Compression time depends on your file size and computer specs. Typically, a 5GB video takes 3-5 minutes on a modern computer. Our app uses your CPU efficiently for the fastest possible processing.',
  },
  {
    question: 'Can I compress multiple videos at once?',
    answer: 'Yes! Batch processing is available for all users. Queue up multiple files and let the app compress them one by one while you focus on other work.',
  },
  {
    question: 'Do I need internet to use the app?',
    answer: 'No! The app works 100% offline. The only time you need internet is to download the app initially. After that, everything runs locally on your device.',
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-[#0A0910]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Frequently Asked
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
        </div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/[0.03] border border-white/5 rounded-xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-white hover:text-indigo-400 py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}