import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-background text-primary">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Image src="/logo2.png" alt="Syncity Logo" width={160} height={140} className="w-40 h-35" />
            </div>
            <p className="text-primary/80 leading-relaxed text-sm">
              Crafting unforgettable celebrations in Uttarakhand. We bring your dreams to life with precision and care.
            </p>
            <div className="flex space-x-4">
              <a
                href="/"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Image src="/icons/facebook.png" alt="Facebook" width={24} height={24} className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/syncityevents?igsh=ZjZjN3B2cmtlcnFq"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Image src="/icons/instagram.png" alt="Instagram" width={24} height={24} className="w-6 h-6" />
              </a>
              <a
                href="/"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Image src="/icons/twitter.png" alt="Twitter" width={24} height={24} className="w-6 h-6" />
              </a>
              <a
                href="/"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Image src="/icons/linkedin.png" alt="LinkedIn" width={24} height={24} className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold">Our Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services" className="text-primary/80 hover:text-primary transition-colors">
                  Destination Weddings
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary/80 hover:text-primary transition-colors">
                  Corporate Events & Retreats
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary/80 hover:text-primary transition-colors">
                  Farm Tourism
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary/80 hover:text-primary transition-colors">
                  Cultural Celebrations
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary/80 hover:text-primary transition-colors">
                  Team Building
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary/80 hover:text-primary transition-colors">
                  Private Parties
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-primary/80 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-primary/80 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link href="/gallery" className="text-primary/80 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-primary/80 hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary/80 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li> */}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-bold">Get In Touch</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <span className="text-accent mt-1">📍</span>
                <div>
                  <p className="font-medium">Haridwar, Uttarakhand</p>
                  <p className="text-primary/80 text-xs">Serving all of Uttarakhand</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-accent">📞</span>
                <div>
                  <p className="font-medium">+91 63977 23250</p>
                  <p className="font-medium">+91 84330 23265</p>
                  <p className="text-primary/80 text-xs">Available 24/7</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-accent">✉️</span>
                <div>
                  <p className="font-medium">connect@syncityevents.com</p>
                  <p className="text-primary/80 text-xs">Quick response guaranteed</p>
                </div>
              </div>
            </div>
            <Link href="/contact#schedule-meeting" className="block bg-primary/10 rounded-lg p-4 hover:bg-primary/20 transition-colors cursor-pointer">
              <p className="text-sm font-medium mb-2">Free Consultation</p>
              <p className="text-primary/80 text-xs">
                Schedule a free session to plan your dream event.
              </p>
            </Link>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary/80 text-sm">
              © 2025 Syncity. All rights reserved. Made with ❤️ in the Himalayas.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-primary/80 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-primary/80 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="text-primary/80 hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}