import { Building2, Plane, ShoppingCart, Stethoscope, Truck, Landmark, Factory, Store, GraduationCap } from "lucide-react";

export default function Sectors() {
    const sectors = [
        { name: "Government", icon: Building2 },
        { name: "Travel & Hospitality", icon: Plane },
        { name: "E-commerce", icon: ShoppingCart },
        { name: "Healthcare", icon: Stethoscope },
        { name: "Logistics", icon: Truck },
        { name: "Finance & Banking", icon: Landmark },
        { name: "Manufacturing", icon: Factory },
        { name: "Retail", icon: Store },
        { name: "Education", icon: GraduationCap },
    ];

    return (
        <section className="py-20 px-8 md:px-12 bg-background border-t border-slate-300">
            <div className="max-w-7xl mx-auto space-y-12">
                <h2 className="text-3xl font-bold text-center">Sectors We Serve</h2>
                <div className="flex flex-wrap justify-center gap-6">
                    {sectors.map((sector, i) => (
                        <div key={i} className="flex flex-col items-center justify-center p-6 bg-muted/30 rounded-xl border border-slate-200 hover:bg-muted/60 transition-colors text-center gap-3 group w-[180px] sm:w-[200px]">
                            <sector.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                            <span className="font-medium text-sm sm:text-base">{sector.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
