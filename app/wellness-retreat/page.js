'use client';
import { useState, useEffect } from 'react';
import { Leaf, Sun, Wind, Droplet, Sparkles, Heart, Mountain, Coffee } from 'lucide-react';
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

export default function WellnessRetreatPage() {
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
                    src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1773057807/vantage-point-photographers-LE-U3PqquEg-unsplash_ckmbyd.jpg"
                    alt="Wellness Retreat"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
                    <Badge className="mb-8 border-white/20 text-white bg-white/10">Rejuvenate • Restore • Renew</Badge>
                    <h1 className={`text-5xl md:text-7xl lg:text-8xl font-serif mb-8 leading-[1.1] transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Discover Your<br />
                        <span className="italic text-[#E5E4E2]">Inner Peace</span>
                    </h1>
                    <p className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed mb-12 transition-all duration-1000 delay-300 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Escape to the serene Himalayas and embark on a transformative wellness journey. Reconnect with yourself through yoga, meditation, Ayurveda, and holistic healing.
                    </p>
                    <div className={`flex gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <Link href="/contact">
                            <Button className="!bg-[#E5E4E2] !text-primary hover:!bg-white">
                                Book Your Retreat
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Yoga & Meditation */}
            <section id="yoga-meditation" className="py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className={`relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group transition-all duration-1000 ${isVisible['yoga-meditation'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <CloudinaryImage
                                src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772968096/sy7_nmnkxu.avif"
                                alt="Yoga & Meditation"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <div className="flex items-center gap-2 mb-2 text-[#E5E4E2]">
                                    <Sun className="w-5 h-5" />
                                    <span className="text-sm tracking-widest uppercase">Mind & Body Harmony</span>
                                </div>
                            </div>
                        </div>

                        <div className={`transition-all duration-1000 ${isVisible['yoga-meditation'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <Badge className="mb-6">Practice</Badge>
                            <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6 leading-tight">
                                Yoga &<br />
                                <span className="italic text-primary/80">Meditation</span>
                            </h2>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed font-light">
                                Begin each day with sunrise yoga sessions overlooking the majestic mountains. Our experienced instructors guide you through asanas, pranayama, and meditation practices designed to strengthen your body and calm your mind.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    'Sunrise & Sunset Yoga Sessions',
                                    'Guided Meditation Practices',
                                    'Breathwork & Pranayama',
                                    'Personalized Yoga Programs'
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

            {/* Ayurvedic Spa & Healing */}
            <section id="ayurvedic-spa" className="py-24 px-6 bg-[#F5F5F0] overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible['ayurvedic-spa'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <Badge className="mb-6">Healing</Badge>
                            <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6 leading-tight">
                                Ayurvedic<br />
                                <span className="italic text-primary/80">Spa & Therapy</span>
                            </h2>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed font-light">
                                Experience the ancient wisdom of Ayurveda with our therapeutic treatments. From rejuvenating massages to detoxifying therapies, each treatment is customized to restore your body's natural balance and vitality.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: 'Abhyanga Massage', icon: Droplet },
                                    { title: 'Shirodhara Therapy', icon: Wind },
                                    { title: 'Herbal Steam Bath', icon: Leaf },
                                    { title: 'Detox Programs', icon: Sparkles }
                                ].map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
                                        <div className="text-primary bg-primary/5 p-2 rounded-full"><feature.icon size={20} /></div>
                                        <span className="text-neutral-700 font-medium">{feature.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`order-1 lg:order-2 relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group transition-all duration-1000 ${isVisible['ayurvedic-spa'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <CloudinaryImage
                                src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772971420/stress_xgu5yd.jpg"
                                alt="Ayurvedic Spa"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Nutrition & Organic Cuisine */}
            <section id="nutrition" className="py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className={`relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group transition-all duration-1000 ${isVisible['nutrition'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <CloudinaryImage
                                src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1773063636/3254-1_fejtrp.webp"
                                alt="Organic Cuisine"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 text-white">
                                <div className="flex items-center gap-2 mb-2 text-[#E5E4E2]">
                                    <Coffee className="w-5 h-5" />
                                    <span className="text-sm tracking-widest uppercase">Farm to Table</span>
                                </div>
                            </div>
                        </div>

                        <div className={`transition-all duration-1000 ${isVisible['nutrition'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <Badge className="mb-6">Nourishment</Badge>
                            <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6 leading-tight">
                                Wholesome<br />
                                <span className="italic text-primary/80">Nutrition</span>
                            </h2>
                            <p className="text-xl text-neutral-600 mb-8 leading-relaxed font-light">
                                Nourish your body with carefully curated vegetarian meals made from organic, locally-sourced ingredients. Our Ayurvedic chefs create balanced meals that support your wellness journey and delight your taste buds.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    'Organic Farm-to-Table Cuisine',
                                    'Ayurvedic Meal Planning',
                                    'Detox & Cleanse Menus',
                                    'Cooking Workshops Available'
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

            {/* Nature Immersion & Mindfulness */}
            <section id="nature-immersion" className="py-24 px-6 bg-primary text-white overflow-hidden relative">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible['nature-immersion'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <Badge className="mb-6 border-white/20 text-white bg-white/10">Connection</Badge>
                            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                                Nature<br />
                                <span className="italic text-[#E5E4E2]">Immersion</span>
                            </h2>
                            <p className="text-xl text-white/80 mb-8 leading-relaxed font-light">
                                Connect with the healing power of nature through guided forest walks, mountain treks, and riverside meditation. Experience the therapeutic benefits of being in harmony with the natural world.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: 'Forest Bathing', desc: 'SHINRIN-YOKU', icon: Leaf },
                                    { title: 'Mountain Treks', desc: 'MINDFUL HIKING', icon: Mountain },
                                    { title: 'River Meditation', desc: 'WATER THERAPY', icon: Droplet },
                                    { title: 'Stargazing', desc: 'NIGHT MEDITATION', icon: Sparkles }
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

                        <div className={`order-1 lg:order-2 relative h-[600px] rounded-2xl overflow-hidden shadow-2xl group transition-all duration-1000 ${isVisible['nature-immersion'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <CloudinaryImage
                                src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772968096/sy10_wmvbab.avif"
                                alt="Nature Immersion"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Retreat Packages */}
            <section id="packages" className="py-24 px-6 bg-neutral-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Badge className="mb-6">Programs</Badge>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
                            Wellness Retreat<br />
                            <span className="italic text-primary/80">Packages</span>
                        </h2>
                        <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light">
                            Choose from our carefully designed retreat programs, each offering a unique path to wellness and self-discovery.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Weekend Escape',
                                duration: '3 Days / 2 Nights',
                                features: ['Daily Yoga & Meditation', 'Ayurvedic Meals', 'One Spa Treatment', 'Nature Walks'],
                                icon: Sun
                            },
                            {
                                title: 'Deep Cleanse',
                                duration: '7 Days / 6 Nights',
                                features: ['Detox Program', 'Multiple Spa Sessions', 'Personalized Yoga', 'Nutrition Counseling'],
                                icon: Leaf,
                                featured: true
                            },
                            {
                                title: 'Total Transformation',
                                duration: '14 Days / 13 Nights',
                                features: ['Complete Wellness Program', 'Unlimited Spa Access', 'Private Sessions', 'Lifestyle Coaching'],
                                icon: Heart
                            }
                        ].map((pkg, idx) => (
                            <div key={idx} className={`p-8 rounded-2xl shadow-lg border transition-all duration-300 hover:-translate-y-2 ${pkg.featured ? 'bg-primary text-white border-primary scale-105' : 'bg-white border-neutral-200'}`}>
                                <div className={`inline-flex p-3 rounded-full mb-6 ${pkg.featured ? 'bg-white/10' : 'bg-primary/5'}`}>
                                    <pkg.icon className={`w-8 h-8 ${pkg.featured ? 'text-white' : 'text-primary'}`} />
                                </div>
                                <h3 className={`text-2xl font-serif mb-2 ${pkg.featured ? 'text-white' : 'text-primary'}`}>{pkg.title}</h3>
                                <p className={`text-sm uppercase tracking-widest mb-6 ${pkg.featured ? 'text-white/70' : 'text-neutral-500'}`}>{pkg.duration}</p>
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className={`flex items-center gap-3 ${pkg.featured ? 'text-white/90' : 'text-neutral-600'}`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${pkg.featured ? 'bg-white' : 'bg-primary'}`}></span>
                                            <span className="font-light">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/contact">
                                    <Button className={`w-full ${pkg.featured ? '!bg-white !text-primary hover:!bg-[#E5E4E2]' : '!bg-primary !text-white hover:!bg-primary/90'}`}>
                                        Book Now
                                    </Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
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
                                Begin Your Journey
                            </span>

                            <h2 className="text-4xl md:text-6xl font-serif text-primary mb-8 leading-tight">
                                Ready to<br />
                                <span className="italic text-primary/80">Transform Your Life?</span>
                            </h2>

                            <p className="text-xl text-neutral-600 mb-12 leading-relaxed font-light">
                                Take the first step towards holistic wellness. <br className="hidden md:block" />
                                Your transformation begins in the Himalayas.
                            </p>

                            <Link href="/contact">
                                <Button className="px-10 py-5 bg-primary !text-white hover:!bg-primary/90 hover:!text-white shadow-[0_4px_20px_rgba(128,0,0,0.2)] hover:shadow-[0_4px_25px_rgba(128,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 font-serif tracking-widest text-sm">
                                    Book Your Retreat
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
