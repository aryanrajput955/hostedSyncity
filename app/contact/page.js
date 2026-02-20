"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, ChevronDown, ChevronLeft, ChevronRight, Send, Check, Loader2, AlertCircle, CheckCircle2, Calendar, Video, X, User, ArrowRight } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-[#F9F9F9] relative overflow-hidden" ref={ref}>
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
              <Image
                src="/scenic-mountain-wedding-venue-with-traditional-dec.png"
                alt="Scenic Wedding Venue"
                fill
                className="object-cover"
                priority
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

    </div>
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

// TIME SLOTS
const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
  "18:00", "18:30",
];

function formatSlot(t) {
  const [h, m] = t.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  return `${h12}:${m.toString().padStart(2, "0")} ${ampm}`;
}

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

// Schedule a Meeting — Section
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

// Booking Modal
function BookingModal({ onClose }) {
  const [step, setStep] = useState(1); // 1=date, 2=time, 3=info
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [calMonth, setCalMonth] = useState(new Date().getMonth());
  const [calYear, setCalYear] = useState(new Date().getFullYear());
  const [info, setInfo] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [meetLink, setMeetLink] = useState("");

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Calendar helpers
  const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
  const firstDay = new Date(calYear, calMonth, 1).getDay();

  const isDateDisabled = (day) => {
    const d = new Date(calYear, calMonth, day);
    d.setHours(0, 0, 0, 0);
    // Disable past dates and Sundays
    return d < today || d.getDay() === 0;
  };

  const isDateSelected = (day) => {
    if (!selectedDate) return false;
    return selectedDate.getDate() === day && selectedDate.getMonth() === calMonth && selectedDate.getFullYear() === calYear;
  };

  const isToday = (day) => {
    const now = new Date();
    return day === now.getDate() && calMonth === now.getMonth() && calYear === now.getFullYear();
  };

  const selectDate = (day) => {
    if (isDateDisabled(day)) return;
    setSelectedDate(new Date(calYear, calMonth, day));
    setSelectedTime(null); // reset time on date change
    setStep(2);
  };

  const prevMonth = () => {
    if (calMonth === 0) { setCalMonth(11); setCalYear(calYear - 1); }
    else setCalMonth(calMonth - 1);
  };
  const nextMonth = () => {
    if (calMonth === 11) { setCalMonth(0); setCalYear(calYear + 1); }
    else setCalMonth(calMonth + 1);
  };

  // Can't go to past months
  const canGoPrev = calYear > today.getFullYear() || (calYear === today.getFullYear() && calMonth > today.getMonth());

  // Time slot disabled check
  const isTimeDisabled = (slot) => {
    if (!selectedDate) return true;
    const now = new Date();
    const [h, m] = slot.split(":").map(Number);
    const slotDate = new Date(selectedDate);
    slotDate.setHours(h, m, 0, 0);
    return slotDate <= now;
  };

  const selectTime = (slot) => {
    if (isTimeDisabled(slot)) return;
    setSelectedTime(slot);
    setStep(3);
  };

  const handleInfoChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const validate = () => {
    const e = {};
    if (!info.name.trim()) e.name = "Name is required";
    if (!info.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email)) e.email = "Invalid email";
    const digits = info.phone.replace(/\D/g, "");
    if (!info.phone.trim()) e.phone = "Phone is required";
    else if (digits.length !== 10) e.phone = "Must be 10 digits";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setStatus("loading");

    try {
      const dateStr = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`;

      const res = await fetch("/api/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: info.name,
          email: info.email,
          phone: info.phone,
          date: dateStr,
          time: selectedTime,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setStatusMessage(data.error || "Something went wrong.");
        return;
      }

      setStatus("success");
      setMeetLink(data.meetLink || "");
      setStatusMessage("Meeting scheduled successfully!");
    } catch {
      setStatus("error");
      setStatusMessage("Network error. Please try again.");
    }
  };

  const selectedDateStr = selectedDate
    ? selectedDate.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" })
    : "";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-white w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-6 py-4 border-b border-neutral-100">
          <div>
            <h3 className="text-lg font-serif text-primary font-bold">Schedule a Meeting</h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              {status === "success" ? "Confirmed" : step === 1 ? "Select a date" : step === 2 ? "Pick a time slot" : "Your details"}
            </p>
          </div>
          <button onClick={onClose} className="text-neutral-400 hover:text-primary transition-colors p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress dots */}
        {status !== "success" && (
          <div className="flex items-center justify-center gap-2 py-3 bg-neutral-50">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`h-1.5 rounded-full transition-all duration-300 ${
                s === step ? 'w-6 bg-primary' : s < step ? 'w-1.5 bg-[#D4AF37]' : 'w-1.5 bg-neutral-200'
              }`} />
            ))}
          </div>
        )}

        {/* Selection summary chips */}
        {status !== "success" && (selectedDate || selectedTime) && (
          <div className="flex items-center gap-2 px-6 py-3 flex-wrap">
            {selectedDate && (
              <button onClick={() => setStep(1)} className="inline-flex items-center gap-1.5 bg-primary/5 text-primary text-xs px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors">
                <Calendar className="w-3 h-3" /> {selectedDateStr}
              </button>
            )}
            {selectedTime && (
              <button onClick={() => setStep(2)} className="inline-flex items-center gap-1.5 bg-primary/5 text-primary text-xs px-3 py-1.5 rounded-full hover:bg-primary/10 transition-colors">
                <Clock className="w-3 h-3" /> {formatSlot(selectedTime)}
              </button>
            )}
          </div>
        )}

        <div className="p-6">
          {/* SUCCESS STATE */}
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-serif text-primary mb-2">Meeting Confirmed!</h4>
              <p className="text-neutral-500 text-sm mb-1">{selectedDateStr} at {formatSlot(selectedTime)}</p>
              <p className="text-neutral-400 text-xs mb-6">15 minutes · Google Meet</p>
              <p className="text-neutral-500 text-sm mb-6">A confirmation email with the meeting link has been sent to <strong>{info.email}</strong></p>
            </div>
          ) : (
            <>
              {/* STEP 1 - Calendar */}
              {step === 1 && (
                <div>
                  {/* Month navigator */}
                  <div className="flex items-center justify-between mb-4">
                    <button
                      onClick={prevMonth}
                      disabled={!canGoPrev}
                      className={`p-1.5 rounded-full transition-colors ${canGoPrev ? 'hover:bg-neutral-100 text-neutral-600' : 'text-neutral-200 cursor-not-allowed'}`}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-sm font-semibold text-primary">{MONTHS[calMonth]} {calYear}</span>
                    <button onClick={nextMonth} className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-600 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Day labels */}
                  <div className="grid grid-cols-7 mb-1">
                    {DAYS.map((d) => (
                      <div key={d} className="text-center text-[10px] font-semibold text-neutral-400 uppercase tracking-wider py-2">{d}</div>
                    ))}
                  </div>

                  {/* Days grid */}
                  <div className="grid grid-cols-7 gap-1">
                    {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                      const day = i + 1;
                      const disabled = isDateDisabled(day);
                      const selected = isDateSelected(day);
                      const todayMark = isToday(day);

                      return (
                        <button
                          key={day}
                          onClick={() => selectDate(day)}
                          disabled={disabled}
                          className={`relative h-10 text-sm rounded-lg transition-all duration-200
                            ${disabled ? 'text-neutral-200 cursor-not-allowed' : 'hover:bg-primary/5 text-neutral-700 cursor-pointer'}
                            ${selected ? 'bg-primary text-white hover:bg-primary font-semibold' : ''}
                            ${todayMark && !selected ? 'font-bold text-primary' : ''}
                          `}
                        >
                          {day}
                          {todayMark && !selected && (
                            <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D4AF37] rounded-full"></span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2 - Time Slots */}
              {step === 2 && (
                <div>
                  <button onClick={() => setStep(1)} className="flex items-center gap-1 text-xs text-neutral-400 hover:text-primary transition-colors mb-4">
                    <ChevronLeft className="w-3 h-3" /> Change date
                  </button>

                  <div className="grid grid-cols-3 gap-2">
                    {TIME_SLOTS.map((slot) => {
                      const disabled = isTimeDisabled(slot);
                      const selected = selectedTime === slot;
                      return (
                        <button
                          key={slot}
                          onClick={() => selectTime(slot)}
                          disabled={disabled}
                          className={`py-2.5 text-sm rounded-lg border transition-all duration-200
                            ${disabled ? 'border-neutral-100 text-neutral-200 cursor-not-allowed' : 'border-neutral-200 hover:border-primary hover:text-primary cursor-pointer'}
                            ${selected ? 'bg-primary text-white border-primary font-semibold hover:text-white' : ''}
                          `}
                        >
                          {formatSlot(slot)}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 3 - User Info */}
              {step === 3 && (
                <div>
                  <button onClick={() => setStep(2)} className="flex items-center gap-1 text-xs text-neutral-400 hover:text-primary transition-colors mb-4">
                    <ChevronLeft className="w-3 h-3" /> Change time
                  </button>

                  <div className="space-y-5">
                    <div>
                      <label className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1.5">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={info.name}
                        onChange={handleInfoChange}
                        placeholder="Your full name"
                        className={`w-full border-b py-2.5 text-sm focus:outline-none transition-colors ${errors.name ? 'border-red-400' : 'border-neutral-200 focus:border-primary'}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1.5">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={info.email}
                        onChange={handleInfoChange}
                        placeholder="your@email.com"
                        className={`w-full border-b py-2.5 text-sm focus:outline-none transition-colors ${errors.email ? 'border-red-400' : 'border-neutral-200 focus:border-primary'}`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-primary uppercase tracking-wider block mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={info.phone}
                        onChange={handleInfoChange}
                        placeholder="10-digit phone number"
                        className={`w-full border-b py-2.5 text-sm focus:outline-none transition-colors ${errors.phone ? 'border-red-400' : 'border-neutral-200 focus:border-primary'}`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Error message */}
                  {status === "error" && (
                    <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mt-5 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" /> {statusMessage}
                    </div>
                  )}

                  {/* Submit button */}
                  <button
                    onClick={handleSubmit}
                    disabled={status === "loading"}
                    className={`w-full mt-6 bg-primary text-white py-3.5 rounded-lg text-sm font-semibold tracking-wide flex items-center justify-center gap-2 transition-all
                      ${status === "loading" ? 'opacity-80 cursor-not-allowed' : 'hover:bg-[#600000]'}`}
                  >
                    {status === "loading" ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Scheduling...</>
                    ) : (
                      <><Calendar className="w-4 h-4" /> Confirm Meeting</>
                    )}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}