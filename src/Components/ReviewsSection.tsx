"use client";
import { motion } from "framer-motion";

// ─── Reviews Data ────────────────────────────────────────────────
const reviews = [
  {
    name: "Tvisha Ghiya",
    role: "Regular Attendee, Pune",
    stars: 5,
    text: "I've caught his sets at various open mics in Pune, and his timing is just raw and hilarious. He completely saves the night every time he gets on stage!",
    featured: false,
  },
  {
    name: "Krishna Thombare",
    role: "Event Coordinator, Maruti Suzuki Arena Expo",
    stars: 5,
    text: "He anchored and performed a killer standup set at the Maruti Suzuki Arena Expo in Malegaon, Maharashtra. He kept the audience engaged effortlessly for hours! Pure talent.",
    featured: true,
  },
  {
    name: "Atharva Trichurkar",
    role: "Audience Member, Duo Club",
    stars: 5,
    text: "His opening act at Duo Club in Ahilyanagar totally set the stage on fire. The crowd was absolutely hyped by the time the main act came on.",
    featured: false,
  },
  {
    name: "Lohita Choudhary",
    role: "Cultural Head, Sinhgad",
    stars: 5,
    text: "Absolutely loved his energy anchoring at the Sinhgad Cultural Center. He kept the vibe lively and his impromptu crowd work was super funny!",
    featured: true,
  },
  {
    name: "Shreyas Lature",
    role: "Comedy Enthusiast",
    stars: 5,
    text: "Saw his standup while he was the opening act for Marathi Kapil in Pune. I literally couldn't stop laughing. The absolute best way to start the show.",
    featured: false,
  },
  {
    name: "Shivsamb Budage",
    role: "Fellow Comic, Pune",
    stars: 5,
    text: "Sharing lineups with him at open mics in Pune is always a treat. It's crazy how naturally he commands a room, turning even quiet nights into a riot.",
    featured: true,
  },
  {
    name: "Chinmay Bhalerao",
    role: "Attendee, Malegaon Expo",
    stars: 5,
    text: "I was at the Maruti Suzuki Arena Expo in Malegaon, and honestly, his standup was the best part of the whole event. Extremely interactive and hilarious.",
    featured: false,
  },
  {
    name: "Vishal Kumawat",
    role: "Manager, Duo Club",
    stars: 5,
    text: "We brought him in to open at Duo Club in Ahilyanagar and the audience loved him! Looking forward to having him headline for us very soon.",
    featured: true,
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {reviews.map((r, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
            className={`p-7 border transition-colors duration-300 ${r.featured
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
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
