"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

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
  videos?: string[];
}

const events: Event[] = [
  {
    id: 1,
    tag: "",
    tagColor: "text-primary",
    title: "Marathi Kapil Opening Act",
    location: "Pune, India",
    date: "March 2026",
    description:
      "A packed room, one mic, and non stop laughs from start to finish. Anchoring and performing an opening standup act that fully owned the room and set the perfect tone for the main show.",
    thumbnail: "/photo2.jpg",
    photos: ["/photo2.jpg"],
    videos: ["/video3.mp4", "/video5.mp4"],
  },
  {
    id: 2,
    tag: "",
    tagColor: "text-secondary",
    title: "Maruti Suzuki Arena Expo",
    location: "Malegaon, Maharashtra",
    date: "November 2025",
    description:
      "Anchoring and performing a full standup set for a massive corporate audience. Navigating specialized crowd work with auto professionals and maintaining high energy throughout the hours long event.",
    thumbnail: "/photo9.jpg",
    photos: ["/photo9.jpg", "/photo29.jpg", "/photo17.jpg", "/photo31.jpg", "/photo33.jpg"],

  },
  {
    id: 3,
    tag: "",
    tagColor: "text-primary",
    title: "The Anvita Show",
    location: "Sinhgad's Cultural Center",
    date: "February 2025",
    description:
      "A massive night at the Sinhgad Cultural Center. 3000+ students, one stage, and a standup set that had the entire college roaring in unison.",
    thumbnail: "/photo19.jpg",
    photos: ["/photo19.jpg", "/photo4.jpg", "/photo12.jpg", "/photo14.jpg", "/photo21.jpg", "/photo26.jpg", "/photo34.jpg"],
    videos: ["/video2.mp4"],
  },
  {
    id: 4,
    tag: "",
    tagColor: "text-white",
    title: "Duo Club's Opening Act",
    location: "Ahilyanagar, India",
    date: "January 2024",
    description:
      "Opening for Duo Club in Ahilyanagar. A packed open mic night where the laughs came easy and the energy never dipped.",
    thumbnail: "/photo1.jpg",
    photos: ["/photo1.jpg", "/photo7.jpg", "/photo16.jpg", "/photo22.jpg", "/photo28.jpg", "/photo35.jpg", "/photo36.jpg"],
    videos: ["/video7.mp4"],
  },
  {
    id: 5,
    tag: "",
    tagColor: "text-primary",
    title: "Pune Open Mics",
    location: "Pune, India",
    date: "Ongoing",
    description:
      "A regular on the open mic circuit. Testing, refining, and delivering fresh comedy across club stages week after week.",
    thumbnail: "/photo8.jpg",
    photos: ["/photo8.jpg", "/photo11.jpg", "/photo15.jpg", "/photo23.jpg", "/photo25.jpg", "/photo37.jpg"],
    videos: ["/video1.mp4"],
  },
  {
    id: 6,
    tag: "",
    tagColor: "text-primary",
    title: "Sinhgad College's Anchoring",
    location: "Sinhgad College Cultural Center, Pune",
    date: "Ongoing",
    description:
      "Anchoring a high-energy crowd at Sinhgad Cultural Center. Keeping 3000+ students engaged, entertained, and completely in sync with the stage.",
    thumbnail: "/photo3.jpg",
    photos: ["/photo3.jpg", "/photo5.jpg", "/photo6.jpg", "/photo10.jpg", "/photo13.jpg", "/photo18.jpg", "/photo20.jpg", "/photo24.jpg", "/photo27.jpg", "/photo30.jpg"],
    videos: ["/video9.mp4", "/video8.mp4", "/video4.mp4", "/video10.mp4", "/video11.mp4"],
  },
];

