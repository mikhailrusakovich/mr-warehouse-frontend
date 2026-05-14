import Image from "next/image";
import Navbar from "@/components/Navbar";
import Services from "@/sections/Services";
import Problems from "@/sections/Problems";
import Process from "@/sections/Process";
import WhyUs from "@/sections/WhyUs";
import Metrics from "@/sections/Metrics";
import Contact from "@/sections/Contact";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#07111F] text-[#F8FAFC]">
      <Navbar />
      <section className="relative flex min-h-[100svh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.png"
            alt="MR Warehouse operations background"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-[#07111F]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/35 via-[#07111F]/10 to-[#07111F]/25" />

        <div className="relative z-10 w-full px-8 pb-20 pt-36 md:px-16 lg:px-28">
          <div className="max-w-[680px]">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#CBD5E1]">
              MR Warehouse LLC
            </p>

            <h1 className="mb-6 max-w-[660px] text-5xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl xl:text-7xl">
              Warehouse Operations Optimization
            </h1>

            <p className="mb-10 max-w-2xl text-lg leading-8 text-[#CBD5E1] md:text-xl">
              We help businesses improve warehouse efficiency, inventory
              accuracy, fulfillment speed, and operational visibility through
              practical warehouse optimization strategies.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-xl bg-[#2563EB] px-8 py-4 text-sm font-semibold text-white transition hover:bg-blue-500">
                Get a Free Warehouse Assessment
              </button>

              <button className="rounded-xl border border-[#CBD5E1]/25 bg-[#07111F]/20 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:border-[#CBD5E1]/60">
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="relative z-20 bg-[#07111F]">
        <Services />
        <Problems />
        <Process />
        <WhyUs />
        <Metrics />
        <Contact />
      </div>
    </main>
  );
}