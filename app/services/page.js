'use client';
import { useState, useEffect } from 'react';
import { ChevronDown, Star, MapPin, Calendar, Users, Award, Gift, Home, Sprout, Sun, Briefcase, Mic, Coffee, ArrowRight } from 'lucide-react';
import { CloudinaryImage } from '../components/CloudinaryMedia';
import Link from 'next/link';

function Card({ className = "", children, variant = "default", ...props }) {
  const variants = {
    default: "bg-white/80 border-white/20",
    glass: "bg-white/[0.03] border-white/10 hover:bg-white/[0.08] hover:border-t-[#E5E4E2] hover:border-white/20"
  };

  return (
    <div
      className={`group relative overflow-hidden backdrop-blur-xl border shadow-xl transition-all duration-500 hover:-translate-y-2 ${variants[variant] || variants.default} ${className}`}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      {children}
    </div>
  );
}

function Button({ className = "", children, variant = "primary", ...props }) {
  const variants = {
    primary: "bg-[#E5E4E2] hover:bg-white text-primary shadow-lg hover:shadow-xl",
    secondary: "bg-transparent hover:bg-white/10 text-[#E5E4E2] border border-[#E5E4E2]/30 hover:border-[#E5E4E2]",
    ghost: "bg-transparent hover:bg-white/10 text-current border border-current/20 hover:border-current/40"
  };

  return (
    <button
      className={`px-8 py-4 font-semibold text-sm tracking-widest uppercase transition-all duration-300 transform hover:scale-105 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

function Badge({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] font-medium backdrop-blur-sm ${className.includes('text-') ? '' : 'text-primary'} ${className.includes('border') ? '' : 'border border-primary/10 bg-primary/5'} ${className}`}>
      {children}
    </span>
  );
}

function FloatingElement({ children, delay = 0 }) {
  return (
    <div
      className="animate-pulse"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: '3s'
      }}
    >
      {children}
    </div>
  );
}