export default function EventHighlights() {
  const [selected, setSelected] = useState<Event | null>(null);
  const [showAll, setShowAll] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Focus and scroll management when modal opens
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
      // Force scroll to top of the modal container
      if (scrollRef.current) {
        scrollRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selected]);

  return (
    <>
      <section id="events" className="w-full py-16 md:py-20 bg-[#050505] scroll-mt-20">
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

          {/* Event Cards — Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
            {events.slice(0, showAll ? events.length : 4).map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                onClick={() => setSelected(event)}
                className="group relative w-full aspect-[3/4] overflow-hidden rounded-lg border border-white/5 hover:border-primary/40 transition-colors duration-500 cursor-pointer"
              >
                <Image
                  src={event.thumbnail}
                  alt={event.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
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

          {/* View All Events Button */}
          {events.length > 4 && !showAll && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-12 flex justify-center w-full"
            >
              <button
                onClick={() => setShowAll(true)}
                className="group flex flex-col items-center gap-4"
              >
                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-500 overflow-hidden" id="view-all-events-button">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-black transition-colors transform group-hover:translate-y-1 duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-white/40 group-hover:text-primary transition-colors">
                  View All Events
                </span>
              </button>
            </motion.div>
          )}

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
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
            />

            {/* Modal Drawer Panel */}
            <motion.div
              key="modal"
              ref={scrollRef}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="fixed bottom-0 left-0 right-0 top-0 z-[100] bg-[#0D0D0D] overflow-y-auto rounded-t-[2.5rem] shadow-[0_-20px_60px_rgba(0,0,0,0.8)]"
            >
              {/* Sticky Top Navbar */}
              <div className="sticky top-0 z-50 bg-[#0D0D0D] border-b border-white/10 py-4 flex justify-between items-center px-6 md:px-10">
                <div className="flex-1">
                  <p className={`text-[9px] font-black tracking-[0.3em] uppercase ${selected.tagColor}`}>
                    {selected.tag} • {selected.date}
                  </p>
                  <p className="text-gray-400 text-[10px] tracking-widest uppercase mt-0.5 font-bold">
                    {selected.location}
                  </p>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelected(null)}
                  className="p-2 text-gray-500 hover:text-primary transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="w-full max-w-[1400px] mx-auto px-0 pt-6 pb-16">

                {/* Header Information */}
                <div className="px-6 md:px-10 mb-10">
                  <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tighter uppercase leading-none mb-3">
                    {selected.title}
                  </h2>
                </div>

                {/* Description */}
                <div className="px-6 md:px-10 mb-12">
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl border-l-2 border-primary/30 pl-6">
                    {selected.description}
                  </p>
                </div>

                {/* Event Media */}
                {(() => {
                  const mediaGallery = [
                    ...(selected.videos ? selected.videos.slice(1).map(v => ({ type: 'video', src: v })) : []),
                    ...(selected.photos ? selected.photos.map(p => ({ type: 'photo', src: p })) : [])
                  ];
                  const hasMainVideo = selected.videos && selected.videos.length > 0;
                  const hasMedia = hasMainVideo || mediaGallery.length > 0;

                  return hasMedia && (
                    <div className="px-6 md:px-10">
                      <p className="text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-6">
                        — Event Media
                      </p>
                      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-stretch">
                        {/* Highlights Video (First Video) */}
                        {hasMainVideo && (
                          <div className={`relative flex justify-center flex-shrink-0 w-full rounded-[1.25rem] overflow-hidden shadow-2xl border border-white/10 bg-[#0A0A0A] ${mediaGallery.length > 0 ? "lg:w-[45%] xl:w-[40%]" : ""}`}>
                            <video
                              src={selected.videos![0]}
                              controls
                              className={`w-full ${mediaGallery.length > 0 ? "lg:absolute lg:inset-0 lg:h-full lg:object-cover" : "max-h-[70vh] object-contain"}`}
                              playsInline
                              preload="auto"
                            />
                          </div>
                        )}

                        {/* Media Grid (Remaining Videos + Photos) */}
                        {mediaGallery.length > 0 && (
                          <div className={`grid gap-4 w-full flex-grow ${mediaGallery.length === 1 ? "grid-cols-1" :
                            mediaGallery.length === 2 ? "grid-cols-2" :
                              mediaGallery.length === 3 ? "grid-cols-2 sm:grid-cols-3 xl:grid-cols-3" :
                                "grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-2"
                            }`}>
                            {mediaGallery.map((item, i) => (
                              <div key={i} className={`relative overflow-hidden rounded-xl border border-white/5 ${mediaGallery.length === 1 && !hasMainVideo ? "aspect-video" : "aspect-square"
                                }`}>
                                {item.type === 'video' ? (
                                  <video src={item.src} controls className="w-full h-full object-cover" playsInline preload="metadata" />
                                ) : (
                                  <Image
                                    src={item.src}
                                    alt={`${selected.title} gallery media ${i + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                  />
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })()}

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}