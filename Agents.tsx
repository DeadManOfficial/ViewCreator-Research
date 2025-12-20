import { AgentsManager } from "@/components/agents/AgentsManager";
import { DashboardLayout } from "@/components/layouts/DashboardLayout";

export default function AgentsPage() {
  return (
    <DashboardLayout>
      <AgentsManager />
    </DashboardLayout>
  );
}
