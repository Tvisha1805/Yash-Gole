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
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col items-end justify-start md:justify-between pt-4 md:pt-12 pb-10 md:pb-24 overflow-hidden bg-[#0A0A0A]">

      {/* Background Image Container */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
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
          className="object-cover object-[25%_top] md:object-[left_center] pointer-events-none filter brightness-[0.7] md:brightness-90 contrast-[1.1]"
        />
        {/* Aggressive focal gradient to ground the elements */}
        <div className="absolute inset-x-0 bottom-0 h-[70vh] bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent z-10 w-full pointer-events-none"></div>
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#0A0A0A]/80 to-transparent"></div>
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-transparent via-[#0A0A0A]/20 to-[#0A0A0A]/90"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col items-end text-right px-6 sm:px-12 md:px-20 lg:px-32 w-full flex-grow h-full"
      >
        {/* Brand & Name Group - Moves Up on Desktop */}
        <div className="flex flex-col items-end w-full mb-auto mt-0">
          <motion.div 
            variants={itemVariants} 
            className="relative group mb-6 md:mb-8 transition-all duration-500"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative text-secondary text-[11px] sm:text-sm font-black tracking-[0.3em] uppercase flex items-center justify-center md:justify-end gap-4 w-full">
              <span className="hidden md:inline-block w-8 h-[1px] bg-secondary/50"></span>
              <span className="drop-shadow-lg">Stand-up Comedian &bull; Corporate Host</span>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants} 
            className="font-headline text-[3.8rem] sm:text-[8rem] md:text-[8rem] lg:text-[10rem] xl:text-[13rem] font-black leading-[0.85] tracking-[-0.04em] mb-12 md:mb-0 uppercase w-full max-w-[900px] md:max-w-none transform md:translate-x-4"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-[#fafafa] to-white/40 drop-shadow-2xl">
              YASH
            </span>
            <span className="block text-primary drop-shadow-[0_0_45px_rgba(227,255,0,0.35)] filter brightness-110">
              GOLE<span className="text-[0.4em] text-primary ml-1">.</span>
            </span>
          </motion.h1>
        </div>

        {/* Buttons Layer - Stays Centered/Bottom */}
        <motion.div 
          variants={itemVariants} 
          className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4 md:gap-6 w-full mt-auto md:mb-12 lg:mb-24"
        >
          <Link 
            href="/#bookings" 
            className="group relative overflow-hidden bg-primary text-black font-black px-10 py-4 rounded-sm transition-all shadow-[0_0_25px_rgba(227,255,0,0.2)] hover:shadow-[0_0_40px_rgba(227,255,0,0.4)] hover:-translate-y-1 active:translate-y-0 uppercase tracking-widest text-[13px] w-full sm:w-auto min-w-[210px] text-center"
          >
            <span className="relative z-10">Book Now</span>
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out"></div>
          </Link>
          
          <Link 
            href="/#gallery" 
            className="backdrop-blur-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 text-white font-bold px-10 py-4 rounded-sm transition-all uppercase tracking-widest text-[13px] flex items-center justify-center w-full sm:w-auto min-w-[210px] shadow-2xl"
          >
            Watch Sets
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
