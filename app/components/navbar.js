"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function Navbar() {
  // We use hover state for desktop "dropdown on hover"
  const [isHovered, setIsHovered] = useState(false);
  // Separate state for mobile toggle
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  // (Optional depending on preference, but good for UX)

  const toggleMenu = () => {
    // Only allow toggling on mobile (below md breakpoint which is usually 768px)
    if (window.innerWidth >= 768) return;
    
    setIsOpen(!isOpen);
    // Also toggle hover state to ensuring logic doesn't conflict visually if needed
    // but usually independent is fine.
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 pointer-events-none">
      <div className="max-w-[1920px] mx-auto flex justify-between items-start">
        {/* Logo - Left Side - Hidden on Mobile */}
        <Link
          href="/"
          className="pointer-events-auto relative z-50 "
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src="/logo2.png"
              alt="Syncity"
              width={140}
              height={70}
              className="w-16 md:w-26 h-auto object-contain"
              priority
            />
          </motion.div>
        </Link>
        {/* Mobile Logo Placeholder to keep spacing if needed? 
            No, user said 'hide the logo'. 
            If we hide it, the flex justify-between might push the menu to left 
            if it's the only child?
            Actually, if Logo is hidden, Flex container has only one child (Hamburger) 
            Wait, justify-between with 1 item puts it at start.
            We want Hamburger on Right.
            So we should check if we need a spacer or 'ml-auto'.
        */}
        <div className="hidden md:block"></div>{" "}
        {/* Spacer if needed, or we just rely on ml-auto on the next item or just wrapping */}
        {/* 
           Actually, if I just hide the Link, the div below becomes the first child.
           flex justify-between.
           If 1 child -> it goes to start (left).
           We want it on right.
           So add 'ml-auto' to the hamburger container?
           OR: preserve the node but make it invisible/width 0?
           "Hide the logo" usually translates to `display: none`.
           If I do `hidden`, I need to ensure the Menu stays on right.
           Let's add `ml-auto` to the menu container just in case.
        */}
        {/* Hamburger / Menu Trigger - Right Side */}
        <div
          className="pointer-events-auto relative ml-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={toggleMenu}
        >
          {/* The Trigger Button */}
          <motion.div
            className="cursor-pointer relative z-50 p-2"
            initial={false}
            animate={isHovered || isOpen ? "hover" : "rest"}
          >
            <div
              className={`flex items-center gap-3 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-sm border border-primary/5 group transition-all duration-300 hover:shadow-md hover:bg-white ${
                isOpen ? "bg-white shadow-md" : ""
              }`}
            >
              <span className="text-primary font-serif tracking-[0.2em] text-xs font-semibold hidden md:block group-hover:tracking-[0.3em] transition-all duration-500">
                MENU
              </span>
              <div className="flex flex-col gap-1.5 w-6 items-end">
                {/* Top Bar */}
                <motion.span
                  className="h-[2px] bg-primary w-full origin-right"
                  animate={{
                    width:
                      isHovered && !isOpen ? "100%" : isOpen ? "100%" : "70%",
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? 8 : 0,
                  }}
                />
                {/* Middle Bar */}
                <motion.span
                  className="h-[2px] bg-primary w-full origin-right"
                  animate={{
                    opacity: isOpen ? 0 : 1,
                  }}
                />
                {/* Bottom Bar */}
                <motion.span
                  className="h-[2px] bg-primary w-full origin-right"
                  animate={{
                    width:
                      isHovered && !isOpen ? "100%" : isOpen ? "100%" : "50%",
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? -8 : 0,
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Desktop Dropdown Menu (Hidden on Mobile) */}
          <AnimatePresence>
            {isHovered && !isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="hidden md:block absolute top-full right-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-primary/10 overflow-hidden"
              >
                <div className="p-2">
                  <div className="space-y-1">
                    <NavLink href="/" label="Home" />
                    <NavLink href="/about" label="About Us" />

                    <NavLink href="/services" label="Services" />
                    <div className="pl-3 mt-1 space-y-0.5 border-l-2 border-primary/5 ml-4">
                      <NavLink
                        href="/services/wellness-retreat"
                        label="Wellness Retreat"
                        isSub
                      />
                      <NavLink
                        href="/services/destination-weddings"
                        label="Destination Weddings"
                        isSub
                      />
                      <NavLink
                        href="/services/corporate-events"
                        label="Corporate Events"
                        isSub
                      />
                      <NavLink
                        href="/services/farm-tourism"
                        label="Farm Tourism"
                        isSub
                      />
                      <NavLink
                        href="/services/special-occasions"
                        label="Special Occasions"
                        isSub
                      />
                    </div>

                    <div className="h-px bg-neutral-100 my-2 mx-2"></div>

                    <NavLink href="/contact" label="Contact" isPrimary />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Mobile Full Screen Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
              animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
              exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 bg-white z-40 flex flex-col pt-32 px-8 overflow-y-auto pointer-events-auto md:hidden"
            >
              <div className="flex flex-col gap-6">
                <MobileNavLink
                  href="/"
                  label="Home"
                  onClick={() => setIsOpen(false)}
                />
                <MobileNavLink
                  href="/about"
                  label="About Us"
                  onClick={() => setIsOpen(false)}
                />

                <div className="space-y-4">
                  <MobileNavLink
                    href="/services"
                    label="Services"
                    onClick={() => setIsOpen(false)}
                  />
                  <div className="pl-6 flex flex-col gap-4 border-l border-neutral-200 ml-2">
                    <MobileNavLink
                      href="/services/wellness-retreat"
                      label="Wellness Retreat"
                      isSub
                      onClick={() => setIsOpen(false)}
                    />
                    <MobileNavLink
                      href="/services/destination-weddings"
                      label="Destination Weddings"
                      isSub
                      onClick={() => setIsOpen(false)}
                    />
                    <MobileNavLink
                      href="/services/corporate-events"
                      label="Corporate Events"
                      isSub
                      onClick={() => setIsOpen(false)}
                    />
                    <MobileNavLink
                      href="/services/farm-tourism"
                      label="Farm Tourism"
                      isSub
                      onClick={() => setIsOpen(false)}
                    />
                    <MobileNavLink
                      href="/services/special-occasions"
                      label="Special Occasions"
                      isSub
                      onClick={() => setIsOpen(false)}
                    />
                  </div>
                </div>

                <MobileNavLink
                  href="/contact"
                  label="Contact"
                  onClick={() => setIsOpen(false)}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

function NavLink({ href, label, isSub = false, isPrimary = false }) {
  return (
    <Link href={href} className="block group">
      <motion.div
        className={`
          relative flex items-center justify-between px-4 py-3 rounded-xl transition-colors duration-300
          ${
            isPrimary
              ? "bg-primary text-white hover:bg-primary/90"
              : "hover:bg-neutral-50 text-neutral-600 hover:text-primary"
          }
        `}
      >
        <span
          className={`
          font-serif transition-transform duration-300 group-hover:translate-x-1
          ${isSub ? "text-sm font-light" : "text-lg font-medium"}
          ${isPrimary ? "text-white" : ""}
        `}
        >
          {label}
        </span>

        {!isPrimary && (
          <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary/50" />
        )}
      </motion.div>
    </Link>
  );
}

function MobileNavLink({ href, label, isSub, onClick }) {
  return (
    <Link href={href} onClick={onClick} className="block w-full">
      <div
        className={`
        ${
          isSub
            ? "text-2xl text-neutral-500 font-light"
            : "text-4xl text-neutral-800 font-serif"
        }
      `}
      >
        {label}
      </div>
    </Link>
  );
}
