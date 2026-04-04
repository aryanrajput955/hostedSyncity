"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CloudinaryImage } from "./CloudinaryMedia";
import { ArrowRight, Star } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-primary">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <CloudinaryImage
          src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772971372/bg3_phy7xs.jpg"
          alt="Luxury event and wedding planning background in Uttarakhand"
          fill
          priority={false}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-primary to-transparent z-10"></div>
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-primary to-transparent z-10"></div>

      {/* Animated Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container relative z-20 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E5E4E2]/30 bg-[#E5E4E2]/10 backdrop-blur-sm mx-auto">
            <Star className="w-4 h-4 text-[#E5E4E2] fill-[#E5E4E2]" />
            <span className="text-[#E5E4E2] text-sm font-medium tracking-widest uppercase">
              Start Your Journey
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight">
            Ready to Create an
            <span className="block text-[#E5E4E2] italic font-light mt-2">
              Unforgettable Experience?
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            Let's turn your vision into a masterpiece. From intimacy to grandeur,
            Syncity crafts celebrations that linger in hearts forever.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Link href="/contact/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-[#E5E4E2] text-primary min-w-[200px] overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 font-medium tracking-wide">
                  Begin Planning
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </motion.button>
            </Link>

            <Link href="/services/">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group px-8 py-4 border border-white/30 text-white min-w-[200px] hover:bg-white/10 transition-all duration-300"
              >
                <span className="font-medium tracking-wide">View Services</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Geometric Accents */}
      <div className="absolute left-10 bottom-20 opacity-20 animate-pulse delay-700">
        <Star className="w-12 h-12 text-[#F4E4BC]" />
      </div>
      <div className="absolute right-10 top-20 opacity-20 animate-pulse">
        <Star className="w-8 h-8 text-[#F4E4BC]" />
      </div>
    </section>
  );
}