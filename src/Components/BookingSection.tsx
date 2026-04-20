"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const eventTypes = [
  "Corporate Gala",
  "Private Event",
  "Comedy Show",
  "Wedding",
  "College Festival",
  "Conference",
  "Other",
];

export default function BookingSection() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", eventType: "", eventDate: "", details: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const WHATSAPP_NUMBER = "917507146646";
  const EMAIL = "yashgoleworks@gmail.com";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    setTimeout(() => {
      const subject = encodeURIComponent(`Booking Inquiry: ${form.eventType}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nEvent Type: ${form.eventType}\nDate: ${form.eventDate}\n\nDetails:\n${form.details}`
      );
      const whatsappMsg = encodeURIComponent(
        `Hi! New Booking Inquiry:\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nEvent: ${form.eventType}\nDate: ${form.eventDate}\nDetails: ${form.details}`
      );

      // Open Mail client in a new tab to ensure it successfully pops up
      window.open(`mailto:${EMAIL}?subject=${subject}&body=${body}`, '_blank');

      // Open WhatsApp in a new tab
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`, '_blank');

      setStatus("success");
      setForm({ name: "", email: "", phone: "", eventType: "", eventDate: "", details: "" });
    }, 600);
  };

  const whatsappMsg = encodeURIComponent(
    `Hi Yash! I'd like to inquire about a booking.\nName: ${form.name}\nEvent: ${form.eventType}\nDate: ${form.eventDate}`
  );

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as any }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
      >
        {/* Left — Info */}
        <div>
          <p className="text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-4">
            — Get In Touch
          </p>
          <h2 className="font-headline text-5xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4">
            Secure Your <span className="text-primary">Spot</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-sm">
            Ready to elevate your event with high-octane comedy?
            Fill out the form below and let's make it happen.
          </p>

          {/* Contact Links */}
          <div className="flex flex-col gap-4 mb-10">
            {/* Email */}
            <a
              href={`mailto:${EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 border border-white/8 hover:border-primary/40 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-[9px] font-black tracking-[0.2em] uppercase text-gray-500 mb-0.5">Email</p>
                <p className="text-sm font-bold text-white group-hover:text-primary transition-colors">{EMAIL}</p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 border border-white/8 hover:border-[#25D366]/40 bg-white/[0.02] hover:bg-[#25D366]/5 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-[9px] font-black tracking-[0.2em] uppercase text-gray-500 mb-0.5">WhatsApp</p>
                <p className="text-sm font-bold text-white group-hover:text-[#25D366] transition-colors">{WHATSAPP_NUMBER.replace('91', '+91 ')}</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/yashgolelive"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 border border-white/8 hover:border-[#E1306C]/40 bg-white/[0.02] hover:bg-[#E1306C]/5 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-[#E1306C]/10 border border-[#E1306C]/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#E1306C]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </div>
              <div>
                <p className="text-[9px] font-black tracking-[0.2em] uppercase text-gray-500 mb-0.5">Instagram</p>
                <p className="text-sm font-bold text-white group-hover:text-[#E1306C] transition-colors">@yashgolelive</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 p-4 border border-white/8 bg-white/[0.02]">
              <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[9px] font-black tracking-[0.2em] uppercase text-gray-500 mb-0.5">Based In</p>
                <p className="text-sm font-bold text-white">Pune, India</p>
              </div>
            </div>
          </div>

          <div className="border-l-2 border-primary/50 pl-4">
            <p className="text-[9px] font-black tracking-[0.2em] uppercase text-primary mb-1">Performance Guarantee</p>
            <p className="text-gray-500 text-xs leading-relaxed">
              Every booking includes a dedicated production manager, custom soundcheck,
              and a performance tailored specifically to your venue's acoustics and lighting profile.
            </p>
          </div>
        </div>

        {/* Right — Form */}
        <div>
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-20 text-center border border-primary/30 bg-primary/5"
              >
                <div className="w-16 h-16 bg-primary flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-headline text-3xl font-black text-white uppercase tracking-tighter mb-3">
                  Inquiry Received!
                </h3>
                <p className="text-gray-400 text-sm max-w-xs">
                  We'll get back to you within 24 hours. Check your email or WhatsApp for a follow-up.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-[10px] font-black tracking-[0.2em] uppercase text-primary hover:underline"
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-black tracking-[0.2em] uppercase text-gray-500">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      suppressHydrationWarning={true}
                      className="bg-white/[0.04] border border-white/10 focus:border-primary/60 text-white text-sm px-4 py-3 outline-none placeholder:text-gray-600 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-black tracking-[0.2em] uppercase text-gray-500">Email Address *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      suppressHydrationWarning={true}
                      className="bg-white/[0.04] border border-white/10 focus:border-primary/60 text-white text-sm px-4 py-3 outline-none placeholder:text-gray-600 transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black tracking-[0.2em] uppercase text-gray-500">Phone / WhatsApp</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    suppressHydrationWarning={true}
                    className="bg-white/[0.04] border border-white/10 focus:border-primary/60 text-white text-sm px-4 py-3 outline-none placeholder:text-gray-600 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-black tracking-[0.2em] uppercase text-gray-500">Event Type *</label>
                    <select
                      name="eventType"
                      value={form.eventType}
                      onChange={handleChange}
                      required
                      suppressHydrationWarning={true}
                      className="bg-white/[0.04] border border-white/10 focus:border-primary/60 text-white text-sm px-4 py-3 outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-[#111]">Select type</option>
                      {eventTypes.map((t) => (
                        <option key={t} value={t} className="bg-[#111]">{t}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] font-black tracking-[0.2em] uppercase text-gray-500">Event Date</label>
                    <input
                      name="eventDate"
                      type="date"
                      value={form.eventDate}
                      onChange={handleChange}
                      suppressHydrationWarning={true}
                      className="bg-white/[0.04] border border-white/10 focus:border-primary/60 text-white text-sm px-4 py-3 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[9px] font-black tracking-[0.2em] uppercase text-gray-500">Additional Details</label>
                  <textarea
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your event — venue, expected audience size, theme..."
                    suppressHydrationWarning={true}
                    className="bg-white/[0.04] border border-white/10 focus:border-primary/60 text-white text-sm px-4 py-3 outline-none placeholder:text-gray-600 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-primary text-black font-black text-[10px] tracking-[0.3em] uppercase py-4 hover:bg-[#caef00] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting…
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-gray-600 text-[9px] tracking-widest uppercase mt-1">
                  By submitting this form you agree to our privacy policy.
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
