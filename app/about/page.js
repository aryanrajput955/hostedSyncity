"use client";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "../components/ui/cards";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart, MapPin, Users, Sparkles, MessageSquare, Leaf, Award, Target, Star, ArrowRight } from "lucide-react";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <div className="min-h-screen bg-white relative overflow-hidden" ref={ref}>
      {/* Hero Section - "The Framed Masterpiece" */}
      <section className="min-h-screen md:h-screen bg-primary relative overflow-hidden flex items-center pt-20 pb-10">
        {/* Background Texture/Noise (Optional) */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Column: Narrative */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="space-y-8 lg:space-y-10"
            >
              <motion.div variants={fadeInLeft} className="hidden :inline-flex items-center gap-3">
                <div className="h-px w-12 bg-[#E5E4E2]/50"></div>
                <span className="text-sm font-medium text-[#E5E4E2] tracking-[0.2em] uppercase">Est. Uttarakhand • 2021</span>
              </motion.div>

              <motion.div variants={fadeInLeft} className="pt-10 lg:pt-0 relative">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1]">
                  A Legacy of<br />
                  <span className="italic text-[#E5E4E2]">Excellence</span>
                </h1>
              </motion.div>

              <motion.p
                variants={fadeInLeft}
                className="text-xl md:text-xl text-white/80 leading-relaxed font-light max-w-lg border-l border-white/20 pl-6"
              >
                Curating timeless celebrations amidst the sacred majesty of the Himalayas. Where your vision meets our precision.
              </motion.p>
            </motion.div>

            {/* Right Column: The Framed Masterpiece */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={scaleIn}
              className="relative h-[500px] lg:h-[650px] w-full flex justify-center lg:justify-end"
            >
              {/* Floating Glass Frame */}
              <div className="relative h-full w-full max-w-md p-4 border border-white/20 bg-white/5 backdrop-blur-sm rounded-t-[300px] rounded-b-[20px] shadow-2xl overflow-hidden group">

                {/* Inner Image Container */}
                <div className="relative h-full w-full rounded-t-[280px] rounded-b-[10px] overflow-hidden">
                  <Image
                    src="/elegant-destination-wedding-in-uttarakhand-mountai.png"
                    alt="Scenic Mountain Wedding"
                    fill
                    className="object-cover transition-transform duration-[2s] ease-in-out group-hover:scale-110"
                    priority
                  />
                  {/* Subtle Overlay */}
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700"></div>
                </div>

                {/* Floating Badge on Frame */}
                <div className="absolute bottom-8 -left-6 md:-left-12 bg-[#E5E4E2] text-primary px-6 py-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 fill-primary" />
                    <div>
                      <p className="font-serif font-bold text-lg leading-none">500+</p>
                      <p className="text-[10px] uppercase tracking-wider font-medium">Events Crafted</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-24 h-24 border border-white/10 rounded-full animate-spin-slow opacity-50"></div>
              <div className="absolute bottom-20 -right-4 w-12 h-12 bg-[#E5E4E2]/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision / Genesis - Light Theme */}
      <section className="py-24 px-6 relative z-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="lg:col-span-5 relative group"
            >
              <div className="relative p-4 md:p-6 border border-[#E5E4E2] rounded-t-[200px] border-b-0 group-hover:border-primary/20 transition-colors duration-500">
                {/* Double Border illusion */}
                <div className="absolute inset-2 border border-primary/5 rounded-t-[190px] border-b-0 pointer-events-none"></div>

                <div className="relative overflow-hidden rounded-t-[180px] h-[500px] w-full shadow-2xl">
                  <Image
                    src="/happy-couple-celebrating-successful-wedding-in-mou.png"
                    alt="Syncity Founders"
                    fill
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>

                {/* Floating Quote */}
                <div className="absolute bottom-12 -right-6 md:-right-12 bg-white/95 backdrop-blur shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-6 md:p-8 max-w-xs border-l-4 border-primary">
                  <p className="font-serif text-primary italic text-lg leading-relaxed">
                    "Every challenge is an opportunity to create something extraordinary."
                  </p>
                  <p className="text-xs font-bold text-neutral-400 mt-4 uppercase tracking-widest">The Founders</p>
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-7 space-y-8"
            >
              <motion.div variants={fadeInUp}>
                <Badge className="mb-6 bg-[#F5F5F5] text-neutral-600 border-neutral-200">Our Genesis</Badge>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary leading-tight">
                  Excellence Born from<br />
                  <span className="italic text-primary/60">Experience</span>
                </h2>
              </motion.div>

              <motion.div variants={fadeInUp} className="space-y-6 text-lg leading-relaxed text-neutral-600 font-light">
                <p>
                  Syncity emerged from a transformative moment—our own wedding planning journey in the mountains of Uttarakhand. When vendors vanished and plans crumbled weeks before our celebration, we discovered our true calling.
                </p>
                <p>
                  Rather than surrender to chaos, we orchestrated a flawless celebration that exceeded our dreams. This pivotal experience became our foundation—a commitment to ensuring no couple faces such uncertainty.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="pt-8 grid grid-cols-2 gap-8 border-t border-neutral-100">
                <div>
                  <h4 className="text-4xl font-serif text-primary mb-2">5+</h4>
                  <p className="text-sm uppercase tracking-wider text-neutral-400">Years Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl font-serif text-primary mb-2">100%</h4>
                  <p className="text-sm uppercase tracking-wider text-neutral-400">Success Rate</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION & VALUES - "The Divided Editorial Grid" */}
      <section className="py-24 px-6 md:px-12 relative z-10 bg-[#F9F9F9] overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="bg-white border border-neutral-200 shadow-xl"
          >
            {/* Mission Header Block - Top Cell */}
            <div className="p-10 md:py-16 md:px-20 text-center border-b border-neutral-200 bg-white relative overflow-hidden group">
              {/* Subtle Corner Accents */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary/5 rounded-tr-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <motion.div variants={fadeInUp} className="relative z-10">
                <span className="text-xs font-semibold text-[#D4AF37] tracking-[0.2em] uppercase mb-6 block">Our Commitment</span>
                <h2 className="text-3xl md:text-5xl font-serif font-medium text-primary leading-tight max-w-4xl mx-auto">
                  "To craft extraordinary celebrations that honor your vision, embrace the sacred majesty of the Himalayas, and deliver uncompromising excellence."
                </h2>
              </motion.div>
            </div>

            {/* Values Grid - Bordered Cells */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
              {[
                {
                  icon: Sparkles,
                  title: "Precision in Detail",
                  desc: "Meticulous attention to the micro-moments that define perfection."
                },
                {
                  icon: MessageSquare,
                  title: "Transparent Dialogue",
                  desc: "Crystal clear communication building unshakeable trust."
                },
                {
                  icon: Leaf,
                  title: "Sustainable Luxury",
                  desc: "Opulence that respects and preserves our pristine environment."
                },
                {
                  icon: MapPin,
                  title: "Local Mastery",
                  desc: "Deep-rooted expertise ensuring authentic Himalayan experiences."
                },
                {
                  icon: Target,
                  title: "Swift Solutions",
                  desc: "Proactive problem-solving that anticipates before you even ask."
                },
                {
                  icon: Heart,
                  title: "Joyful Spirit",
                  desc: "Infusing every interaction with warmth, passion, and genuine care."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="p-10 md:p-12 group hover:bg-neutral-50 transition-colors duration-300 relative overflow-hidden"
                >
                  {/* Hover Top Border Accent */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

                  <div className="flex flex-col h-full justify-between gap-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-100 group-hover:bg-[#E5E4E2] transition-colors text-primary">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-primary mb-3 bg-gradient-to-r from-primary to-primary bg-[length:0%_1px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_1px] transition-all duration-500 pb-1 inline-block">
                        {item.title}
                      </h3>
                      <p className="text-neutral-500 text-sm leading-relaxed font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* MEET THE TEAM - "The Curators" (Light Platinum Theme) */}
      <section className="py-24 px-6 md:px-12 bg-[#F9F9F9] relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 bg-white">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-neutral-500 tracking-[0.2em] uppercase">Leadership</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-primary">
              Meet The <span className="italic text-[#897A81]">Curators</span>
            </h2>
            <div className="w-24 h-1 bg-[#E5E4E2] mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
            {[
              {
                name: "Manik",
                role: "Founder & Lead Planner",
                img: "/img/img.jpg",
                bio: "The visionary who translates dreams into architectural realities."
              },
          
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                {/* Portrait Frame */}
                <div className="relative p-3 border border-[#E5E4E2] bg-white shadow-xl rotate-0 group-hover:rotate-1 transition-transform duration-500">
                  <div className="absolute inset-[4px] border border-primary/10 pointer-events-none"></div>
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 grayscale group-hover:grayscale-0 transition-all duration-700">
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    {/* Overlay for Name */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <p className="text-white/90 font-light italic">{member.bio}</p>
                    </div>
                  </div>
                </div>

                {/* Info Below */}
                <div className="mt-8 text-center space-y-2">
                  <h3 className="text-3xl font-serif text-primary">{member.name}</h3>
                  <p className="text-sm font-medium uppercase tracking-widest text-neutral-500">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - "Royal Invitation" Alignment */}
      <section className="py-24 px-6 relative bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="relative bg-[#FBFBFB] p-8 md:p-16 border border-[#E5E4E2] shadow-2xl text-center group transition-all duration-700 hover:shadow-[0_20px_60px_rgba(128,0,0,0.1)]">
            {/* Double Border Frame */}
            <div className="absolute inset-2 border border-primary/5 pointer-events-none"></div>

            {/* Corner Flourishes */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#E5E4E2] group-hover:w-24 group-hover:h-24 group-hover:border-primary/20 transition-all duration-500"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#E5E4E2] group-hover:w-24 group-hover:h-24 group-hover:border-primary/20 transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#E5E4E2] group-hover:w-24 group-hover:h-24 group-hover:border-primary/20 transition-all duration-500"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#E5E4E2] group-hover:w-24 group-hover:h-24 group-hover:border-primary/20 transition-all duration-500"></div>

            <div className="space-y-8 relative z-10">
              <Badge className="bg-[#E5E4E2] text-primary border-transparent">An Invitation</Badge>

              <h2 className="text-5xl md:text-7xl font-serif text-primary leading-tight">
                Let's Begin Your<br />
                <span className="italic text-[#897A81]">Royal Journey</span>
              </h2>

              <p className="text-lg text-neutral-500 max-w-2xl mx-auto font-light">
                The first step towards an unforgettable celebration begins with a conversation. We invite you to share your vision with us.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="px-10 py-4 bg-primary text-white font-medium tracking-widest uppercase text-sm hover:bg-primary/90 shadow-[0_4px_20px_rgba(128,0,0,0.2)] hover:shadow-[0_4px_25px_rgba(128,0,0,0.3)] hover:-translate-y-1 transition-all duration-300">
                    Schedule Consultation
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-10 py-4 bg-transparent border border-primary/20 text-primary font-medium tracking-widest uppercase text-sm hover:bg-primary/5 hover:border-primary/40 transition-all duration-300">
                    View Services
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Badge({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium rounded-full backdrop-blur-sm ${className.includes('text-') ? '' : 'text-primary'} ${className.includes('border') ? '' : 'border border-primary/10 bg-primary/5'} ${className}`}>
      {children}
    </span>
  );
}