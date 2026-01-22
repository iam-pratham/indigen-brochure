export default function Approach() {
    const steps = [
        { title: "Discover & Understand", desc: "We dive deep into your business goals, pain points, and requirements." },
        { title: "Strategy & Design", desc: "We architect the perfect solution blueprint, UI/UX, and technical roadmap." },
        { title: "Build with AI & Modern Tech", desc: "Agile development using the latest stack, AI tools, and automation." },
        { title: "Test & Optimize", desc: "Rigorous testing for performance, security, and user experience." },
        { title: "Deploy & Monitor", desc: "Seamless launch with real-time monitoring and analytics setup." },
        { title: "Support & Improve", desc: "Continuous iteration and support to ensure long-term success." },
    ];

    return (
        <section className="py-20 px-6 sm:px-12 md:px-24 bg-muted/10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Approach</h2>
                    <p className="text-muted-foreground">From idea to scale in 6 proven steps.</p>
                </div>

                <div className="relative border-l-2 border-primary/30 ml-4 md:ml-auto md:mx-auto md:w-full max-w-2xl space-y-12 pb-12">
                    {steps.map((step, i) => (
                        <div key={i} className="relative pl-8 md:pl-12 group">
                            {/* Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary group-hover:bg-primary transition-colors" />

                            <div className="flex flex-col gap-2">
                                <span className="text-xs font-bold text-primary tracking-widest uppercase">Step 0{i + 1}</span>
                                <h3 className="text-xl font-bold">{step.title}</h3>
                                <p className="text-muted-foreground">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
