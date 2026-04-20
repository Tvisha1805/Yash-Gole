"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-88px)] flex flex-col items-center justify-center md:items-end md:justify-center pt-8 md:pt-12 pb-24 overflow-hidden bg-[#0A0A0A]">

      {/* Background Image Container */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/bg.png"
          alt="Yash Gole Background"
          fill
          priority
          quality={100}
          unoptimized
          sizes="100vw"
          className="object-cover object-[35%_top] md:object-[left_center] pointer-events-none filter brightness-90 contrast-[1.15]"
        />
        {/* Seamless transition into next section via aggressive bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/90 to-transparent z-10 w-full pointer-events-none"></div>

        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0A0A0A]/60 to-transparent"></div>
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]/95"></div>
      </motion.div>

      {/* Foreground Text Box - Aligned to the Right/End */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col items-center md:items-end text-center md:text-right px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 w-full mt-auto pb-12 lg:pb-24"
      >
        <motion.div variants={itemVariants} className="text-secondary text-xs sm:text-sm md:text-base font-black tracking-[0.2em] mb-4 md:mb-6 uppercase flex items-center justify-center md:justify-end gap-3 md:gap-4 w-full drop-shadow-md">
          <span className="hidden md:inline-block w-12 h-[2px] bg-secondary"></span>
          Stand-up Comedian &bull; Corporate Host
        </motion.div>

        <motion.h1 variants={itemVariants} className="font-headline text-5xl sm:text-7xl md:text-[6rem] lg:text-[7.5rem] xl:text-[8rem] font-black leading-[0.95] md:leading-[0.9] tracking-tighter mb-6 md:mb-8 text-[#ededed] uppercase w-full max-w-[850px] md:max-w-none">
          YASH <br className="hidden min-[400px]:block" />
          <span className="min-[400px]:hidden">{" "}</span>
          <span className="text-primary drop-shadow-[0_0_35px_rgba(227,255,0,0.45)]">GOLE.</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-gray-300 opacity-90 text-base sm:text-lg md:text-xl font-body max-w-lg lg:max-w-2xl md:ml-auto mb-10 md:mb-12 leading-relaxed drop-shadow-lg px-2 md:px-0">
          Unleashing high-octane, unfiltered stand-up comedy that brings the house down.
          From slaying underground comedy clubs to bringing sharp wit to elite corporate boardrooms, Yash masters every stage.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4 md:gap-5 w-full">
          <Link href="/#bookings" className="bg-primary hover:bg-secondary text-black font-bold px-8 md:px-10 py-3.5 md:py-4 rounded transition-all shadow-[0_0_20px_rgba(227,255,0,0.3)] hover:shadow-[0_0_35px_rgba(210,173,5,0.5)] md:hover:-translate-y-0.5 uppercase tracking-[0.1em] text-xs sm:text-sm w-full sm:w-auto min-w-[200px] text-center">
            Book Now
          </Link>
          <Link href="/#gallery" className="bg-[#0A0A0A]/50 md:backdrop-blur-md border border-white/20 hover:border-primary hover:bg-[#0A0A0A] hover:text-primary text-[#ededed] font-bold px-8 md:px-10 py-3.5 md:py-4 rounded transition-all shadow-xl uppercase tracking-[0.1em] text-xs sm:text-sm flex items-center justify-center w-full sm:w-auto min-w-[200px]">
            Watch Sets
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
