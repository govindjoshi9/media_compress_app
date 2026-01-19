"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'YouTube Creator',
    avatar: 'RS',
    content: 'Finally, an app that doesn\'t need me to upload to some shady website. Compressed a 6GB wedding video to 1.5GB in 5 minutes. Absolutely game-changing!',
    rating: 5,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Priya Patel',
    role: 'College Student',
    avatar: 'PP',
    content: 'I was struggling to send assignment videos on WhatsApp. This app saved me! Reduced 800MB files to under 100MB without quality loss.',
    rating: 5,
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Amit Kumar',
    role: 'Wedding Videographer',
    avatar: 'AK',
    content: 'As a professional, I need to deliver large video files to clients. This tool helps me compress without compromising the quality my clients expect.',
    rating: 5,
    color: 'from-amber-500 to-orange-500',
  },
  {
    name: 'Sneha Reddy',
    role: 'Social Media Manager',
    avatar: 'SR',
    content: 'Managing video content for multiple clients used to be a nightmare. Batch processing is a lifesaver! Compressed 20 videos overnight.',
    rating: 5,
    color: 'from-green-500 to-emerald-500',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#0F0D1A] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-4"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Loved by
            <br />
            <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              50,000+ Users
            </span>
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
              <div className="relative bg-white/[0.03] border border-white/5 rounded-2xl p-6 lg:p-8 hover:border-indigo-500/30 transition-colors">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-indigo-500/30 mb-4" />

                {/* Content */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-semibold`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}