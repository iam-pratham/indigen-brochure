"use client"

import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Tooltip,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid
} from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const wasteData = [
    { name: "Reporting & Analytics", value: 100, fill: "hsl(var(--primary))" },
    { name: "Customer Support (L1)", value: 80, fill: "hsl(var(--primary)/0.8)" },
    { name: "Data Entry/Migration", value: 60, fill: "hsl(var(--primary)/0.6)" },
    { name: "Scheduling & Follow-ups", value: 40, fill: "hsl(var(--primary)/0.4)" },
    { name: "Internal Coordination", value: 20, fill: "hsl(var(--primary)/0.2)" },
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
                {/* Horizontal Bar Chart - Visualizing Waste */}
                <Card className="bg-muted/10 border-slate-300">
                    <CardHeader>
                        <CardTitle>Where Businesses Lose Efficiency</CardTitle>
                        <CardDescription>Percentage of time wasted on manual execution.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <div className="h-[350px] w-full max-w-[500px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    data={wasteData}
                                    layout="vertical"
                                    margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" horizontal={false} strokeOpacity={0.3} />
                                    <XAxis type="number" hide />
                                    <YAxis
                                        dataKey="name"
                                        type="category"
                                        width={160}
                                        tick={{ fill: 'hsl(var(--foreground))', fontSize: 13, fontWeight: 500 }}
                                        axisLine={false}
                                        tickLine={false}
                                    />
                                    <Tooltip
                                        cursor={{ fill: 'hsl(var(--muted)/0.2)' }}
                                        contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
                                    />
                                    <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} barSize={28} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Radar Chart - Visualizing Impact */}
                <Card className="bg-muted/10 border-slate-300">
                    <CardHeader>
                        <CardTitle>The Indigen Impact</CardTitle>
                        <CardDescription>Holistic improvement across key business metrics.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[350px] w-full">
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
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
