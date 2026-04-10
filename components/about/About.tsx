"use client";

import Image from "next/image";

import SplitTextReveal from "@/components/motion/SplitTextReveal";
import FadeUpStagger from "@/components/motion/FadeUpStagger";
import ClipReveal from "@/components/motion/ClipReveal";
import AnimatedCounter from "@/components/global/AnimatedCounter";

const About = () => {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <Image
          src="/images/jet-aerial.jpg"
          alt="Skyblue Aero"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian/80 via-brand-obsidian/20 to-transparent" />

        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-10 pb-16 md:pb-24">
          <p className="font-body text-brand-gold text-xs tracking-[0.3em] uppercase mb-4">
            About Us
          </p>

          <SplitTextReveal
            as="h1"
            className="text-fluid-heading font-display font-bold text-brand-cream"
          >
            Built on Trust. Driven by Excellence.
          </SplitTextReveal>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-brand-cream py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <FadeUpStagger>
            <h2 className="font-display text-fluid-subheading font-bold text-brand-navy mb-6">
              Our Story
            </h2>

            <p className="font-body text-brand-navy/70 text-base leading-relaxed mb-4">
              Skyblue Aero was founded with a singular vision: to deliver aviation services that match the uncompromising standards of the clients we serve.
            </p>

            <p className="font-body text-brand-navy/60 text-base leading-relaxed">
              Today, we operate across six continents with a team of dedicated professionals who believe excellence is the baseline.
            </p>
          </FadeUpStagger>

          <ClipReveal direction="left">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/crew.jpg"
                alt="Our team"
                fill
                className="object-cover"
              />
            </div>
          </ClipReveal>

        </div>
      </section>

      {/* COUNTERS */}
      <section className="bg-brand-cloud py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <AnimatedCounter end={4000} suffix="+" label="Team Members" />
          <AnimatedCounter end={6} label="Continents" />
          <AnimatedCounter end={150} suffix="+" label="Aircraft Managed" />
          <AnimatedCounter end={25} suffix="+" label="Years Experience" />

        </div>
      </section>

      {/* VALUES */}
      <section className="bg-brand-cream py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          
          <SplitTextReveal
            as="h2"
            className="text-fluid-subheading font-display font-bold text-brand-navy mb-16 text-center"
          >
            Our Values
          </SplitTextReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Safety First",
                desc: "Every decision prioritizes safety without compromise.",
              },
              {
                title: "Client Focus",
                desc: "Your priorities are our priorities.",
              },
              {
                title: "Integrity",
                desc: "Honest advice and transparent operations.",
              },
            ].map((v) => (
              <FadeUpStagger key={v.title}>
                <div className="text-center px-4">
                  <h3 className="font-display text-xl text-brand-navy mb-4">
                    {v.title}
                  </h3>
                  <p className="font-body text-brand-navy/60 text-sm leading-relaxed">
                    {v.desc}
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

export default About;