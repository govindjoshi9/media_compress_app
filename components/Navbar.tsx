"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Download, Zap, CreditCard, BookOpen } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "py-4 bg-background/70 backdrop-blur-xl border-b border-white/5 shadow-premium"
                : "py-6 bg-transparent"
                }`}
        >
            <div className="container-custom flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                        M
                    </div>
                    <span className="text-xl font-bold tracking-tight">
                        MediaCompressor <span className="text-primary">Pro</span>
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-10">
                    <Link href="/#features" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2">
                        <Zap size={16} />
                        Features
                    </Link>
                    <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2">
                        <CreditCard size={16} />
                        Pricing
                    </Link>
                    <Link href="/blog" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2">
                        <BookOpen size={16} />
                        Blog
                    </Link>
                    <Link href="/download" className="btn-premium !py-2.5 !px-7 text-sm !rounded-xl">
                        <Download size={16} />
                        Download
                    </Link>
                </div>

                <button className="md:hidden p-2 rounded-lg bg-white/5 text-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
                </button>
            </div>
        </nav>
    );
}

