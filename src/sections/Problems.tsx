import SectionHeader from "@/components/SectionHeader";
import ProblemCard from "@/components/ProblemCard";

export default function Problems() {
  return (
    <section
      id="problems"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#07111F] px-6 py-24"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-55"
        style={{
          backgroundImage: "url('/images/kpi-bg.png')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#07111F]/84 via-[#07111F]/72 to-[#07111F]/82" />

      <div className="relative mx-auto w-full max-w-7xl">
        <SectionHeader
          eyebrow="Problems We Solve"
          title="Operational Issues That Cost Warehouses Time, Labor, and Accuracy"
          description="We identify the problems that slow down warehouse teams and turn them into practical improvement plans."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <ProblemCard
            title="Slow Picking"
            description="Reduce wasted travel time, unclear pick paths, and inefficient product placement."
          />

          <ProblemCard
            title="Inventory Errors"
            description="Improve cycle counts, receiving accuracy, location control, and stock visibility."
          />

          <ProblemCard
            title="Poor Layout"
            description="Fix storage flow, congestion points, staging areas, and movement patterns."
          />

          <ProblemCard
            title="Unclear KPIs"
            description="Define measurable warehouse metrics for productivity, accuracy, and fulfillment."
          />
        </div>
      </div>
    </section>
  );
}