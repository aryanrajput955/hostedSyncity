'use client';
import React, { useState, useEffect } from 'react';
import HeroSection from './components/hero';
import OurVisionSection from './components/vision';
import CTASection from './components/cta';
import WhyWeStartedSection from './components/whywestarted';
import OneStationGallerySection from './components/onestation';
import CustomLoader from './components/customloader';
import VideoSection from './components/video';
import EcoFriendlySection from './components/ecofriendly';

const Page = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);

  useEffect(() => {
    // Simulate page-specific data fetching
    const timer = setTimeout(() => {
      setIsPageLoading(false);
      window.scrollTo({ top: 0, behavior: 'instant' }); // ✅ Force scroll to top
    }, 2000); // 2-second delay for initial page load

    return () => clearTimeout(timer);
  }, []);

  if (isPageLoading) {
    return <CustomLoader />;
  }

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

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <HeroSection />
      <EcoFriendlySection />
      <WhyWeStartedSection />
      <VideoSection />
      <OurVisionSection />
      {/* <OneStationGallerySection /> */}
      <CTASection />
    </main>
  );
};

export default Page;
