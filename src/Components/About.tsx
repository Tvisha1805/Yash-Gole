"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about" className="relative w-full py-24 md:py-32 flex items-center justify-center bg-[#050505] overflow-hidden min-h-screen scroll-mt-24">
      
      {/* Massive Typographical Background Backdrop */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-transparent whitespace-nowrap opacity-10 uppercase font-headline tracking-tighter select-none pointer-events-none" style={{ WebkitTextStroke: "2px rgba(227,255,0,0.7)"}}>
         YASH GOLE YASH GOLE
      </h1>
      
      {/* Glowing Ambient Lights */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-secondary/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 relative z-10 items-center"
      >
        
        {/* Left Column: The Story */}
        <div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1">
           <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
              <span className="w-10 h-[2px] bg-primary rounded-full drop-shadow-[0_0_5px_rgba(227,255,0,0.8)]"></span>
              <span className="text-primary font-headline font-black tracking-widest text-xs lg:text-sm uppercase drop-shadow">The Comedian</span>
           </motion.div>
           
           <motion.h2 variants={itemVariants} className="font-headline text-5xl sm:text-6xl font-black text-white leading-[0.95] uppercase tracking-tighter mb-8">
              Every Stage <br />
              <span className="text-secondary drop-shadow-[0_0_20px_rgba(210,173,5,0.3)] italic">A Playground.</span>
           </motion.h2>

           <motion.div variants={itemVariants} className="relative p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl overflow-hidden group hover:border-primary/30 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <p className="text-gray-300 font-body text-base lg:text-lg leading-relaxed relative z-10 font-light">
                &ldquo;From cracking raw jokes about college life at packed fests to bringing sharp wit to elite corporate boardrooms and wedding celebrations... I bring energy, immaculate timing, and absolute connection wherever I go.&rdquo;
              </p>
           </motion.div>
        </div>

        {/* Center Column: The Visual Masterpiece */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-4 flex justify-center order-1 lg:order-2 perspective-[1000px] mt-8 lg:mt-0"
        >
          <div className="relative w-full max-w-[380px] lg:max-w-[420px] aspect-[1/1.4] transform-style-3d group cursor-crosshair">
             {/* The Sleek Morphing Pill Shaped Frame */}
             <div className="w-full h-full rounded-[100px] lg:rounded-[180px] overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative z-10 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:rounded-3xl hover:border-primary/50 hover:shadow-[0_0_80px_rgba(227,255,0,0.2)]">
                <Image 
                  src="/about-portrait.JPG"
                  alt="Yash Gole Profile"
                  fill 
                  quality={100}
                  unoptimized
                  sizes="(max-width: 768px) 380px, (max-width: 1024px) 420px, 500px"
                  className="object-cover object-[center_top] group-hover:scale-110 transition-transform duration-[2s] ease-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"></div>
             </div>
             
             {/* Glowing Reactive Ring Behind Pill */}
             <div className="absolute inset-[-15px] rounded-[100px] lg:rounded-[180px] bg-gradient-to-tr from-primary/40 to-secondary/40 blur-2xl -z-10 opacity-30 group-hover:opacity-70 group-hover:rounded-3xl transition-all duration-[800ms]"></div>
          </div>
        </motion.div>

        {/* Right Column: The Credentials Grid */}
        <div className="lg:col-span-4 flex flex-col justify-center gap-6 order-3 mt-8 lg:mt-0">
           
           {/* Huge Bento Card 1: 5000+ Crowd */}
           <motion.div variants={itemVariants} className="w-full bg-gradient-to-b from-[#111] to-[#0A0A0A] border border-white/5 rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 group shadow-2xl relative overflow-hidden cursor-default">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="flex justify-between items-center mb-4 relative z-10">
                <span className="text-4xl filter drop-shadow">🌟</span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-primary transition-colors">Max Live Crowd</span>
             </div>
             <div className="text-6xl font-black font-headline text-white group-hover:text-primary drop-shadow-[0_0_15px_rgba(227,255,0,0)] group-hover:drop-shadow-[0_0_15px_rgba(227,255,0,0.3)] transition-all">
                5,000<span className="text-primary">+</span>
             </div>
           </motion.div>

           {/* Huge Bento Card 2: 5+ Years */}
           <motion.div variants={itemVariants} className="w-full bg-gradient-to-b from-[#111] to-[#0A0A0A] border border-white/5 rounded-3xl p-8 hover:border-secondary/50 transition-all duration-500 hover:-translate-y-2 group shadow-2xl relative overflow-hidden cursor-default">
             <div className="absolute -right-6 -bottom-6 opacity-10 text-secondary group-hover:rotate-12 transition-transform duration-700">
               <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
             </div>
             <div className="flex justify-between items-center mb-4 relative z-10">
                <span className="text-3xl text-secondary">🎙️</span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 group-hover:text-white transition-colors">Experience</span>
             </div>
             <div className="text-5xl font-black font-headline text-white group-hover:text-secondary transition-colors relative z-10 tracking-tight">
                5+ YEARS
             </div>
           </motion.div>

           {/* Sleek Twin Footer Cards Row */}
           <div className="grid grid-cols-2 gap-6">
              <motion.div variants={itemVariants} className="bg-[#111]/50 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/[0.05] transition-colors hover:-translate-y-1 cursor-default">
                 <span className="text-gray-500 text-[9px] uppercase tracking-widest font-bold mb-1">Location</span>
                 <span className="text-white font-black text-2xl font-headline tracking-wider">Pune</span>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-[#111]/50 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-white/[0.05] transition-colors hover:-translate-y-1 cursor-default">
                 <span className="text-gray-500 text-[9px] uppercase tracking-widest font-bold mb-1">Age</span>
                 <span className="text-white font-black text-2xl font-headline tracking-wider">20</span>
              </motion.div>
           </div>
           
        </div>
      </motion.div>
    </section>
  );
}
