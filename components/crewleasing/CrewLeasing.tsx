"use client";

import Image from "next/image";

import SplitTextReveal from "@/components/motion/SplitTextReveal";
import FadeUpStagger from "@/components/motion/FadeUpStagger";
import ClipReveal from "@/components/motion/ClipReveal";

const CrewLeasing = () => {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="/images/crew.jpg"
          alt="Aviation crew"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian/80 via-brand-obsidian/20 to-transparent" />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-16 md:pb-24">
          <p className="font-body text-brand-gold text-xs tracking-[0.3em] uppercase mb-4">
            Crew Leasing
          </p>

          <SplitTextReveal
            as="h1"
            className="text-fluid-heading font-display font-bold text-brand-cream"
          >
            Expert Crew. On Demand.
          </SplitTextReveal>
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-brand-cream py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <FadeUpStagger>
            <h2 className="font-display text-fluid-subheading font-bold text-brand-navy mb-6">
              Qualified Aviation Professionals
            </h2>

            <p className="font-body text-brand-navy/70 text-base leading-relaxed mb-4">
              Access our network of 4,000+ vetted aviation professionals.
            </p>

            <p className="font-body text-brand-navy/60 text-base leading-relaxed">
              Fully certified, type-rated, and compliant with industry standards.
            </p>
          </FadeUpStagger>

          <ClipReveal direction="right">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/crew.jpg"
                alt="Professional crew"
                fill
                className="object-cover"
              />
            </div>
          </ClipReveal>

        </div>
      </section>

      {/* ROLES */}
      <section className="bg-brand-navy py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">

          {[
            {
              title: "Pilots",
              desc: "Type-rated captains and first officers.",
            },
            {
              title: "Cabin Crew",
              desc: "Luxury-trained attendants and managers.",
            },
            {
              title: "Engineers",
              desc: "Certified engineers for maintenance and AOG.",
            },
          ].map((item) => (
            <FadeUpStagger key={item.title}>
              <div className="border border-brand-cream/10 p-8">
                <h3 className="font-display text-xl text-brand-gold mb-4">
                  {item.title}
                </h3>
                <p className="font-body text-brand-cream/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </FadeUpStagger>
          ))}

        </div>
      </section>
    </main>
  );
};

export default CrewLeasing;