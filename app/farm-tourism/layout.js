import Script from 'next/script';



export default function FarmTourismLayout({ children }) {
  return (
    <>
      <Script
        id="farm-tourism-breadcrumb-schema"
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
                name: "Farm Tourism",
                item: "https://www.syncityevents.com/farm-tourism/"
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}
