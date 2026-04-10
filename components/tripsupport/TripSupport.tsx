"use client";

import Image from "next/image";

import SplitTextReveal from "@/components/motion/SplitTextReveal";
import FadeUpStagger from "@/components/motion/FadeUpStagger";

const TripSupport = () => {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/jet-aerial.jpg"
          alt="International trip support"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian/80 via-brand-obsidian/20 to-transparent" />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-16 md:pb-24">
          <p className="font-body text-brand-gold text-xs tracking-[0.3em] uppercase mb-4">
            International Trip Support
          </p>

          <SplitTextReveal
            as="h1"
            className="text-fluid-heading font-display font-bold text-brand-cream"
          >
            Seamless Global Operations
          </SplitTextReveal>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-brand-cream py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">

          <div className="max-w-3xl mb-16">
            <SplitTextReveal
              as="h2"
              className="text-fluid-subheading font-display font-bold text-brand-navy mb-6"
            >
              Complete Flight Operations Support
            </SplitTextReveal>

            <p className="font-body text-brand-navy/70 text-base leading-relaxed">
              From permits to crew logistics — every mission handled flawlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Permits & Clearances",
                desc: "Overflight and landing approvals globally.",
              },
              {
                title: "Ground Handling",
                desc: "FBO coordination at 4,000+ locations.",
              },
              {
                title: "Fuel Management",
                desc: "Optimised fuel procurement worldwide.",
              },
              {
                title: "Crew Support",
                desc: "Hotels, visas, and transport.",
              },
              {
                title: "Flight Planning",
                desc: "Routing, weather, and NOTAMs.",
              },
              {
                title: "Customs & Immigration",
                desc: "Smooth clearance and documentation.",
              },
            ].map((item) => (
              <FadeUpStagger key={item.title}>
                <div className="bg-brand-cloud p-8">
                  <h3 className="font-display text-lg text-brand-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-brand-navy/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeUpStagger>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
};

export default TripSupport;