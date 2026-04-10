"use client";

import Image from "next/image";

import SplitTextReveal from "@/components/motion/SplitTextReveal";
import FadeUpStagger from "@/components/motion/FadeUpStagger";
import ClipReveal from "@/components/motion/ClipReveal";

const Brokerage = () => {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/jet-tarmac.jpg"
          alt="Aircraft brokerage"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian/80 via-brand-obsidian/20 to-transparent" />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-16 md:pb-24">
          <p className="font-body text-brand-gold text-xs tracking-[0.3em] uppercase mb-4">
            Aircraft Brokerage
          </p>

          <SplitTextReveal
            as="h1"
            className="text-fluid-heading font-display font-bold text-brand-cream"
          >
            Acquisition. Sales. Advisory.
          </SplitTextReveal>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-brand-cream py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">

          <FadeUpStagger>
            <h2 className="font-display text-fluid-subheading font-bold text-brand-navy mb-6">
              Expert Aircraft Transaction Advisory
            </h2>

            <p className="font-body text-brand-navy/70 text-base leading-relaxed mb-4">
              Our brokerage team provides end-to-end transaction support — from market analysis to closing.
            </p>

            <p className="font-body text-brand-navy/60 text-base leading-relaxed">
              Whether acquiring your first aircraft or managing a fleet, we bring institutional-grade rigour with personal attention.
            </p>
          </FadeUpStagger>

          <FadeUpStagger>
            <div className="space-y-6">
              {[
                "Market Intelligence & Valuation",
                "Pre-Purchase Inspection Management",
                "Contract Negotiation & Closing",
                "Regulatory & Registration Advisory",
                "Fleet Strategy & Disposition",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-brand-navy/10 pb-4"
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                  <span className="font-body text-brand-navy/80">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </FadeUpStagger>

        </div>
      </section>

      {/* LISTINGS */}
      <section className="bg-brand-cloud py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 text-center">

          <ClipReveal>
            <div className="relative w-full aspect-[21/9] mb-12">
              <Image
                src="/images/jet-tarmac.jpg"
                alt="Aircraft on tarmac"
                fill
                className="object-cover"
              />
            </div>
          </ClipReveal>

          <SplitTextReveal
            as="h2"
            className="text-fluid-subheading font-display font-bold text-brand-navy mb-4"
          >
            Current Listings
          </SplitTextReveal>

          <p className="font-body text-brand-navy/50 text-sm">
            Contact our brokerage team for current availability and off-market opportunities.
          </p>

        </div>
      </section>
    </main>
  );
};

export default Brokerage;