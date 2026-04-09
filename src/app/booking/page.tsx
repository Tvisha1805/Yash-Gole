"use client";
import BookingSection from "../../components/BookingSection";
import { motion } from "framer-motion";

export default function BookingPage() {
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
              <span className="text-white">Secure Your</span>
              <br />
              <span className="text-primary">Spot</span>
            </h1>
            <p className="text-gray-500 text-sm mt-5 max-w-md">
              Ready to elevate your event with high-octane comedy? 
              Fill out the inquiry form below and let's make it happen.
            </p>
          </motion.div>

          <BookingSection />
        </div>
      </section>
    </main>
  );
}
