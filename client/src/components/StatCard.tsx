import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function StatCard({ title, value, icon: Icon, trend, className }: StatCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-2">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <Icon className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold" data-testid={`stat-${title.toLowerCase().replace(/\s+/g, '-')}`}>{value}</div>
        {trend && (
          <p className="text-xs text-muted-foreground mt-1">
            <span className={trend.isPositive ? "text-chart-2" : "text-destructive"}>
              {trend.isPositive ? "↑" : "↓"} {Math.abs(trend.value)}%
            </span>{" "}
            from last month
          </p>
        )}
      </CardContent>
    </Card>
  );
}
