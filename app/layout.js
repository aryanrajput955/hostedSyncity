// app/layout.js
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ClientWrapper from "./components/clientwrapper"; // 👈 new client component

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

// ✅ SEO Metadata
export const metadata = {
  title: "SyncityEvents - Corporate Meetings, Weddings & Retreats in Uttarakhand",
  description:
    "SyncityEvents organizes corporate meetings, destination weddings, stress relief retreats, venues, and everything related to events in Uttarakhand. We make your events stress-free and memorable.",
  keywords: [
    "SyncityEvents",
    "Event Management Uttarakhand",
    "Corporate Events",
    "Destination Weddings",
    "Retreats Uttarakhand",
    "Venues in Uttarakhand",
    "Stress Relief Events",
    "Event Planners Uttarakhand",
    "Wedding Planners Uttarakhand",
  ],
  openGraph: {
    title: "SyncityEvents - Event Management in Uttarakhand",
    description:
      "We specialize in corporate meetings, destination weddings, stress relief retreats, and premium event planning in Uttarakhand.",
    url: "https://www.syncityevents.com",
    siteName: "SyncityEvents",
    images: [
      {
        url: "/hamper.png", // 🔄 Replace with your OG image
        width: 1200,
        height: 630,
        alt: "SyncityEvents - Event Management in Uttarakhand",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SyncityEvents - Corporate Meetings, Weddings & Retreats in Uttarakhand",
    description:
      "Your one-stop destination for event management in Uttarakhand. Corporate events, weddings, retreats & more.",
    images: ["/hamper.png"], // 🔄 Replace with your image
  },
  alternates: {
    canonical: "https://www.syncityevents.com",
  },
  icons: {
    icon: "/logo.jpg", // 👈 place your favicon.ico in /public
    shortcut: "/logo.jpg",
    apple: "/logo.jpg", // 👈 optional for iOS devices
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <ClientWrapper>
          <Navbar />
          {children}
          <Footer />
        </ClientWrapper>
      </body>
    </html>
  );
}
