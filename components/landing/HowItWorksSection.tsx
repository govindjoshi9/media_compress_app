"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Settings, Download, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    number: '01',
    title: 'Select Your Video',
    description: 'Drag and drop or browse to select any video file. We support MP4, MKV, AVI, MOV, and more.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Settings,
    number: '02',
    title: 'Choose Compression',
    description: 'Pick your preset: High Quality, Balanced, or Maximum Compression. Customize CRF if you\'re a pro.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Download,
    number: '03',
    title: 'Get Smaller File',
    description: 'Watch the magic happen. Your compressed video is ready in minutes, saved right to your device.',
    color: 'from-purple-500 to-pink-500',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-[#0A0910]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4"
          >
            Simple Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Three Steps to
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Smaller Videos
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            No technical knowledge required. Just select, compress, and save.
            It's that simple.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-indigo-500/50 to-transparent z-0" />
              )}

              <div className="relative bg-gradient-to-b from-white/[0.05] to-transparent border border-white/5 rounded-3xl p-8 text-center">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-sm font-bold`}>
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Result Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 lg:mt-24"
        >
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <h3 className="text-xl font-semibold text-white">Typical Results</h3>
            </div>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold text-red-400 mb-1">5.2 GB</p>
                <p className="text-sm text-gray-500">Before</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-indigo-400 mb-1">→</p>
                <p className="text-sm text-gray-500">Compress</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-400 mb-1">1.2 GB</p>
                <p className="text-sm text-gray-500">After</p>
              </div>
            </div>
            <p className="text-center text-gray-400 mt-4">
              <span className="text-green-400 font-semibold">77% smaller</span> with minimal quality loss
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}