import { Badge } from "@/components/ui/badge";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function GeoSeo() {
    const points = [
        "AI-search ready content structuring",
        "FAQ + schema-based content",
        "Brand entity strengthening",
        "Topical authority building",
        "Content clusters (pillar + supporting pages)",
        "Website performance + technical SEO",
        "Improving visibility in AI summaries"
    ];

    return (
        <section className="py-20 px-8 md:px-12 bg-gradient-to-b from-background to-indigo-50/50">
            <div className="max-w-7xl mx-auto">
                <div className="bg-card border border-slate-300 rounded-2xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none px-4 py-1.5 text-sm uppercase tracking-wider">
                                New Standard
                            </Badge>
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                SEO + <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">GEO</span>
                            </h2>
                            <p className="text-lg text-muted-foreground">
                                We optimize your brand not just for Google Search (SEO), but also for AI Search/Answers (Generative Engine Optimization) like ChatGPT, Perplexity, and Gemini.
                            </p>

                            <div className="p-4 bg-background/50 rounded-lg border border-slate-300 backdrop-blur-sm">
                                <p className="font-medium text-foreground">
                                    "We help your brand become searchable, discoverable, and recommended by both search engines and AI engines."
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-yellow-500" />
                                Optimization Features
                            </h3>
                            <ul className="space-y-3">
                                {points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}
