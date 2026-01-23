import { Code, Smartphone, Users, Calendar, Brain, Cpu, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
    return (
        <section className="py-20 px-8 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Main About Text */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold tracking-tight">More Than Development. <br /> True Business Partners.</h2>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                            <p>
                                Indigen Services is a <span className="text-foreground font-semibold">Business & Technology Consultancy</span> first. We don't just execute code; we help you make the critical business decisions that define your digital future.
                            </p>
                            <p>
                                While we are experts in building <strong>Websites, Apps, and AI Systems</strong>, our core value lies in providing the ongoing support, strategic guidance, and technical intelligence your business needs to thrive.
                            </p>
                            <p className="border-l-4 border-primary pl-4 italic text-foreground text-lg">
                                "We act as your extended technology department, guiding every business move."
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { icon: Brain, label: "Business Strategy" },
                            { icon: Layers, label: "Tech Consulting" },
                            { icon: Cpu, label: "Digital Products" },
                            { icon: Code, label: "Support & Scale" },
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
                        { number: "324+", label: "Website Projects", icon: Code },
                        { number: "129+", label: "Mobile Apps", icon: Smartphone },
                        { number: "658+", label: "Happy Clients", icon: Users },
                        { number: "7+", label: "Years Experience", icon: Calendar },
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
