"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";

interface VideoCardProps {
  src: string;
  title: string;
  subtitle: string;
}

function VideoCard({ src, title, subtitle }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div 
      className="relative w-full aspect-[9/16] md:aspect-[4/5] lg:aspect-[9/16] rounded-[2rem] overflow-hidden bg-[#111] border border-white/5 group cursor-pointer shadow-2xl"
      onClick={toggleMute}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Gradient Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:from-black group-hover:opacity-100 pointer-events-none"></div>

      {/* Audio UI Toggle Indicator */}
      <div className="absolute top-6 right-6 z-20 backdrop-blur-md bg-black/40 rounded-full p-2.5 border border-white/10 shadow-lg group-hover:border-primary/50 transition-colors">
         {isMuted ? (
           <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
           </svg>
         ) : (
           <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
           </svg>
         )}
      </div>

      {/* Typography Overlay */}
      <div className="absolute bottom-0 left-0 w-full p-8 z-10 text-left">
         <h3 className="text-xl lg:text-2xl font-headline font-black text-white mb-2 drop-shadow-md group-hover:text-primary transition-colors">{title}</h3>
         <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-gray-400">{subtitle}</p>
      </div>

      {/* Focus Ring on un-mute */}
      {!isMuted && (
        <div className="absolute inset-0 border-2 border-primary rounded-[2rem] pointer-events-none z-30"></div>
      )}
    </div>
  );
}

export default function GalleryPreview() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as any 
      } 
    }
  };

  const videos = [
    { src: "/video1.mp4", title: "The \"Corporate Slide\" Rant", subtitle: "Live from Mumbai Special" },
    { src: "/video1.mp4", title: "Crowd Work: The Auditor", subtitle: "Dubai Opera House" },
    { src: "/video1.mp4", title: "The Pivot Realized", subtitle: "London Short Tour" },
  ];

  return (
    <section id="gallery" className="relative w-full py-24 md:py-32 bg-gradient-to-b from-[#050505] to-[#0A0A0A] flex flex-col items-center">
       <motion.div 
         variants={containerVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, margin: "-100px" }}
         className="w-full max-w-[1400px] px-6 lg:px-12 flex flex-col items-center relative z-10"
       >
          <motion.div variants={itemVariants} className="text-center mb-16 md:mb-20">
             <h2 className="font-headline text-5xl md:text-6xl font-black text-white tracking-tighter mb-4">
               Moments in <span className="text-primary">Motion</span>
             </h2>
             <p className="text-gray-400 text-sm tracking-widest uppercase font-bold max-w-sm mx-auto">
               Tap to hear the crowd roar.
             </p>
          </motion.div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full mb-16 md:mb-20">
             {videos.map((vid, idx) => (
                <motion.div key={idx} variants={itemVariants}>
                   <VideoCard src={vid.src} title={vid.title} subtitle={vid.subtitle} />
                </motion.div>
             ))}
          </div>

          {/* View Full Gallery Box Button */}
          <motion.div variants={itemVariants}>
             <Link href="/sets" className="group flex items-center justify-center gap-4 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/30 px-10 py-5 rounded-2xl transition-all duration-300">
                <span className="text-sm font-bold tracking-widest uppercase text-white transition-colors">
                  View Full Gallery
                </span>
                <svg className="w-5 h-5 text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
             </Link>
          </motion.div>

       </motion.div>
    </section>
  );
}
