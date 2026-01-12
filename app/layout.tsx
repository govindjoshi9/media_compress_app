import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MediaCompressor Pro | Compress Large Videos Offline",
  description: "Compress large videos (up to 6GB) without losing quality. Fast, private, and secure offline video compression for Windows & macOS.",
  keywords: ["compress large video offline", "video compressor app", "compress 5gb video", "video compressor for windows", "compress video for whatsapp", "ffmpeg video compressor"],
  metadataBase: new URL("https://mediacompressor.pro"),
  openGraph: {
    title: "MediaCompressor Pro | Fast Offline Video Compression",
    description: "Private and secure video compression. Reduce file sizes up to 90% without cloud uploads.",
    url: "https://mediacompressor.pro",
    siteName: "MediaCompressor Pro",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MediaCompressor Pro | Fast Offline Video Compression",
    description: "Compress large videos (up to 6GB) offline. Private & Secure.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
