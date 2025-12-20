import { AnalyticsDashboard } from "@/components/analytics/AnalyticsDashboard";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">
            Track your performance across all connected platforms.
          </p>
        </div>
        
        <AnalyticsDashboard />
      </div>
    </DashboardLayout>
  );
}
