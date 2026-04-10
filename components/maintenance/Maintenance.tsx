"use client";

import { useState } from "react";
import Image from "next/image";

import SplitTextReveal from "@/components/motion/SplitTextReveal";
import FadeUpStagger from "@/components/motion/FadeUpStagger";
import ClipReveal from "@/components/motion/ClipReveal";

const tabs = [
  {
    id: "maintenance",
    label: "Maintenance",
    content: {
      title: "Full-Spectrum MRO Services",
      desc: "Line and base maintenance, AOG support, and scheduled inspections delivered by certified engineers.",
      items: [
        "Line & Base Maintenance",
        "AOG Rapid Response",
        "Scheduled Inspections (A/B/C/D)",
        "Avionics & Modifications",
        "Interior Refurbishment",
      ],
    },
  },
  {
    id: "management",
    label: "Aircraft Management",
    content: {
      title: "Complete Aircraft Management Programmes",
      desc: "We manage every operational and regulatory aspect of aircraft ownership.",
      items: [
        "Operational Management",
        "Financial Reporting & Budgeting",
        "Regulatory Compliance",
        "Crew Employment & Training",
        "Charter Revenue Optimisation",
      ],
    },
  },
];

const Maintenance = () => {
  const [activeTab, setActiveTab] = useState("maintenance");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <main>
      {/* HERO */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/maintenance.jpg"
          alt="Aircraft maintenance"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian/80 via-brand-obsidian/20 to-transparent" />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-16 md:pb-24">
          <p className="font-body text-brand-gold text-xs tracking-[0.3em] uppercase mb-4">
            Maintenance & Management
          </p>

          <SplitTextReveal
            as="h1"
            className="text-fluid-heading font-display font-bold text-brand-cream"
          >
            Precision. Reliability. Trust.
          </SplitTextReveal>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-brand-cream py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">

          {/* TABS */}
          <div className="flex gap-1 mb-12 border-b border-brand-navy/10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-body text-sm tracking-wide transition-colors border-b-2 -mb-px ${
                  activeTab === tab.id
                    ? "border-brand-gold text-brand-navy"
                    : "border-transparent text-brand-navy/50 hover:text-brand-navy"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            <FadeUpStagger key={activeTab}>
              <h2 className="font-display text-fluid-subheading font-bold text-brand-navy mb-6">
                {active.content.title}
              </h2>

              <p className="font-body text-brand-navy/70 text-base leading-relaxed mb-8">
                {active.content.desc}
              </p>

              <div className="space-y-4">
                {active.content.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 border-b border-brand-navy/10 pb-3"
                  >
                    <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                    <span className="font-body text-brand-navy/80 text-sm">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUpStagger>

            <ClipReveal key={`img-${activeTab}`} direction="right">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/images/maintenance.jpg"
                  alt="Aircraft maintenance hangar"
                  fill
                  className="object-cover"
                />
              </div>
            </ClipReveal>

          </div>

        </div>
      </section>
    </main>
  );
};

export default Maintenance;