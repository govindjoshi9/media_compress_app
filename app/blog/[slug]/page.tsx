import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    // In a real app, you'd fetch this from a CMS or local markdown files
    const title = params.slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-32 bg-background">
                <article className="container mx-auto px-6 max-w-3xl mb-24">
                    <Link href="/blog" className="text-sm text-gray-400 hover:text-white flex items-center gap-2 mb-8 group">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                        Back to Blog
                    </Link>

                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-primary px-2 py-1 rounded bg-primary/10">Tutorial</span>
                        <span className="text-xs text-gray-500">January 12, 2026 • 5 min read</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-black mb-10 leading-tight">{title}</h1>

                    <div className="aspect-video bg-white/5 rounded-3xl mb-12 flex items-center justify-center p-12 border border-white/5 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                        <div className="relative z-10 text-center">
                            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 border border-primary/30">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><rect x="2" y="2" width="20" height="20" rx="2" ry="2"></rect><circle cx="12" cy="12" r="3"></circle></svg>
                            </div>
                            <p className="font-bold">MediaCompressor Pro in Action</p>
                        </div>
                    </div>

                    <div className="prose prose-invert prose-lg max-w-none text-gray-400 space-y-6">
                        <p>
                            Video files are getting larger every day, especially with the adoption of 4K and 8K resolutions. While visual quality is amazing, sharing these files over platforms like WhatsApp or uploading them to YouTube with limited bandwidth can be a nightmare.
                        </p>
                        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Why Offline Compression Matters</h2>
                        <p>
                            Many online tools offer video compression, but they require you to upload your potentially private videos to their servers. This not only consumes data twice but also poses a privacy risk. Offline tools like <strong>MediaCompressor Pro</strong> allow you to use your own computer's power to process the data locally.
                        </p>
                        <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic">
                            "Compression is not just about making things smaller; it's about optimizing data without losing the soul of the visual content."
                        </blockquote>
                        <h2 className="text-2xl font-bold text-white mt-12 mb-4">Step-by-Step Settings</h2>
                        <p>
                            To get the best results for a 5GB raw file, we recommend using the "Balanced" preset. This uses a CRF (Constant Rate Factor) of 23, which is the sweet spot for visual transparency and file size reduction.
                        </p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>Preset:</strong> Medium (for speed/quality balance)</li>
                            <li><strong>CRF:</strong> 22-24 (for 1080p content)</li>
                            <li><strong>Audio:</strong> AAC 128kbps (more than enough for most clips)</li>
                        </ul>
                    </div>

                    <div className="mt-20 p-8 glass-card rounded-3xl text-center">
                        <h3 className="text-2xl font-bold mb-4">Want to try it yourself?</h3>
                        <p className="text-gray-400 mb-8">Download MediaCompressor Pro today and get 3 free compressions every single day.</p>
                        <Link href="/download" className="btn-premium">Download Now</Link>
                    </div>
                </article>

                <Footer />
            </main>
        </>
    );
}