export default function Services() {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 'farm-tourism',
      title: 'Farm Tourism',
      icon: '🌾',
      description: 'Immersive agricultural experiences in pristine natural settings',
      features: ['Luxury Farm Stays', 'Organic Farm Tours', 'Adventure Activities', 'Wellness Retreats']
    },
    {
      id: 'corporate-events',
      title: 'Corporate Events & Retreats',
      icon: '🏢',
      description: 'Professional gatherings with a touch of natural elegance',
      features: ['Team Building', 'Conferences', 'Stress Relief Retreats', 'Executive Retreats']
    },
    {
      id: 'destination-weddings',
      title: 'Destination Weddings',
      icon: '💍',
      description: 'Unforgettable celebrations in breathtaking mountain venues',
      features: ['Luxury Venues', 'Custom Themes', 'Full-Service Planning', 'Return Gift Services']
    },
    {
      id: 'birthday-parties',
      title: 'Special Occasions',
      icon: '🎉',
      description: 'Joyful celebrations tailored for all ages',
      features: ['Themed Decorations', 'Entertainment & Games', 'Catering Services', 'Return Gift Services']
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section - Light Theme */}
      <section id="hero" className="relative min-h-screen md:h-screen flex items-center justify-center overflow-hidden bg-[#FBFBFB]">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(128,0,0,0.03),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <Badge className="mb-8 border-primary/20 text-primary bg-primary/5 shadow-sm">Premium Event Services</Badge>
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-serif text-primary mb-8 leading-[1.1] transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            One Stop. Every Service.<br />
            <span className="italic text-primary">Every Occasion.</span>
          </h1>
          <p className={`text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-12 font-light transition-all duration-1000 delay-300 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Whether it's a rejuvenating Wellness Retreat, a grand wedding, a professional corporate event, an intimate family function, or a refreshing farm tourism getaway - we’ve got it all covered.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services-overview" className="relative py-24 px-6 bg-primary overflow-hidden">
        {/* Cinematic Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#5e0000] to-black/40 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl tracking-wide font-serif text-white mb-6">Our Signature Services</h2>
            <p className="text-xl text-[#E5E4E2]/80 max-w-3xl mx-auto font-light">
              Four distinct experiences, each crafted to perfection with uncompromising attention to detail.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Link
                href={
                  service.id === 'farm-tourism' ? '/services/farm-tourism' :
                    service.id === 'corporate-events' ? '/services/corporate-events' :
                      service.id === 'destination-weddings' ? '/services/destination-weddings' :
                        service.id === 'birthday-parties' ? '/services/special-occasions' : '#'
                }
                key={service.id}
                className="block"
              >
                <Card
                  variant="glass"
                  className="p-8 cursor-pointer transition-all duration-500 h-full"
                >
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 text-3xl text-[#E5E4E2] group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-serif text-white mb-3">{service.title}</h3>
                  <div className="h-px w-12 bg-[#E5E4E2]/30 mb-4 group-hover:w-full transition-all duration-700"></div>

                  <p className="text-[#E5E4E2]/70 mb-6 leading-relaxed font-light text-sm">{service.description}</p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 group/item">
                        <span className="text-[#E5E4E2]/40 text-[10px] group-hover/item:text-[#E5E4E2] transition-colors">◆</span>
                        <span className="text-[#E5E4E2]/60 font-medium text-sm group-hover/item:text-white transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-6 right-6">
                    <div className="w-10 h-10 rounded-full border border-[#E5E4E2]/20 flex items-center justify-center text-[#E5E4E2] transition-all duration-300 group-hover:bg-[#E5E4E2] group-hover:text-primary group-hover:scale-110">
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Farm Tourism Detail */}
      {/* Farm Tourism Detail - Premium Redesign */}
      <section id="farm-tourism-detail" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Content Column */}
            <div className={`transition-all duration-1000 ${isVisible['farm-tourism-detail'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <Badge className="mb-8 border-primary/20 text-primary bg-primary/5">🌾 Farm Tourism Excellence</Badge>

              <h2 className="text-5xl md:text-6xl font-serif text-primary mb-6 leading-[1.1]">
                Reconnect with<br />
                <span className="italic text-primary">Nature's Rythm</span>
              </h2>

              <p className="text-xl text-neutral-600 mb-10 leading-relaxed font-light border-l-2 border-primary/20 pl-6">
                Immerse yourself in authentic farm life with our premium agritourism experiences. From sunrise yoga in organic gardens to gourmet farm-to-table dining.
              </p>

              <div className="space-y-8">
                {[
                  { title: 'Luxury Farm Stays', desc: 'Boutique cottages with modern amenities and panoramic mountain views.', icon: Home },
                  { title: 'Curated Experiences', desc: 'Hands-on organic farming workshops, fruit picking, and village walks.', icon: Sprout },
                  { title: 'Wellness Journeys', desc: 'Rejuvenating spa treatments, sunrise yoga, and meditation retreats.', icon: Sun }
                ].map((item, idx) => (
                  <div key={idx} className="group flex items-start gap-6 py-4 border-b border-primary/10 last:border-0 hover:pl-4 transition-all duration-500 cursor-default">
                    <div className="mt-1 p-2 rounded-full border border-primary/20 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                      <item.icon strokeWidth={1.5} className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif text-xl text-primary mb-2 group-hover:translate-x-1 transition-transform duration-300">{item.title}</h4>
                      <p className="text-neutral-500 font-light leading-relaxed text-sm group-hover:text-neutral-700 transition-colors">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Grid Column */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible['farm-tourism-detail'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#E5E4E2]/20 rounded-full blur-3xl"></div>

              <div className="grid grid-cols-2 gap-4 relative z-10 w-full">
                {[
                  { title: 'Farm Stay', subtitle: 'MOUNTAIN VIEW', image: 'https://res.cloudinary.com/dhlvq35cc/image/upload/v1772971066/sy13_zmx8mz.webp', height: 'h-64 translate-y-8' },
                  { title: 'Organic Farm', subtitle: 'RURAL CHARM', image: 'https://res.cloudinary.com/dhlvq35cc/image/upload/v1772971068/sy14_qy4ji2.jpg', height: 'h-80' },
                  { title: 'Nature Trail', subtitle: 'SCENIC BEAUTY', image: 'https://res.cloudinary.com/dhlvq35cc/image/upload/v1772971066/sy11_rgxixe.jpg', height: 'h-80 -translate-y-8' },
                  { title: 'Wellness', subtitle: 'SERENITY', image: 'https://res.cloudinary.com/dhlvq35cc/image/upload/v1772968096/sy6_dk2k8m.webp', height: 'h-64' }
                ].map((item, idx) => (
                  <div key={idx} className={`relative group ${item.height} overflow-hidden rounded-2xl shadow-xl`}>
                    <CloudinaryImage
                      src={item.image}
                      alt={item.title}
                      width={300}
                      height={400}
                      priority={idx < 2}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                    {/* Permanent Text Overlay - Always Visible */}
                    <div className="absolute bottom-6 left-6 z-20">
                      <h3 className="text-2xl font-serif text-white mb-2 leading-tight drop-shadow-md">
                        {item.title}
                      </h3>
                      <div className="w-8 h-0.5 bg-white/80 mb-3"></div>
                      <p className="text-[10px] text-white/90 uppercase tracking-[0.2em] font-medium drop-shadow-sm">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="corporate-events-detail" className="py-24 px-6 bg-neutral-50 overflow-hidden relative">
        {/* Background Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 pointer-events-none blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/5 pointer-events-none blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">

            {/* Content Side (Right) - Text Content */}
            <div className={`space-y-8 flex flex-col justify-center transition-all duration-1000 ${isVisible['corporate-events-detail'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <Badge className="w-fit border-primary/20 text-primary bg-primary/5">🏢 Corporate Excellence</Badge>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-800 leading-tight">
                Elevate Your<br />
                <span className="italic text-primary">Business Events</span>
              </h2>
              <div className="w-20 h-1 bg-primary/20" />
              <p className="text-lg text-neutral-600 leading-relaxed font-light">
                Transform ordinary corporate gatherings into extraordinary experiences. Our mountain venues provide the perfect blend of professionalism and natural inspiration, fostering creativity and connection.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: 'Team Building', icon: Users },
                  { title: 'Executive Retreats', icon: Briefcase },
                  { title: 'Conferences', icon: Mic },
                  { title: 'Networking', icon: Coffee }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="bg-primary/5 p-2 rounded-full text-primary">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <span className="text-neutral-700 font-medium">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Side (Left) - 4 Image Grid */}
            <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-300 ${isVisible['corporate-events-detail'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {[
                { title: 'Team Building', subtitle: 'COLLABORATION', src: 'https://res.cloudinary.com/dhlvq35cc/image/upload/v1772978799/team_w5gj3y.png' },
                { title: 'Conf. Setup', subtitle: 'PROFESSIONAL', src: 'https://res.cloudinary.com/dhlvq35cc/image/upload/v1772971373/conference_u9q3dq.jpg' },
                { title: 'Luxury Stay', subtitle: 'EXECUTIVE SUITES', src: 'https://res.cloudinary.com/dhlvq35cc/image/upload/v1772979149/aloha_a8hjaz.webp' },
                { title: 'Gala Dinner', subtitle: 'NETWORKING', src: 'https://res.cloudinary.com/dhlvq35cc/image/upload/v1772968096/sy8_riiah7.jpg' }
              ].map((img, idx) => (
                <div key={idx} className={`relative overflow-hidden shadow-lg group rounded-xl ${idx % 2 === 1 ? 'mt-8' : ''} h-64`}>
                  <CloudinaryImage
                    src={img.src}
                    alt={img.title}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                  {/* Permanent Text Overlay */}
                  <div className="absolute bottom-6 left-6 z-20">
                    <h3 className="text-xl font-serif text-white mb-2 leading-tight drop-shadow-md">
                      {img.title}
                    </h3>
                    <div className="w-8 h-0.5 bg-white/80 mb-2"></div>
                    <p className="text-[10px] text-white/90 uppercase tracking-[0.2em] font-medium drop-shadow-sm">
                      {img.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Destination Weddings Detail */}
      <section id="destination-weddings-detail" className="py-24 px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 border-white/20 text-white bg-white/10">💍 Wedding Excellence</Badge>
            <h2 className="text-4xl md:text-5xl tracking-wide font-serif text-white mb-8">
              Where Love Meets<br />
              <span className="italic tracking-wide text-[#E5E4E2]">Mountain Magic</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
              Your love story deserves an extraordinary setting. Let the majestic Himalayas witness your perfect beginning.
            </p>
          </div>

          {/* Luxury Image Grid - "The Royal Vows" */}
          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {[
              {
                title: 'Heritage Venues',
                subtitle: 'ROYAL ELEGANCE',
                desc: 'Centuries-old forts and palaces tailored for your grand union.',
                image: 'https://res.cloudinary.com/dhlvq35cc/image/upload/v1772968096/sy6_dk2k8m.webp'
              },
              {
                title: 'Bespoke Themes',
                subtitle: 'YOUR SIGANTURE',
                desc: 'From Bohemian chic to traditional grandeur, we craft your vision.',
                image: 'https://res.cloudinary.com/dhlvq35cc/image/upload/v1772979665/heritage_hdo4yj.jpg'
              },
              {
                title: 'Planning',
                subtitle: 'FLAWLESS EXECUTION',
                desc: 'Meticulous coordination for a stress-free celebration.',
                image: 'https://res.cloudinary.com/dhlvq35cc/image/upload/v1772971427/img2_fenltx.png'
              }
            ].map((item, idx) => (
              <div key={idx} className={`relative group h-[500px] overflow-hidden rounded-2xl shadow-2xl ${idx === 1 ? 'lg:-translate-y-8' : ''}`}>
                <CloudinaryImage
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Permanent Text Overlay */}
                <div className="absolute bottom-8 left-8 z-20 max-w-[80%]">
                  <h3 className="text-3xl font-serif text-white mb-3 leading-tight drop-shadow-lg">
                    {item.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-white/80 mb-4"></div>
                  <p className="text-xs text-white/90 uppercase tracking-[0.25em] font-medium mb-4 drop-shadow-md">
                    {item.subtitle}
                  </p>
                  <p className="text-white/80 font-light text-sm leading-relaxed border-l-2 border-white/30 pl-3">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Editorial Process List - "The Journey" */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-white/40 tracking-[0.3em] uppercase text-sm font-medium">The Journey</span>
              <h3 className="text-3xl md:text-4xl font-serif text-white mt-3">Complete Wedding Experience</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-12 text-left relative">
              {/* Vertical Divider Lines */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/3 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
              <div className="hidden md:block absolute top-0 bottom-0 right-1/3 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

              {[
                {
                  step: '01',
                  title: 'Pre-Wedding',
                  items: ['Venue Selection & Booking', 'Theme & Decor Concepts', 'Engagement & Roka Ceremonies', 'Bachelor & Bachelorette Parties']
                },
                {
                  step: '02',
                  title: 'The Celebration',
                  items: ['Logistics & Guest Management', 'Sangeet & Mehendi Coordination', 'Traditional Rituals', 'Grand Reception Management']
                },
                {
                  step: '03',
                  title: 'Post-Wedding',
                  items: ['Return Gift Hamping', 'Honeymoon Planning', 'Thank You Notes', 'Photo & Video Delivery']
                }
              ].map((phase, idx) => (
                <div key={idx} className="relative px-4 group hover:-translate-y-2 transition-transform duration-500">
                  <div className="text-6xl font-serif text-white/5 absolute -top-10 -left-2 z-0 font-bold group-hover:text-white/10 transition-colors">
                    {phase.step}
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-serif text-2xl text-white mb-6">{phase.title}</h4>
                    <ul className="space-y-4">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 group/item">
                          <span className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2 group-hover/item:bg-white transition-colors"></span>
                          <span className="text-white/70 font-light leading-relaxed group-hover/item:text-white transition-colors">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div >
      </section >

      {/* Birthday Parties Detail */}
      {/* Birthday Parties Detail - "The Celebration Gallery" */}
      <section id="birthday-parties-detail" className="py-24 px-6 bg-neutral-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 skewed-bg transform skew-x-12 translate-x-32"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Content Side (Left) */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible['birthday-parties-detail'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <Badge className="w-fit border-primary/20 text-primary bg-white shadow-sm">🎉 Celebration Excellence</Badge>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-800 leading-tight">
                Celebrate with<br />
                <span className="italic text-primary">Joyful Moments</span>
              </h2>
              <div className="w-20 h-1 bg-primary/20" />
              <p className="text-lg text-neutral-600 leading-relaxed font-light">
                Make every birthday unforgettable. From vibrant themed decorations to magical entertainment, we create celebrations that spark joy for all ages.
              </p>

              <div className="grid md:grid-cols-2 gap-5 mt-8">
                {[
                  { title: 'Themed Decorations', desc: 'Custom immersive setups', icon: '🎈' },
                  { title: 'Live Entertainment', desc: 'Magicians, music & games', icon: '🎭' },
                  { title: 'Gourmet Catering', desc: 'Kid-friendly & adult menus', icon: '🍰' },
                  { title: 'Return Gifts', desc: 'Curated hampers for guests', icon: '🎁' }
                ].map((item, idx) => (
                  <div key={idx} className="p-5 rounded-xl border border-primary/10 bg-white/60 hover:bg-white hover:shadow-md transition-all duration-300 group">
                    <div className="text-3xl mb-3 grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110 origin-left">
                      {item.icon}
                    </div>
                    <h4 className="font-serif text-lg text-primary mb-1">{item.title}</h4>
                    <p className="text-sm text-neutral-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link href="/contact">
                  <Button className="px-8 py-6 text-lg !bg-primary !text-white hover:!bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    Plan a Party
                  </Button>
                </Link>
              </div>
            </div>

            {/* Visual Side (Right) - Collage */}
            <div className={`relative h-[600px] transition-all duration-1000 delay-300 ${isVisible['birthday-parties-detail'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              {/* Main Large Image */}
              <div className="absolute top-0 right-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl z-10 border-4 border-white">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1773023481/decor_ve1ti4.jpg"
                  alt="Birthday Decoration"
                  width={500}
                  height={600}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                  <p className="font-serif text-primary text-sm font-bold">Magical Setups</p>
                </div>
              </div>

              {/* Secondary Image - Bottom Left */}
              <div className="absolute bottom-0 left-4 w-1/2 h-1/2 rounded-2xl overflow-hidden shadow-2xl z-20 border-4 border-white">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772971428/bday_n41xsj.png"
                  alt="Birthday Cake"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Accent Image - Floating Top */}
              <div className="absolute top-10 left-0 w-1/3 h-1/4 rounded-xl overflow-hidden shadow-xl z-30 border-2 border-white -rotate-6 hover:rotate-0 transition-transform duration-500">
                <CloudinaryImage
                  src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772971380/hamper_apt10g.png"
                  alt="Gifts"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Rating Card */}
              <div className="absolute bottom-10 right-10 bg-white p-4 rounded-xl shadow-xl z-40 animate-bounce-slow">
                <div className="flex gap-1 text-yellow-400 mb-1">
                  {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <p className="text-xs text-neutral-500 font-medium">"Best birthday ever!"</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Return Gift Services */}
      <section id="return-gift-services" className="py-24 px-6 bg-primary text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-6 border-white/20 text-white bg-white/10">🎁 Return Gift Excellence</Badge>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
              Thoughtful<br />
              <span className="italic text-[#E5E4E2]">Return Gifts</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
              Leave a lasting impression with our curated return gift hampers, designed to delight your guests and make your event unforgettable.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ${isVisible['return-gift-services'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-4">
                {[
                  {
                    id: '01',
                    title: 'Personalized Hampers',
                    desc: 'Custom gift baskets tailored to your event theme and guest preferences.',
                    icon: Gift
                  },
                  {
                    id: '02',
                    title: 'Eco-Friendly Options',
                    desc: 'Sustainable and locally sourced gifts for environmentally conscious celebrations.',
                    icon: MapPin
                  },
                  {
                    id: '03',
                    title: 'Luxury Keepsakes',
                    desc: 'Premium gift items for a touch of elegance and lasting memories.',
                    icon: Star
                  }
                ].map((item, idx) => (
                  <div key={idx} className="group p-6 rounded-xl border border-[#E5E4E2]/20 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#E5E4E2]/40 hover:-translate-x-2 transition-all duration-500 cursor-default relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                      <span className="text-6xl font-serif text-[#E5E4E2]">{item.id}</span>
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <item.icon className="w-5 h-5 text-[#E5E4E2]" />
                        <h4 className="font-serif text-xl text-white group-hover:text-[#E5E4E2] transition-colors">{item.title}</h4>
                      </div>
                      <p className="text-white/60 font-light text-sm leading-relaxed pr-8">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/contact">
                  <Button className="px-8 py-6 bg-[#E5E4E2] text-primary hover:bg-white font-serif tracking-wider shadow-[0_0_20px_rgba(229,228,226,0.2)] hover:shadow-[0_0_30px_rgba(229,228,226,0.4)] transition-all">
                    Curate Your Gifts
                  </Button>
                </Link>
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-300 ${isVisible['return-gift-services'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative h-[600px] w-full">
                {/* The Grand Arch Frame */}
                <div className="absolute inset-0 rounded-t-[300px] border border-white/20 z-20 m-4"></div>
                <div className="absolute inset-0 rounded-t-[300px] overflow-hidden z-10 shadow-2xl">
                  <CloudinaryImage
                    src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772971380/hamper_apt10g.png"
                    alt="Luxury Return Gifts"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-[2s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>

                  {/* Floating Label */}
                  <div className="absolute bottom-10 left-0 right-0 text-center">
                    <p className="font-serif text-3xl italic text-white/90 drop-shadow-lg">"The Art of Giving"</p>
                  </div>
                </div>

                {/* Back Glow */}
                <div className="absolute top-10 left-10 right-10 bottom-0 bg-[#F2C94C]/20 blur-[100px] -z-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* CTA Section */}
      {/* CTA Section - "Royal Invitation" */}
      <section className="py-24 px-6 bg-white border-t border-primary/5">
        <div className="max-w-5xl mx-auto">
          <div className="relative p-12 md:p-20 bg-[#FBFBFB] border border-[#E5E4E2] shadow-sm overflow-hidden group">

            {/* Double Border Effect */}
            <div className="absolute inset-2 border border-primary/5 pointer-events-none"></div>

            {/* Corner Flourishes */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#E5E4E2] transition-all duration-700 group-hover:w-24 group-hover:h-24 group-hover:border-primary/20"></div>
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#E5E4E2] transition-all duration-700 group-hover:w-24 group-hover:h-24 group-hover:border-primary/20"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#E5E4E2] transition-all duration-700 group-hover:w-24 group-hover:h-24 group-hover:border-primary/20"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#E5E4E2] transition-all duration-700 group-hover:w-24 group-hover:h-24 group-hover:border-primary/20"></div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <span className="inline-block py-2 px-6 border-b border-[#E5E4E2] text-primary text-xs uppercase tracking-[0.3em] font-medium mb-10">
                An Invitation
              </span>

              <h2 className="text-4xl md:text-6xl font-serif text-primary mb-8 leading-tight">
                Ready to Create<br />
                <span className="italic text-primary/80">Something Extraordinary?</span>
              </h2>

              <p className="text-xl text-neutral-600 mb-12 leading-relaxed font-light">
                Let us transform your vision into an unforgettable experience. <br className="hidden md:block" />
                Your perfect event awaits.
              </p>

              <Link href="/contact">
                <Button className="px-10 py-5 bg-primary !text-white hover:!bg-primary/90 hover:!text-white shadow-[0_4px_20px_rgba(128,0,0,0.2)] hover:shadow-[0_4px_25px_rgba(128,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 font-serif tracking-widest text-sm">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}