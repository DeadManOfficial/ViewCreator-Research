import DashboardLayout from "@/components/DashboardLayout";
import { SocialConnections } from "@/components/SocialConnections";

export default function ConnectionsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Social Connections</h1>
          <p className="text-muted-foreground">
            Manage your connected social media accounts for content publishing.
          </p>
        </div>
        
        <SocialConnections />
      </div>
    </DashboardLayout>
  );
}
