"use client"

import { Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const wasteData = [
    { name: "Reporting", value: 85 },
    { name: "Support", value: 75 },
    { name: "Data Entry", value: 60 },
    { name: "Follow-ups", value: 50 },
    { name: "Coordination", value: 40 },
]

const impactData = [
    { name: "Automation & AI", value: 40, color: "hsl(var(--chart-1))" },
    { name: "SaaS Platforms", value: 30, color: "hsl(var(--chart-2))" },
    { name: "Web & Mobile", value: 20, color: "hsl(var(--chart-3))" },
    { name: "Growth (SEO/GEO)", value: 10, color: "hsl(var(--chart-4))" },
]

export default function Graphs() {
    return (
        <section className="py-20 px-6 sm:px-12 md:px-24 bg-background">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
                {/* Bar Chart */}
                <Card className="bg-muted/10 border-slate-300">
                    <CardHeader>
                        <CardTitle>Where Businesses Waste Time</CardTitle>
                        <CardDescription>Manual tasks that slow down growth</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={wasteData} layout="vertical" margin={{ left: 0, right: 20 }}>
                                    <CartesianGrid horizontal={false} stroke="hsl(var(--muted-foreground))" strokeOpacity={0.1} />
                                    <XAxis type="number" hide />
                                    <YAxis
                                        dataKey="name"
                                        type="category"
                                        stroke="hsl(var(--muted-foreground))"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        width={120}
                                        tick={{ textAnchor: 'start', x: 20 }}
                                    />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
                                        cursor={{ fill: 'hsl(var(--muted)/0.2)' }}
                                    />
                                    <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} barSize={20} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>

                {/* Donut Chart */}
                <Card className="bg-muted/10 border-slate-300">
                    <CardHeader>
                        <CardTitle>Impact We Deliver</CardTitle>
                        <CardDescription>Driving efficiency across key areas</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={impactData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={100}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {impactData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                                        ))}
                                    </Pie>
                                    <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }} />
                                    <Legend verticalAlign="bottom" height={36} iconType="circle" />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
