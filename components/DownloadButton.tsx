'use client';

import { useState, useEffect, useRef } from 'react';
import { downloads, detectPlatform, type DownloadInfo } from '@/lib/downloads';

export default function DownloadButton() {
    const [mounted, setMounted] = useState(false);
    const [platform, setPlatform] = useState<'windows' | 'mac' | 'linux'>('windows');
    const [primaryDownload, setPrimaryDownload] = useState<DownloadInfo>(downloads.windows);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setMounted(true);
        const detectedPlatform = detectPlatform();
        setPlatform(detectedPlatform);
        setPrimaryDownload(downloads[detectedPlatform]);

        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const getPlatformIcon = (os: string) => {
        switch (os) {
            case 'windows':
            case 'windowsExe':
                return (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 12l.75-5M3 13h18M5 17h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2z" />
                    </svg>
                );
            case 'mac':
                return (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                );
            case 'linux':
                return (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                );
            default:
                return null;
        }
    };

    // Prevent Hydration Error by rendering a placeholder during SSR
    if (!mounted) {
        return (
            <div className="flex items-center gap-3 bg-indigo-600/50 text-white/50 font-semibold py-4 px-8 rounded-2xl cursor-wait border border-white/5">
                <div className="w-5 h-5 border-2 border-white/20 border-t-white/60 rounded-full animate-spin"></div>
                <span>Detecting Platform...</span>
            </div>
        );
    }

    return (
        <div className="relative inline-flex items-stretch group" ref={dropdownRef}>
            {/* Primary Download Button */}
            <a
                href={primaryDownload.url}
                className="flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold py-4 px-8 rounded-l-2xl transition-all duration-300 shadow-lg shadow-indigo-500/20 active:scale-95 border-r border-white/10"
            >
                {getPlatformIcon(platform)}
                <div className="flex flex-col items-start leading-none">
                    <span className="text-xs opacity-70 mb-1 uppercase tracking-wider font-extrabold">Download for</span>
                    <span className="text-lg font-bold">
                        {platform === 'windows' ? 'Windows MSI' : platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </span>
                </div>
            </a>

            {/* Dropdown Toggle */}
            <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-4 rounded-r-2xl transition-all duration-300 shadow-lg shadow-purple-500/20 active:scale-95 flex items-center justify-center border-l border-white/10"
                aria-label="Other versions"
            >
                <svg
                    className={`w-5 h-5 transition-transform duration-500 ${showDropdown ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
                <div className="absolute top-full right-0 mt-4 w-80 glass-card rounded-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-300 border border-white/10 backdrop-blur-3xl bg-[#0b0f1a]/90 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <div className="p-3 space-y-1">
                        <div className="px-4 py-3 text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Available Builds</div>

                        {/* Windows MSI */}
                        <a href={downloads.windows.url} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/10 transition-all group/item">
                            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover/item:bg-indigo-500/20 group-hover/item:border-indigo-500/30 transition-all text-indigo-400">
                                {getPlatformIcon('windows')}
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-bold text-white group-hover/item:text-indigo-200">MSI Installer</div>
                                <div className="text-[10px] text-white/40 font-bold uppercase tracking-tight italic">Recommended • {downloads.windows.size}</div>
                            </div>
                        </a>

                        {/* Windows EXE */}
                        <a href={downloads.windowsExe.url} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/10 transition-all group/item">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center group-hover/item:bg-purple-500/20 group-hover/item:border-purple-500/30 transition-all text-purple-400">
                                {getPlatformIcon('windowsExe')}
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-bold text-white group-hover/item:text-purple-200">EXE Setup</div>
                                <div className="text-[10px] text-white/40 font-bold uppercase tracking-tight italic">Legacy • {downloads.windowsExe.size}</div>
                            </div>
                        </a>

                        <div className="h-px bg-white/5 my-3 mx-2"></div>

                        {/* macOS (Coming Soon) */}
                        <div className="flex items-center gap-4 p-3 rounded-xl opacity-30 cursor-not-allowed grayscale">
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50">
                                {getPlatformIcon('mac')}
                            </div>
                            <div className="flex-1 text-left">
                                <div className="text-sm font-bold text-white">macOS</div>
                                <div className="text-[10px] text-white/40 font-bold uppercase tracking-tight">Coming Soon</div>
                            </div>
                        </div>

                        {/* Linux (Coming Soon) */}
                        <div className="flex items-center gap-4 p-3 rounded-xl opacity-30 cursor-not-allowed grayscale">
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50">
                                {getPlatformIcon('linux')}
                            </div>
                            <div className="flex-1 text-left">
                                <div className="text-sm font-bold text-white">Linux</div>
                                <div className="text-[10px] text-white/40 font-bold uppercase tracking-tight">Coming Soon</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
