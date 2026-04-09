import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import GalleryPreview from "../components/GalleryPreview";
import PhotoGallery from "../components/PhotoGallery";
import EventHighlights from "../components/EventHighlights";
import ReviewsSection from "../components/ReviewsSection";
import BookingSection from "../components/BookingSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral flex flex-col overflow-x-hidden relative">
      {/* Decorative stars / particles in background */}
      <div className="absolute top-0 bottom-0 left-0 right-0 pointer-events-none opacity-40 mix-blend-screen z-20">
        <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-[40%] left-[30%] w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
        <div className="absolute top-[70%] left-[5%] w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-[30%] right-[20%] w-2 h-2 bg-gray-500 rounded-full blur-[1px]"></div>
        <div className="absolute top-[80%] right-[10%] w-1 h-1 bg-white rounded-full"></div>
      </div>

      <Hero />
      <Marquee />
      <About />
      <GalleryPreview />
      <EventHighlights />
      <PhotoGallery />
      
      <section id="reviews" className="w-full bg-neutral py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <ReviewsSection />
        </div>
      </section>

      <section id="bookings" className="w-full bg-neutral py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <BookingSection />
        </div>
      </section>
    </main>
  );
}
