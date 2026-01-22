import { Lightbulb, Compass, GitMerge, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Consultancy() {
    return (
        <section className="py-20 px-8 md:px-12 bg-background border-b border-slate-100">
            <div className="max-w-7xl mx-auto space-y-16">

                <div className="flex flex-col md:flex-row gap-12 items-start justify-between">
                    <div className="space-y-6 max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            Strategic Consultancy & End-to-End Business Support.
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Technology is an investment, not just a tool. We act as your strategic consultants to ensure every digital decision aligns with your long-term business goals.
                        </p>
                    </div>

                    <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl max-w-md">
                        <p className="font-medium text-slate-800 italic text-lg">
                            "The most expensive code is the code you didn't need to write. We help you find the most efficient path forward."
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="group relative overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Compass className="w-24 h-24 text-blue-600" />
                        </div>
                        <CardContent className="p-8 space-y-6 relative z-10">
                            <div className="p-3 w-fit rounded-lg bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                <Compass className="w-8 h-8" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">Strategic Roadmap</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    We don't just ask "what" to build, but "why" and "how". We map out a complete digital timeline that minimizes risk and maximizes ROI.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="group relative overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Lightbulb className="w-24 h-24 text-indigo-600" />
                        </div>
                        <CardContent className="p-8 space-y-6 relative z-10">
                            <div className="p-3 w-fit rounded-lg bg-indigo-100 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                <Lightbulb className="w-8 h-8" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">Smart Tech Selection</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    AI, SaaS, Custom Dev? We help you navigate the noise to select the exact tech stack that fits your scale and budget.
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="group relative overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Target className="w-24 h-24 text-purple-600" />
                        </div>
                        <CardContent className="p-8 space-y-6 relative z-10">
                            <div className="p-3 w-fit rounded-lg bg-purple-100 text-purple-700 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                <Target className="w-8 h-8" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">Feasibility & Scalability</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    We validate ideas before development begins, ensuring your architecture can handle future growth without costly rewrites.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </div>
        </section>
    );
}
