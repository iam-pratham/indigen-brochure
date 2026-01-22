"use client"

import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Tooltip,
    PieChart,
    Pie,
    Label,
    Legend
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const wasteDataRadar = [
    { subject: "Reporting", A: 100, fullMark: 100 },
    { subject: "Support", A: 80, fullMark: 100 },
    { subject: "Data Entry", A: 60, fullMark: 100 },
    { subject: "Scheduling", A: 40, fullMark: 100 },
    { subject: "Coordination", A: 20, fullMark: 100 },
]

const wasteDataPie = [
    { name: "Reporting", value: 35, fill: "hsl(var(--primary))" },
    { name: "Support", value: 25, fill: "hsl(var(--primary)/0.8)" },
    { name: "Data Entry", value: 20, fill: "hsl(var(--primary)/0.6)" },
    { name: "Scheduling", value: 15, fill: "hsl(var(--primary)/0.4)" },
    { name: "Coordination", value: 5, fill: "hsl(var(--primary)/0.2)" },
]

const impactData = [
    { subject: "Automation", A: 120, fullMark: 150 },
    { subject: "Efficiency", A: 98, fullMark: 150 },
    { subject: "Scalability", A: 130, fullMark: 150 },
    { subject: "Security", A: 99, fullMark: 150 },
    { subject: "Innovation", A: 110, fullMark: 150 },
    { subject: "Revenue", A: 125, fullMark: 150 },
]

export default function Graphs() {
    return (
        <section className="py-20 px-8 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
                {/* Donut Chart - Visualizing Waste */}
                <Card className="bg-muted/10 border-slate-300">
                    <CardHeader>
                        <CardTitle>Where Businesses Lose Efficiency</CardTitle>
                        <CardDescription>Breakdown of manual time expenditure.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                        <div className="h-[300px] w-full max-w-[500px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={wasteDataPie}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={80}
                                        outerRadius={110}
                                        paddingAngle={2}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        <Label
                                            value="Manual Work"
                                            position="center"
                                            fill="hsl(var(--foreground))"
                                            style={{
                                                fontSize: '18px',
                                                fontWeight: 'bold',
                                                fontFamily: 'var(--font-geist-sans)',
                                            }}
                                        />
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
                                    />
                                    <Legend
                                        verticalAlign="bottom"
                                        height={36}
                                        iconType="circle"
                                        formatter={(value) => <span className="text-foreground/80 font-medium ml-1">{value}</span>}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-12 pt-6 border-t border-slate-200/60 w-full max-w-[400px]">
                            <div className="text-center">
                                <div className="text-xl md:text-2xl font-bold text-slate-700">60%</div>
                                <div className="text-[10px] md:text-xs uppercase tracking-wider font-semibold text-muted-foreground mt-1">Time Wasted</div>
                            </div>
                            <div className="text-center border-l border-slate-200/60">
                                <div className="text-xl md:text-2xl font-bold text-slate-700">40%+</div>
                                <div className="text-[10px] md:text-xs uppercase tracking-wider font-semibold text-muted-foreground mt-1">Resource Drain</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Radar Chart - Visualizing Impact */}
                <Card className="bg-muted/10 border-slate-300">
                    <CardHeader>
                        <CardTitle>The Indigen Impact</CardTitle>
                        <CardDescription>Holistic improvement across key business metrics.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={impactData}>
                                    <PolarGrid stroke="hsl(var(--muted-foreground)/0.2)" />
                                    <PolarAngleAxis dataKey="subject" tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
                                    <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                                    <Radar
                                        name="Indigen Impact"
                                        dataKey="A"
                                        stroke="hsl(var(--primary))"
                                        strokeWidth={3}
                                        fill="hsl(var(--primary))"
                                        fillOpacity={0.3}
                                    />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
                                    />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-12 pt-6 border-t border-slate-200/60 w-full">
                            <div className="text-center">
                                <div className="text-xl md:text-2xl font-bold text-slate-700">3x</div>
                                <div className="text-[10px] md:text-xs uppercase tracking-wider font-semibold text-muted-foreground mt-1">Faster Delivery</div>
                            </div>
                            <div className="text-center border-l border-slate-200/60">
                                <div className="text-xl md:text-2xl font-bold text-slate-700">40%</div>
                                <div className="text-[10px] md:text-xs uppercase tracking-wider font-semibold text-muted-foreground mt-1">Cost Reduction</div>
                            </div>
                            <div className="text-center border-l border-slate-200/60">
                                <div className="text-xl md:text-2xl font-bold text-slate-700">99%</div>
                                <div className="text-[10px] md:text-xs uppercase tracking-wider font-semibold text-muted-foreground mt-1">System Uptime</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
