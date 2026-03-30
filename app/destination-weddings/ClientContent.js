'use client';
import { useState, useEffect } from 'react';
import { Heart, Music, Camera, Sparkles, MapPin, Calendar, Gift, Star, Leaf } from 'lucide-react';
import { CloudinaryImage } from '../components/CloudinaryMedia';
import Link from 'next/link';

function Button({ className = "", children, variant = "primary", ...props }) {
    const variants = {
        primary: "bg-[#E5E4E2] hover:bg-white text-primary shadow-lg hover:shadow-xl",
        secondary: "bg-transparent hover:bg-white/10 text-[#E5E4E2] border border-[#E5E4E2]/30 hover:border-[#E5E4E2]",
        ghost: "bg-transparent hover:bg-white/10 text-current border border-current/20 hover:border-current/40"
    };

    return (
        <button
            className={`px-8 py-4 font-semibold text-sm tracking-widest uppercase transition-all duration-300 transform hover:scale-105 ${variants[variant] || variants.primary} ${className}`}
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

export default function ClientContent() {
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

    return (
        <main className="min-h-screen bg-[#FBFBFB]">
            {/* Hero Section */}
            <section id="hero" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <CloudinaryImage
                    src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772968096/sy4_uca7qn.webp"
                    alt="Destination Wedding"
                    fill
                    className="object-cover"
                    priority={true}
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
                    <Badge className="mb-8 border-white/20 text-white bg-white/10">Romance • Grandeur • Eternal</Badge>
                    <h1 className={`text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-[1.1] transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Dream Weddings<br />
                        <span className="italic text-[#E5E4E2]">In The Himalayas</span>
                    </h1>
                    <p className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed mb-12 transition-all duration-1000 delay-300 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Say "I Do" against the breathtaking backdrop of majestic mountains. We craft timeless celebrations that reflect your unique love story.
                    </p>
                    <div className={`transition-all duration-1000 delay-500 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <Link href="/contact">
                        <Button className="!bg-[#E5E4E2] !text-primary hover:!bg-white">
                            Plan Your Big Day
                        </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Luxury Venues */}
            <section id="luxury-venues" className="py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className={`relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group transition-all duration-1000 ${isVisible['luxury-venues'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <CloudinaryImage
                                src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772971408/WhatsApp_Image_2025-09-22_at_13.58.24_26b918e4_mppxz9.jpg"
                                alt="Luxury Venue"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <div className="flex items-center gap-2 mb-2 text-[#E5E4E2]">
                                    <MapPin className="w-5 h-5" />
                                    <span className="text-sm tracking-widest uppercase">Exquisite Locations</span>
                                </div>
                            </div>
                        </div>

                        <div className={`transition-all duration-1000 ${isVisible['luxury-venues'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <Badge className="mb-6">Venues</Badge>
                            <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6 leading-tight">
                                Luxury<br />
                                <span className="italic text-primary/80">Venues</span>
                            </h2>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed font-light">
                                From heritage palaces to modern mountain resorts, we offer a curated selection of premier venues. Each location is chosen for its scenic beauty, luxury amenities, and ability to host grand celebrations.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    'Heritage Palaces & Forts',
                                    'Luxury Mountain Resorts',
                                    'Panoramic Open-Air Lawns',
                                    'Intimate Boutique Hotels'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-neutral-700">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        <span className="font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Eco-Friendly Weddings AI SEO Block */}
            <section id="eco-friendly" className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className={`transition-all duration-1000 ${isVisible['eco-friendly'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <Badge className="mb-6 !bg-green-50 !border-green-200 !text-green-700">Sustainable</Badge>
                            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">
                                Eco-Friendly & Sustainable<br />
                                <span className="italic">Weddings in Uttarakhand</span>
                            </h2>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed font-light">
                                How do you plan an eco-friendly wedding in Uttarakhand? We specialize in zero-waste, sustainable weddings that protect the Himalayan environment. By prioritizing biodegradable decor, locally sourced multi-cuisine catering, and eliminating single-use plastics, we significantly reduce your carbon footprint without sacrificing luxury.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                {[
                                    { title: 'Zero-Waste Practices', icon: Leaf },
                                    { title: 'Locally Sourced Decor', icon: MapPin },
                                    { title: 'Forest & River Venues', icon: Sparkles },
                                    { title: 'Plastic-Free Events', icon: Heart }
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-neutral-50 p-4 rounded-xl shadow-sm border border-neutral-100">
                                        <div className="text-green-600 bg-green-50 p-2 rounded-full"><feature.icon size={20} /></div>
                                        <span className="text-neutral-700 font-medium">{feature.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group transition-all duration-1000 ${isVisible['eco-friendly'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <CloudinaryImage
                                src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772971385/mandap_b0qojh.png" 
                                alt="Eco-Friendly Wedding Decor Uttarakhand"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <div className="flex items-center gap-2 mb-2 text-[#E5E4E2]">
                                    <Leaf className="w-5 h-5 text-green-400" />
                                    <span className="text-sm tracking-widest uppercase">Green Celebrations</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bespoke Themes */}
            <section id="bespoke-themes" className="py-24 px-6 bg-[#F5F5F0]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible['bespoke-themes'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <Badge className="mb-6">Decor & Style</Badge>
                            <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6 leading-tight">
                                Bespoke<br />
                                <span className="italic text-primary/80">Themes</span>
                            </h2>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed font-light">
                                Your vision, our artistry. Whether it's a bohemian floral fantasy or a traditional royal setup, our designers transform venues into magical worlds that reflect your personality.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: 'Floral Artistry', icon: Sparkles },
                                    { title: 'Lighting Design', icon: Star },
                                    { title: 'Table Styling', icon: Gift },
                                    { title: 'Custom Props', icon: Heart }
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
                                        <div className="text-primary bg-primary/5 p-2 rounded-full"><feature.icon size={20} /></div>
                                        <span className="text-neutral-700 font-medium">{feature.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`order-1 lg:order-2 relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group transition-all duration-1000 ${isVisible['bespoke-themes'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <CloudinaryImage
                                src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772968097/sy3_bx5rm1.webp"
                                alt="Wedding Decor"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Flawless Planning */}
            <section id="planning" className="py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className={`relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group transition-all duration-1000 ${isVisible['planning'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <CloudinaryImage
                                src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772971427/img2_fenltx.png"
                                alt="Wedding Planner"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <div className="flex items-center gap-2 mb-2 text-[#E5E4E2]">
                                    <Calendar className="w-5 h-5" />
                                    <span className="text-sm tracking-widest uppercase">Expert Coordination</span>
                                </div>
                            </div>
                        </div>

                        <div className={`transition-all duration-1000 ${isVisible['planning'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <Badge className="mb-6">Management</Badge>
                            <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6 leading-tight">
                                Flawless<br />
                                <span className="italic text-primary/80">Planning</span>
                            </h2>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed font-light">
                                Enjoy your big day while we handle the details. Our dedicated team manages everything from guest logistics and vendor coordination to timeline management, ensuring a stress-free celebration.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    'End-to-End Event Management',
                                    'Guest Hospitality & Logistics',
                                    'Vendor Coordination',
                                    'Timeline & Scripting'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-neutral-700">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        <span className="font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rituals & Ceremonies */}
            <section id="rituals" className="py-24 px-6 bg-primary text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible['rituals'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <Badge className="mb-6 border-white/20 text-white bg-white/10">Tradition</Badge>
                            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                                Rituals &<br />
                                <span className="italic text-[#E5E4E2]">Ceremonies</span>
                            </h2>
                            <p className="text-xl text-white/80 mb-8 leading-relaxed font-light">
                                We honor your traditions with impeccable execution. From vibrant Mehendi and Sangeet nights to the solemn Wedding vows, we ensure each ceremony is celebrated with authentic grandeur.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: 'Sangeet Night', desc: 'MUSIC & DANCE', icon: Music },
                                    { title: 'Haldi & Mehendi', desc: 'TRADITIONAL', icon: Heart },
                                    { title: 'The Wedding', desc: 'ROYAL AFFAIR', icon: Sparkles },
                                    { title: 'Reception', desc: 'GRAND GALA', icon: Camera }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-4 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                        <div className="text-[#E5E4E2]"><item.icon size={24} /></div>
                                        <div>
                                            <h4 className="font-serif text-lg text-white">{item.title}</h4>
                                            <p className="text-xs tracking-widest text-white/60 uppercase mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`order-1 lg:order-2 relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group transition-all duration-1000 ${isVisible['rituals'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <CloudinaryImage
                                src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1773032155/pexels-aalap-creation-2158557916-35457632_tfhhh5.jpg"
                                alt="Traditional Ceremony"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
