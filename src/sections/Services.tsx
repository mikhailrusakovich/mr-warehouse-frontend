import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  return (
    <section
      id="services"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#07111F] px-6 py-24"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('/images/warehouse-operations-bg.png')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#07111F]/90 via-[#07111F]/78 to-[#07111F]/95" />

      <div className="relative mx-auto mt-16 w-full max-w-7xl lg:mt-20 xl:mt-24">
        <SectionHeader
          eyebrow="Services"
          title="Warehouse Solutions Built Around Operational Performance"
          description="We help warehouses improve throughput, inventory visibility, labor efficiency, and fulfillment accuracy through practical operational improvements."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <ServiceCard
            title="Warehouse Optimization"
            description="Improve warehouse flow, reduce bottlenecks, and increase operational throughput."
            image="/images/warehouse-operations-bg.png"
          />

          <ServiceCard
            title="Inventory Control"
            description="Increase inventory accuracy and reduce shrinkage through better process visibility."
            image="/images/inventory-bg.png"
          />

          <ServiceCard
            title="WMS Support"
            description="Support warehouse management system implementation, workflows, and process alignment."
            image="/images/wms-bg.png"
          />

          <ServiceCard
            title="Process Improvement"
            description="Build scalable warehouse processes that improve productivity and fulfillment speed."
            image="/images/process-bg.png"
          />
        </div>
      </div>
    </section>
  );
}