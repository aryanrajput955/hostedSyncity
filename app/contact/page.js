"use client";
import Link from "next/link";
import { CloudinaryImage } from "../components/CloudinaryMedia";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, ChevronDown, ChevronLeft, ChevronRight, Send, Check, Loader2, AlertCircle, CheckCircle2, Calendar, Video, X, User, ArrowRight } from "lucide-react";
import BookingModal from "../components/BookingModal";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Contact() {
  const ref = useRef(null);
  const [selectedEventType, setSelectedEventType] = useState("Wellness Retreat");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [statusMessage, setStatusMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    // Phone: must be exactly 10 digits
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (phoneDigits.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    // Message: at least 10 words
    const wordCount = formData.message.trim().split(/\s+/).filter(Boolean).length;
    if (!formData.message.trim()) {
      newErrors.message = "Please share your vision";
    } else if (wordCount < 10) {
      newErrors.message = `Please write at least 10 words (currently ${wordCount})`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          eventType: selectedEventType,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setStatusMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setStatusMessage(data.message || "Your message has been sent successfully!");
      // Reset form after success
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setSelectedEventType("Wellness Retreat");

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setStatusMessage("");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setStatusMessage("Network error. Please check your connection and try again.");
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How far in advance should we book?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For weddings, we recommend 6-12 months. Corporate events can often be arranged with 2-3 months notice."
        }
      },
      {
        "@type": "Question",
        "name": "Do you manage travel logistics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We handle end-to-end logistics including transport, accommodation, and guest transfers."
        }
      },
      {
        "@type": "Question",
        "name": "Can you customize packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Everything we do is bespoke. We tailor every detail to fit your specific vision and budget."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#F9F9F9] relative overflow-hidden" ref={ref}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Hero Section - "The Grand Welcome" */}
      <section className="min-h-screen md:h-screen relative pt-20 px-6 overflow-hidden flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-8 relative z-10"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-3">
              <div className="h-px w-12 bg-primary/30"></div>
              <span className="text-sm font-medium text-neutral-500 tracking-[0.2em] uppercase">The Concierge</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-serif text-primary leading-[1.1]">
              Begin Your<br />
              <span className="italic text-[#D4AF37]">Masterpiece</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-lg text-neutral-600 font-light max-w-md leading-relaxed">
              Every great celebration starts with a simple conversation. We are here to listen, guide, and bring your vision to life with precision and grace.
            </motion.p>
          </motion.div>

          {/* Right Image - "The Arch" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[300px] lg:h-[500px] w-full block mt-8 lg:mt-0"
          >
            <div className="absolute inset-0 border border-primary/10 rounded-t-[300px] rounded-b-[20px] translate-x-4 translate-y-4"></div>
            <div className="relative h-full w-full rounded-t-[300px] rounded-b-[20px] overflow-hidden shadow-2xl">
              <CloudinaryImage
                src="https://res.cloudinary.com/dhlvq35cc/image/upload/v1773124331/6f23329a77f21075ded36feeeb17465b_rdqqro.jpg"
                alt="Scenic Wedding Venue"
                fill
                className="object-cover"
                priority={true}
              />
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Concierge Desk - Form & Info */}
      <section className="py-10 md:py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Left: The Guestbook Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-12 shadow-sm border-t-4 border-primary">
                <div className="mb-10">
                  <h2 className="text-3xl font-serif text-primary mb-2">Send us a Message</h2>
                  <p className="text-neutral-500 font-light">Tell us a bit about your vision.</p>
                </div>

                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <GuestbookInput
                      label="First Name"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      error={errors.firstName}
                    />
                    <GuestbookInput
                      label="Last Name (Optional)"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      error={errors.lastName}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <GuestbookInput
                      label="Email Address"
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      error={errors.email}
                    />
                    <GuestbookInput
                      label="Phone Number"
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      error={errors.phone}
                    />
                  </div>

                  <CustomDropdown
                    label="Event Type"
                    value={selectedEventType}
                    onChange={setSelectedEventType}
                    options={[
                      "Wellness Retreat",
                      "Destination Wedding",
                      "Corporate Event",
                      "Farm Tourism",
                      "Other Celebration"
                    ]}
                  />

                  <div className="space-y-4">
                    <label htmlFor="message" className="text-sm font-serif text-primary font-bold tracking-wide">Your Vision</label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className={`w-full bg-transparent border-b py-2 focus:outline-none transition-colors text-neutral-600 resize-none placeholder:text-neutral-300 placeholder:italic ${errors.message ? 'border-red-400 focus:border-red-500' : 'border-neutral-200 focus:border-primary'}`}
                      placeholder="Share your thoughts, dates, or questions... (minimum 10 words)"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Status Messages */}
                  <AnimatePresence mode="wait">
                    {status === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-800 px-5 py-4 rounded-lg"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <p className="text-sm font-medium">{statusMessage}</p>
                      </motion.div>
                    )}
                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-800 px-5 py-4 rounded-lg"
                      >
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <p className="text-sm font-medium">{statusMessage}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className={`group relative w-full md:w-auto overflow-hidden bg-primary text-white px-10 py-4 shadow-lg transition-all
                        ${status === "loading"
                          ? "opacity-80 cursor-not-allowed"
                          : "hover:-translate-y-1"
                        }`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3 font-medium tracking-[0.2em] uppercase text-sm">
                        {status === "loading" ? (
                          <>
                            Sending... <Loader2 className="w-4 h-4 animate-spin" />
                          </>
                        ) : status === "success" ? (
                          <>
                            Sent Successfully <CheckCircle2 className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            Send Request <Send className="w-4 h-4" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-[#600000] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right: The Stationery Info Card */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative overflow-hidden group">
                {/* Decorative Border */}
                <div className="absolute inset-3 border border-[#D4AF37]/30 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/10 rounded-bl-[100px] transition-transform duration-700 group-hover:scale-150"></div>

                <h3 className="text-2xl font-serif text-primary mb-8 relative z-10">Contact Information</h3>

                <div className="space-y-8 relative z-10">
                  <ContactItem
                    icon={Phone}
                    label="Talk to our Planners"
                    value="+91 63977 23250"
                    subValue="+91 84330 23265"
                  />
                  <ContactItem
                    icon={Mail}
                    label="Email Us"
                    value="connect@syncityevents.com"
                  />
                  <ContactItem
                    icon={MapPin}
                    label="Visit Our Office"
                    value="Haridwar, Uttarakhand"
                    subValue="Heart of the Himalayas"
                  />
                  <ContactItem
                    icon={Clock}
                    label="Hours of Operation"
                    value="Mon - Sat: 9AM - 7PM"
                  />
                </div>
              </div>

              {/* FAQ Accordion - Minimal */}
              <div className="bg-white p-8 border border-neutral-200">
                <h3 className="text-lg font-serif text-primary mb-6">Common Questions</h3>
                <div className="space-y-4">
                  <FAQItem question="How far in advance should we book?" answer="For weddings, we recommend 6-12 months. Corporate events can often be arranged with 2-3 months notice." />
                  <FAQItem question="Do you manage travel logistics?" answer="Absolutely. We handle end-to-end logistics including transport, accommodation, and guest transfers." />
                  <FAQItem question="Can you customize packages?" answer="Everything we do is bespoke. We tailor every detail to fit your specific vision and budget." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule a Meeting Section */}
      <ScheduleMeetingSection />

    </main>
  );
}

// Custom Dropdown Component
function CustomDropdown({ label, value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useState(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div className="relative" ref={dropdownRef}>
      <label className="text-sm font-serif text-primary font-bold tracking-wide block mb-2">
        {label}
      </label>
      
      {/* Dropdown Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-transparent border-b border-neutral-200 py-3 flex items-center justify-between text-left
                   focus:outline-none focus:border-primary transition-all duration-300 group"
      >
        <span className="text-neutral-600 group-focus:text-primary transition-colors">
          {value}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-neutral-400 transition-all duration-300 
                     ${isOpen ? 'rotate-180 text-primary' : 'group-hover:text-primary'}`} 
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute z-50 w-full mt-2 bg-white border border-neutral-200 shadow-2xl overflow-hidden"
          >
            <div className="py-1">
              {options.map((option, index) => (
                <motion.button
                  key={index}
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 transition-all duration-200 relative overflow-hidden group
                             ${value === option 
                               ? 'bg-primary text-white font-medium' 
                               : 'text-neutral-700 hover:bg-neutral-50'
                             }`}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.15 }}
                >
                  {/* Hover Effect Background */}
                  {value !== option && (
                    <div className="absolute inset-0 bg-primary/5 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  )}
                  
                  {/* Text */}
                  <span className="relative z-10 flex items-center justify-between">
                    <span className="font-serif">{option}</span>
                    {value === option && (
                      <Check className="w-4 h-4 ml-2 animate-in fade-in slide-in-from-right-1 duration-200" />
                    )}
                  </span>
                  
                  {/* Active Indicator Line */}
                  {value === option && (
                    <motion.div 
                      layoutId="activeOption"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37]"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Sub-components
function GuestbookInput({ label, id, type = "text", value, onChange, required = false, error }) {
  return (
    <div className="relative group">
      <input
        type={type}
        id={id}
        placeholder=" "
        value={value}
        onChange={onChange}
        required={required}
        className={`peer w-full bg-transparent border-b py-3 focus:outline-none transition-colors text-neutral-800 ${error ? 'border-red-400 focus:border-red-500' : 'border-neutral-200 focus:border-primary'}`}
      />
      <label
        htmlFor={id}
        className={`absolute left-0 top-3 transition-all duration-300 pointer-events-none 
                       peer-focus:-top-4 peer-focus:text-xs peer-focus:font-bold
                       peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:font-bold
                       ${error ? 'text-red-500 peer-focus:text-red-500 peer-not-placeholder-shown:text-red-500' : 'text-neutral-500 peer-focus:text-primary peer-not-placeholder-shown:text-primary'}`}
      >
        {label}
      </label>
      {error && (
        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" /> {error}
        </p>
      )}
    </div>
  );
}

function ContactItem({ icon: Icon, label, value, subValue }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 text-primary">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-neutral-400 font-medium mb-1">{label}</p>
        <p className="text-lg font-serif text-primary leading-tight">{value}</p>
        {subValue && <p className="text-sm text-neutral-500 mt-1">{subValue}</p>}
      </div>
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-100 last:border-0 pb-4 last:pb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left py-2 group"
      >
        <span className="font-medium text-neutral-700 group-hover:text-primary transition-colors">{question}</span>
        <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-neutral-500 pt-2 pb-2 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Schedule a Meeting — Section wrapper for the page
function ScheduleMeetingSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section id="schedule-meeting" className="py-6 md:py-16 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary p-12 md:p-16 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/10 rounded-bl-[200px]"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D4AF37]/10 rounded-tr-[200px]"></div>
            <div className="absolute inset-4 border border-[#D4AF37]/20 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-[#D4AF37]/50"></div>
                <span className="text-xs font-medium text-[#D4AF37] tracking-[0.3em] uppercase">Personal Consultation</span>
                <div className="h-px w-8 bg-[#D4AF37]/50"></div>
              </div>

              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 leading-tight">
                Let's Bring Your <span className="italic text-[#D4AF37]">Vision</span> to Life
              </h2>
              <p className="text-white/70 font-light max-w-lg mx-auto mb-8 leading-relaxed">
                Schedule a complimentary 15-minute consultation with our event planners. We'll discuss your ideas, explore venue possibilities, and craft a bespoke plan for your celebration.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setShowModal(true)}
                  className="group relative overflow-hidden bg-[#D4AF37] text-primary px-8 py-4 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center gap-3 font-semibold tracking-[0.15em] uppercase text-sm">
                    <Calendar className="w-4 h-4" /> Schedule a Meeting
                  </span>
                  <div className="absolute inset-0 bg-[#c9a430] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </button>

                <div className="flex items-center gap-2 text-white/50 text-sm">
                  <Video className="w-4 h-4" />
                  <span>Via Google Meet · 15 min</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Modal */}
      <AnimatePresence>
        {showModal && <BookingModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </>
  );
}
