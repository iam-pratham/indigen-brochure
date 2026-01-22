import { Badge } from "@/components/ui/badge";
import { Bot, Code, Globe, LayoutDashboard } from "lucide-react";

export default function SocialPage() {
    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            {/* 1080x1080 Container scaled down for view if needed, but here just fixed size */}
            <div className="w-[1080px] h-[1080px] bg-background relative flex flex-col justify-between overflow-hidden border border-white/10 shadow-2xl scale-[0.4] sm:scale-[0.5] md:scale-[0.6] lg:scale-[0.8] xl:scale-100 origin-center transition-transform">

                {/* Abstract Background */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full p-20">

                    {/* Header */}
                    <div className="space-y-6">
                        <h1 className="text-8xl font-black tracking-tighter uppercase">Indigen Services</h1>
                        <p className="text-4xl text-muted-foreground font-light">AI + SaaS + Automation + Full-Stack</p>
                        <div className="w-32 h-2 bg-primary mt-8" />
                    </div>

                    {/* Center Content: Stats & Services */}
                    <div className="flex-1 flex flex-col justify-center gap-20">

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-12">
                            {[
                                { label: "Website Projects", val: "30+" },
                                { label: "Mobile Apps", val: "10+" },
                                { label: "Happy Clients", val: "20+" },
                            ].map((s, i) => (
                                <div key={i} className="space-y-2">
                                    <div className="text-7xl font-bold">{s.val}</div>
                                    <div className="text-2xl text-muted-foreground uppercase tracking-widest">{s.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Services Icons */}
                        <div className="grid grid-cols-2 gap-8">
                            <div className="flex items-center gap-6 p-8 bg-white/5 rounded-2xl border border-white/10">
                                <Bot className="w-16 h-16 text-primary" />
                                <div>
                                    <h3 className="text-3xl font-bold">AI Solutions</h3>
                                    <p className="text-xl text-muted-foreground">Automation & Agents</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 p-8 bg-white/5 rounded-2xl border border-white/10">
                                <LayoutDashboard className="w-16 h-16 text-primary" />
                                <div>
                                    <h3 className="text-3xl font-bold">SaaS Platforms</h3>
                                    <p className="text-xl text-muted-foreground">Scalable Systems</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 p-8 bg-white/5 rounded-2xl border border-white/10">
                                <Globe className="w-16 h-16 text-primary" />
                                <div>
                                    <h3 className="text-3xl font-bold">Web & SEO</h3>
                                    <p className="text-xl text-muted-foreground">High Performance</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 p-8 bg-white/5 rounded-2xl border border-white/10">
                                <Code className="w-16 h-16 text-primary" />
                                <div>
                                    <h3 className="text-3xl font-bold">Full Stack</h3>
                                    <p className="text-xl text-muted-foreground">Modern Tech</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-end border-t border-white/20 pt-12">
                        <div className="space-y-2">
                            <h3 className="text-4xl font-bold">Ready to Scale?</h3>
                            <p className="text-2xl text-muted-foreground">Book a free consultation today.</p>
                        </div>
                        <div className="text-right space-y-2">
                            <div className="text-4xl font-bold text-primary">indigenservices.com</div>
                            <p className="text-2xl text-muted-foreground">Nashik, India</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
