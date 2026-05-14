"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 40);

      const nearBottom =
        window.innerHeight + currentScrollY >=
        document.documentElement.scrollHeight - 40;

        if (nearBottom) {
            setVisible(false);
        } else if (currentScrollY < 80) {
            setVisible(true);
        } else {
            setVisible(currentScrollY < lastScrollY);
        }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full px-6 transition-transform duration-300 ${
        visible ? "translate-y-0 pt-3" : "-translate-y-full"
      }`}
    >
      <div
        className={`group mx-auto flex w-full max-w-[1280px] items-center justify-between rounded-2xl border border-white/10 bg-[#07111F]/85 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:h-20 hover:px-7 ${
          scrolled ? "h-14 px-5" : "h-16 px-6"
        }`}
      >
        <a href="#" className="flex items-center">
          <Image
            src="/logos/mr-logo-white.png"
            alt="MR Warehouse LLC"
            width={170}
            height={44}
            priority
            className={`h-auto transition-all duration-300 group-hover:w-[160px] ${
              scrolled ? "w-[120px]" : "w-[150px]"
            }`}
          />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href="#services"
            className="text-[15px] font-medium text-[#CBD5E1] transition hover:text-white"
          >
            Services
          </a>

          <a
            href="#process"
            className="text-[15px] font-medium text-[#CBD5E1] transition hover:text-white"
          >
            Process
          </a>

          <a
            href="#results"
            className="text-[15px] font-medium text-[#CBD5E1] transition hover:text-white"
          >
            Results
          </a>

          <a
            href="#contact"
            className="text-[15px] font-medium text-[#CBD5E1] transition hover:text-white"
          >
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className={`hidden rounded-xl bg-[#2563EB] text-[15px] font-semibold text-white transition-all duration-300 hover:bg-blue-500 lg:inline-flex ${
            scrolled
              ? "px-4 py-2 group-hover:px-5 group-hover:py-3"
              : "px-5 py-3"
          }`}
        >
          Free Assessment
        </a>

        <button className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-white lg:hidden">
          Menu
        </button>
      </div>
    </header>
  );
}