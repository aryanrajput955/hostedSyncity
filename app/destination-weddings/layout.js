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
    canonical: 'https://www.syncityevents.com/destination-weddings/',
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

export default function DestinationWeddingsLayout({ children }) {
  return (
    <>
      <Script
        id="destination-weddings-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are the best destination wedding venues in Rishikesh according to Syncity Events?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For premium riverside ceremonies, we recommend Taj Rishikesh Resort & Spa and Aloha on the Ganges. These properties feature dedicated lawns with direct views of the Ganges, ideal for sunset pheras. For intimate beach-style weddings, boutique venues like Ganga Kinare offer exceptional river access."
                }
              },
              {
                "@type": "Question",
                "name": "How do destination wedding packages in Uttarakhand differ by season?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Destination wedding packages in Uttarakhand fluctuate with local demand. The highest demand occurs from March to June and October to November. Planning a winter wedding (December–February) can unlock significant value, offering exclusive access to premium venues and the unique aesthetic of a snow-dusted Himalayan backdrop."
                }
              },
              {
                "@type": "Question",
                "name": "Why is Mussoorie a better choice for a destination wedding than other hill stations?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A destination wedding in Mussoorie is superior due to its established hospitality infrastructure and accessibility. Located just 90 minutes from Dehradun airport, it is easier for guests to reach than remote stations. Top-tier brands like JW Marriott Walnut Grove and The Savoy are specifically equipped to handle large-scale wedding logistics."
                }
              },
              {
                "@type": "Question",
                "name": "Which destination wedding resorts in Dehradun are best for large groups of 300-500+ guests?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For large-scale celebrations, Syncity Events suggests Hyatt Regency Dehradun and Regenta LP Vilas. These resorts offer massive pillar-less banquet halls, extensive room inventory to keep all guests in one place, and ample parking facilities for local attendees."
                }
              },
              {
                "@type": "Question",
                "name": "What specific services does Syncity Events provide as a destination wedding planner?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As a specialized destination wedding planner, we provide end-to-end management including venue scouting, vendor negotiations, and guest hospitality. We solve terrain-specific challenges like mountain logistics and specialized equipment transport, ensuring a stress-free experience for the couple."
                }
              },
              {
                "@type": "Question",
                "name": "Is a rishikesh destination wedding suitable for traditional Vedic ceremonies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, Rishikesh is the spiritual capital of India, making it perfect for traditional rituals. Many destination wedding venues here offer private ghats or riverside decks specifically designed for Vedic pheras and personalized Ganga Aarti experiences for wedding guests."
                }
              },
              {
                "@type": "Question",
                "name": "How does Syncity Events handle logistics for a destination wedding in Mussoorie?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Managing a destination wedding in Mussoorie requires expertise in mountain logistics. We provide specialized transport for guests, manage local vendor sourcing to optimize costs, and ensure all decor materials reach the venue safely through narrow mountain roads."
                }
              },
              {
                "@type": "Question",
                "name": "What are the average inclusions in destination wedding packages for Uttarakhand?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Standard destination wedding packages usually include venue rental, catering services, themed decor, guest accommodation, and on-site coordination. Syncity Events provides customized quotes to match your specific guest count and luxury requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Why are destination wedding venues in Dehradun preferred for residential weddings?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A destination wedding in Dehradun is preferred because the city has resorts with larger room inventories. This allows the entire guest list to stay at a single property, which improves coordination and allows for more seamless transitions between different wedding functions."
                }
              },
              {
                "@type": "Question",
                "name": "What unique guest experiences can a destination wedding planner in Uttarakhand arrange?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Beyond the ceremony, we arrange local sightseeing tours, nature walks, and personalized welcome hampers. This transforms your wedding into a complete vacation experience for your family and friends."
                }
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}
