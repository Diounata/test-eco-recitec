import { CircularEconomyPillars } from "@/features/homepage/components/circular-economy-pillars";
import { HomepageHeader } from "@/features/homepage/components/homepage-header";
import { SubmitDialog } from "@/features/homepage/components/submit-dialog";

export function HomePage() {
  return (
    <div className="min-h-screen bg-white text-primary py-8">
      <HomepageHeader />
      <CircularEconomyPillars />
      <SubmitDialog />
    </div>
  );
}
