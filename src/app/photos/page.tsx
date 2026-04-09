"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const allPhotos = [
  { src: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop", alt: "Standup performer on stage" },
  { src: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=800&auto=format&fit=crop", alt: "Crowd silhouette" },
  { src: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800&auto=format&fit=crop", alt: "Microphone closeup" },
  { src: "https://images.unsplash.com/photo-1514525253361-b83f859b73c0?q=80&w=800&auto=format&fit=crop", alt: "Stage lights" },
  { src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop", alt: "DJ turntable" },
  { src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop", alt: "Recording studio" },
  { src: "https://images.unsplash.com/photo-1543185377-99cd19911180?q=80&w=800&auto=format&fit=crop", alt: "Night streets" },
  { src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop", alt: "Forest path" },
  { src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop", alt: "Concert crowd energy" },
  { src: "https://images.unsplash.com/photo-1504704911898-68304a7d2807?q=80&w=800&auto=format&fit=crop", alt: "Spotlight on stage" },
  { src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop", alt: "Festival lights" },
  { src: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=800&auto=format&fit=crop", alt: "Piano backstage" },
];

export default function PhotosPage() {
  return (
    <div className="min-h-screen bg-neutral pt-28 md:pt-36 pb-24 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase mb-4">
              — Through the Lens
            </p>
            <h1 className="font-headline text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] uppercase">
              Faces. Frames.{" "}
              <span className="text-primary">Moments.</span>
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
            <Link
              href="/"
              className="flex items-center gap-3 text-gray-500 hover:text-primary transition-colors text-xs font-bold tracking-widest uppercase group"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Return Home
            </Link>
          </motion.div>
        </div>

        {/* Uniform Square Grid — all photos, same shape */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {allPhotos.map((photo, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } },
              }}
              className="group relative aspect-square overflow-hidden border border-white/5 hover:border-primary/40 transition-colors duration-500"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-primary">
                  {photo.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
