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
    canonical: 'https://www.syncityevents.com/corporate-events/',
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

export default function CorporateEventsLayout({ children }) {
  return (
    <>
      <Script
        id="corporate-events-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What types of corporate events do you organize in Uttarakhand?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Corporate events include conferences, product launches, team outings, training sessions, and internal business meetings. The type of event depends on the company’s objective, whether it is communication, team engagement, or brand presentation."
                }
              },
              {
                "@type": "Question",
                "name": "How can a Himalayan retreat benefit my team's productivity?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A Himalayan retreat provides a distraction-free environment where teams can focus better. It helps improve communication, encourages collaboration, and allows employees to reset, which can lead to better productivity after the event."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide end-to-end logistics for corporate offsites?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, corporate event management includes handling logistics such as venue booking, travel coordination, accommodation, and on-site support. This ensures that the event runs without interruptions or delays."
                }
              },
              {
                "@type": "Question",
                "name": "Can you incorporate sustainable practices into large-scale conferences?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sustainable practices can be included through controlled resource usage, local sourcing, reduced waste, and minimal physical materials. These practices help manage events efficiently without unnecessary environmental impact."
                }
              },
              {
                "@type": "Question",
                "name": "What are the best venues for corporate retreats in Dehradun and Mussoorie?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dehradun offers business hotels and conference venues suitable for formal setups. Mussoorie provides resort-based venues that are more suitable for retreats and offsite meetings."
                }
              },
              {
                "@type": "Question",
                "name": "What does a corporate event planner do?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A corporate event planner manages venue selection, vendor coordination, logistics, and execution. The role focuses on maintaining structure and ensuring that all event elements work together smoothly."
                }
              },
              {
                "@type": "Question",
                "name": "How early should a corporate event be planned?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Planning timelines depend on event size, but it is generally better to start a few weeks in advance. Larger events may require more time for coordination and preparation."
                }
              },
              {
                "@type": "Question",
                "name": "What factors affect corporate event cost?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cost depends on venue type, number of attendees, duration, and services required. Additional elements like branding and technical setups can also influence the overall budget."
                }
              },
              {
                "@type": "Question",
                "name": "Are resorts suitable for corporate events?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Resorts are suitable for offsites and team events as they provide space, flexibility, and a relaxed environment. They are commonly used for informal corporate gatherings."
                }
              },
              {
                "@type": "Question",
                "name": "How do corporate event management companies operate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "They manage planning, coordination, vendor handling, and execution. The goal is to ensure that the event runs as planned without operational issues."
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
