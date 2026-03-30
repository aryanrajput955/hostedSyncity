import PageContent from './PageContent';

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Syncity Events",
  "url": "https://syncityevents.com",
  "logo": "https://syncityevents.com/logo.jpg", 
  "description": "Bespoke destination wedding planners and corporate retreat organizers in Uttarakhand, India.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-63977-23250",
    "contactType": "customer service",
    "email": "connect@syncityevents.com",
    "areaServed": "IN",
    "availableLanguage": "en"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Haridwar",
    "addressRegion": "Uttarakhand",
    "addressCountry": "IN"
  }
};

export default function Page() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <PageContent />
    </main>
  );
}
