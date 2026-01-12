import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import { Upload, Sliders, CheckCircle, ArrowRight, Zap, Crown, ShieldCheck, Heart } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />

        {/* How It Works Section */}
        <section className="relative overflow-hidden">
          <div className="absolute top-1/2 left-[-10%] w-[50%] h-[50%] bg-glow-blue opacity-20 blur-[100px] -z-10"></div>

          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-24 animate-slide-up">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">How It <span className="text-gradient-primary">Works</span></h2>
              <p className="text-gray-400 text-xl leading-relaxed">
                Three simple steps to smaller, high-quality videos without ever touching the cloud.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  step: "01",
                  title: "Import Media",
                  desc: "Drag and drop any video file up to 8GB. Since it's local, there's no upload time.",
                  icon: <Upload className="text-primary-bright" size={32} />
                },
                {
                  step: "02",
                  title: "Select Profile",
                  desc: "Choose a target size or quality level. Our CRF engine handles the complex math.",
                  icon: <Sliders className="text-secondary-bright" size={32} />
                },
                {
                  step: "03",
                  title: "Export & Save",
                  desc: "Hardware-accelerated encoding saves your video in seconds, right to your folder.",
                  icon: <CheckCircle className="text-accent" size={32} />
                }
              ].map((item, i) => (
                <div key={i} className="glass-card group p-12 rounded-[3.5rem] border-white/5 hover:border-primary/20 animate-slide-up" style={{ animationDelay: `${i * 0.2}s` }}>
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-500 border border-white/5 group-hover:scale-110">
                      {item.icon}
                    </div>
                    <span className="text-5xl font-black text-white/5 group-hover:text-primary/20 transition-colors duration-500">{item.step}</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Preview Section */}
        <section className="relative overflow-hidden bg-[#050a18]">
          <div className="absolute bottom-0 right-[-10%] w-[50%] h-[50%] bg-glow-purple opacity-20 blur-[100px] -z-10"></div>

          <div className="container-custom">
            <div className="glass-card p-12 md:p-24 rounded-[4rem] border-white/5 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Crown size={300} />
              </div>

              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">Ready to Go <span className="text-gradient-primary">Pro?</span></h2>
                  <p className="text-gray-400 text-xl mb-12 leading-relaxed">
                    Unlock batch processing, custom priority encoding, and lifetime updates. Join 10,000+ creators saving TBs of space.
                  </p>

                  <div className="space-y-6 mb-12">
                    {[
                      "Unlimited 8K Batch Compression",
                      "Priority Hardware acceleration",
                      "Custom Presets & Watermarks",
                      "Full FFmpeg parameters access"
                    ].map((feat, i) => (
                      <div key={i} className="flex items-center gap-4 text-lg font-medium">
                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                          <CheckCircle size={16} />
                        </div>
                        {feat}
                      </div>
                    ))}
                  </div>

                  <Link href="/pricing" className="btn-premium w-full md:w-auto text-lg py-5 px-12 group">
                    Get Premium Access Now
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                  <div className="glass-card p-8 rounded-3xl border-white/5 bg-white/[0.02]">
                    <div className="text-gray-500 text-xs font-bold uppercase mb-4 tracking-widest">Free Plan</div>
                    <div className="text-4xl font-black mb-6">$0</div>
                    <ul className="space-y-4 text-sm text-gray-400 mb-8">
                      <li className="flex gap-2"><span>•</span> 3 compressions / day</li>
                      <li className="flex gap-2"><span>•</span> 1080p limit</li>
                      <li className="flex gap-2"><span>•</span> No batch mode</li>
                    </ul>
                    <button className="w-full py-3 rounded-xl border border-white/5 text-xs font-bold text-gray-500 cursor-default">Current Plan</button>
                  </div>

                  <div className="glass-card p-8 rounded-3xl border-primary/30 bg-primary/5 ring-1 ring-primary/20">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-primary-bright text-xs font-bold uppercase tracking-widest">Pro License</div>
                      <div className="bg-primary/20 px-2 py-1 rounded text-[10px] font-black text-primary-bright animate-pulse">POPULAR</div>
                    </div>
                    <div className="text-4xl font-black mb-6">$29<span className="text-lg text-gray-500 font-medium">/yr</span></div>
                    <ul className="space-y-4 text-sm text-gray-400 mb-8">
                      <li className="flex gap-2 font-bold text-foreground"><span>•</span> Unlimited Batch</li>
                      <li className="flex gap-2 font-bold text-foreground"><span>•</span> 8K & RAW support</li>
                      <li className="flex gap-2 font-bold text-foreground"><span>•</span> Priority GPU support</li>
                    </ul>
                    <Link href="/pricing" className="btn-premium w-full !py-3 !text-xs !rounded-xl">Upgrade Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ / Support Section */}
        <section className="relative overflow-hidden">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-24">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">Expert <span className="text-gradient-primary">Support</span></h2>
              <p className="text-gray-400 text-xl leading-relaxed">
                Questions? We have the technical answers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                { q: "Is it really 100% private?", a: "Yes. Our binary is a sidecar to your OS. We don't have servers that receive video data. Privacy isn't a feature; it's our architecture." },
                { q: "Do I need to install FFmpeg?", a: "No. We ship with optimized FFmpeg binaries for each platform. Everything works out of the box." },
                { q: "What's the max file size?", a: "There are no programmatic limits. We've tested files up to 120GB 8K ProRes." },
                { q: "Can I use it on multiple PCs?", a: "Yes, the Pro license is linked to your account and can be active on up to 3 machines." }
              ].map((faq, i) => (
                <div key={i} className="glass-card p-10 rounded-3xl border-white/5 hover:border-white/10 transition-colors duration-300">
                  <h4 className="text-xl font-bold mb-4 tracking-tight text-foreground flex gap-3">
                    <Zap size={20} className="text-primary-bright shrink-0" />
                    {faq.q}
                  </h4>
                  <p className="text-gray-400 leading-relaxed font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
