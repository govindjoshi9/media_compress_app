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
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Settings,
    number: '02',
    title: 'Choose Compression',
    description: 'Pick your preset: High Quality, Balanced, or Maximum Compression. Customize CRF if you\'re a pro.',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    icon: Download,
    number: '03',
    title: 'Get Smaller File',
    description: 'Watch the magic happen. Your compressed video is ready in minutes, saved right to your device.',
    color: 'from-pink-500 to-rose-500',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-4"
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
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
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-indigo-500/20 to-transparent z-0" />
              )}

              <div className="relative glass-card p-8 text-center group hover:border-indigo-500/30 transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${step.color} text-white text-sm font-bold shadow-lg`}>
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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
          <div className="max-w-2xl mx-auto glass-card border border-indigo-500/20 p-8 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 pointer-events-none" />
            <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-emerald-400" />
                <h3 className="text-xl font-semibold text-white">Typical Results</h3>
                </div>
                <div className="grid grid-cols-3 gap-6 text-center items-center">
                <div>
                    <p className="text-3xl font-bold text-gray-400 mb-1">5.2 GB</p>
                    <p className="text-sm text-gray-500">Before</p>
                </div>
                <div>
                    <div className="w-12 h-1 bg-gradient-to-r from-gray-700 to-indigo-500 rounded-full mx-auto" />
                </div>
                <div>
                    <p className="text-4xl font-bold text-indigo-400 mb-1">1.2 GB</p>
                    <p className="text-sm text-gray-500">After</p>
                </div>
                </div>
                <p className="text-center text-gray-400 mt-6">
                <span className="text-emerald-400 font-semibold">77% smaller</span> with minimal quality loss
                </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}