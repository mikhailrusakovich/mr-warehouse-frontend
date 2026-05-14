import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Input from "@/components/Input";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-[#07111F] px-6 pb-8 pt-28"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: "url('/images/contact-bg.png')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#07111F]/58 via-[#07111F]/48 to-[#07111F]/82" />

      <div className="relative mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Start Improving Your Warehouse Operations"
            description="Tell us about your warehouse, operational challenges, or current process issues. We will review your situation and discuss practical next steps."
          />

          <div className="mt-8 space-y-4 text-[#CBD5E1]">
            <p>Warehouse Operations Optimization</p>
            <p>Inventory Control & Process Improvement</p>
            <p>WMS Workflow Support</p>
            <p>KPI & Operational Visibility</p>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm">
          <form className="grid gap-4">
            <Input placeholder="Full Name" />
            <Input placeholder="Company Name" />
            <Input placeholder="Email Address" />
            <Input placeholder="Phone Number" />
            <Input placeholder="Service Needed" />

            <Input
              placeholder="Tell us about your warehouse or operational challenge..."
              textarea
            />

            <button className="mt-1 h-14 rounded-2xl bg-[#2563EB] text-lg font-semibold text-white transition-all hover:bg-[#1D4ED8]">
              Request Free Assessment
            </button>
          </form>
        </div>
      </div>

      <footer className="relative mx-auto mt-4 w-full max-w-7xl border-t border-white/10 pt-3">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <Image
            src="/logos/mr-logo-white.png"
            alt="MR Warehouse LLC"
            width={170}
            height={44}
            className="h-auto w-[150px]"
          />

          <div className="flex flex-wrap gap-6 text-sm text-[#CBD5E1]">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#process" className="transition hover:text-white">
              Process
            </a>
            <a href="#results" className="transition hover:text-white">
              Results
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <p className="text-sm text-[#CBD5E1]">
            © 2026 MR Warehouse LLC
          </p>
        </div>
      </footer>
    </section>
  );
}