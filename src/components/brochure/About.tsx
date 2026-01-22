import { Code, Smartphone, Users, Calendar, Brain, Cpu, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
    return (
        <section className="py-20 px-8 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Main About Text */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight">Next-Gen Tech Partner</h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                Indigen Services is a technology company specializing in <span className="text-foreground font-semibold">Artificial Intelligence</span>, <span className="text-foreground font-semibold">SaaS Platforms</span>, <span className="text-foreground font-semibold">Automation Systems</span>, and <span className="text-foreground font-semibold">Full-Stack Development</span>.
                            </p>
                            <p>
                                We build intelligent digital products, scalable SaaS applications, and advanced automation systems that reduce manual work and accelerate growth.
                            </p>
                            <p className="border-l-4 border-primary pl-4 italic text-foreground text-lg">
                                "Your long-term technology partner, not just a vendor."
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { icon: Brain, label: "AI & Automation" },
                            { icon: Layers, label: "SaaS Platforms" },
                            { icon: Cpu, label: "Digital Products" },
                            { icon: Code, label: "Full Stack" },
                        ].map((item, i) => (
                            <Card key={i} className="bg-muted/50 border-none hover:bg-muted transition-colors">
                                <CardContent className="flex flex-col items-center justify-center p-6 text-center gap-3">
                                    <item.icon className="w-8 h-8 text-primary" />
                                    <span className="font-medium text-sm">{item.label}</span>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Numbers Speak Strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-300">
                    {[
                        { number: "589", label: "Website Projects", icon: Code },
                        { number: "129", label: "Mobile Apps", icon: Smartphone },
                        { number: "658", label: "Happy Clients", icon: Users },
                        { number: "7", label: "Years Experience", icon: Calendar },
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center justify-center text-center gap-1 group">
                            <div className="p-3 rounded-full bg-primary/10 text-primary mb-2 group-hover:scale-110 transition-transform">
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <span className="text-3xl font-bold tracking-tighter">{stat.number}</span>
                            <span className="text-sm text-muted-foreground uppercase tracking-widest font-semibold">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
