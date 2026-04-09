"use client";
import { motion } from "framer-motion";

export default function Marquee() {
  const marqueeItems = [
    { text: "STAND-UP COMEDIAN", solid: true },
    { text: "COLLEGE FESTS", solid: false },
    { text: "CORPORATE HOST", solid: true },
    { text: "CLUB SHOWS", solid: false },
    { text: "CROWD WORK EXPERT", solid: true },
    { text: "WEDDING ANCHOR", solid: false },
  ];
  
  // We double the raw items to guarantee seamless infinite scrolling mathematics
  const rawSpacedItems = [...marqueeItems, ...marqueeItems];
  // Then we render two full duplicate sets side-by-side to scroll through
  const renderItems = [...rawSpacedItems, ...rawSpacedItems];

  return (
    <div className="w-full bg-[#050505] py-8 md:py-12 overflow-hidden flex whitespace-nowrap border-y border-white/5 relative z-30 shrink-0">
      {/* Edge gradient masks for smooth entering/exiting */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 md:w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

      <motion.div 
        className="flex items-center gap-12 pl-12"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
      >
        {renderItems.map((item, i) => (
           <h2 
             key={i} 
             className={`flex items-center font-headline font-black text-4xl md:text-6xl lg:text-7xl uppercase tracking-wider shrink-0 ${
               item.solid 
                 ? "text-primary drop-shadow-[0_0_20px_rgba(227,255,0,0.3)]" 
                 : "text-transparent"
             }`}
             style={!item.solid ? { WebkitTextStroke: "1px rgba(210,173,5,0.7)" } : {}}
           >
              {item.text}
              <span className="text-secondary opacity-50 ml-12 shrink-0 hidden md:inline-block">✸</span>
           </h2>
        ))}
      </motion.div>
    </div>
  );
}
