// app/layout.js
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ClientWrapper from "./components/clientwrapper";
import SmoothScroll from "./components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

// ✅ SEO Metadata
export const metadata = {
  metadataBase: new URL("https://www.syncityevents.com"),
  title: "Wedding & Corporate Event Planner | Syncity Events Uttarakhand",
  description:
    "Premier event planner in Uttarakhand for sustainable luxury. We specialize in destination wedding locations and corporate retreats across the majestic Himalayas.",
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
  authors: [{ name: "Syncity Events" }],
  creator: "Syncity Events",
  publisher: "Syncity Events",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  alternates: {
    canonical: 'https://www.syncityevents.com/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    title: "Wedding & Corporate Event Planner | Syncity Events Uttarakhand",
    description:
      "Premier event planner in Uttarakhand for sustainable luxury. We specialize in destination wedding locations and corporate retreats across the majestic Himalayas.",
    url: "https://www.syncityevents.com/",
    siteName: "SyncityEvents",
    images: [
      {
        url: "/og.jpeg", // 🔄 Replace with your OG image
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
    title: "Wedding & Corporate Event Planner | Syncity Events Uttarakhand",
    description:
      "Premier event planner in Uttarakhand for sustainable luxury. We specialize in destination wedding locations and corporate retreats across the majestic Himalayas.",
    images: ["/hamper.png"], // 🔄 Replace with your image
  },
  metadataBase: new URL("https://www.syncityevents.com"),
  icons: {
    icon: "/logo.jpg", // 👈 place your favicon.ico in /public
    shortcut: "/logo.jpg",
    apple: "/logo.jpg", // 👈 optional for iOS devices
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Organization Schema */}
        <Script
          id="org-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://www.syncityevents.com/#organization",
              name: "Syncity Events",
              url: "https://www.syncityevents.com/",
              logo: "https://www.syncityevents.com/logo.jpg",
              description: "Premier event planning and styling in the heart of Devbhoomi. We curate timeless celebrations with uncompromising excellence.",
              sameAs: [
                "https://www.instagram.com/syncityevents/"
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "connect@syncityevents.com"
              }
            })
          }}
        />

        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W8VRBT3D');`}
        </Script>
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-W8VRBT3D"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ClientWrapper>
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </ClientWrapper>
      </body>
    </html>
  );
}
