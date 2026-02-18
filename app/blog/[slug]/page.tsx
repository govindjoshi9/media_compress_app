"use client";

import React from 'react';
import Link from 'next/link';
import { createPageUrl } from '@/lib/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Clock, User, Tag, Download, Share2 } from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { useSearchParams } from 'next/navigation';
import { blogContent } from '@/lib/blog-data';

const defaultPost = {
  title: 'Article Not Found',
  content: 'The requested article could not be found. Please check the URL or browse our other articles.',
  author: 'MediaCompressor Team',
  date: 'Unknown',
  readTime: '0 min',
  category: 'General',
  image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200&h=600&fit=crop',
};

export default function BlogPost() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug') || '';
  const post = blogContent[slug as keyof typeof blogContent] || defaultPost;

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: post.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0D1A]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={createPageUrl('Blog')}>
            <Button variant="ghost" className="text-gray-400 hover:text-white mb-6 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 mb-4">
              <Tag className="w-3 h-3 mr-1.5" />
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
              <span>{post.date}</span>
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full aspect-video object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white prose-headings:font-bold
              prose-h1:text-3xl prose-h1:mb-8
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-300 prose-p:leading-relaxed
              prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-white
              prose-ul:text-gray-300 prose-ol:text-gray-300
              prose-li:marker:text-indigo-400
              prose-table:border-collapse prose-table:w-full
              prose-th:border prose-th:border-white/10 prose-th:bg-white/5 prose-th:p-3 prose-th:text-left prose-th:text-white
              prose-td:border prose-td:border-white/10 prose-td:p-3 prose-td:text-gray-300
              prose-code:text-indigo-300 prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
              prose-blockquote:border-l-indigo-500 prose-blockquote:bg-white/5 prose-blockquote:py-1 prose-blockquote:px-4
            "
          >
            <div dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/^# /gm, '<h1>')
                .replace(/^## /gm, '</p><h2>')
                .replace(/^### /gm, '</p><h3>')
                .replace(/\n\n/g, '</p><p>')
                .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                .replace(/\|([^|]+)\|([^|]+)\|([^|]+)\|/g, '<tr><td>$1</td><td>$2</td><td>$3</td></tr>')
            }} />
          </motion.article>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">Try MediaCompressor Pro</h3>
            <p className="text-gray-400 mb-6">Put these techniques into practice with our easy-to-use desktop app.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={createPageUrl('Download')}>
                <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-full px-8">
                  <Download className="w-4 h-4 mr-2" />
                  Download Free
                </Button>
              </Link>
              <Link href={createPageUrl('Blog')}>
                <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 rounded-full">
                  Read More Articles
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