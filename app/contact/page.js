import Script from "next/script";
import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us | Syncity Events",
  description:
    "Get in touch with Syncity Events for destination weddings, corporate events, wellness retreats, farm tourism, and special occasions in Haridwar, Uttarakhand.",
  alternates: {
    canonical: "https://www.syncityevents.com/contact/",
  },
  openGraph: {
    title: "Contact Us | Syncity Events",
    description:
      "Get in touch with Syncity Events for destination weddings, corporate events, wellness retreats, farm tourism, and special occasions in Haridwar, Uttarakhand.",
    url: "https://www.syncityevents.com/contact/",
    type: "website",
    locale: "en_IN",
    siteName: "Syncity Events",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Syncity Events",
    description:
      "Get in touch with Syncity Events for destination weddings, corporate events, wellness retreats, farm tourism, and special occasions in Haridwar, Uttarakhand.",
  },
};

export default function Page() {
  return (
    <>
      <Script
        id="localbusiness-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
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
      <ContactClient />
    </>
  );
}

