import Script from 'next/script';



export default function WellnessRetreatLayout({ children }) {
  return (
    <>
      <Script
        id="wellness-retreat-breadcrumb-schema"
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
                item: "https://www.syncityevents.com/"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://www.syncityevents.com/services/"
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Wellness Retreat",
                item: "https://www.syncityevents.com/wellness-retreat/"
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}
