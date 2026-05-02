import Script from 'next/script';

export const metadata = {
  authors: [{ name: "Syncity Events" }],
  creator: "Syncity Events",
  publisher: "Syncity Events",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  alternates: {
    canonical: 'https://www.syncityevents.com/contact/',
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
};

export default function ContactLayout({ children }) {
  return (
    <>
      <Script
        id="contact-breadcrumb-schema"
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
                name: "Contact",
                item: "https://www.syncityevents.com/contact"
              }
            ]
          })
        }}
      />
      <Script
        id="contact-local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Syncity Events",
            description: "Premier event planning and styling company specializing in destination weddings, corporate events, wellness retreats, farm tourism, and special occasions in Haridwar, Uttarakhand.",
            logo: "https://www.syncityevents.com/logo.png",
            url: "https://www.syncityevents.com",
            email: "connect@syncityevents.com",
            telephone: [
              "+91 63977 23250",
              "+91 84330 23265"
            ],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Haridwar",
              addressRegion: "Uttarakhand",
              addressCountry: "IN",
              streetAddress: "Haridwar, Uttarakhand"
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "19:00"
              }
            ],
            sameAs: [
              "https://www.instagram.com/syncityevents"
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Service",
              telephone: "+91 63977 23250",
              email: "connect@syncityevents.com"
            }
          })
        }}
      />
      {children}
    </>
  );
}
