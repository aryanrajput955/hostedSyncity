'use client';
import { useState, useEffect } from 'react';
import { 
    Users, Briefcase, Mic, Coffee, Target, Award, Zap, Brain, 
    Rocket, Globe, MapPin, ChevronDown, CheckCircle, Calendar, 
    TrendingUp, Leaf, Shield, HelpCircle
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
                <p className="text-neutral-600 leading-relaxed font-light">
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
            q: "What types of corporate events do you organize in Uttarakhand?",
            a: "Corporate events include conferences, product launches, team outings, training sessions, and internal business meetings. The type of event depends on the company’s objective, whether it is communication, team engagement, or brand presentation."
        },
        {
            q: "How can a Himalayan retreat benefit my team's productivity?",
            a: "A Himalayan retreat provides a distraction-free environment where teams can focus better. It helps improve communication, encourages collaboration, and allows employees to reset, which can lead to better productivity after the event."
        },
        {
            q: "Do you provide end-to-end logistics for corporate offsites?",
            a: "Yes, corporate event management includes handling logistics such as venue booking, travel coordination, accommodation, and on-site support. This ensures that the event runs without interruptions or delays."
        },
        {
            q: "Can you incorporate sustainable practices into large-scale conferences?",
            a: "Sustainable practices can be included through controlled resource usage, local sourcing, reduced waste, and minimal physical materials. These practices help manage events efficiently without unnecessary environmental impact."
        },
        {
            q: "What are the best venues for corporate retreats in Dehradun and Mussoorie?",
            a: "Dehradun offers business hotels and conference venues suitable for formal setups. Mussoorie provides resort-based venues that are more suitable for retreats and offsite meetings."
        },
        {
            q: "What does a corporate event planner do?",
            a: "A corporate event planner manages venue selection, vendor coordination, logistics, and execution. The role focuses on maintaining structure and ensuring that all event elements work together smoothly."
        },
        {
            q: "How early should a corporate event be planned?",
            a: "Planning timelines depend on event size, but it is generally better to start a few weeks in advance. Larger events may require more time for coordination and preparation."
        },
        {
            q: "What factors affect corporate event cost?",
            a: "Cost depends on venue type, number of attendees, duration, and services required. Additional elements like branding and technical setups can also influence the overall budget."
        },
        {
            q: "Are resorts suitable for corporate events?",
            a: "Resorts are suitable for offsites and team events as they provide space, flexibility, and a relaxed environment. They are commonly used for informal corporate gatherings."
        },
        {
            q: "How do corporate event management companies operate?",
            a: "They manage planning, coordination, vendor handling, and execution. The goal is to ensure that the event runs as planned without operational issues."
        }
    ];

    return (
        <main className="min-h-screen bg-[#FBFBFB]">
            {/* Hero Section */}
            <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
                <CloudinaryImage
                    src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772979149/aloha_a8hjaz.webp"
                    alt="Corporate Events in Uttarakhand"
                    fill
                    className="object-cover"
                    priority={true}
                />
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
                    <h1 className={`text-4xl md:text-7xl lg:text-8xl font-serif mb-8 leading-[1.1] transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Plan Your<br />
                        <span className="italic text-[#E5E4E2]">Corporate Events</span>
                        <br />in Uttarakhand
                    </h1>
                    <p className={`text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed mb-12 transition-all duration-1000 delay-300 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        Corporate events are planned with clear structure and coordination. From Rishikesh to Mussoorie and Dehradun, events are managed across venues suitable for conferences, offsites, and business gatherings.
                    </p>
                    <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <Link href="/contact">
                            <Button className="!bg-[#E5E4E2] !text-primary hover:!bg-white w-full sm:w-auto">
                                Plan Your Event
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
                    <Badge className="mb-6">Corporate Excellence</Badge>
                    <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8">Plan Your Corporate Event in Uttarakhand</h2>
                    <div className="space-y-6 text-lg md:text-xl text-neutral-600 font-light leading-relaxed">
                        <p>
                            A corporate event is a structured gathering designed for business activities such as meetings, conferences, product launches, and team interactions. It requires clear planning, coordination, and execution to ensure that all elements run smoothly.
                        </p>
                        <p>
                            Uttarakhand has become a preferred destination for corporate events due to its mix of natural locations and accessible venues. From business hotels to resort-based setups, the region supports different event formats. As a corporate event planner in Uttarakhand, Syncity Events focuses on structured planning and execution across all stages.
                        </p>
                        <p className="text-primary/70 italic">
                            For companies planning large-scale or multi-day events, similar venue planning and coordination is also used in destination wedding planning services, especially when managing guest stays and venue logistics across locations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Uttarakhand */}
            <section id="why-choose" className="py-24 px-6 bg-[#F5F5F0]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Badge className="mb-4">Why Choose Us</Badge>
                        <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Why Choose Uttarakhand for Corporate Events</h2>
                        <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto font-light">
                            The region provides locations that help teams stay focused while also offering a break from regular office settings.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Scenic Locations", desc: "Suitable for corporate events with inspiring backdrops.", icon: Globe },
                            { title: "Work-Friendly", desc: "Distraction-free environment tailored for productivity.", icon: Zap },
                            { title: "Pleasant Weather", desc: "Comfortable conditions across most seasons of the year.", icon: Coffee },
                            { title: "Easy Accessibility", desc: "Conveniently connected from major cities like Delhi.", icon: MapPin }
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
                        <p className="text-neutral-700 font-light leading-relaxed">
                            For teams focusing on relaxation and productivity, similar environments are also used in wellness retreats, where calm locations support better engagement and focus.
                        </p>
                    </div>
                </div>
            </section>

            {/* Venues Section */}
            <section id="venues" className="py-24 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
                        <div className={`transition-all duration-1000 ${isVisible['venues'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <Badge className="mb-6">Infrastructure</Badge>
                            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Corporate Event Venues in Uttarakhand</h2>
                            <p className="text-lg md:text-xl text-neutral-600 mb-8 font-light leading-relaxed">
                                Uttarakhand provides multiple options for corporate event venues based on event type and scale. These include business hotels, conference halls, and resort properties suitable for both formal and informal setups.
                            </p>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <div className="mt-1 text-primary"><Briefcase size={20} /></div>
                                    <div>
                                        <h4 className="font-serif text-xl text-primary mb-2">Business Hotels</h4>
                                        <p className="text-neutral-600 text-sm font-light">Commonly used for meetings and conferences due to their infrastructure and accessibility.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="mt-1 text-primary"><Users size={20} /></div>
                                    <div>
                                        <h4 className="font-serif text-xl text-primary mb-2">Resorts for Events</h4>
                                        <p className="text-neutral-600 text-sm font-light">Preferred for offsites and team outings as they offer space and a relaxed setting.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 ${isVisible['venues'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <CloudinaryImage
                                src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772971373/conference_u9q3dq.jpg"
                                alt="Corporate Venue"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Planning Services */}
            <section id="services" className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Badge className="mb-4">Our Expertise</Badge>
                        <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Corporate Event Planning Services</h2>
                        <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto font-light">
                            A structured approach is important in corporate event management, ensuring clarity across all stages.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Venue Selection", desc: "Based on event size, format, and requirements. Options include conference halls, business hotels, and resorts.", icon: MapPin },
                            { title: "Event Setup & Branding", desc: "Focus on maintaining a professional environment aligned with company requirements and brand identity.", icon: Target },
                            { title: "Vendor Management", desc: "Coordination with catering, AV providers, and technical teams to ensure seamless service delivery.", icon: Users },
                            { title: "Guest & Hospitality", desc: "Managing accommodation, transportation, and on-site assistance for a structured attendee experience.", icon: Award },
                            { title: "Logistics & Execution", desc: "Timeline management and on-ground supervision to ensure all activities run as planned.", icon: Zap }
                        ].map((service, idx) => (
                            <div key={idx} className="p-8 border border-neutral-100 rounded-2xl hover:shadow-lg transition-all duration-300">
                                <div className="text-primary mb-6"><service.icon size={32} strokeWidth={1.5} /></div>
                                <h3 className="text-2xl font-serif text-primary mb-4">{service.title}</h3>
                                <p className="text-neutral-600 font-light leading-relaxed">{service.desc}</p>
                            </div>
                        ))}
                        <div className="p-8 bg-primary text-white rounded-2xl flex flex-col justify-center items-center text-center">
                            <Rocket className="mb-4" size={40} />
                            <h3 className="text-2xl font-serif mb-4">Ready to Start?</h3>
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
                        <Badge className="mb-4">Pricing Models</Badge>
                        <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Corporate Event Packages</h2>
                        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto font-light">
                            Designed based on event scale and requirements to manage resources efficiently while keeping the structure intact.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Small Team Events", items: ["Meeting spaces", "Basic arrangements", "Team lunches"] },
                            { title: "Mid-size Events", items: ["Conference setups", "Standard AV", "Catering services"] },
                            { title: "Large Conferences", items: ["Full-scale logistics", "Technical support", "Guest stays"] },
                            { title: "Customized Org", items: ["Bespoke branding", "VIP hospitality", "Global standards"] }
                        ].map((pkg, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100">
                                <h3 className="text-xl font-serif text-primary mb-6 pb-4 border-b border-neutral-100">{pkg.title}</h3>
                                <ul className="space-y-4">
                                    {pkg.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-neutral-600 font-light">
                                            <CheckCircle size={16} className="text-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Locations */}
            <section id="locations" className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Badge className="mb-4">Destination Guide</Badge>
                        <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Top Corporate Event Locations</h2>
                        <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
                            Uttarakhand includes several locations that support different types of corporate event formats, from formal meetings to offsite retreats.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { 
                                city: "Rishikesh", 
                                desc: "Suitable for offsite meetings and team activities. Riverside setups and a calm environment help teams focus away from work pressure.",
                                img: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1772979149/aloha_a8hjaz.webp"
                            },
                            { 
                                city: "Mussoorie", 
                                desc: "Provides mountain-based venues useful for retreats and small events. Supports focused discussions in a structured environment.",
                                img: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1772968096/sy8_riiah7.jpg"
                            },
                            { 
                                city: "Dehradun", 
                                desc: "Offers business hotels and conference venues for larger events. Connectivity and infrastructure make it a practical choice.",
                                img: "https://res.cloudinary.com/dhlvq35cc/image/upload/v1772971420/stress_xgu5yd.jpg"
                            }
                        ].map((loc, idx) => (
                            <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-lg h-[350px] md:h-[450px]">
                                <CloudinaryImage src={loc.img} alt={loc.city} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <h3 className="text-2xl font-serif text-white mb-4">{loc.city}</h3>
                                    <p className="text-white/80 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {loc.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Setup & Experience / Management */}
            <section id="experience" className="py-16 md:py-24 px-6 bg-[#FBFBFB]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-12 md:mb-16">
                        <div className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible['experience'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Corporate Event Setup and Experience</h2>
                            <p className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed mb-6">
                                Corporate event setup focuses on creating a structured environment suitable for business activities. This includes seating layouts, stage arrangements, and branding elements aligned with the company.
                            </p>
                            <p className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed">
                                Formal conferences require structured seating and presentation areas, while team offsites may involve open spaces and flexible arrangements. A well-managed setup ensures participants can focus on the event without operational issues.
                            </p>
                        </div>
                        <div className={`order-1 lg:order-2 relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 ${isVisible['experience'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <CloudinaryImage src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772978799/team_w5gj3y.png" alt="Event Setup" fill className="object-cover" />
                        </div>
                    </div>

                    <div id="management" className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className={`relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 ${isVisible['management'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                            <CloudinaryImage src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1772971373/conference_u9q3dq.jpg" alt="Event Management" fill className="object-cover" />
                        </div>
                        <div className={`transition-all duration-1000 ${isVisible['management'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Corporate Event Management and Execution</h2>
                            <p className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed mb-6">
                                Corporate event management involves planning, coordination, and execution across all stages of the event. Each stage requires attention to detail to avoid delays or miscommunication.
                            </p>
                            <p className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed">
                                On-ground execution is critical, as it directly impacts the event flow. Our team focuses on maintaining structure and coordination throughout, managing both small and large-scale events without disruption.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Types of Events */}
            <section id="types" className="py-24 px-6 bg-primary text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Badge className="mb-4 border-white/20 text-white bg-white/10">Scope</Badge>
                        <h2 className="text-4xl md:text-5xl font-serif mb-6">Types of Corporate Events We Manage</h2>
                        <p className="text-white/70 max-w-2xl mx-auto font-light">
                            Different types of corporate events require different planning approaches based on their objectives.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Conferences & Seminars", icon: Mic },
                            { title: "Product Launches", icon: Rocket },
                            { title: "Team Outings & Offsites", icon: Users },
                            { title: "Corporate Parties", icon: Calendar }
                        ].map((type, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl text-center hover:bg-white/10 transition-colors">
                                <div className="text-[#E5E4E2] flex justify-center mb-6"><type.icon size={40} strokeWidth={1} /></div>
                                <h3 className="text-xl font-serif">{type.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sustainability Section */}
            <section id="sustainability" className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="text-primary flex justify-center mb-6"><Leaf size={48} strokeWidth={1.5} /></div>
                    <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Sustainable and Eco Friendly Corporate Events</h2>
                    <p className="text-lg text-neutral-600 font-light leading-relaxed mb-8">
                        Sustainable corporate events focus on reducing environmental impact while maintaining event quality. This includes using efficient setups, reducing waste, and working with local vendors.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            "Minimal Decor Usage",
                            "Digital Communication",
                            "Resource Optimization"
                        ].map((item, idx) => (
                            <div key={idx} className="bg-[#F5F5F0] p-4 rounded-xl text-primary font-medium text-sm">
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Planning Process */}
            <section id="process" className="py-24 px-6 bg-[#F5F5F0]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Badge className="mb-4">Workflow</Badge>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Our Corporate Event Planning Process</h2>
                        <p className="text-neutral-600 max-w-2xl mx-auto font-light">
                            A structured process to ensure smooth execution and coordination across all stages.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { 
                                step: "01", 
                                title: "Consultation", 
                                desc: "Understand requirements, objectives, and audience size to set clear direction." 
                            },
                            { 
                                step: "02", 
                                title: "Planning & Setup", 
                                desc: "Finalize venue selection, layout planning, and resource allocation based on goals." 
                            },
                            { 
                                step: "03", 
                                title: "Coordination", 
                                desc: "Align catering, AV, technical teams, and guest arrangements for smooth operations." 
                            },
                            { 
                                step: "04", 
                                title: "Execution", 
                                desc: "Supervise all activities, monitor timelines, and handle issues efficiently on-ground." 
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="relative group">
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

            {/* FAQs */}
            <section id="faqs" className="py-24 px-6 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <Badge className="mb-4">Common Questions</Badge>
                        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">Frequently Asked Questions</h2>
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
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Start Planning Your Corporate Event</h2>
                    <p className="text-xl text-white/80 font-light leading-relaxed mb-12">
                        Plan your corporate event with a structured approach and clear execution. Proper coordination helps ensure that business events run smoothly across different locations and formats.
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
                        Review our event decor and styling services to align your event setup with branding requirements.
                    </p>
                </div>
            </section>
        </main>
    );
}
