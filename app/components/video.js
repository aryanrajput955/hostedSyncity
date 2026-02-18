"use client";

import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";
import Slider from "react-slick";
import { useState, useEffect } from "react";

// Video data
const videos = [
  {
    src: "/img/2.mp4",
    poster: "/wedding-moment-1-poster.png",
    alt: "Wedding Ceremony Highlight"
  },
  {
    src: "/img/6.mp4",
    poster: "/wedding-moment-2-poster.png",
    alt: "Reception Dance Moment"
  },
  {
    src: "/img/3.mp4",
    poster: "/wedding-moment-3-poster.png",
    alt: "Cultural Celebration"
  },
  {
    src: "/img/5.mp4",
    poster: "/wedding-moment-4-poster.png",
    alt: "Scenic Venue Setup"
  }
];

// Slick settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  customPaging: () => (
    <div className="w-2 h-2 bg-white/20 rounded-full mx-1 transition-all duration-300 hover:bg-[#E5E4E2] hover:scale-125" />
  ),
  dotsClass: "slick-dots custom-dots bottom-[-40px]"
};

export default function PortraitVideoSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative py-20 md:py-32 bg-primary overflow-hidden">
      {/* Cinematic Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#5e0000] to-black/40 opacity-90"></div>

      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/bg2.png')] bg-repeat mix-blend-overlay"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-10 right-10 w-2 h-2 bg-white/10 rounded-full blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
          >
            <Star className="w-3 h-3 text-[#E5E4E2] fill-[#E5E4E2]" />
            <span className="text-[#E5E4E2] text-xs font-medium tracking-[0.2em] uppercase">Captured Moments</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-light text-white"
          >
            Witness the <span className="font-serif italic text-[#E5E4E2]">Magic</span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#E5E4E2] to-transparent mx-auto"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-white/80 font-light max-w-lg mx-auto leading-relaxed"
          >
            Glimpses of love, laughter, and unforgettable celebrations spanning across the majestic valleys of Uttarakhand.
          </motion.p>
        </div>

        {/* Video Gallery */}
        {isMobile ? (
          <div className="pb-10">
            <Slider {...sliderSettings}>
              {videos.map((video, i) => (
                <div key={i} className="px-4 py-4">
                  <div className="relative aspect-[9/16] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                    <video
                      className="w-full h-full object-cover"
                      poster={video.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={video.src} type="video/mp4" />
                    </video>
                    {/* Gloss Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-6">
            {videos.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                {/* Premium Card Container */}
                <div className="relative aspect-[9/16] rounded-none overflow-hidden bg-black shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)]">

                  {/* Decorative Border */}
                  <div className="absolute inset-0 border border-white/10 z-20 transition-colors duration-500 group-hover:border-[#E5E4E2]/40"></div>

                  <video
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                    poster={video.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10 transition-opacity duration-500 opacity-60 group-hover:opacity-80"></div>

                  {/* Play Icon Overlay */}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <style jsx global>{`
        .custom-dots li button:before {
          font-size: 8px;
          color: white;
          opacity: 0.2;
        }
        .custom-dots li.slick-active button:before {
          color: #E5E4E2;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}