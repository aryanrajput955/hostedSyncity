'use client';
import { useState, useEffect } from 'react';
import { 
    Users, Heart, Sparkles, Coffee, Target, Award, Zap, Brain, 
    Rocket, Globe, MapPin, ChevronDown, CheckCircle, Calendar, 
    TrendingUp, Leaf, Shield, HelpCircle, Camera, Music, Utensils
} from 'lucide-react';
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

function AccordionItem({ title, children, isOpen, onClick }) {
    return (
        <div className="border-b border-neutral-200">
            <button
                className="w-full py-6 flex items-center justify-between text-left group"
                onClick={onClick}
            >
                <h3 className="text-lg font-serif text-primary group-hover:text-primary/70 transition-colors">{title}</h3>
                <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
                    {children}
                </p>
            </div>
        </div>
    );
}

export default function ClientContent() {
    const [isVisible, setIsVisible] = useState({});
    const [openFaq, setOpenFaq] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({
                            ...prev,
                            [entry.target.id]: true
                        }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('[id]').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const faqs = [
        {
            q: "What are the best destination wedding venues in Rishikesh according to Syncity Events?",
            a: "For premium riverside ceremonies, we recommend Taj Rishikesh Resort & Spa and Aloha on the Ganges. These properties feature dedicated lawns with direct views of the Ganges, ideal for sunset pheras. For intimate beach-style weddings, boutique venues like Ganga Kinare offer exceptional river access."
        },
        {
            q: "How do destination wedding packages in Uttarakhand differ by season?",
            a: "Destination wedding packages in Uttarakhand fluctuate with local demand. The highest demand occurs from March to June and October to November. Planning a winter wedding (December–February) can unlock significant value, offering exclusive access to premium venues and the unique aesthetic of a snow-dusted Himalayan backdrop."
        },
        {
            q: "Why is Mussoorie a better choice for a destination wedding than other hill stations?",
            a: "A destination wedding in Mussoorie is superior due to its established hospitality infrastructure and accessibility. Located just 90 minutes from Dehradun airport, it is easier for guests to reach than remote stations. Top-tier brands like JW Marriott Walnut Grove and The Savoy are specifically equipped to handle large-scale wedding logistics."
        },
        {
            q: "Which destination wedding resorts in Dehradun are best for large groups of 300-500+ guests?",
            a: "For large-scale celebrations, Syncity Events suggests Hyatt Regency Dehradun and Regenta LP Vilas. These resorts offer massive pillar-less banquet halls, extensive room inventory to keep all guests in one place, and ample parking facilities for local attendees."
        },
        {
            q: "What specific services does Syncity Events provide as a destination wedding planner?",
            a: "As a specialized destination wedding planner, we provide end-to-end management including venue scouting, vendor negotiations, and guest hospitality. We solve terrain-specific challenges like mountain logistics and specialized equipment transport, ensuring a stress-free experience for the couple."
        },
        {
            q: "Is a rishikesh destination wedding suitable for traditional Vedic ceremonies?",
            a: "Yes, Rishikesh is the spiritual capital of India, making it perfect for traditional rituals. Many destination wedding venues here offer private ghats or riverside decks specifically designed for Vedic pheras and personalized Ganga Aarti experiences for wedding guests."
        },
        {
            q: "How does Syncity Events handle logistics for a destination wedding in Mussoorie?",
            a: "Managing a destination wedding in Mussoorie requires expertise in mountain logistics. We provide specialized transport for guests, manage local vendor sourcing to optimize costs, and ensure all decor materials reach the venue safely through narrow mountain roads."
        },
        {
            q: "What are the average inclusions in destination wedding packages for Uttarakhand?",
            a: "Standard destination wedding packages usually include venue rental, catering services, themed decor, guest accommodation, and on-site coordination. Syncity Events provides customized quotes to match your specific guest count and luxury requirements."
        },
        {
            q: "Why are destination wedding venues in Dehradun preferred for residential weddings?",
            a: "A destination wedding in Dehradun is preferred because the city has resorts with larger room inventories. This allows the entire guest list to stay at a single property, which improves coordination and allows for more seamless transitions between different wedding functions."
        },
        {
            q: "What unique guest experiences can a destination wedding planner in Uttarakhand arrange?",
            a: "Beyond the ceremony, we arrange local sightseeing tours, nature walks, and personalized welcome hampers. This transforms your wedding into a complete vacation experience for your family and friends."
        }
    ];

    return (
        <main className="min-h-screen bg-[#FBFBFB]">
            {/* Hero Section */}
            <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
                <CloudinaryImage
                    src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772968096/sy4_uca7qn.webp"
                    alt="Destination Wedding Planner in Uttarakhand"
                    fill
                    className="object-cover"
                    priority={true}
                />
                <div className="absolute inset-0 bg-black/40"></div>

                <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
                    <h1 className={`text-4xl md:text-7xl lg:text-8xl font-serif mb-8 leading-[1.1] transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Destination Wedding<br />
                        <span className="italic text-[#E5E4E2]">Planner</span>
                        <br />in Uttarakhand
                    </h1>
                    <p className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed mb-12 transition-all duration-1000 delay-300 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Luxury destination weddings in Uttarakhand crafted with precision and attention to detail. From Rishikesh to Mussoorie and Dehradun, we plan seamless and personalized celebrations.
                    </p>
                    <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <Link href="/contact">
                            <Button className="!bg-[#E5E4E2] !text-primary hover:!bg-white w-full sm:w-auto">
                                Plan Your Wedding
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="secondary" className="w-full sm:w-auto">
                                Get Consultation
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section id="intro" className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <Badge className="mb-6">Luxury Celebrations</Badge>
                    <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8">Plan Your Destination Wedding in Uttarakhand</h2>
                    <div className="space-y-6 text-lg md:text-xl text-neutral-600 font-light leading-relaxed">
                        <p>
                            A destination wedding is more than just a ceremony; it is a curated experience where your milestone is set against a breathtaking location. Uttarakhand offers a diverse landscape of scenic mountains, serene riverside venues, and peaceful forest surroundings, making it a premier choice for couples worldwide.
                        </p>
                        <p>
                            At Syncity Events, we specialize in managing every aspect of a destination wedding in Uttarakhand. Our team focuses on smooth execution, creative design, and highly personalized service.
                        </p>
                        <p>
                            From the initial venue scouting to the final execution on your big day, we manage every technical and aesthetic detail to ensure your celebration is exactly as you imagined.
                        </p>
                        <p className="text-primary/70 italic">
                            For multi-day celebrations with large guest groups, similar planning approaches are also used in corporate events, especially for handling accommodation and coordinated logistics.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Uttarakhand */}
            <section id="why-choose" className="py-24 px-6 bg-[#F5F5F0]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Badge className="mb-4">Why Choose Uttarakhand</Badge>
                        <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Why Choose Uttarakhand for Destination Weddings</h2>
                        <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto font-light">
                            Uttarakhand stands out as one of the most preferred locations for a destination wedding in India. The region offers a rare combination of natural grandeur, spiritual significance, and modern infrastructure.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Scenic Diversity", desc: "Choose between mountain-top resorts in Mussoorie or tranquil riverside lawns in Rishikesh.", icon: Globe },
                            { title: "Ideal Climate", desc: "The state offers pleasant weather throughout the year, with cool summers and magical, snowy winters.", icon: Sparkles },
                            { title: "Peaceful Atmosphere", desc: "Away from the noise of metropolitan cities, these locations provide an intimate and focused environment for your family and friends.", icon: Heart },
                            { title: "Excellent Connectivity", desc: "With direct flights to Dehradun and well-maintained highways from Delhi NCR, your guests can travel with ease.", icon: MapPin }
                        ].map((item, idx) => (
                            <div key={idx} className={`bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 transition-all duration-700 delay-${idx * 100} ${isVisible['why-choose'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                <div className="text-primary bg-primary/5 w-12 h-12 flex items-center justify-center rounded-xl mb-6">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-xl font-serif text-primary mb-3">{item.title}</h3>
                                <p className="text-neutral-600 font-light text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 p-8 bg-primary/5 rounded-2xl border border-primary/10 text-center">
                        <p className="text-lg md:text-xl text-neutral-700 font-light leading-relaxed">
                            Locations that offer peaceful surroundings and focused environments are also commonly used in wellness retreat services, especially for intimate gatherings and extended celebrations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Planning Services */}
            <section id="services" className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Badge className="mb-4">Our Services</Badge>
                        <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Destination Wedding Planning Services</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Venue Selection", desc: "We help you choose the best destination wedding venues based on your specific guest count, aesthetic preferences, and budget. Whether you seek a riverside boutique property or a sprawling luxury estate, we provide transparent comparisons to help you decide.", icon: MapPin },
                            { title: "Wedding Decor and Styling", desc: "Our design team focuses on creating atmospheres that complement the natural beauty of Uttarakhand. We handle everything from floral installations and lighting design to themed stage setups. Our goal is to maintain a clean, sophisticated look that reflects your personal style.", icon: Sparkles },
                            { title: "Vendor Management", desc: "As your dedicated destination wedding planner, we bridge the gap between you and the best service providers in the industry. We coordinate with elite caterers, specialized photographers, makeup artists, and entertainment troupes to ensure everyone is aligned with the wedding timeline.", icon: Camera },
                            { title: "Guest and Hospitality Management", desc: "Managing guests in a destination setting requires precise logistics. We take charge of accommodation bookings, airport transfers, and local transportation. Our hospitality desk ensures that every guest feels welcomed and well-attended throughout the festivities.", icon: Users },
                            { title: "Logistics and Execution", desc: "The terrain in hill stations requires expert handling. We manage the complex logistics of transporting decor materials, sound equipment, and supplies across Uttarakhand. Our on-ground team monitors every minute of the event to handle unforeseen challenges instantly.", icon: Zap }
                        ].map((service, idx) => (
                            <div key={idx} className="p-8 border border-neutral-100 rounded-2xl hover:shadow-lg transition-all duration-300">
                                <div className="text-primary mb-6"><service.icon size={32} strokeWidth={1.5} /></div>
                                <h3 className="text-2xl font-serif text-primary mb-4">{service.title}</h3>
                                <p className="text-neutral-600 font-light leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                        <div className="p-8 bg-primary text-white rounded-2xl flex flex-col justify-center items-center text-center">
                            <Heart className="mb-4 text-[#E5E4E2]" size={40} />
                            <h3 className="text-2xl font-serif mb-4">Start Your Journey</h3>
                            <Link href="/contact">
                                <Button variant="secondary" className="!border-white/30 hover:!border-white">Contact Us</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            <section id="packages" className="py-24 px-6 bg-[#F5F5F0]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Badge className="mb-4">Wedding Packages</Badge>
                        <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Destination Wedding Packages in Uttarakhand</h2>
                        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto font-light">
                            We provide structured yet flexible destination wedding packages designed to accommodate different scales of celebration. We understand that every wedding has unique financial and creative requirements.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { 
                                title: "Boutique Wedding Packages", 
                                desc: "Designed for intimate gatherings of 50 to 80 guests in exclusive, high-end properties.",
                                icon: Coffee
                            },
                            { 
                                title: "Grand Celebration Packages", 
                                desc: "Suited for large-scale events at premier destination wedding resorts with extensive guest lists.",
                                icon: Award
                            },
                            { 
                                title: "Custom Planning", 
                                desc: "A completely bespoke service where we build the entire package from scratch based on your specific desires and luxury requirements.",
                                icon: Rocket
                            }
                        ].map((pkg, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-2xl shadow-sm border border-neutral-100 text-center group hover:border-primary/20 transition-colors">
                                <div className="text-primary bg-primary/5 w-16 h-16 flex items-center justify-center rounded-full mb-8 mx-auto group-hover:scale-110 transition-transform">
                                    <pkg.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-serif text-primary mb-6">{pkg.title}</h3>
                                <p className="text-neutral-600 font-light leading-relaxed">{pkg.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Locations */}
            <section id="locations" className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Badge className="mb-4">Top Locations</Badge>
                        <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Top Destination Wedding Locations in Uttarakhand</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { 
                                title: "Destination Wedding in Rishikesh", 
                                desc: "Known for its spiritual energy and the flowing Ganges, a destination wedding in Rishikesh is perfect for couples seeking a serene, riverside ceremony. The city offers a mix of luxury hotels and \"beach-style\" phera locations that are unique to this region.",
                                img: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1772978311/f7_pysj70.jpg"
                            },
                            { 
                                title: "Destination Wedding in Mussoorie", 
                                desc: "Known as the Queen of Hills, a destination wedding in Mussoorie provides an old-world charm combined with panoramic Himalayan views. It is the ideal location for those who want a cool climate and sophisticated, colonial-style luxury resorts.",
                                img: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1772968096/sy8_riiah7.jpg"
                            },
                            { 
                                title: "Destination Wedding in Dehradun", 
                                desc: "A destination wedding in Dehradun offers the best of both worlds—the beauty of the foothills and the convenience of a capital city. It features some of the largest destination wedding resorts in the state, making it the top choice for high-capacity weddings.",
                                img: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1772971420/stress_xgu5yd.jpg"
                            }
                        ].map((loc, idx) => (
                            <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-lg h-[350px] md:h-[450px]">
                                <CloudinaryImage src={loc.img} alt={loc.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <h3 className="text-2xl font-serif text-white mb-4">{loc.title}</h3>
                                    <p className="text-white/80 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {loc.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Wedding Venues and Resorts */}
            <section id="venues" className="py-24 px-6 bg-[#FBFBFB]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className={`transition-all duration-1000 ${isVisible['venues'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <Badge className="mb-6">Luxury Stays</Badge>
                            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Wedding Venues and Resorts in Uttarakhand</h2>
                            <p className="text-lg md:text-xl text-neutral-600 mb-8 font-light leading-relaxed">
                                Uttarakhand is home to some of the finest hospitality brands in the world. We have established partnerships with top destination wedding resorts to offer you priority bookings and managed services. From heritage properties to contemporary glass-fronted resorts, we help you find a space that resonates with your vision.
                            </p>
                            <p className="text-primary/70 italic text-sm">
                                Venues with open landscapes and natural surroundings are also preferred in farm tourism experiences, especially for outdoor wedding functions and relaxed celebration setups.
                            </p>
                        </div>
                        <div className={`relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ${isVisible['venues'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <CloudinaryImage
                                src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772968096/sy8_riiah7.jpg"
                                alt="Wedding Resort"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Wedding Planning Process */}
            <section id="process" className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Badge className="mb-4">The Process</Badge>
                        <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Our Wedding Planning Process</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { 
                                step: "01", 
                                title: "Requirement Mapping", 
                                desc: "We begin with a detailed consultation to understand your guest list, dates, and style." 
                            },
                            { 
                                step: "02", 
                                title: "Strategic Planning", 
                                desc: "Our team creates a comprehensive roadmap, including venue shortlists and budget breakdowns." 
                            },
                            { 
                                step: "03", 
                                title: "Coordination Phase", 
                                desc: "We finalize all vendors, decor designs, and logistical schedules." 
                            },
                            { 
                                step: "04", 
                                title: "Flawless Execution", 
                                desc: "Our senior planners remain on-site to oversee the entire event from the first guest arrival to the final farewell." 
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="relative">
                                <div className="text-7xl font-serif text-primary/5 absolute -top-8 left-0 select-none">{item.step}</div>
                                <div className="relative z-10 pt-4">
                                    <h3 className="text-2xl font-serif text-primary mb-4">{item.title}</h3>
                                    <p className="text-neutral-600 font-light text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sustainable Destination Weddings */}
            <section id="sustainability" className="py-24 px-6 bg-primary text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="text-[#E5E4E2] flex justify-center mb-6"><Leaf size={48} strokeWidth={1.5} /></div>
                    <h2 className="text-3xl md:text-4xl font-serif mb-6">Sustainable Destination Weddings</h2>
                    <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-8">
                        We are committed to preserving the natural beauty of the locations where we work. Our sustainable wedding initiatives focus on reducing waste through eco-friendly decor materials, local sourcing of food and flowers, and efficient waste management systems. We help you celebrate your love while respecting the environment of the Himalayas.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            "Eco-friendly Materials",
                            "Local Sourcing",
                            "Waste Management"
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white/10 p-4 rounded-xl text-white font-medium text-sm border border-white/10">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section id="faqs" className="py-24 px-6 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <Badge className="mb-4">Common Questions</Badge>
                        <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-2">
                        {faqs.map((faq, idx) => (
                            <AccordionItem
                                key={idx}
                                title={faq.q}
                                isOpen={openFaq === idx}
                                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                            >
                                {faq.a}
                            </AccordionItem>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section id="footer-cta" className="py-24 px-6 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Start Planning Your Destination Wedding</h2>
                    <p className="text-xl text-white/80 font-light leading-relaxed mb-12">
                        Your journey toward a perfect mountain wedding begins with a single conversation. Let Syncity Events take the complexity out of planning so you can enjoy every moment of your celebration.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link href="/contact">
                            <Button className="!bg-[#E5E4E2] !text-primary hover:!bg-white px-12">
                                Contact Us
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="secondary" className="px-12">
                                Book Consultation
                            </Button>
                        </Link>
                    </div>
                    <p className="mt-12 text-white/50 text-sm italic font-light">
                        You can also explore our event decor and styling services to ensure your wedding setup aligns with your theme and overall visual experience.
                    </p>
                </div>
            </section>
        </main>
    );
}
