import { TrendsExplorer } from "@/components/analytics/TrendsExplorer";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";

export default function TrendsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Trends</h1>
          <p className="text-muted-foreground">
            Discover viral topics and keywords before they peak.
          </p>
        </div>
        
        <TrendsExplorer />
      </div>
    </DashboardLayout>
  );
}
