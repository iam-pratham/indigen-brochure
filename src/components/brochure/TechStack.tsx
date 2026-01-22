
export default function TechStack() {
    const stack = [
        "React", "Next.js", "TypeScript", "Angular", "Node.js", "Python",
        "OpenAI", "Shopify", "Flutter", "HTML5", "CSS3", "JavaScript",
        "Tailwind", "GraphQL", "MongoDB", "PostgreSQL"
    ];

    return (
        <section className="py-20 px-6 sm:px-12 md:px-24 bg-muted/10">
            <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
                <h2 className="text-2xl font-bold uppercase tracking-widest text-muted-foreground">Technology We Use</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    {stack.map((tech, i) => (
                        <span
                            key={i}
                            className="px-6 py-2 rounded-full border border-slate-300 bg-background/50 text-sm md:text-base font-medium hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-all cursor-default"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
