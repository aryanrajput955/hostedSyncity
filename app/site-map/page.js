import React from 'react';
import Link from 'next/link';
import Script from 'next/script';

export const metadata = {
  title: "Sitemap | Syncity Events",
  description: "Navigate through Syncity Events website with our complete sitemap.",
};

export default function Sitemap() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about/" },
    { 
      name: "Our Services", 
      path: "/services/",
      subLinks: [
        { name: "Destination Weddings", path: "/services/destination-weddings/" },
        { name: "Corporate Events & Retreats", path: "/services/corporate-events/" },
        { name: "Farm Tourism", path: "/services/farm-tourism/" },
        { name: "Wellness Retreats", path: "/services/wellness-retreat/" },
        { name: "Special Occasions", path: "/services/special-occasions/" },
      ]
    },
    { name: "Blogs", path: "/blogs/" },
    { name: "Contact Us", path: "/contact/" },
    { 
      name: "Legal", 
      path: null,
      subLinks: [
        { name: "Privacy Policy", path: "/privacy-policy/" },
      ]
    },
  ];

  return (
    <>
      <Script
        id="site-map-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.syncityevents.com"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Site Map",
                item: "https://www.syncityevents.com/site-map"
              }
            ]
          })
        }}
      />
      <main className="pt-32 pb-24 min-h-screen bg-neutral-50 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-bl-[400px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-tr-[300px]"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <h1 className="text-4xl md:text-5xl font-serif text-primary mb-4 text-center">Site Map</h1>
        <p className="text-neutral-500 mb-16 text-center max-w-xl mx-auto">
          Explore the architecture of our website. Find everything you need to plan your perfect celebration.
        </p>

        <div className="bg-white p-10 md:p-14 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-neutral-100">
          <ul className="space-y-8 relative before:absolute before:inset-y-2 before:left-3 before:w-px before:bg-gradient-to-b before:from-transparent before:via-neutral-200 before:to-transparent">
            {links.map((link, index) => (
              <li key={index} className="relative pl-10">
                {/* Connector Dot */}
                <div className="absolute left-0 top-3 w-6 h-6 -translate-x-[2px] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary border-[3px] border-white shadow-sm ring-1 ring-primary/20"></div>
                </div>

                <div className="group inline-flex flex-col">
                  {link.path ? (
                    <Link href={link.path} className="text-2xl font-serif text-primary hover:text-[#D4AF37] transition-all duration-300 font-medium pb-2 inline-flex items-center gap-3">
                      {link.name}
                      <span className="w-0 h-0.5 bg-[#D4AF37] group-hover:w-8 transition-all duration-500 ease-out"></span>
                    </Link>
                  ) : (
                    <h2 className="text-2xl font-serif text-primary font-medium pb-2">
                      {link.name}
                    </h2>
                  )}

                  {link.subLinks && (
                    <ul className="mt-3 space-y-3 pl-4 border-l border-[#D4AF37]/20">
                      {link.subLinks.map((subLink, subIndex) => (
                        <li key={subIndex} className="relative">
                          <span className="absolute -left-4 top-1/2 w-3 border-t border-[#D4AF37]/20"></span>
                          <Link 
                            href={subLink.path} 
                            className="text-[1.05rem] text-neutral-600 hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block"
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </main>
    </>
  );
}
