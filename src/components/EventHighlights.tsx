"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Event {
  id: number;
  tag: string;
  tagColor: string;
  title: string;
  location: string;
  date: string;
  description: string;
  thumbnail: string;
  photos: string[];
  video: string | null;
}

const events: Event[] = [
  {
    id: 1,
    tag: "SOLD OUT",
    tagColor: "text-primary",
    title: "Bangalore 2023",
    location: "Bangalore, India",
    date: "March 2023",
    description:
      "A sold-out night at the iconic Bangalore venue — 800 people, zero empty seats, and a room that laughed for two straight hours. This set featured the debut of the 'Corporate Slide' bit that went viral the next morning.",
    thumbnail: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
    photos: [
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504704911898-68304a7d2807?q=80&w=800&auto=format&fit=crop",
    ],
    video: "/video1.mp4",
  },
  {
    id: 2,
    tag: "PRIVATE EVENT",
    tagColor: "text-secondary",
    title: "Dubai Expo",
    location: "Dubai, UAE",
    date: "October 2022",
    description:
      "An exclusive corporate evening at Dubai Expo for a global tech audience. Customised material, punchlines in three languages, and a standing ovation from 400 executives who didn't expect to lose it laughing.",
    thumbnail: "https://images.unsplash.com/photo-1514525253361-b83f859b73c0?q=80&w=1200&auto=format&fit=crop",
    photos: [
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    ],
    video: "/video1.mp4",
  },
  {
    id: 3,
    tag: "SOLO SPECIAL",
    tagColor: "text-primary",
    title: "Pune Roots",
    location: "Pune, India",
    date: "July 2023",
    description:
      "Returning to the city where it all began. 'Pune Roots' was a homecoming — an intimate special recorded live for a streaming release, packed with stories from childhood, college, and the first terrible open-mic nights.",
    thumbnail: "https://images.unsplash.com/photo-1543185377-99cd19911180?q=80&w=1200&auto=format&fit=crop",
    photos: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514525253361-b83f859b73c0?q=80&w=800&auto=format&fit=crop",
    ],
    video: null,
  },
  {
    id: 4,
    tag: "TOUR FINALE",
    tagColor: "text-white",
    title: "Singapore",
    location: "Singapore",
    date: "December 2023",
    description:
      "The final night of the 2023 Asia Tour — and the biggest crowd yet. Singapore delivered a room full of energy, a crowd that latched onto every word, and a truly unforgettable finale to a year on the road.",
    thumbnail: "https://images.unsplash.com/photo-1504704911898-68304a7d2807?q=80&w=1200&auto=format&fit=crop",
    photos: [
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527224857830-43a7acc85260?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop",
    ],
    video: "/video1.mp4",
  },
];

export default function EventHighlights() {
  const [selected, setSelected] = useState<Event | null>(null);

  return (
    <>
      <section id="events" className="w-full py-24 md:py-32 bg-[#050505]">
        <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }}
            className="mb-12"
          >
            <p className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase mb-4">
              — On The Road
            </p>
            <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter uppercase">
              Past <span className="text-primary">Highlights</span>
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-sm">
              Memories from the sold-out shows across the globe.
            </p>
          </motion.div>

          {/* Event Cards — Horizontal Scroll */}
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {events.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                onClick={() => setSelected(event)}
                className="group relative flex-shrink-0 w-64 md:w-72 aspect-[3/4] overflow-hidden border border-white/5 hover:border-primary/40 transition-colors duration-500 cursor-pointer"
              >
                <Image
                  src={event.thumbnail}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Labels */}
                <div className="absolute bottom-0 left-0 p-5">
                  <p className={`text-[9px] font-black tracking-[0.25em] uppercase mb-2 ${event.tagColor}`}>
                    {event.tag}
                  </p>
                  <h3 className="font-headline text-xl font-black text-white tracking-tight leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-[10px] tracking-widest uppercase mt-1 font-bold">
                    {event.date}
                  </p>
                </div>

                {/* Hover: tap hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-primary text-black text-[9px] font-black tracking-[0.2em] uppercase px-4 py-2">
                    View Event
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Drawer Panel */}
            <motion.div
              key="modal"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-[#0D0D0D] border-t border-white/10 max-h-[90vh] overflow-y-auto rounded-t-3xl"
            >
              <div className="max-w-[900px] mx-auto px-6 md:px-10 pt-2 pb-12">

                {/* Close */}
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className={`text-[9px] font-black tracking-[0.3em] uppercase mb-2 ${selected.tagColor}`}>
                      {selected.tag} · {selected.date}
                    </p>
                    <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">
                      {selected.title}
                    </h2>
                    <p className="text-gray-500 text-xs mt-1 tracking-widest uppercase font-bold">
                      {selected.location}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="text-gray-500 hover:text-primary transition-colors p-2"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-2xl border-l-2 border-primary/50 pl-4">
                  {selected.description}
                </p>

                {/* Video */}
                {selected.video && (
                  <div className="mb-10">
                    <p className="text-[10px] font-black tracking-[0.3em] uppercase text-primary mb-4">
                      — Event Reel
                    </p>
                    <div className="w-full aspect-video bg-black border border-white/5 overflow-hidden">
                      <video
                        src={selected.video}
                        controls
                        className="w-full h-full object-cover"
                        playsInline
                      />
                    </div>
                  </div>
                )}

                {/* Photos */}
                <div>
                  <p className="text-[10px] font-black tracking-[0.3em] uppercase text-primary mb-4">
                    — Event Photos
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {selected.photos.map((src, i) => (
                      <div key={i} className="aspect-square relative overflow-hidden border border-white/5">
                        <Image
                          src={src}
                          alt={`${selected.title} photo ${i + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
