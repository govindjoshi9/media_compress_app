import Link from "next/link";
import { Download, Monitor, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-40 pb-20 overflow-hidden min-h-[90vh] flex items-center">
            {/* Background elements - Light Orbs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-glow-purple animate-pulse-soft opacity-60"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-glow-blue animate-pulse-soft opacity-60" style={{ animationDelay: '3s' }}></div>
            </div>

            <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
                <div className="animate-slide-up text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary-bright mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        NEW: v1.2.0 NOW SUPPORTS 8K COMPRESSION
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-8 tracking-tight">
                        Compress Large Videos <br />
                        <span className="text-gradient-primary">100% Offline</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                        The world's fastest offline video compressor. Shrink <span className="text-foreground font-semibold">6GB to 500MB</span> directly on your hardware using FFmpeg. No uploads, no limits, total privacy.
                    </p>

                    <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
                        <Link href="/download" className="btn-premium group">
                            <Monitor size={20} />
                            Download for Windows
                        </Link>
                        <Link href="/download" className="btn-outline group">
                            <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
                            Get for macOS
                        </Link>
                    </div>

                    <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6">
                        {[
                            { icon: <ShieldCheck size={16} />, text: "100% Private" },
                            { icon: <CheckCircle2 size={16} />, text: "No Credit Card" },
                            { icon: <Zap size={16} />, text: "FFmpeg Powered" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                                <span className="text-primary-bright">{item.icon}</span>
                                {item.text}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative animate-float hidden lg:block">
                    {/* Main App Mockup Container */}
                    <div className="glass-card rounded-[2.5rem] p-3 border-white/10 shadow-2xl relative z-10">
                        <div className="bg-[#0f172a] rounded-[2rem] overflow-hidden border border-white/5 aspect-[4/3] relative">
                            {/* Window Header */}
                            <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-6 gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
                                </div>
                                <div className="mx-auto text-[10px] text-gray-500 font-medium tracking-widest uppercase">MediaCompressor Pro</div>
                            </div>

                            {/* App Content */}
                            <div className="p-8 h-full flex flex-col gap-6">
                                {/* Upload Box */}
                                <div className="flex-1 border-2 border-dashed border-white/10 rounded-2xl flex flex-col items-center justify-center gap-4 group transition-colors hover:border-primary/50 hover:bg-primary/[0.02]">
                                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-primary transition-colors">
                                        <Download size={32} />
                                    </div>
                                    <div className="text-center">
                                        <div className="font-bold text-gray-300">Drag & Drop Large Video</div>
                                        <div className="text-xs text-gray-500 mt-1">Supports MP4, MOV, MKV up to 8GB</div>
                                    </div>
                                </div>

                                {/* Active Job */}
                                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
                                    <div className="relative z-10">
                                        <div className="flex justify-between items-center mb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center font-bold text-primary text-xs">MP4</div>
                                                <div>
                                                    <div className="text-sm font-bold text-gray-200">project_documentary_raw.mp4</div>
                                                    <div className="text-[10px] text-gray-500">6.42 GB • H.264 Encoder</div>
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm font-bold text-primary">82%</div>
                                                <div className="text-[10px] text-gray-500">2:45 remaining</div>
                                            </div>
                                        </div>
                                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                            <div className="w-[82%] h-full bg-gradient-to-r from-primary to-secondary animate-pulse"></div>
                                        </div>
                                        <div className="flex justify-between mt-3 text-[10px] items-center">
                                            <div className="flex gap-4">
                                                <span className="text-gray-400">Current: 12.8 MB/s</span>
                                                <span className="text-accent underline cursor-default italic">Saving 5.1 GB</span>
                                            </div>
                                            <div className="px-2 py-0.5 rounded-md bg-accent/20 text-accent font-bold">OPTIMIZED</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Decorative Elements */}
                    <div className="absolute -top-8 -right-8 glass-card px-6 py-4 rounded-2xl border-white/10 shadow-xl animate-float z-20" style={{ animationDelay: '1s' }}>
                        <div className="text-primary-bright font-black text-2xl">-92%</div>
                        <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Storage Saved</div>
                    </div>

                    <div className="absolute -bottom-8 -left-8 glass-card px-6 py-4 rounded-2xl border-white/10 shadow-xl animate-slide-up z-20" style={{ animationDelay: '1.5s' }}>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <div className="text-sm font-bold">100% Private</div>
                                <div className="text-[10px] text-gray-500 uppercase tracking-tighter">Local Execution</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

