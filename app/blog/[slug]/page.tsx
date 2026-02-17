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

const blogContent = {
  'how-to-compress-5gb-videos': {
    title: 'How to Compress 5GB Videos Without Losing Quality',
    excerpt: 'Learn the secrets to shrinking massive video files while maintaining stunning visual quality.',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=1200&h=600&fit=crop',
    author: 'MediaCompressor Team',
    date: 'January 15, 2025',
    readTime: '5 min read',
    category: 'Tutorial',
    content: `
# How to Compress 5GB Videos Without Losing Quality

Large video files are a common challenge for content creators, videographers, and everyday users. Whether you're trying to share a wedding video, upload to YouTube, or send files via WhatsApp, knowing how to compress effectively is essential.

## Why Video Compression Matters

Modern cameras record in stunning 4K or even 8K resolution, resulting in massive file sizes. A single hour of 4K footage can easily exceed 5GB. Without compression, storing and sharing these files becomes impractical.

## The Science Behind Quality Preservation

The key to maintaining quality during compression lies in understanding how video codecs work. Here's what you need to know:

### 1. Choose the Right Codec

**H.264** remains the most compatible codec, supported by virtually all devices. However, **H.265 (HEVC)** offers 50% better compression at the same quality level.

### 2. Understand CRF (Constant Rate Factor)

CRF is your quality dial:
- **CRF 18-20**: Visually lossless, larger files
- **CRF 21-23**: Excellent quality, good compression
- **CRF 24-28**: Noticeable compression, much smaller files

For most use cases, **CRF 23** is the sweet spot.

### 3. Resolution Matters

Don't compress a 4K video if it's meant for mobile viewing. Downscaling to 1080p can reduce file size by 75% with minimal perceptible quality loss on smaller screens.

## Step-by-Step Compression Guide

1. **Open MediaCompressor Pro**
2. **Drag your 5GB video** into the app
3. **Select "Balanced" preset** (CRF 23)
4. **Choose output format** (MP4 recommended)
5. **Click Compress** and wait 3-5 minutes

## Expected Results

| Original Size | Compressed Size | Quality Loss |
|---------------|-----------------|--------------|
| 5 GB          | 1.2 GB          | Minimal      |
| 5 GB          | 800 MB          | Slight       |
| 5 GB          | 500 MB          | Noticeable   |

## Pro Tips

- **Always keep the original** file as backup
- **Use hardware acceleration** if your GPU supports it
- **Batch process** multiple files overnight
- **Test different presets** on short clips first

## Conclusion

Compressing large videos doesn't mean sacrificing quality. With the right tools and settings, you can achieve 70-80% file size reduction while maintaining excellent visual fidelity.

Ready to try it yourself? Download MediaCompressor Pro and compress your first video in under 5 minutes.
    `,
  },
  'best-crf-settings-explained': {
    title: 'Best CRF Settings Explained: A Complete Guide',
    excerpt: 'CRF is the key to balancing file size and quality. Discover the optimal settings for different use cases.',
    image: 'https://images.unsplash.com/photo-1535016120720-40c646be5580?w=1200&h=600&fit=crop',
    author: 'MediaCompressor Team',
    date: 'January 10, 2025',
    readTime: '7 min read',
    category: 'Technical',
    content: `
# Best CRF Settings Explained: A Complete Guide

CRF (Constant Rate Factor) is arguably the most important setting when compressing videos with FFmpeg. Understanding how it works will give you complete control over your compression results.

## What is CRF?

CRF is a rate control mode that maintains consistent quality throughout your video. Unlike bitrate-based encoding, CRF automatically adjusts the bitrate based on scene complexity.

## The CRF Scale

The CRF scale typically ranges from 0 to 51:

- **0**: Lossless (massive files)
- **18**: Visually lossless
- **23**: Default, excellent quality
- **28**: Good quality, smaller files
- **51**: Worst quality (tiny files)

## Recommended CRF Values by Use Case

### For Archiving (CRF 18-20)
When preserving original footage for future editing, use lower CRF values. File sizes will be larger, but you'll retain maximum flexibility.

### For YouTube/Vimeo (CRF 20-22)
Streaming platforms re-encode your video anyway. Upload at CRF 20-22 for the best balance between upload time and quality preservation.

### For WhatsApp/Social Media (CRF 24-26)
Social platforms compress your video aggressively. Starting with CRF 24-26 prevents double-compression artifacts.

### For Email/Quick Sharing (CRF 26-28)
When file size is the priority, CRF 26-28 produces very small files with acceptable quality for casual viewing.

## Visual Comparison

At CRF 23, you'll typically see:
- 70-80% file size reduction
- Imperceptible quality difference on most displays
- Excellent compatibility across devices

## How to Choose Your CRF

Ask yourself these questions:
1. Will the video be re-encoded by a platform?
2. What device will viewers use?
3. Is this an archive or for immediate sharing?

## MediaCompressor Pro Presets

Our app simplifies this with three presets:

| Preset          | CRF Value | Best For                |
|-----------------|-----------|-------------------------|
| High Quality    | 20        | Archiving, YouTube      |
| Balanced        | 23        | General use             |
| Max Compression | 28        | WhatsApp, quick sharing |

## Conclusion

CRF is your secret weapon for perfect compression. Start with CRF 23 and adjust based on your specific needs. Remember: lower numbers = higher quality = larger files.
    `,
  },
};

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