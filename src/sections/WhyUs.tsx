import SectionHeader from "@/components/SectionHeader";

export default function WhyUs() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#07111F] px-6 py-24">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={{
          backgroundImage: "url('/images/warehouse-operations-bg.png')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#07111F]/80 via-[#07111F]/72 to-[#07111F]/95" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          eyebrow="Why MR Warehouse"
          title="Hands-On Warehouse Experience With Practical Technology Thinking"
          description="We combine real warehouse operations experience with process discipline, KPI thinking, and WMS-ready workflows."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Operations First
            </h3>
            <p className="leading-7 text-[#CBD5E1]">
              We look at the real movement of labor, inventory, orders, space, and systems before recommending changes.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Tech-Ready Processes
            </h3>
            <p className="leading-7 text-[#CBD5E1]">
              We help structure workflows that support WMS usage, reporting, barcode logic, and operational visibility.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Practical Execution
            </h3>
            <p className="leading-7 text-[#CBD5E1]">
              We focus on changes teams can apply in real warehouse conditions, not theoretical recommendations.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <h3 className="mb-4 text-2xl font-semibold text-white">
              Measurable Results
            </h3>
            <p className="leading-7 text-[#CBD5E1]">
              We connect improvements to KPIs like throughput, inventory accuracy, labor efficiency, and fulfillment speed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}