'use client';
import { useState, useEffect } from 'react';
import { MapPin, Wind, Sun, Coffee, ArrowRight, Star, Leaf, Mountain, Heart } from 'lucide-react'; // Added Heart here
import { CloudinaryImage } from '../../components/CloudinaryMedia';
import Link from 'next/link';

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

export default function FarmTourismPage() {
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
        <div className="min-h-screen bg-[#FBFBFB]">
            {/* Hero Section */}
            <section id="hero" className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <CloudinaryImage
                    src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1773026040/pexels-tomfisk-1081912_ch40he.jpg"
                    alt="Farm Tourism"
                    fill
                    className="object-cover"
                    priority={true}
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
                    <Badge className="mb-8 border-white/20 text-white bg-white/10">Nature • Luxury • Experience</Badge>
                    <h1 className={`text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-[1.1] transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Authentic<br />
                        <span className="italic text-[#E5E4E2]">Farm Tourism</span>
                    </h1>
                    <p className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed mb-12 transition-all duration-1000 delay-300 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Escape the city chaos and immerse yourself in the serenity of nature. Experience the perfect blend of rustic charm and modern luxury.
                    </p>
                    <div className={`flex gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <Link href="/contact">
                            <Button className="!bg-[#E5E4E2] !text-primary hover:!bg-white">
                                Contact Us
                            </Button>
                        </Link>
                        <a href="https://www.ancienthealth.in" target="_blank" rel="noopener noreferrer">
                            <Button variant="secondary">
                                Visit Online Store
                            </Button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Luxury Farm Stays */}
            <section id="luxury-stays" className="py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className={`relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group transition-all duration-1000 ${isVisible['luxury-stays'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <CloudinaryImage
                                src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772968096/sy6_dk2k8m.webp"
                                alt="Luxury Farm Stay"
                                fill
                                priority={true}
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <div className="flex items-center gap-2 mb-2 text-[#E5E4E2]">
                                    <Star className="w-5 h-5 fill-current" />
                                    <span className="text-sm tracking-widest uppercase">Premium Accommodation</span>
                                </div>
                            </div>
                        </div>

                        <div className={`transition-all duration-1000 ${isVisible['luxury-stays'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <Badge className="mb-6">Accommodation</Badge>
                            <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6 leading-tight">
                                Luxury<br />
                                <span className="italic text-primary/80">Farm Stays</span>
                            </h2>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed font-light">
                                Wake up to the sound of birds and the fresh mountain breeze. Our boutique cottages offer the perfect sanctuary with modern amenities, private sit-outs, and breathtaking views of the Himalayas.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    'Boutique Cottages with Mountain View',
                                    'Modern Amenities & Wi-Fi',
                                    'Private Bonfire & BBQ Area',
                                    'Pet-Friendly Accommodations'
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

            {/* Organic Farm Tours */}
            <section id="organic-tours" className="py-24 px-6 bg-[#F5F5F0] overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible['organic-tours'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <Badge className="mb-6">Experience</Badge>
                            <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6 leading-tight">
                                Organic<br />
                                <span className="italic text-primary/80">Farm Tours</span>
                            </h2>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed font-light">
                                Connect with your food's journey. Walk through lush organic gardens, learn sustainable farming practices, and pick your own fresh vegetables and fruits. <br /><br />
                                <span className="font-medium">Love our produce?</span> Shop our authentic organic range directly at <a href="https://www.ancienthealth.org" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Farm Tourism</a>.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: 'Harvesting', icon: Leaf },
                                    { title: 'Dairy Farming', icon: Sun },
                                    { title: 'Beekeeping', icon: Wind },
                                    { title: 'Cooking Class', icon: Coffee }
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
                                        <div className="text-primary bg-primary/5 p-2 rounded-full"><feature.icon size={20} /></div>
                                        <span className="text-neutral-700 font-medium">{feature.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`order-1 lg:order-2 relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group transition-all duration-1000 ${isVisible['organic-tours'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <CloudinaryImage
                                src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1773026038/pexels-gokul-mohan-3043412-11011198_gsaiwd.jpg"
                                alt="Organic Farming"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Adventure Activities */}
            <section id="adventure" className="py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className={`relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group transition-all duration-1000 ${isVisible['adventure'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <CloudinaryImage
                                src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772968096/sy10_wmvbab.avif"
                                alt="Nature Trails"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <div className="flex items-center gap-2 mb-2 text-[#E5E4E2]">
                                    <Mountain className="w-5 h-5" />
                                    <span className="text-sm tracking-widest uppercase">Explore Nature</span>
                                </div>
                            </div>
                        </div>

                        <div className={`transition-all duration-1000 ${isVisible['adventure'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <Badge className="mb-6">Adventure</Badge>
                            <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6 leading-tight">
                                Adventure<br />
                                <span className="italic text-primary/80">Activities</span>
                            </h2>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed font-light">
                                For the thrill-seekers and nature lovers. Explore hidden trails, go bird watching, or enjoy a picnic by the river. Our curated activities ensure you experience the great outdoors in all its glory.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    'Guided Nature Walks & Trekking',
                                    'River Crossing & Angling',
                                    'Bird Watching Excursions',
                                    'Star Gazing Night Camping'
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

            {/* Wellness Retreats */}
            <section id="wellness" className="py-24 px-6 bg-primary text-white overflow-hidden relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible['wellness'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <Badge className="mb-6 border-white/20 text-white bg-white/10">Rejuvenation</Badge>
                            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                                Wellness<br />
                                <span className="italic text-[#E5E4E2]">Retreats</span>
                            </h2>
                            <p className="text-xl text-white/80 mb-8 leading-relaxed font-light">
                                Reconnect with your inner self in the lap of nature. Our wellness programs are designed to heal, rejuvenate, and restore balance to your mind, body, and soul.
                                <br /><br />
                                <span className="text-[#E5E4E2] text-sm tracking-wide uppercase">Featured on </span>
                                <a href="https://www.ancienthealth.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Farm Tourism</a>
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: 'Sunrise Yoga', desc: 'SESSIONS', icon: Sun },
                                    { title: 'Meditation', desc: 'MINDFULNESS', icon: Wind }, // Using Wind as placeholder for mindfulness
                                    { title: 'Ayurvedic Spa', desc: 'HEALING', icon: Heart },
                                    { title: 'Nature Therapy', desc: 'FOREST BATHING', icon: Leaf }
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

                        <div className={`order-1 lg:order-2 relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group transition-all duration-1000 ${isVisible['wellness'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <CloudinaryImage
                                src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772968095/sy5_vtqmyu.webp"
                                alt="Wellness Retreat"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
