import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

export default function Header() {
    return (
        <div className="relative w-full overflow-hidden bg-background text-foreground py-20 px-8 md:px-12 border-b border-slate-300">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100/40 via-background to-background pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                        INDIGEN SERVICES
                        <span className="block text-2xl md:text-3xl font-bold text-primary mt-2">Technology Consultancy & Innovation Partner</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl">
                        We help businesses make the right technology decisions, architect scalable solutions, and build future-ready digital assets.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 text-sm md:text-base font-medium text-muted-foreground">
                    <a href="https://indigenservices.com" className="hover:text-primary transition-colors">indigenservices.com</a>
                    <span className="hidden md:inline text-border">|</span>
                    <span>Nashik, India</span>
                    <span className="hidden md:inline text-border">|</span>
                    <a href="mailto:support@indigenservices.com" className="hover:text-primary transition-colors">support@indigenservices.com</a>
                </div>

                <div className="mt-4">
                    <Badge variant="outline" className="px-4 py-2 text-sm md:text-base border-transparent text-white bg-slate-900 backdrop-blur-sm rounded-full">
                        Make Businesses Smarter, Faster, and Future-Ready.
                    </Badge>
                </div>
            </div>
        </div>
    );
}
