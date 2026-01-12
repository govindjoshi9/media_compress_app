interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="glass-card group p-8 rounded-[2rem] transition-all duration-500 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 transition-all duration-500 text-indigo-400 group-hover:text-indigo-300">
                    {icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-indigo-200 transition-colors">
                    {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed font-medium">
                    {description}
                </p>
            </div>
        </div>
    );
}
