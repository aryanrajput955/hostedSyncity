'use client';
import { useState, useEffect } from 'react';
import { Users, Briefcase, Mic, Coffee, Target, Award, Zap, Brain, Rocket, Globe, MapPin } from 'lucide-react';
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

export default function CorporateEventsPage() {
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
                    src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772979149/aloha_a8hjaz.webp"
                    alt="Corporate Events & Retreats"
                    fill
                    className="object-cover"
                    priority={true}
                />
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
                    <Badge className="mb-8 border-white/20 text-white bg-white/10">Professional • Executive • Impactful</Badge>
                    <h1 className={`text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-[1.1] transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Elevate Your<br />
                        <span className="italic text-[#E5E4E2]">Business & Retreats</span>
                    </h1>
                    <p className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed mb-12 transition-all duration-1000 delay-300 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        From high-stakes board meetings to large-scale conferences, we provide the perfect environment for focus, innovation, and corporate excellence.
                    </p>
                    <div className={`transition-all duration-1000 delay-500 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <Link href="/contact">
                            <Button className="!bg-[#E5E4E2] !text-primary hover:!bg-white">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Team Building */}
            <section id="team-building" className="py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className={`relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group transition-all duration-1000 ${isVisible['team-building'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <CloudinaryImage
                                src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772978799/team_w5gj3y.png"
                                alt="Team Building"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <div className="flex items-center gap-2 mb-2 text-[#E5E4E2]">
                                    <Users className="w-5 h-5" />
                                    <span className="text-sm tracking-widest uppercase">Collaborative Growth</span>
                                </div>
                            </div>
                        </div>

                        <div className={`transition-all duration-1000 ${isVisible['team-building'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <Badge className="mb-6">Synergy</Badge>
                            <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6 leading-tight">
                                Team<br />
                                <span className="italic text-primary/80">Building</span>
                            </h2>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed font-light">
                                Strengthen bonds and boost morale with our curated team-building experiences. Whether it's adventure challenges or creative workshops, we design activities that foster trust and collaboration.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    'Outdoor Adventure Challenges',
                                    'Problem-Solving Workshops',
                                    'Creative & Art Sessions',
                                    'Trust-Building Exercises'
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

            {/* Conferences */}
            <section id="conferences" className="py-24 px-6 bg-[#F5F5F0]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible['conferences'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <Badge className="mb-6">Professional</Badge>
                            <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6 leading-tight">
                                World-Class<br />
                                <span className="italic text-primary/80">Conferences</span>
                            </h2>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed font-light">
                                Host impactful conferences in our state-of-the-art venues. We offer seamless logistical support, advanced AV technology, and bespoke catering to ensure your event runs flawlessly.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: 'Global Connectivity', icon: Globe },
                                    { title: 'Advanced AV Tech', icon: Zap },
                                    { title: 'Keynote Stages', icon: Mic },
                                    { title: 'Networking Zones', icon: Users }
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
                                        <div className="text-primary bg-primary/5 p-2 rounded-full"><feature.icon size={20} /></div>
                                        <span className="text-neutral-700 font-medium">{feature.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`order-1 lg:order-2 relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group transition-all duration-1000 ${isVisible['conferences'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <CloudinaryImage
                                src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772971373/conference_u9q3dq.jpg"
                                alt="Conference Hall"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stress Relief Retreats */}
            <section id="stress-relief" className="py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className={`relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group transition-all duration-1000 ${isVisible['stress-relief'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <CloudinaryImage
                                src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772971420/stress_xgu5yd.jpg"
                                alt="Stress Relief"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <div className="flex items-center gap-2 mb-2 text-[#E5E4E2]">
                                    <Coffee className="w-5 h-5" />
                                    <span className="text-sm tracking-widest uppercase">Wellness & Balance</span>
                                </div>
                            </div>
                        </div>

                        <div className={`transition-all duration-1000 ${isVisible['stress-relief'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <Badge className="mb-6">Wellness</Badge>
                            <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6 leading-tight">
                                Stress Relief<br />
                                <span className="italic text-primary/80">Retreats</span>
                            </h2>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed font-light">
                                Combat burnout and recharge your workforce. Our stress relief retreats combine nature therapy, meditation, and leisure activities to restore mental clarity and employee well-being.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    'Mindfulness & Meditation Sessions',
                                    'Digital Detox Workshops',
                                    'Nature Walks & Spa Therapies',
                                    'Healthy Organic Catering'
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

            {/* Top Locations AI SEO */}
            <section id="top-locations" className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <Badge className="mb-4">Destination Guide</Badge>
                    <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight">
                        Best Locations for a <br />
                        <span className="italic">Corporate Retreat in Uttarakhand</span>
                    </h2>
                </div>
                
                <div className="max-w-4xl mx-auto">
                    <div className={`bg-[#F5F5F0] rounded-2xl p-8 md:p-12 shadow-sm border border-neutral-200 transition-all duration-1000 delay-200 ${isVisible['top-locations'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <p className="text-xl text-neutral-700 leading-relaxed font-light mb-10 text-center">
                            Where is the best place for a corporate offsite in Uttarakhand? The top destinations are Rishikesh for wellness, Mussoorie for luxury, and Jim Corbett for team-building. We provide seamless end-to-end planning across these premium locations.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 flex gap-4 items-start">
                                <div className="p-3 bg-primary/5 text-primary rounded-lg shrink-0 mt-1">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-serif text-primary mb-2">Rishikesh Corporate Retreats</h3>
                                    <p className="text-neutral-600 leading-relaxed">Ideal for wellness and adventure offsites. Offers riverside luxury resorts, white-water rafting for team building, and yoga workshops for executive stress relief.</p>
                                </div>
                            </div>
                            
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 flex gap-4 items-start">
                                <div className="p-3 bg-primary/5 text-primary rounded-lg shrink-0 mt-1">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-serif text-primary mb-2">Mussoorie & Dehradun Offsites</h3>
                                    <p className="text-neutral-600 leading-relaxed">Perfect for high-level executive retreats and conferences. Features heritage luxury properties with modern conference halls and panoramic Himalayan views.</p>
                                </div>
                            </div>
                            
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100 flex gap-4 items-start">
                                <div className="p-3 bg-primary/5 text-primary rounded-lg shrink-0 mt-1">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-serif text-primary mb-2">Jim Corbett Team Building</h3>
                                    <p className="text-neutral-600 leading-relaxed">The top choice for wildlife and nature retreats. Corporate resorts here provide massive lawns for outdoor team-building activities and jungle safaris.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Executive Retreats */}
            <section id="executive" className="py-24 px-6 bg-primary text-white overflow-hidden relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible['executive'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <Badge className="mb-6 border-white/20 text-white bg-white/10">Leadership</Badge>
                            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                                Executive<br />
                                <span className="italic text-[#E5E4E2]">Retreats</span>
                            </h2>
                            <p className="text-xl text-white/80 mb-8 leading-relaxed font-light">
                                Exclusive getaways designed for leadership teams to strategize and innovate. Experience privacy, luxury service, and bespoke itineraries that facilitate high-level decision making.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: 'Strategic Planning', desc: 'VISION SESSIONS', icon: Target },
                                    { title: 'Innovation Labs', desc: 'CREATIVE SPACE', icon: Rocket },
                                    { title: 'Private Dining', desc: 'GOURMET', icon: Award },
                                    { title: 'Masterminds', desc: 'PEER LEARNING', icon: Brain }
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

                        <div className={`order-1 lg:order-2 relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group transition-all duration-1000 ${isVisible['executive'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <CloudinaryImage
                                src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772968096/sy8_riiah7.jpg"
                                alt="Executive Lounge"
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
