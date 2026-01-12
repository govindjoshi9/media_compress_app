import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-background pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold text-white">
                                M
                            </div>
                            <span className="text-xl font-bold tracking-tight text-white">MediaCompressor <span className="text-primary">Pro</span></span>
                        </Link>
                        <p className="text-sm text-gray-500 mb-6">
                            The ultimate desktop tool for fast, secure, and offline video compression. Built for creators by creators.
                        </p>
                        <div className="flex gap-4">
                            {/* Social icons placeholder */}
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                                    <div className="w-4 h-4 bg-gray-600 rounded-sm"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link href="/download" className="hover:text-primary transition-colors">Download</Link></li>
                            <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="/#features" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="/#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Resources</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="/blog/crf-settings-explained" className="hover:text-primary transition-colors">What is CRF?</Link></li>
                            <li><Link href="/blog/whatsapp-video-compression" className="hover:text-primary transition-colors">WhatsApp Guide</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Support</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:row items-center justify-between pt-8 border-t border-white/5 text-xs text-gray-600">
                    <p>© 2026 MediaCompressor Pro. All rights reserved.</p>
                    <p className="mt-4 md:mt-0 italic">Made with ❤️ in India for the world.</p>
                </div>
            </div>
        </footer>
    );
}
