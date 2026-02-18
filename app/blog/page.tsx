"use client";

import React from 'react';
import Link from 'next/link';
import { createPageUrl } from '@/lib/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, User, Tag } from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

import { blogPosts } from '@/lib/blog-data';

const categoryColors = {
  Tutorial: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Technical: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  Tips: 'bg-green-500/20 text-green-400 border-green-500/30',
  Comparison: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  Productivity: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
};

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#0B0A14]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Video Compression
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"> Blog</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Tips, tutorials, and insights on video compression, FFmpeg, and optimizing your workflow.
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href={createPageUrl('BlogPost') + `?slug=${blogPosts[0].slug}`}>
              <div className="glass-card group relative overflow-hidden transition-all duration-300 hover:border-indigo-500/30">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="aspect-video lg:aspect-auto overflow-hidden">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <span className={`inline-flex w-fit items-center px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[blogPosts[0].category as keyof typeof categoryColors]} mb-4`}>
                      <Tag className="w-3 h-3 mr-1.5" />
                      {blogPosts[0].category}
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-gray-400 mb-6 line-clamp-2 text-lg">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4" />
                        <span>{blogPosts[0].author}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{blogPosts[0].readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">All Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link href={createPageUrl('BlogPost') + `?slug=${post.slug}`}>
                  <article className="glass-card group h-full overflow-hidden hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${categoryColors[post.category as keyof typeof categoryColors]} mb-3`}>
                        {post.category}
                      </span>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-card p-10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to start compressing?</h3>
              <p className="text-gray-400 mb-8">Download MediaCompressor Pro and put these tips into action.</p>
              <Link href={createPageUrl('Download')}>
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 font-bold text-lg shadow-lg shadow-white/10 transition-all hover:scale-105">
                  Download Free
                  <ArrowRight className="w-5 h-5 ml-2" />
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