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
      <div className="py-20 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl elegant-border group"
            >
                <Image 
                    src="/mandap.png"
                    alt="Sustainable Indian Wedding Mandap"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--royal-maroon)]/60 to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 text-[var(--off-white)]">
                    <span className="bg-[var(--luxe-gold)] text-[var(--royal-maroon)] text-xs font-bold px-2 py-1 rounded mb-2 inline-block">
                        100% Biodegradable
                    </span>
                    <p className="font-heading text-xl">Traditional Elegance, Zero Waste</p>
                </div>
            </motion.div>

            {/* Content Side */}
            <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h3 className="text-3xl md:text-4xl font-bold font-heading text-[var(--royal-maroon)] mb-6">
                    Nature's Best Decor
                </h3>
                <p className="text-[var(--soft-gray)] text-lg mb-6 leading-relaxed">
                    We replace synthetic materials with the vibrant beauty of nature. 
                    Think <strong>marigolds, jasmine, banana leaves, and mango torans</strong> — sourced locally to support farmers 
                    and composted responsibly after the event.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                        <div className="p-2 bg-[var(--light-cream)] rounded-full text-[var(--royal-maroon)] shrink-0 mt-1">
                            <Flower2 size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-[var(--royal-maroon)]">Plastic-Free Setup</h4>
                            <p className="text-sm text-[var(--soft-gray)]">No floral foam or plastic ties. Just pure, organic beauty.</p>
                        </div>
                    </li>
                    <li className="flex items-start gap-4">
                        <div className="p-2 bg-[var(--light-cream)] rounded-full text-[var(--royal-maroon)] shrink-0 mt-1">
                            <Globe size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-[var(--royal-maroon)]">Carbon Neutral</h4>
                            <p className="text-sm text-[var(--soft-gray)]">Lighting and logistics optimised for minimal carbon footprint.</p>
                        </div>
                    </li>
                </ul>
            </motion.div>
        </div>
      </div>

      {/* ── Visual Feature Section 2: Food Donation ─────────────────────── */}
      <div className="py-20 bg-[var(--light-cream)]">
        <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
                
                {/* Content Side (Left on Desktop) */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="order-2 lg:order-1"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--royal-maroon)]/10 text-[var(--royal-maroon)] text-xs font-bold mb-4">
                        <HeartHandshake size={14} /> Zero Food Waste Initiative
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold font-heading text-[var(--royal-maroon)] mb-6">
                        No Meal Left Behind
                    </h3>
                    <p className="text-[var(--soft-gray)] text-lg mb-6 leading-relaxed">
                        In a country where millions drift to sleep hungry, wasting food is a tragedy. 
                        We ensure that every surplus meal from your wedding feeds a soul in need, not a landfill.
                    </p>
                    
                    <div className="bg-[var(--off-white)] p-6 rounded-xl border border-[var(--luxe-gold)]/30 mb-8">
                        <p className="text-xl font-heading text-[var(--royal-maroon)] italic mb-2">
                            "Annadaan is the greatest donation."
                        </p>
                        <p className="text-sm text-[var(--soft-gray)]">
                            We partner with 120+ verified NGOs to collect, inspect, and distribute surplus food hygienically within hours of your event.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <div className="text-center px-4 py-2 bg-[var(--royal-maroon)] text-[var(--off-white)] rounded-lg">
                            <span className="block text-2xl font-bold">5k+</span>
                            <span className="text-xs opacity-80">Meals Shared</span>
                        </div>
                         <div className="text-center px-4 py-2 border border-[var(--royal-maroon)] text-[var(--royal-maroon)] rounded-lg">
                            <span className="block text-2xl font-bold">100%</span>
                            <span className="text-xs opacity-80">Transparent</span>
                        </div>
                    </div>
                </motion.div>

                {/* Image Side (Right on Desktop) */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative order-1 lg:order-2 aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl elegant-border group"
                >
                     <Image 
                        src="/food.png" // Using hamper image as a placeholder for "Sharing/Giving"
                        alt="Food Distribution to Community"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--royal-maroon)]/80 via-transparent to-transparent opacity-80" />
                     <div className="absolute bottom-6 left-6 right-6 text-[var(--off-white)] text-center">
                        <p className="font-heading text-lg">Sharing Joy Beyond the Venue</p>
                    </div>
                </motion.div>

            </div>
        </div>
      </div>

    </section>
  );
};

export default EcoFriendlySection;
