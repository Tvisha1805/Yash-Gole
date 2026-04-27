"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Link from 'next/link';
import { title } from "node:process";

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
      className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden bg-[#111] border border-white/5 group cursor-pointer shadow-xl"
      onClick={toggleMute}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:from-black group-hover:opacity-100 pointer-events-none"></div>

      {/* Audio Icon Toggle */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 backdrop-blur-md bg-black/40 rounded-full p-2 border border-white/10 shadow-lg group-hover:border-primary/50 transition-colors">
        {isMuted ? (
          <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-primary drop-shadow-[0_0_10px_rgba(227,255,0,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full p-8 z-10 text-left">
        <h3 className="text-xl md:text-2xl font-headline font-black text-white mb-2 drop-shadow-md group-hover:text-primary transition-colors leading-[1.1]">{title}</h3>
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-gray-400 leading-tight">{subtitle}</p>
      </div>

      {!isMuted && <div className="absolute inset-x-0 bottom-0 top-1/2 border-x-4 border-b-4 border-primary/20 rounded-b-3xl pointer-events-none z-30 transition-all"></div>}
    </div>
  );
}

export default function GalleryPage() {
  const allVideos = [
    { src: "/video1.mp4", title: "The Corporate Rant", subtitle: "Pune" },
    { src: "/video2.mp4", title: "The Show Stopper", subtitle: "Sinhgad Cultural Center" },
    { src: "/video3.mp4", title: "The Peak Marathi Moment", subtitle: "Godam, Pune" },
    { src: "/video4.mp4", title: " The Subtle Shayar", subtitle: "Sinhgad CC" },
    { src: "/video5.mp4", title: "Marathi Kapil's Opening Act", subtitle: "Godam, Pune" },
    { src: "/video6.mp4", title: "The Name Changes Everything", subtitle: "Kasa Kaay Pune" },
    { src: "/video7.mp4", title: "Oppenheimer Vs Golmaal", subtitle: "Duo Club" },
    { src: "/video8.mp4", title: "The Mexican Waves", subtitle: "CC , Pune" },
    { src: "/video9.mp4", title: "FlashLights", subtitle: "Pune" },
    { src: "/video10.mp4", title: "FlashLights2", subtitle: "Pune" },
    { src: "/video11.mp4", title: "Prelude to Chaos ", subtitle: "Pune" },
    { src: "/video12.mp4", title: "The Subtle Shayar 2", subtitle: "Pune" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] pt-20 md:pt-24 pb-24 px-6 md:px-12 relative overflow-hidden">

      {/* Immersive Background Blur Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-[1500px] mx-auto relative z-10">

        {/* Page Header */}
        <div className="mb-14 md:mb-20 flex flex-col items-center md:items-start text-center md:text-left gap-4 md:gap-0 md:flex-row md:justify-between border-b border-white/5 pb-10">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-headline font-black text-white tracking-tighter mb-4 uppercase">
              THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#8C9E00]">GALLERY.</span>
            </h1>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] md:text-xs">
              Raw crowds, pure energy. Tap any set to unmute.
            </p>
          </div>

          <Link href="/#gallery" className="mt-6 md:mt-0 backdrop-blur-md bg-white/[0.03] border border-white/10 hover:border-primary/50 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:-translate-y-1 text-xs uppercase tracking-[0.2em] flex items-center gap-3">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Return Home
          </Link>
        </div>

        {/* Massive 4-Column Reels TikTok Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {allVideos.map((video, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
            >
              <VideoCard src={video.src} title={video.title} subtitle={video.subtitle} />
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
