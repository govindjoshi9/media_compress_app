"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { createPageUrl, PageName } from '@/lib/navigation';
import { Menu, X, Download, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', page: 'Pricing' },
    { name: 'Download', page: 'Download' },
    { name: 'Blog', page: 'Blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F0D1A]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={createPageUrl('Home')} className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-shadow">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              Media<span className="text-indigo-400">Compressor</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  href={createPageUrl(link.page as PageName)}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link href={createPageUrl('Download')}>
              <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-5 py-2 rounded-full shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all">
                <Download className="w-4 h-4 mr-2" />
                Download Free
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/5">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.href ? (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors px-2 py-1"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    href={createPageUrl(link.page as PageName)}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-white transition-colors px-2 py-1"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link href={createPageUrl('Download')} onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full mt-2">
                  <Download className="w-4 h-4 mr-2" />
                  Download Free
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}