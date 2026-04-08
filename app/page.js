import Script from "next/script";
import PageContent from './PageContent';

export default function Page() {
  return (
    <>
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EventPlanningBusiness",
            "@id": "https://www.syncityevents.com/#localbusiness",
            name: "Syncity Events",
            url: "https://www.syncityevents.com/",
            logo: "https://www.syncityevents.com/logo.jpg",
            telephone: "+91 8433023265",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Near Gali No.12, Tehri Visthapit Bhel",
              addressLocality: "Haridwar",
              addressRegion: "Uttarakhand",
              postalCode: "249407",
              addressCountry: "IN"
            },
            areaServed: "IN",
            openingHours: "Mo-Su 00:00-23:59",
            sameAs: [
              "https://www.instagram.com/syncityevents/",
              "https://maps.google.com/?cid=10945792710902461142"
            ]
          })
        }}
      />
      <main>
        <PageContent />
      </main>
    </>
  );
}
