"use client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Monitor, Apple, Download, ShieldCheck, Heart, Zap, Cpu } from "lucide-react";

export default function DownloadPage() {
    // Environment variables for download links
    const windowsExeUrl = process.env.NEXT_PUBLIC_WINDOWS_EXE_URL || '#';
    const windowsMsiUrl = process.env.NEXT_PUBLIC_WINDOWS_MSI_URL || '#';
    const macOsSiliconUrl = process.env.NEXT_PUBLIC_MACOS_SILICON_URL || '#';
    const macOsIntelUrl = process.env.NEXT_PUBLIC_MACOS_INTEL_URL || '#';
    const appVersion = process.env.NEXT_PUBLIC_APP_VERSION || '1.2.0';
    const windowsSize = process.env.NEXT_PUBLIC_WINDOWS_SIZE || '85 MB';
    const macOsSize = process.env.NEXT_PUBLIC_MACOS_SIZE || '92 MB';

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-56 bg-background relative overflow-hidden">
                {/* Glow effects */}
                <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-glow-blue opacity-30 blur-[120px] -z-10"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-glow-purple opacity-30 blur-[120px] -z-10"></div>

                <div className="container-custom text-center mb-24 animate-slide-up" style={{ marginTop: '8rem' }}>
                    <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Install <span className="text-gradient-primary">MediaCompressor Pro</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed">
                        The ultimate offline video compression tool. Choose your platform below and experience privacy-first performance.
                    </p>
                </div>

                <div className="container-custom grid md:grid-cols-2 gap-10 max-w-6xl mb-32 relative z-10">
                    {/* Windows Download */}
                    <div className="glass-card p-12 rounded-[3rem] flex flex-col items-center text-center group border-white/5 hover:border-primary/30">
                        <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-primary/20 shadow-glow">
                            <Monitor size={40} className="text-primary-bright" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4 tracking-tight">Windows</h2>
                        <p className="text-gray-400 mb-10 text-lg">Compatible with Windows 10, 11 (64-bit)</p>
                        <div className="w-full space-y-4">
                            <a
                                href={windowsExeUrl}
                                download
                                className="btn-premium block w-full !rounded-2xl py-5 text-lg"
                                onClick={(e) => {
                                    if (windowsExeUrl === '#') {
                                        e.preventDefault();
                                        alert('Download link not configured. Please check ENVIRONMENT_SETUP.md');
                                    }
                                }}
                            >
                                Download .exe (Installer)
                            </a>
                            <a
                                href={windowsMsiUrl}
                                download
                                className="btn-outline block w-full !rounded-2xl py-4"
                                onClick={(e) => {
                                    if (windowsMsiUrl === '#') {
                                        e.preventDefault();
                                        alert('Download link not configured. Please check ENVIRONMENT_SETUP.md');
                                    }
                                }}
                            >
                                Download .msi
                            </a>
                        </div>
                        <p className="mt-6 text-sm text-gray-500 font-medium tracking-wide">v{appVersion} • {windowsSize} • Stable Build</p>
                    </div>

                    {/* macOS Download */}
                    <div className="glass-card p-12 rounded-[3rem] flex flex-col items-center text-center group border-white/5 hover:border-secondary/30">
                        <div className="w-20 h-20 bg-secondary/10 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 border border-secondary/20 shadow-glow shadow-secondary/10">
                            <Apple size={40} className="text-secondary-bright" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4 tracking-tight">macOS</h2>
                        <p className="text-gray-400 mb-10 text-lg">Apple Silicon (M1/M2/M3) & Intel Macs</p>
                        <div className="w-full space-y-4">
                            <a
                                href={macOsSiliconUrl}
                                download
                                className="btn-premium !from-secondary !to-pink-600 block w-full !rounded-2xl py-5 text-lg"
                                onClick={(e) => {
                                    if (macOsSiliconUrl === '#') {
                                        e.preventDefault();
                                        alert('Download link not configured. Please check ENVIRONMENT_SETUP.md');
                                    }
                                }}
                            >
                                Download .dmg (Apple Silicon)
                            </a>
                            <a
                                href={macOsIntelUrl}
                                download
                                className="btn-outline block w-full !rounded-2xl py-4"
                                onClick={(e) => {
                                    if (macOsIntelUrl === '#') {
                                        e.preventDefault();
                                        alert('Download link not configured. Please check ENVIRONMENT_SETUP.md');
                                    }
                                }}
                            >
                                Download .dmg (Intel)
                            </a>
                        </div>
                        <p className="mt-6 text-sm text-gray-500 font-medium tracking-wide">v{appVersion} • {macOsSize} • Native M-Series Support</p>
                    </div>
                </div>

                <section className="bg-[#050a18] py-32 rounded-t-[5rem]">
                    <div className="container-custom max-w-5xl">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-16">
                            <div className="flex-1">
                                <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tight">System <span className="text-gradient-primary">Requirements</span></h2>
                                <div className="grid sm:grid-cols-2 gap-12">
                                    <div className="space-y-6">
                                        <h4 className="font-bold text-primary flex items-center gap-3 text-xl">
                                            <Cpu size={24} />
                                            Minimum
                                        </h4>
                                        <ul className="text-gray-400 space-y-3 font-medium">
                                            <li className="flex items-center gap-3 italic">Intel Core i3 / AMD Ryzen 3</li>
                                            <li className="flex items-center gap-3 italic">4GB RAM</li>
                                            <li className="flex items-center gap-3 italic">200MB free disk space</li>
                                            <li className="flex items-center gap-3 italic">Windows 10 / macOS 11</li>
                                        </ul>
                                    </div>
                                    <div className="space-y-6">
                                        <h4 className="font-bold text-accent flex items-center gap-3 text-xl">
                                            <Zap size={24} />
                                            Recommended
                                        </h4>
                                        <ul className="text-gray-400 space-y-3 font-medium">
                                            <li className="flex items-center gap-3 font-bold text-foreground">Intel Core i5 / Apple M1+</li>
                                            <li className="flex items-center gap-3 font-bold text-foreground">8GB+ RAM</li>
                                            <li className="flex items-center gap-3 font-bold text-foreground">High-speed SSD</li>
                                            <li className="flex items-center gap-3 font-bold text-foreground">Dedicated GPU</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-80 space-y-6">
                                <div className="glass-card p-8 rounded-3xl border-white/5">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                            <ShieldCheck size={20} />
                                        </div>
                                        <span className="font-bold text-sm">Verified Secure</span>
                                    </div>
                                    <p className="text-xs text-gray-500 leading-relaxed">Each build is hash-verified and scanned for maximum security.</p>
                                </div>
                                <div className="glass-card p-8 rounded-3xl border-white/5">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                                            <Heart size={20} />
                                        </div>
                                        <span className="font-bold text-sm">Open Source Core</span>
                                    </div>
                                    <p className="text-xs text-gray-500 leading-relaxed">Built on FFmpeg and Tauri—transparent and developer-friendly.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}


