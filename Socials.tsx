import { SocialConnect } from "@/components/social/SocialConnect";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";

export default function SocialsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Connect Socials</h1>
          <p className="text-muted-foreground">
            Manage your social media connections and permissions.
          </p>
        </div>
        
        <SocialConnect />
      </div>
    </DashboardLayout>
  );
}
