import React from 'react';
import Link from 'next/link';
import { createPageUrl, PageName } from '@/lib/navigation';
import { Zap, Twitter, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', page: 'Pricing' },
      { name: 'Download', page: 'Download' },
    ],
    Resources: [
      { name: 'Blog', page: 'Blog' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Support', href: 'mailto:support@mediacompressor.pro' },
    ],
    Legal: [
      { name: 'Privacy Policy', page: 'Privacy' },
      { name: 'Terms of Service', page: 'Terms' },
    ],
  };

  return (
    <footer className="bg-[#0A0910] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white">MediaCompressor</span>
            </div>
            <p className="text-sm text-gray-500 mb-6 max-w-xs">
              Compress large videos offline without losing quality. Fast, private, and secure.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-500 hover:text-indigo-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-400 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="mailto:support@mediacompressor.pro" className="text-gray-500 hover:text-indigo-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link: any) => (
                  <li key={link.name}>
                    {link.href ? (
                      <a
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-indigo-400 transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        href={createPageUrl(link.page as PageName)}
                        className="text-sm text-gray-500 hover:text-indigo-400 transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © {currentYear} MediaCompressor Pro. All rights reserved.
          </p>
          <p className="text-sm text-gray-600">
            Made with ❤️ for creators worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}