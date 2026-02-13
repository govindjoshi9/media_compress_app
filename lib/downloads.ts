export interface DownloadInfo {
    url: string;
    size: string;
    platform: string;
    label?: string;
}

export interface Downloads {
    version: string;
    releaseDate: string;
    windows: DownloadInfo;
    windowsExe: DownloadInfo;
    mac: DownloadInfo;
    linux: DownloadInfo;
}

export const downloads: Downloads = {
    version: '0.1.0',
    releaseDate: '2026-01-02',
    windows: {
        url: process.env.NEXT_PUBLIC_APPLICATION_DOWNLOAD || '/bundle/msi/MediaCompressor_0.1.0_x64_en-US.msi',
        size: '109 MB',
        platform: 'Windows 10/11 (MSI)',
        label: 'MSI Installer'
    },
    windowsExe: {
        url: process.env.NEXT_PUBLIC_APPLICATION_DOWNLOAD || '/bundle/nsis/MediaCompressor_0.1.0_x64-setup.exe',
        size: '79 MB',
        platform: 'Windows 10/11 (EXE)',
        label: 'EXE Setup'
    },
    mac: {
        url: '#',
        size: '-- MB',
        platform: 'macOS 11+ (Silicon/Intel)',
        label: 'Coming Soon'
    },
    linux: {
        url: '#',
        size: '-- MB',
        platform: 'Linux (AppImage)',
        label: 'Coming Soon'
    }
};

export function detectPlatform(): 'windows' | 'mac' | 'linux' {
    if (typeof window === 'undefined') return 'windows';

    const userAgent = window.navigator.userAgent.toLowerCase();

    if (userAgent.includes('win')) return 'windows';
    if (userAgent.includes('mac')) return 'mac';
    if (userAgent.includes('linux')) return 'linux';

    return 'windows';
}
