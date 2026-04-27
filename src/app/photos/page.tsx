"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const allPhotos = [
  { src: "/photo1.jpg", alt: "#1" },
  { src: "/photo2.jpg", alt: "#2" },
  { src: "/photo3.jpg", alt: "#3" },
  { src: "/photo4.jpg", alt: "#4" },
  { src: "/photo5.jpg", alt: "#5" },
  { src: "/photo6.jpg", alt: "#6" },
  { src: "/photo7.jpg", alt: "#7" },
  { src: "/photo8.jpg", alt: "#8" },
  { src: "/photo9.jpg", alt: "#9" },
  { src: "/photo10.jpg", alt: "#10" },
  { src: "/photo11.jpg", alt: "#11" },
  { src: "/photo12.jpg", alt: "#12" },
  { src: "/photo13.jpg", alt: "#13" },
  { src: "/photo14.jpg", alt: "#14" },
  { src: "/photo15.jpg", alt: "#15" },
  { src: "/photo16.jpg", alt: "#16" },
  { src: "/photo17.jpg", alt: "#17" },
  { src: "/photo18.jpg", alt: "#18" },
  { src: "/photo19.jpg", alt: "#19" },
  { src: "/photo20.jpg", alt: "#20" },
  { src: "/photo41.jpeg", alt: "#21" },
  { src: "/photo21.jpg", alt: "#22" },
  { src: "/photo22.jpg", alt: "#23" },
  { src: "/photo23.jpg", alt: "#24" },
  { src: "/photo24.jpg", alt: "#25" },
  { src: "/photo25.jpg", alt: "#26" },
  { src: "/photo26.jpg", alt: "#27" },
  { src: "/photo27.jpg", alt: "#28" },
  { src: "/photo28.jpg", alt: "#29" },
  { src: "/photo29.jpg", alt: "#30" },
  { src: "/photo30.jpg", alt: "#31" },
  { src: "/photo40.jpeg", alt: "#32" },
  


];

export default function PhotosPage() {
  return (
    <div className="min-h-screen bg-neutral pt-20 md:pt-24 pb-24 overflow-hidden">
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
              STAGE <span className="text-primary drop-shadow-[0_0_35px_rgba(227,255,0,0.45)]">ENERGY.</span>
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
