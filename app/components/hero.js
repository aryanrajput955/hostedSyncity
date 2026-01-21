import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black py-24 md:py-0">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
      >
        <source src="/vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Sophisticated Dark Overlay */}
      {/* A clean, rich tint to ensure perfect text legibility without muddying the video */}
      <div className="absolute inset-0 z-10 bg-black/40"></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black/80"></div>

      {/* Main Content Wrapper - Centered & Symmetrical */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 flex-grow flex flex-col justify-center items-center text-center">

        {/* Eyebrow / Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 md:mb-8"
        >
          <span className="inline-block px-4 py-1.5 border border-[#E5E4E2]/30 rounded-full bg-black/20 backdrop-blur-sm text-[#E5E4E2] text-[10px] md:text-xs font-medium tracking-[0.3em] uppercase">
            Est. Uttarakhand • 2021
          </span>
        </motion.div>

        {/* Primary Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-6 md:mb-8"
        >
          Crafting <span className="italic text-[#E5E4E2]">Unforgettable</span><br className="hidden md:block" /> Moments
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-base md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed mb-8 md:mb-12"
        >
          Premier event planning and styling in the heart of Devbhoomi. We curate timeless celebrations with uncompromising excellence.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 md:gap-6"
        >
          <Link href="/contact">
            <button className="px-8 md:px-10 py-3 md:py-4 bg-[#E5E4E2] hover:bg-white text-primary text-xs md:text-sm font-medium tracking-widest uppercase transition-colors duration-300 min-w-[180px] md:min-w-[200px]">
              Start Journey
            </button>
          </Link>
          <Link href="/services">
            <button className="px-8 md:px-10 py-3 md:py-4 border border-white/30 hover:border-white hover:bg-white/5 text-white text-xs md:text-sm font-medium tracking-widest uppercase transition-all duration-300 min-w-[180px] md:min-w-[200px]">
              Our Services
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom Stats Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="relative md:absolute md:bottom-10 w-full z-20 mt-12 md:mt-0 pb-8 md:pb-0"
      >
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-center gap-8 md:gap-20">
          {[
            { label: "Celebrations", value: "500+" },
            { label: "Venues", value: "50+" },
            { label: "Excellence", value: "5 Years" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center relative group">
              <div className="text-2xl md:text-4xl font-serif text-[#E5E4E2] group-hover:text-white transition-colors duration-500">{stat.value}</div>
              <div className="text-[10px] md:text-xs text-white/40 tracking-[0.2em] uppercase mt-2 group-hover:text-white/60 transition-colors duration-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}