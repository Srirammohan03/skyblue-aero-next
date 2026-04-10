"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SplitTextReveal from "@/components/motion/SplitTextReveal";

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/Diwan Seats.JPG",
  "/images/gallery/Executive Lounge Chair.JPG",
  "/images/gallery/Executive Lounge Chairs.JPG",
  "/images/gallery/Executive Lounge_Fwd.JPG",
  "/images/gallery/Front Left.JPG",
  "/images/gallery/Fwd Cabin.JPG",
  "/images/gallery/Head on Pic.JPG",
  "/images/gallery/Middle Club Seats_Fwd Dacing.JPG",
  "/images/gallery/Middle Club Seats_Rear Facing.JPG",
  "/images/gallery/Nose_Left.JPG",
  "/images/gallery/Reg No.JPG",
  "/images/gallery/Side Pic_Left.JPG",
  "/images/gallery/Side Pic_Right.JPG",
  "/images/gallery/Side Pic_RWY.JPG",
  "/images/gallery/Side Profile.JPG",
  "/images/gallery/TEM09531.jpg",
  "/images/gallery/TEM09537.jpg",
  "/images/gallery/TEM09541.jpg",
  "/images/gallery/TEM09545.jpg",
  "/images/gallery/TEM09548.jpg",
  "/images/gallery/TEM09561.jpg",
  "/images/gallery/TEM09576.jpg",
  "/images/gallery/TEM09579.jpg",
  "/images/gallery/TEM09606.jpg",
];

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const next = () =>
    setIndex((prev) => ((prev ?? 0) + 1) % images.length);

  const prev = () =>
    setIndex((prev) => ((prev ?? 0) - 1 + images.length) % images.length);

  return (
    <main>
      <section className="bg-brand-cream py-24 pt-32 md:pt-40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">

          <SplitTextReveal
            as="h1"
            className="text-fluid-heading font-display font-bold text-brand-navy mb-6"
          >
            Gallery
          </SplitTextReveal>

          {/* MASONRY GRID */}
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((src, i) => (
              <motion.div
                key={i}
                layoutId={`image-${i}`}
                className="overflow-hidden rounded-xl cursor-pointer break-inside-avoid"
                onClick={() => setIndex(i)}
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={src}
                  alt={`gallery-${i}`}
                  className="w-full object-cover rounded-xl"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* CLOSE */}
            <button
              onClick={() => setIndex(null)}
              className="absolute top-6 right-6 text-white text-3xl z-50"
            >
              ✕
            </button>

            {/* IMAGE */}
            <motion.img
              key={index}
              src={images[index]}
              layoutId={`image-${index}`}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -100) next();
                if (info.offset.x > 100) prev();
              }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl"
            />

            {/* NAV */}
            <button onClick={prev} className="absolute left-6 text-white text-4xl">
              ‹
            </button>

            <button onClick={next} className="absolute right-6 text-white text-4xl">
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}