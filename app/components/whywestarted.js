import { CloudinaryImage } from "./CloudinaryMedia";
import Link from "next/link";
import React from "react";
import { motion} from "framer-motion";


// Combined Sections with Smooth Background
export default function CombinedSections() {
  return (
    <div className="relative">
      {/* Static Smooth Background */}
      <div className="absolute inset-0 z-0">
        <CloudinaryImage
          src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772971373/bg2_op6hig.png"
          alt="Luxury wedding background texture Uttarakhand"
          fill
          priority={true}
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/25 via-background/15 to-accent/30"></div>
      </div>

      {/* Why We Started Section */}
      <WhyWeStartedSection />

      {/* Services Preview Section */}
      <ServicesPreviewSection />
    </div>
  );
}

// Why We Started Section
export function WhyWeStartedSection() {
  return (
    <section className="relative py-32 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Content Side */}
          <motion.div
            className="space-y-8 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="w-12 h-px bg-primary/40"></span>
                <span className="text-sm font-medium text-primary tracking-[0.2em] uppercase">
                  Our Story
                </span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-light text-neutral-700 leading-tight">
                Why We
                <span className="block font-extralight italic text-primary font-serif">Started</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <p className="text-lg text-neutral-600 leading-relaxed max-w-xl">
                Born from our own wedding planning journey, we understand the overwhelming stress
                that should never overshadow your most precious moments.
              </p>

              <p className="text-lg text-neutral-600 leading-relaxed max-w-xl">
                We transform Uttarakhand's breathtaking landscapes into the perfect backdrop
                for your celebrations, delivering meticulous planning with genuine care.
              </p>
            </motion.div>

            {/* Quote Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative p-8 bg-white/70 backdrop-blur-sm border border-accent/30"
            >
              <div className="absolute top-4 left-4 text-6xl text-accent/30 font-serif">"</div>
              <blockquote className="text-primary text-lg font-medium italic ml-8">
                Every celebration deserves to be filled with joy, not stress.
                We exist to make that promise a reality.
              </blockquote>
              <div className="mt-4 ml-8">
                <div className="w-12 h-0.5 bg-accent"></div>
              </div>
            </motion.div>

            {/* Values */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-neutral-200 mt-8"
            >
              {[
                { number: "100%", label: "Dedication" },
                { number: "5+", label: "Years Experience" },
                { number: "∞", label: "Care & Attention" }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl font-serif text-neutral-800 mb-2">
                    {item.number}
                  </div>
                  <div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div> */}
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative lg:order-1"
          >
            <div className="relative">
              <CloudinaryImage
                src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772971397/whywe_telg2l.png"
                alt="Syncity Events wedding planning process in Uttarakhand"
                width={800}
                height={800}
                priority={true}
                className="rounded-none w-full h-[20rem] md:h-[30rem] lg:h-[40rem] shadow-2xl object-cover"
              />
           
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 border border-accent/30 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-accent/20 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Services Preview Section
export function ServicesPreviewSection() {
  const [activeService, setActiveService] = React.useState(0);

  const services = [
    {
      id: "01",
      image: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1772968096/sy4_uca7qn.webp",
      title: "Destination Weddings",
      description: "Exchange vows amidst the majestic peaks. We curate intimate ceremonies and grand celebrations in Uttarakhand's most breathtaking locations.",
      features: ["Mountain Venues", "Luxury Decor", "Full Coordination"],
      link: "/destination-weddings"
    },
    {
      id: "02",
      image: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1772968095/sy9_iyskdz.jpg",
      title: "Corporate Events",
      description: "Elevate your business gatherings. From executive retreats to large-scale conferences, we engage your team in an inspiring mountain setting.",
      features: ["Team Building", "Executive Retreats", "Seminars"],
      link: "/corporate-events"
    },
    {
      id: "03",
      image: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1772971066/sy12_qcl3ym.avif",
      title: "Farm Tourism",
      description: "Reconnect with nature. Experience the authentic rural charm of Devbhoomi with curated farm stays, traditional cuisine, and local culture.",
      features: ["Village Tours", "Organic Dining", "Cultural Immersion"],
      link: "/farm-tourism"
    }
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden bg-neutral-50">
      {/* Background Pattern - Subtle */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[url('/bg2.png')] opacity-20 bg-repeat mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-4 mb-2">
            <span className="h-px w-8 bg-neutral-300"></span>
            <span className="text-neutral-500 text-sm tracking-[0.2em] uppercase font-medium">What We Offer</span>
            <span className="h-px w-8 bg-neutral-300"></span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-neutral-800">
            Curated <span className="font-serif italic text-primary">Experiences</span>
          </h2>
        </div>

        {/* Luxury Cards Layout */}        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.link || "#"} className="block">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onMouseEnter={() => setActiveService(index)}
                className="group relative h-[500px] bg-white shadow-xl hover:shadow-2xl transition-all duration-500 rounded-none overflow-hidden cursor-pointer"
              >
                {/* Background Image */}
                <CloudinaryImage
                  src={service.image}
                  alt={`Syncity Events ${service.title} in Uttarakhand`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Gradient Overlay - Always visible for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent transition-opacity duration-500"></div>

                {/* Border Frame (Animated) */}
                <div className="absolute inset-4 border border-white/20 group-hover:border-primary/60 transition-colors duration-500 z-20"></div>

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-30">
                  {/* Number */}
                  <div className="absolute top-8 right-8 text-4xl font-serif text-white/20 group-hover:text-primary transition-colors duration-500">
                    {service.id}
                  </div>

                  <h3 className="text-3xl font-serif text-white mb-2 group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-md">
                    {service.title}
                  </h3>

                  <div className="w-12 h-0.5 bg-primary mb-4 transform scale-x-100 lg:scale-x-0 lg:group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  <p className="text-neutral-200 font-light leading-relaxed mb-6 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {service.description}
                  </p>

                  {/* Features List (Visible on Hover) */}
                  <div className="space-y-2 opacity-100 translate-y-0 lg:opacity-0 lg:translate-y-4 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500 delay-200">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-[#E5E4E2]">
                        <span className="w-1 h-1 bg-primary rounded-full"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link href="/services">
            <motion.button
              className="group relative px-10 py-5 bg-transparent overflow-hidden border border-primary/30 hover:border-primary transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
              <span className="relative flex items-center gap-3">
                <span className="text-primary group-hover:text-white uppercase tracking-[0.2em] text-sm font-medium transition-colors duration-300">
                  View All Services
                </span>
                <svg
                  className="w-4 h-4 text-primary group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.button>
          </Link>
        </div>

      </div>
    </section>
  );
}