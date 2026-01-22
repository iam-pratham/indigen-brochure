import {
    Bot,
    LayoutDashboard,
    Smartphone,
    Globe,
    Search,
    ShoppingBag
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const services = [
    {
        title: "AI Development",
        icon: Bot,
        desc: "Custom AI tools, workflow automation, AI assistants, smart integrations.",
        outcome: "Reduce manual work, faster decisions, scalable automation."
    },
    {
        title: "SaaS Development",
        icon: LayoutDashboard,
        desc: "MVP to full-scale SaaS, dashboards, admin panels, subscription platforms.",
        outcome: "Scalable systems built for growth."
    },
    {
        title: "App Development",
        icon: Smartphone,
        desc: "iOS + Android apps, seamless UX, performance-first architectures.",
        outcome: "Mobile products users love."
    },
    {
        title: "Web Development",
        icon: Globe,
        desc: "High-performance websites + web applications.",
        outcome: "Modern, fast, conversion-driven platforms."
    },
    {
        title: "SEO Services",
        icon: Search,
        desc: "Technical SEO, on-page, speed optimization, structured content.",
        outcome: "Rank higher, drive qualified organic traffic."
    },
    {
        title: "Custom Shopify Stores",
        icon: ShoppingBag,
        desc: "High-converting ecommerce stores, modern UI, fast checkout journeys.",
        outcome: "More conversions + better customer experience."
    }
];

export default function Services() {
    return (
        <section className="py-20 px-8 md:px-12 bg-muted/20">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">What We Do</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive technology solutions designed to scale with your business.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, i) => (
                        <Card key={i} className="border border-slate-300 bg-gradient-to-br from-card to-background hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                            <CardHeader>
                                <service.icon className="w-10 h-10 text-primary mb-2" />
                                <CardTitle>{service.title}</CardTitle>
                                <CardDescription className="text-base">
                                    {service.desc}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="pt-4 border-t border-slate-300">
                                    <p className="text-sm font-medium text-primary">
                                        Outcome: <span className="text-muted-foreground">{service.outcome}</span>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
