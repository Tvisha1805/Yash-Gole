"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const photos = [
  { src: "/photo1.jpg", alt: "#1" },
  { src: "/photo2.jpg", alt: "#2" },
  { src: "/photo3.jpg", alt: "#3" },
  { src: "/photo4.jpg", alt: "#4" },
  { src: "/photo5.jpg", alt: "#5" },
  { src: "/photo6.jpg", alt: "#6" },
  { src: "/photo7.jpg", alt: "#7" },
  { src: "/photo8.jpg", alt: "#8" },

];

export default function PhotoGallery() {
  return (
    <section id="photos" className="w-full py-16 md:py-20 bg-neutral flex flex-col items-center overflow-hidden scroll-mt-24">
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
          <h2 className="font-headline text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
            STAGE <span className="text-primary drop-shadow-[0_0_35px_rgba(227,255,0,0.45)]">ENERGY.</span>
          </h2>
          <p className="text-gray-500 text-sm mt-5 max-w-md mx-auto font-body">
            Every photo tells the story the jokes don't — the quiet before the punchline, the room alive with laughter.
          </p>
        </motion.div>

        {/* Uniform Square Grid — 4 cols desktop, 2 cols mobile */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any } },
              }}
              className="group relative aspect-square overflow-hidden bg-white/[0.02] border border-white/5 hover:border-primary/40 transition-all duration-500"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary drop-shadow-md">
                  {photo.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View Full Gallery Box Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 md:mt-20 flex justify-center"
        >
          <Link
            href="/photos"
            className="group flex flex-col items-center gap-6"
          >
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-500 overflow-hidden" id="full-gallery-button">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute inset-0"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full opacity-0 group-hover:opacity-20 transition-opacity">
                  <path id="circlePath" fill="none" d="M 10, 50 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                  <text className="text-[8px] uppercase font-bold tracking-[0.5em] fill-black">
                    <textPath xlinkHref="#circlePath">VIEW FULL GALLERY • VIEW FULL GALLERY • </textPath>
                  </text>
                </svg>
              </motion.div>
              <svg className="w-8 h-8 md:w-10 md:h-10 text-white group-hover:text-black transition-colors transform group-hover:scale-110 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase text-white/40 group-hover:text-primary transition-colors">
              Click to browse full archive
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
