"use client";
import { motion } from "framer-motion";

// ─── Reviews Data ────────────────────────────────────────────────
const reviews = [
  {
    name: "Marcus Thorne",
    role: "Event Director, Global Tech Summit",
    stars: 5,
    text: "Yash doesn't just perform, he commands the room. The energy he brings to the stage is unlike anything I've seen in fifteen years of event planning.",
    featured: false,
  },
  {
    name: "Sarah Jenkins",
    role: "Founder, Creative Pulse Media",
    stars: 5,
    text: "An absolute powerhouse. Yash Gole redefined our expectations of what a live performance can be. We had people talking about it for weeks.",
    featured: true,
  },
  {
    name: "David Chen",
    role: "CFO, Meridian Group",
    stars: 5,
    text: "Professionalism meets pure talent. Yash was the highlight of our annual gala. Seamless communication from booking to the final bow.",
    featured: false,
  },
];

// ─── Star Rating ──────────────────────────────────────────────────
function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-primary fill-primary" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <div className="w-full">
      <div className="text-center mb-16">
        <p className="text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-4">
          — Testimonials
        </p>
        <h2 className="font-headline text-5xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4">
          What People <span className="text-primary">Are Saying</span>
        </h2>
        <p className="text-gray-500 text-sm max-w-sm mx-auto">
          Real feedback from audiences and event organizers globally.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.map((r, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
            className={`p-7 border transition-colors duration-300 ${
              r.featured
                ? "bg-primary border-primary text-black"
                : "bg-white/[0.03] border-white/8 hover:border-primary/30"
            }`}
          >
            <Stars count={r.stars} />
            <p className={`text-sm leading-relaxed mb-6 font-medium ${r.featured ? "text-black" : "text-gray-300"}`}>
              "{r.text}"
            </p>
            <div>
              <p className={`text-sm font-black ${r.featured ? "text-black" : "text-white"}`}>{r.name}</p>
              <p className={`text-[10px] font-bold tracking-widest uppercase mt-0.5 ${r.featured ? "text-black/60" : "text-gray-500"}`}>
                {r.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
