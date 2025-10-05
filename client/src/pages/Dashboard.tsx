import { StatCard } from "@/components/StatCard";
import { Users, DollarSign, Calendar, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

//todo: remove mock functionality
const mockChartData = [
  { month: "Jan", collected: 45000, pending: 12000 },
  { month: "Feb", collected: 52000, pending: 8000 },
  { month: "Mar", collected: 48000, pending: 15000 },
  { month: "Apr", collected: 61000, pending: 6000 },
  { month: "May", collected: 55000, pending: 10000 },
  { month: "Jun", collected: 67000, pending: 5000 },
];

//todo: remove mock functionality
const upcomingEvents = [
  { id: 1, name: "Annual Day 2025", date: "2025-03-15", type: "Cultural" },
  { id: 2, name: "Parent-Teacher Meeting", date: "2025-02-20", type: "Academic" },
  { id: 3, name: "Sports Day", date: "2025-04-10", type: "Sports" },
];

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Overview of your school management system
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Students"
          value="1,245"
          icon={Users}
          trend={{ value: 12, isPositive: true }}
        />
        <StatCard
          title="Pending Fees"
          value="₹2.4L"
          icon={DollarSign}
          trend={{ value: 8, isPositive: false }}
        />
        <StatCard
          title="Upcoming Events"
          value="8"
          icon={Calendar}
        />
        <StatCard
          title="Staff Members"
          value="87"
          icon={AlertCircle}
          trend={{ value: 3, isPositive: true }}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Fee Collection Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockChartData}>
                <XAxis
                  dataKey="month"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickFormatter={(value) => `₹${value / 1000}k`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px",
                  }}
                  formatter={(value: number) => `₹${value.toLocaleString()}`}
                />
                <Bar dataKey="collected" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="pending" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0"
                  data-testid={`event-${event.id}`}
                >
                  <div>
                    <p className="font-medium">{event.name}</p>
                    <p className="text-sm text-muted-foreground">{event.type}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(event.date).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
