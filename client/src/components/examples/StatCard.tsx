import { StatCard } from "../StatCard";
import { Users } from "lucide-react";

export default function StatCardExample() {
  return (
    <div className="p-6">
      <StatCard
        title="Total Students"
        value="1,245"
        icon={Users}
        trend={{ value: 12, isPositive: true }}
      />
    </div>
  );
}
