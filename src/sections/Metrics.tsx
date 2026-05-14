import SectionHeader from "@/components/SectionHeader";
import MetricCard from "@/components/MetricCard";

export default function Metrics() {
  return (
    <section
      id="results"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#07111F] px-6 py-24"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={{
          backgroundImage: "url('/images/kpi-bg.png')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#07111F]/78 via-[#07111F]/70 to-[#07111F]/96" />

      <div className="relative mx-auto w-full max-w-7xl">
        <SectionHeader
          eyebrow="Case Results"
          title="Warehouse Improvements That Connect Directly to Business Performance"
          description="Our work focuses on measurable operational results across throughput, accuracy, cost, and fulfillment speed."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            value="+200%"
            label="Throughput Increase"
            description="Improved warehouse flow and operational capacity through better layout and process control."
          />

          <MetricCard
            value="-30%"
            label="Cost Reduction"
            description="Reduced avoidable labor, movement, rework, and operational waste."
          />

          <MetricCard
            value="99%+"
            label="Inventory Accuracy"
            description="Improved visibility through cycle count structure, receiving control, and location discipline."
          />

          <MetricCard
            value="3x"
            label="Faster Fulfillment"
            description="Reduced fulfillment time through better picking logic and process alignment."
          />
        </div>
      </div>
    </section>
  );
}