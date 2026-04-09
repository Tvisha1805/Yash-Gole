"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const photos = [
  { src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop", alt: "Standup performer on stage" },
  { src: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=800&auto=format&fit=crop", alt: "Crowd silhouette at show" },
  { src: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800&auto=format&fit=crop", alt: "Microphone closeup" },
  { src: "https://images.unsplash.com/photo-1514525253361-b83f859b73c0?q=80&w=800&auto=format&fit=crop", alt: "Stage lights" },
  { src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop", alt: "DJ turntable" },
  { src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop", alt: "Recording studio" },
  { src: "https://images.unsplash.com/photo-1543185377-99cd19911180?q=80&w=800&auto=format&fit=crop", alt: "Night streets" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop", alt: "Forest path" },
];

export default function PhotoGallery() {
  return (
    <section className="w-full py-24 md:py-32 bg-neutral flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-[1400px] px-6 lg:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
          className="mb-14 md:mb-20 text-center"
        >
          <p className="text-[10px] md:text-xs font-bold tracking-[0.4em] text-primary uppercase mb-4">
            — Through the Lens
          </p>
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase">
            Faces. Frames.{" "}
            <span className="text-primary">Moments.</span>
          </h2>
          <p className="text-gray-500 text-sm mt-5 max-w-md mx-auto">
            Every photo tells the story the jokes don't — the quiet before the punchline, the room alive with laughter.
          </p>
        </motion.div>

        {/* Uniform Square Grid — 4 cols desktop, 2 cols mobile */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any } },
              }}
              className="group relative aspect-square overflow-hidden border border-white/5 hover:border-primary/40 transition-colors duration-500"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-primary">
                  {photo.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Full Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/photos"
            className="group flex items-center gap-3 bg-primary text-black px-8 py-4 hover:bg-[#caef00] transition-all duration-300 font-black text-[10px] tracking-[0.3em] uppercase"
          >
            View Full Gallery
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
