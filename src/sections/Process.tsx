import SectionHeader from "@/components/SectionHeader";
import ProcessStep from "@/components/ProcessStep";

export default function Process() {
  return (
    <section
      id="process"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#07111F] px-6 py-24"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: "url('/images/process-bg.png')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#07111F]/65 via-[#07111F]/72 to-[#07111F]/96" />

      <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-[#07111F]/88" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <SectionHeader
          eyebrow="How We Work"
          title="A Practical Process From Warehouse Audit to Implementation"
          description="We analyze the real operation, identify constraints, build an improvement plan, and support execution with practical warehouse experience."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <ProcessStep
            number="01"
            title="Warehouse Audit"
            description="We review layout, inventory flow, labor movement, receiving, picking, packing, staging, and current system usage."
          />

          <ProcessStep
            number="02"
            title="Operational Diagnosis"
            description="We identify bottlenecks, error points, workflow gaps, unclear KPIs, and process issues that reduce performance."
          />

          <ProcessStep
            number="03"
            title="Improvement Plan"
            description="We create a practical roadmap with layout changes, process updates, KPI structure, and WMS-ready workflows."
          />

          <ProcessStep
            number="04"
            title="Implementation Support"
            description="We help teams apply the plan, track execution, train operators, and adjust the process based on real warehouse feedback."
          />
        </div>
      </div>
    </section>
  );
}