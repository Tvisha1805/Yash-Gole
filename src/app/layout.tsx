import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "../Components/Navbar";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Yash Gole",
  description: "Stage & Boardroom Maestro. From corporate boardrooms to sold-out comedy clubs.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-neutral text-white font-body selection:bg-primary selection:text-black overflow-x-hidden">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}