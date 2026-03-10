"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ChevronLeft, ChevronRight, CheckCircle2, AlertCircle, Loader2, X } from "lucide-react";

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

export default function BookingModal({ onClose }) {
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
