import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check, Crown, Zap, Rocket, ShieldCheck, Heart } from "lucide-react";
import Link from 'next/link';

export const metadata = {
    title: "Pricing | MediaCompressor Pro",
    description: "Upgrade to MediaCompressor Pro for unlimited offline video compression and batch processing power.",
};

export default function PricingPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-56 pb-20 bg-background relative overflow-hidden">
                {/* Glow Effects */}
                <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-glow-blue opacity-20 blur-[120px] -z-10"></div>
                <div className="absolute bottom-0 left-[-10%] w-[60%] h-[60%] bg-glow-purple opacity-20 blur-[120px] -z-10"></div>

                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up" style={{ marginTop: '8rem' }}>
                        <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Simple <span className="text-gradient-primary">Pro Pricing</span></h1>
                        <p className="text-gray-400 text-xl leading-relaxed">
                            Start for free, upgrade when you need extreme power. No subscriptions, just results.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 items-stretch mb-32">
                        {/* Starter */}
                        <div className="glass-card p-10 rounded-[3rem] flex flex-col border-white/5 hover:border-white/10">
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-gray-400 mb-2 uppercase tracking-widest">Starter</h3>
                                <div className="text-5xl font-black">$0</div>
                            </div>
                            <ul className="space-y-4 mb-10 flex-1">
                                <li className="flex items-center gap-3 text-gray-400"><Check size={18} className="text-primary-bright" /> 3 compressions / day</li>
                                <li className="flex items-center gap-3 text-gray-400"><Check size={18} className="text-primary-bright" /> 1080p Resolution limit</li>
                                <li className="flex items-center gap-3 text-gray-400"><Check size={18} className="text-primary-bright" /> No Batch Processing</li>
                            </ul>
                            <button className="w-full py-4 rounded-2xl border border-white/5 text-gray-500 font-bold cursor-default">Current Plan</button>
                        </div>

                        {/* Pro Monthly */}
                        <div className="glass-card p-10 rounded-[3rem] flex flex-col border-primary/30 bg-primary/5 ring-1 ring-primary/20 relative lg:scale-110 z-10 shadow-glow">
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary px-4 py-1.5 rounded-full text-xs font-black text-white shadow-lg tracking-widest animate-pulse">MOST POPULAR</div>
                            <div className="mb-8">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-bold text-primary-bright mb-2 uppercase tracking-widest">Pro Monthly</h3>
                                    <Zap size={24} className="text-primary-bright" />
                                </div>
                                <div className="text-5xl font-black">$9<span className="text-xl text-primary/40">/mo</span></div>
                            </div>
                            <ul className="space-y-4 mb-10 flex-1">
                                <li className="flex items-center gap-3 text-foreground font-bold"><Check size={18} className="text-accent" /> Unlimited Batch Mode</li>
                                <li className="flex items-center gap-3 text-foreground font-bold"><Check size={18} className="text-accent" /> 8K & RAW support</li>
                                <li className="flex items-center gap-3 text-foreground font-bold"><Check size={18} className="text-accent" /> Priority GPU acceleration</li>
                                <li className="flex items-center gap-3 text-foreground font-bold"><Check size={18} className="text-accent" /> No Watermarks</li>
                            </ul>
                            <Link href="#" className="btn-premium w-full !rounded-2xl py-5 text-lg">Go Pro Now</Link>
                        </div>

                        {/* Pro Yearly */}
                        <div className="glass-card p-10 rounded-[3rem] flex flex-col border-white/5 hover:border-white/10">
                            <div className="mb-8">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-bold text-gray-400 mb-2 uppercase tracking-widest">Pro Yearly</h3>
                                    <Rocket size={24} className="text-secondary-bright" />
                                </div>
                                <div className="text-5xl font-black">$29<span className="text-xl text-gray-500">/yr</span></div>
                            </div>
                            <ul className="space-y-4 mb-10 flex-1">
                                <li className="flex items-center gap-3 text-gray-300 font-medium"><Check size={18} className="text-secondary-bright" /> Everything in Pro</li>
                                <li className="flex items-center gap-3 text-gray-300 font-medium"><Check size={18} className="text-secondary-bright" /> 75% Savings vs Monthly</li>
                                <li className="flex items-center gap-3 text-gray-300 font-medium"><Check size={18} className="text-secondary-bright" /> Premium Support</li>
                                <li className="flex items-center gap-3 text-gray-300 font-medium"><Check size={18} className="text-secondary-bright" /> Beta Access</li>
                            </ul>
                            <Link href="#" className="btn-outline w-full !rounded-2xl py-5 text-lg border-secondary/20 hover:border-secondary/50">Save with Yearly</Link>
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-black mb-4">Got Questions?</h2>
                            <p className="text-gray-500 font-medium">Clear answers for clear decisions.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { q: "Can I cancel anytime?", a: "There's no subscription for the yearly license. You pay once and use it for the year. Simple.", icon: <Heart className="text-red-400" size={20} /> },
                                { q: "Is the license per machine?", a: "Each pro license can be activated on up to 3 personal devices (Windows/Mac).", icon: <ShieldCheck className="text-accent" size={20} /> },
                                { q: "Do you offer refunds?", a: "If the product doesn't meet your hardware needs, contact us within 7 days for a full refund.", icon: <Zap className="text-primary-bright" size={20} /> },
                                { q: "Will I get updates?", a: "Yes, all 1.x version updates are included free for all Pro license holders.", icon: <Crown className="text-secondary-bright" size={20} /> }
                            ].map((faq, i) => (
                                <div key={i} className="glass-card p-8 rounded-3xl border-white/5 flex gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                                        {faq.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-2">{faq.q}</h4>
                                        <p className="text-sm text-gray-400 leading-relaxed font-medium">{faq.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
