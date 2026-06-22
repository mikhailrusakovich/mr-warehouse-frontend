import Image from "next/image";
import Navbar from "@/components/Navbar";
import Services from "@/sections/Services";
import Problems from "@/sections/Problems";
import Process from "@/sections/Process";
import WhyUs from "@/sections/WhyUs";
import Metrics from "@/sections/Metrics";
import Contact from "@/sections/Contact";

const heroBenefits = [
  {
    title: "Increase Efficiency",
    description:
      "Streamline processes and remove delays across daily warehouse operations.",
    icon: "↗",
  },
  {
    title: "Improve Accuracy",
    description:
      "Reduce inventory errors with better workflows, checks, and visibility.",
    icon: "◎",
  },
  {
    title: "Faster Fulfillment",
    description:
      "Improve picking, staging, and shipping flow to move orders faster.",
    icon: "◴",
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Use KPIs and operating data to manage performance with confidence.",
    icon: "▥",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#07111F] text-[#F8FAFC]">
      <Navbar />

      <section className="relative overflow-hidden bg-[#07111F]">
        <div className="relative min-h-[620px] overflow-hidden lg:min-h-[640px]">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg-v2.png"
              alt="MR Warehouse operations background"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          <div className="absolute inset-0 bg-[#07111F]/35" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07111F]/72 via-[#07111F]/28 to-[#07111F]/42" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#07111F] to-transparent" />

          <div className="relative z-10 mx-auto flex min-h-[620px] w-full max-w-7xl items-center px-6 pt-16 md:px-10 lg:min-h-[640px] lg:px-12">
            <div className="max-w-[720px] -mt-4">
              <p className="mb-5 text-sm uppercase tracking-[0.38em] text-[#93C5FD]">
                MR Warehouse LLC
              </p>

              <h1 className="mb-7 max-w-[700px] text-5xl font-bold leading-[1.05] tracking-[-0.04em] md:text-6xl xl:text-7xl">
                Warehouse Operations Optimization
              </h1>

              <p className="mb-10 max-w-[700px] text-lg leading-8 text-[#E2E8F0] md:text-xl">
                We help businesses improve warehouse efficiency, inventory
                accuracy, fulfillment speed, and operational visibility through
                practical warehouse optimization strategies.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-xl bg-[#2563EB] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
                >
                  Get a Free Warehouse Assessment
                </a>

                <a
                  href="#services"
                  className="rounded-xl border border-white/45 bg-[#07111F]/20 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:border-white/75"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 -mt-8 border-t border-white/10 bg-[#07111F] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-4">
            {heroBenefits.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 border-white/10 lg:border-r lg:pr-8 last:border-r-0"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[#2563EB]/60 bg-[#07111F] text-2xl text-[#3B82F6]">
                  {item.icon}
                </div>

                <div>
                  <h3 className="mb-2 text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-[#CBD5E1]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
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