"use client";
import ReviewsSection from "../../Components/ReviewsSection";
import { motion } from "framer-motion";

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-neutral scroll-smooth">
      <section className="w-full py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* ── Section Title ───────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }}
            className="mb-20"
          >
            <h1 className="font-headline text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
              <span className="text-white">What People</span>
              <br />
              <span className="text-primary">Are Saying</span>
            </h1>
            <p className="text-gray-500 text-sm mt-5 max-w-md">
              Real feedback from audiences and event organizers globally.
              The energy, the timing, and the laughs that define a Yash Gole show.
            </p>
          </motion.div>

          <ReviewsSection />
        </div>
      </section>
    </main>
  );
}
