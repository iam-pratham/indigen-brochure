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
        title: "Business & Tech Consultancy",
        icon: Search,
        desc: "We analyze your business flow to provide strategic roadmaps and technology decision support.",
        outcome: "Clear direction, risk reduction, valid investment."
    },
    {
        title: "AI & Automation",
        icon: Bot,
        desc: "Custom AI tools, intelligent workflows, and system automation to replace manual tasks.",
        outcome: "Reduce manual work, faster decisions, scalable systems."
    },
    {
        title: "SaaS Development",
        icon: LayoutDashboard,
        desc: "Building scalable software products from MVP to full enterprise-grade platforms.",
        outcome: "Scalable assets built for long-term growth."
    },
    {
        title: "App & Web Development",
        icon: Smartphone,
        desc: "High-performance websites and mobile apps designed for user engagement and conversion.",
        outcome: "Modern, fast, conversion-driven digital presence."
    },
    {
        title: "Dedicated Support",
        icon: Globe,
        desc: "Ongoing technical partnership, maintenance, and iterative improvements.",
        outcome: "Peace of mind and continuous evolution."
    },
    {
        title: "Custom Commerce",
        icon: ShoppingBag,
        desc: "Tailored e-commerce solutions that go beyond basic templates.",
        outcome: "More conversions + better customer experience."
    }
];

export default function Services() {
    return (
        <section className="py-20 px-8 md:px-12 bg-muted/20">
            <div className="max-w-7xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Strategic Services & Execution</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A full spectrum of services—from initial consulting to final deployment and support.
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
