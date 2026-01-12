import { Zap, Shield, Layers, Settings, Infinity, Cpu } from "lucide-react";

const features = [
    {
        title: "FFmpeg Hardware Acceleration",
        description: "Powered by the world's most robust encoding engine. Optimized for NVIDIA, AMD, and Apple Silicon.",
        icon: <Zap className="text-primary-bright" size={24} />,
        color: "from-primary/20 text-primary-bright"
    },
    {
        title: "Zero Cloud Dependencies",
        description: "Your data stays on your machine. We never see your files, ensuring 100% data sovereignty and privacy.",
        icon: <Shield className="text-accent" size={24} />,
        color: "from-accent/20 text-accent"
    },
    {
        title: "Advanced Batch Queuing",
        description: "Process hundreds of videos in one go. Set your parameters once and let the engine do the rest.",
        icon: <Layers className="text-secondary-bright" size={24} />,
        color: "from-secondary/20 text-secondary-bright"
    },
    {
        title: "Precision Bitrate Control",
        description: "Fine-tune your compression with surgical precision. Control CRF, GOP, and audio normalization.",
        icon: <Settings className="text-blue-400" size={24} />,
        color: "from-blue-500/20 text-blue-400"
    },
    {
        title: "Infinite File Size Limit",
        description: "Compress 10GB, 50GB, or even 100GB 8K RAW files. If your drive can hold it, we can compress it.",
        icon: <Infinity className="text-purple-400" size={24} />,
        color: "from-purple-500/20 text-purple-400"
    },
    {
        title: "Direct CPU/GPU Pipe",
        description: "Utilize every ounce of your hardware. Parallel processing ensures no core is left idle.",
        icon: <Cpu className="text-orange-400" size={24} />,
        color: "from-orange-500/20 text-orange-400"
    }
];

export default function Features() {
    return (
        <section id="features" className="relative overflow-hidden bg-[#020617]/50">
            {/* Background Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
                <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] bg-glow-purple opacity-20 blur-[100px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] bg-glow-blue opacity-20 blur-[100px]"></div>
            </div>

            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-24 animate-slide-up">
                    <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">Engineered for <br /><span className="text-gradient-primary">Extreme Performance</span></h2>
                    <p className="text-gray-400 text-xl leading-relaxed">
                        Say goodbye to sluggish cloud converters. MediaCompressor Pro brings workstation-level power to your desktop.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass-card group p-10 rounded-[3rem] border-white/5 hover:border-primary/20 animate-slide-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color.split(' ')[0]} to-transparent flex items-center justify-center mb-8 border border-white/5 group-hover:scale-110 transition-transform duration-500`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed font-medium">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
