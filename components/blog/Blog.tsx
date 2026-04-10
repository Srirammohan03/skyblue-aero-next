"use client";

import Link from "next/link";
import Image from "next/image";

import SplitTextReveal from "@/components/motion/SplitTextReveal";
import FadeUpStagger from "@/components/motion/FadeUpStagger";

const posts = [
  {
    slug: "future-of-private-aviation",
    title: "The Future of Private Aviation: Trends Shaping 2026",
    excerpt:
      "From sustainable aviation fuel to AI-powered operations, the landscape of private aviation is evolving rapidly.",
    image: "/images/hero-jet.jpg",
    date: "March 15, 2026",
    category: "Industry",
  },
  {
    slug: "choosing-right-aircraft",
    title: "Choosing the Right Aircraft: A Buyer's Guide",
    excerpt:
      "Key considerations when selecting your first or next business aircraft.",
    image: "/images/jet-interior.jpg",
    date: "March 8, 2026",
    category: "Brokerage",
  },
  {
    slug: "international-trip-planning",
    title: "Mastering International Trip Planning",
    excerpt:
      "Behind the scenes of a complex international mission.",
    image: "/images/jet-aerial.jpg",
    date: "February 28, 2026",
    category: "Operations",
  },
];

const Blog = () => {
  return (
    <main>
      <section className="bg-brand-cream py-24 md:py-32 pt-32 md:pt-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">

          <SplitTextReveal
            as="h1"
            className="text-fluid-heading font-display font-bold text-brand-navy mb-4"
          >
            Insights
          </SplitTextReveal>

          <p className="font-body text-brand-navy/50 text-base mb-16 max-w-lg">
            Perspectives on aviation, luxury travel, and the business of flight.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <FadeUpStagger key={post.slug}>
                
                {/* ✅ Wrap with Link */}
                <Link href={`/blog/${post.slug}`}>
                  <article className="group cursor-pointer">

                    <div className="overflow-hidden mb-4 relative aspect-[3/2]">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-body text-xs text-brand-gold tracking-[0.2em] uppercase">
                        {post.category}
                      </span>
                      <span className="font-body text-xs text-brand-navy/40">
                        {post.date}
                      </span>
                    </div>

                    <h2 className="font-display text-xl text-brand-navy mb-2 group-hover:text-brand-gold transition-colors">
                      {post.title}
                    </h2>

                    <p className="font-body text-brand-navy/60 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>

                  </article>
                </Link>

              </FadeUpStagger>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
};

export default Blog;