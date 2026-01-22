import { Badge } from "@/components/ui/badge";
import { ImageIcon, Wand2, Layers, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CaseStudy() {
    return (
        <section className="py-20 px-8 md:px-12 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent)] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <Badge className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-md">Success Story</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold">AI Studio Photography</h2>
                        <p className="text-primary-foreground/80 text-lg leading-relaxed">
                            We developed a custom AI image generation engine that creates high-quality, studio-grade product photoshoots in bulk—eliminating the need for expensive physical shoots.
                        </p>
                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/10 rounded-full">
                                    <ImageIcon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl">Unlimited Scale</h4>
                                    <p className="text-primary-foreground/70 text-sm">Bulk generate 1000s of unique assets</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/10 rounded-full">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl">Instant Turnaround</h4>
                                    <p className="text-primary-foreground/70 text-sm">From concept to catalog in minutes</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Card className="bg-white/10 border-white/40 text-white backdrop-blur-sm">
                        <CardContent className="p-8 space-y-6">
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold uppercase tracking-wider opacity-70">Capabilities</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                                        <Wand2 className="w-5 h-5 shrink-0" />
                                        <span>Hyper-realistic studio lighting & composition</span>
                                    </li>
                                    <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                                        <Layers className="w-5 h-5 shrink-0" />
                                        <span>Bulk batch processing for full catalogs</span>
                                    </li>
                                    <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg">
                                        <ImageIcon className="w-5 h-5 shrink-0" />
                                        <span>High-res output for print & digital</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-white/40 text-center">
                                <p className="italic text-lg">"Result: Infinite creative assets at zero marginal cost."</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
