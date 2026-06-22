"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import Input from "@/components/Input";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://mr-warehouse-backend.onrender.com/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Lead submission failed");
      }

      setStatus("success");
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

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
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <Input
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <Input
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
            />

            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <Input
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />

            <Input
              name="service"
              placeholder="Service Needed"
              value={form.service}
              onChange={handleChange}
            />

            <Input
              name="message"
              placeholder="Tell us about your warehouse or operational challenge..."
              value={form.message}
              onChange={handleChange}
              textarea
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-1 h-14 rounded-2xl bg-[#2563EB] text-lg font-semibold text-white transition-all hover:bg-[#1D4ED8] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading"
                ? "Sending..."
                : "Request Free Assessment"}
            </button>

            {status === "success" && (
              <p className="text-sm font-medium text-green-300">
                Thank you. Your request has been sent.
              </p>
            )}

            {status === "error" && (
              <p className="text-sm font-medium text-red-300">
                Something went wrong. Please try again.
              </p>
            )}
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

          <p className="text-sm text-[#CBD5E1]">© 2026 MR Warehouse LLC</p>
        </div>
      </footer>
    </section>
  );
}