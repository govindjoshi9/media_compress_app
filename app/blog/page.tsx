import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
    title: "Blog | Media Compression Guides & Tips",
    description: "Learn how to compress videos without losing quality, understand CRF settings, and optimize for social media.",
};

const posts = [
    {
        title: "How to Compress 5GB Videos Without Losing Quality",
        slug: "compress-5gb-videos",
        excerpt: "Struggling with massive video files? Learn the exact settings to use in MediaCompressor Pro to shrink your files by 90% while keeping them crisp.",
        date: "Jan 12, 2026",
        category: "Tutorial"
    },
    {
        title: "Best CRF Settings Explained: Balance Quality & Size",
        slug: "crf-settings-explained",
        excerpt: "What is CRF? Is lower better? We break down the technical side of FFmpeg compression so you can get the best results every time.",
        date: "Jan 10, 2026",
        category: "Technical"
    },
    {
        title: "Compressing Videos for WhatsApp: The Ultimate Guide",
        slug: "whatsapp-video-compression",
        excerpt: "WhatsApp has strict limits. Here is how to compress your videos to fit under the 16MB/64MB limit without looking like a potato.",
        date: "Jan 05, 2026",
        category: "Social Media"
    }
];

export default function BlogPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-32 bg-background">
                <div className="container mx-auto px-6 mb-16">
                    <h1 className="text-4xl md:text-6xl font-black mb-6">Expert <span className="text-gradient-primary">Insights</span></h1>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        Master the art of media compression with our expert guides and tutorials.
                    </p>
                </div>

                <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 mb-24">
                    {posts.map((post, i) => (
                        <div key={i} className="glass-card flex flex-col rounded-3xl overflow-hidden group">
                            <div className="aspect-video bg-white/5 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent group-hover:opacity-100 opacity-50 transition-opacity"></div>
                                <div className="absolute inset-0 flex items-center justify-center p-8">
                                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                        <div className="w-1/2 h-full bg-primary animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-[10px] uppercase font-bold tracking-widest text-primary px-2 py-1 rounded bg-primary/10">{post.category}</span>
                                    <span className="text-xs text-gray-500">{post.date}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2">
                                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                </h3>
                                <p className="text-sm text-gray-400 mb-6 line-clamp-3">{post.excerpt}</p>
                                <Link href={`/blog/${post.slug}`} className="text-sm font-bold flex items-center gap-2 text-white group/link self-start mt-auto">
                                    Read More
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" group-hover/link:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <section className="bg-primary/5 py-20 border-y border-white/5">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
                        <p className="text-gray-400 mb-8 max-w-xl mx-auto">Get notified about new features, major updates, and compression tips.</p>
                        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input type="email" placeholder="Enter your email" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors" />
                            <button className="btn-premium whitespace-nowrap">Subscribe</button>
                        </form>
                    </div>
                </section>

                <Footer />
            </main>
        </>
    );
}
