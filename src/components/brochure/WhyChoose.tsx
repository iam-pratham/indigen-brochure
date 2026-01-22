import { CheckCircle, Zap, ShieldCheck, Rocket, Code2, Repeat } from "lucide-react";

export default function WhyChoose() {
    const points = [
        { icon: Code2, text: "Full-stack AI + SaaS engineering + business expertise" },
        { icon: Zap, text: "2–4x faster delivery than traditional agencies" },
        { icon: ShieldCheck, text: "Scalable systems, clean code, strong performance" },
        { icon: Rocket, text: "Idea → MVP → Deployment → Growth support" },
        { icon: Rocket, text: "Automation + AI-first approach" }, // Using Rocket again or similar
        { icon: Repeat, text: "Long-term support and iteration mindset" },
    ];

    return (
        <section className="py-20 px-6 bg-background">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-bold mb-6">Why Choose Indigen?</h2>
                    <p className="text-muted-foreground mb-8">
                        We don't just build software. We build business assets that drive growth, efficiency, and future readiness.
                    </p>
                    <div className="grid gap-6">
                        {points.map((point, i) => (
                            <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-muted/20 border border-slate-200 hover:border-primary/20 transition-colors">
                                <div className="p-2 bg-primary/10 rounded-full text-primary shrink-0">
                                    <point.icon className="w-5 h-5" />
                                </div>
                                <span className="font-medium text-lg">{point.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Abstract Visual or Image placeholder */}
                {/* Abstract Visual or Image placeholder */}
                <div className="relative h-full min-h-[400px] w-full bg-gradient-to-br from-gray-300 via-gray-100 to-white rounded-2xl overflow-hidden hidden md:flex items-center justify-center border border-slate-200">
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-gray-400/10 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-60 h-60 bg-gray-400/10 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 text-center p-8 bg-white rounded-xl border border-slate-200 shadow-xl">
                        <h3 className="text-5xl font-bold text-primary mb-2">100%</h3>
                        <p className="text-muted-foreground">Commitment to Quality</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
