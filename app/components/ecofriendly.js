'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, HeartHandshake, Recycle, Utensils, Flower2, Globe, CheckCircle2, Sparkles } from 'lucide-react';
import Image from 'next/image';

/* ─── Animated Counter ─────────────────────────────────────────────────── */
const Counter = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (2000 / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

/* ─── Data ──────────────────────────────────────────────────────────────── */
const stats = [
  { icon: Utensils,  value: 5000, suffix: '+', label: 'Meals Donated' },
  { icon: HeartHandshake, value: 120, suffix: '+', label: 'NGO Partners' },
  { icon: Recycle,   value: 80,   suffix: '%', label: 'Waste Diverted' },
  { icon: Leaf,      value: 100,  suffix: '%', label: 'Plastic-Free' },
];

const pledgePoints = [
  'No single-use plastic at any event',
  'Locally sourced, seasonal florals only',
  'All leftover food donated — never binned',
  'A tree planted in every couple\'s name',
];

const EcoFriendlySection = () => {
  return (
    <section className="overflow-hidden bg-[var(--off-white)]">
      
      {/* ── Hero Banner ─────────────────────────────────────────────────── */}
      <div className="relative py-20 bg-[var(--royal-maroon)] overflow-hidden">
        {/* Background Pattern/Image Overlay */}
        <div className="absolute inset-0 opacity-10">
            <Image 
              src="/assets/bg2.png" 
              alt="Pattern Background" 
              fill
              className="object-cover"
            />
        </div>
        
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[var(--luxe-gold)]/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-[var(--rich-burgundy)]/40 blur-3xl" />

        <div className="relative container mx-auto px-4 md:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--luxe-gold)]/50 text-[var(--luxe-gold)] text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles size={14} /> Our Green Commitment
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-[var(--off-white)] mb-5 leading-tight">
              Celebrate Love.<br />
              <span className="text-[var(--luxe-gold)]">Honour the Earth.</span>
            </h2>
            <p className="text-lg text-[var(--off-white)]/80 max-w-2xl mx-auto leading-relaxed">
              At SyncityEvent, we believe the most beautiful weddings are the ones that give back.
              Every celebration we plan is rooted in sustainability, community, and the timeless Indian
              tradition of sharing abundance.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── Stats Row ───────────────────────────────────────────────────── */}
      <div className="bg-[var(--light-cream)] border-b border-[var(--luxe-gold)]/30 relative z-20 -mt-8 mx-4 md:mx-auto max-w-6xl rounded-xl shadow-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--luxe-gold)]/30 py-6">
          {stats.map(({ icon: Icon, value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-2 gap-1"
            >
              <div className="text-[var(--royal-maroon)] mb-1">
                <Icon size={24} />
              </div>
              <p className="text-2xl md:text-3xl font-bold font-heading text-[var(--royal-maroon)]">
                <Counter target={value} suffix={suffix} />
              </p>
              <p className="text-xs md:text-sm text-[var(--soft-gray)] font-medium">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Visual Feature Section 1: Eco Decor ─────────────────────────── */}
      <div className="py-20 md:py-28 container mx-auto px-4 md:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--royal-maroon)]/5 text-[var(--royal-maroon)] text-xs font-bold tracking-widest uppercase">
            <Leaf size={14} /> Sustainable Décor
          </span>
        </motion.div>

        <div className="relative">
          {/* Large hero image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[3/4] sm:aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden group"
          >
            <Image
              src="/mandap.png"
              alt="Sustainable Indian Wedding Mandap"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-[var(--royal-maroon)]/90 via-[var(--royal-maroon)]/50 to-transparent" />
            
            {/* Text overlay on image */}
            <div className="absolute inset-0 flex items-end sm:items-center">
              <div className="px-6 pb-8 sm:pb-0 sm:px-10 md:px-16 max-w-xl">
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading text-[var(--off-white)] mb-3 md:mb-4 leading-tight">
                  Nature's Best<br />
                  <span className="text-[var(--luxe-gold)]">Decor</span>
                </h3>
                <p className="text-[var(--off-white)]/80 text-xs sm:text-sm md:text-base leading-relaxed max-w-md">
                  We replace synthetic materials with the vibrant beauty of nature —
                  <strong className="text-[var(--luxe-gold)]"> marigolds, jasmine, banana leaves, and mango torans</strong> — sourced locally to support farmers 
                  and composted responsibly after the event.
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[var(--luxe-gold)] text-[var(--royal-maroon)] text-[10px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-lg">
              100% Biodegradable
            </div>
          </motion.div>

          {/* Feature cards overlapping the image bottom */}
          <div className="relative -mt-8 md:-mt-12 mx-4 md:mx-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Flower2, title: "Plastic-Free Setup", desc: "No floral foam or plastic ties. Just pure, organic beauty crafted by local artisans." },
              { icon: Globe, title: "Carbon Neutral", desc: "Lighting and logistics optimised for minimal carbon footprint at every venue." },
              { icon: Recycle, title: "Full Composting", desc: "Every petal and leaf is collected post-event and composted into organic fertilizer." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-[var(--luxe-gold)]/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group/card"
              >
                <div className="w-12 h-12 bg-[var(--royal-maroon)]/5 rounded-xl flex items-center justify-center mb-4 group-hover/card:bg-[var(--royal-maroon)] transition-colors duration-500">
                  <item.icon size={22} className="text-[var(--royal-maroon)] group-hover/card:text-[var(--off-white)] transition-colors duration-500" />
                </div>
                <h4 className="font-bold text-[var(--royal-maroon)] text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-[var(--soft-gray)] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Visual Feature Section 2: Food Donation ─────────────────────── */}
      <div className="relative py-20 md:py-28 bg-[var(--light-cream)] overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.03]">
          <Image src="/assets/bg2.png" alt="" fill className="object-cover" />
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--luxe-gold)]/10 blur-[100px]" />

        <div className="relative container mx-auto px-4 md:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 order-2 lg:order-1"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--royal-maroon)]/5 text-[var(--royal-maroon)] text-xs font-bold tracking-widest uppercase mb-6">
                <HeartHandshake size={14} /> Zero Waste Initiative
              </span>

              <h3 className="text-3xl md:text-5xl font-bold font-heading text-[var(--royal-maroon)] mb-6 leading-tight">
                No Meal<br />
                <span className="text-[var(--luxe-gold)]">Left Behind</span>
              </h3>

              <p className="text-[var(--soft-gray)] text-base md:text-lg mb-8 leading-relaxed">
                In a country where millions drift to sleep hungry, wasting food is a tragedy. 
                We ensure that every surplus meal from your wedding feeds a soul in need, not a landfill.
              </p>

              {/* Quote Card */}
              <div className="relative bg-white p-6 rounded-2xl border border-[var(--luxe-gold)]/20 shadow-sm mb-8">
                <div className="absolute -top-3 left-6 text-[var(--luxe-gold)] text-5xl font-serif leading-none">"</div>
                <p className="text-xl font-heading text-[var(--royal-maroon)] italic pt-3 mb-2">
                  Annadaan is the greatest donation.
                </p>
                <p className="text-sm text-[var(--soft-gray)]">
                  120+ verified NGOs partnered for hygienic food redistribution
                </p>
              </div>

              {/* Stats row */}
              <div className="flex gap-4">
                <div className="flex-1 text-center px-4 py-4 bg-[var(--royal-maroon)] rounded-xl">
                  <span className="block text-3xl font-bold text-[var(--luxe-gold)]">5k+</span>
                  <span className="text-xs font-medium text-[var(--off-white)]/70">Meals Shared</span>
                </div>
                <div className="flex-1 text-center px-4 py-4 border border-[var(--royal-maroon)]/20 rounded-xl">
                  <span className="block text-3xl font-bold text-[var(--royal-maroon)]">120+</span>
                  <span className="text-xs font-medium text-[var(--soft-gray)]">NGO Partners</span>
                </div>
                <div className="flex-1 text-center px-4 py-4 border border-[var(--royal-maroon)]/20 rounded-xl">
                  <span className="block text-3xl font-bold text-[var(--royal-maroon)]">100%</span>
                  <span className="text-xs font-medium text-[var(--soft-gray)]">Transparent</span>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-7 order-1 lg:order-2 relative"
            >
              <div className="relative aspect-[4/5] md:aspect-[4/3] rounded-3xl overflow-hidden group">
                <Image
                  src="/img.png"
                  alt="Food Distribution to Community"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--royal-maroon)] via-transparent to-transparent opacity-60" />

                {/* Overlaid caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--luxe-gold)] flex items-center justify-center">
                      <HeartHandshake size={16} className="text-[var(--royal-maroon)]" />
                    </div>
                    <span className="text-[var(--luxe-gold)] text-xs font-bold tracking-widest uppercase">Our Promise</span>
                  </div>
                  <p className="text-[var(--off-white)] font-heading text-xl md:text-2xl leading-snug">
                    Sharing Joy<br />Beyond the Venue
                  </p>
                </div>
              </div>

              {/* Floating accent element */}
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-24 h-24 md:w-32 md:h-32 border-2 border-[var(--royal-maroon)]/15 rounded-3xl -z-10" />
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-20 h-20 md:w-28 md:h-28 bg-[var(--royal-maroon)]/5 rounded-3xl -z-10" />
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
};

export default EcoFriendlySection;
