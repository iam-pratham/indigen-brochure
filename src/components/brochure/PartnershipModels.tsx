import { Handshake, Rocket, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PartnershipModels() {
    const models = [
        {
            title: "Strategic Discovery",
            icon: Handshake,
            description: "Perfect for startups and businesses with an idea but no roadmap.",
            features: [
                "Feasibility Analysis",
                "Technical Architecture",
                "MVP Roadmap Planning",
                "Budget & Timeline Estimation"
            ],
            cta: "Get Clarity"
        },
        {
            title: "Build & Scale",
            icon: Rocket,
            description: "For businesses ready to execute meaningful digital transformation.",
            features: [
                "End-to-End Development",
                "Agile Execution",
                "Quality Assurance",
                "Launch Support"
            ],
            cta: "Start Building"
        },
        {
            title: "Dedicated Innovation Team",
            icon: Users,
            description: "Your long-term technology partner for continuous growth.",
            features: [
                "Dedicated Developers",
                "CTO-level Advisory",
                "Continuous Iteration",
                "Priority Support"
            ],
            cta: "Hire Your Team"
        }
    ];

    return (
        <section className="py-20 px-8 md:px-12 bg-muted/30">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">How We Partner With You</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Flexible engagement models tailored to your stage of business.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {models.map((model, i) => (
                        <Card key={i} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                                    <model.icon className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-xl">{model.title}</CardTitle>
                                <CardDescription className="text-base">{model.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <ul className="space-y-3">
                                    {model.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-2 text-sm text-foreground/80">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button variant="outline" className="w-full text-primary border-primary/20 hover:bg-primary/5">
                                    {model.cta}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
