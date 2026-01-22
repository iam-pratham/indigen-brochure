import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Globe } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 px-6 sm:px-12 md:px-24 bg-background border-t border-slate-300">
            <div className="max-w-4xl mx-auto text-center space-y-12">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                    Let’s Build Your <br /> Next-Gen Digital Solution.
                </h2>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button size="lg" className="h-14 px-8 text-lg rounded-full animate-in fade-in zoom-in duration-500">
                        Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full">
                        Book a Free Consultation
                    </Button>
                </div>

                <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-slate-300 text-muted-foreground">
                    <div className="flex flex-col items-center gap-2">
                        <Globe className="w-5 h-5 text-primary" />
                        <a href="https://www.indigenservices.com" className="hover:text-foreground transition-colors">indigenservices.com</a>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <Mail className="w-5 h-5 text-primary" />
                        <a href="mailto:support@indigenservices.com" className="hover:text-foreground transition-colors">support@indigenservices.com</a>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>Nashik, India</span>
                    </div>
                </div>

                <div className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Indigen Services. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
