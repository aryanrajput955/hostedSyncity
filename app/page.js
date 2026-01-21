'use client';
import React, { useState, useEffect } from 'react';
import HeroSection from './components/hero';
import OurVisionSection from './components/vision';
import CTASection from './components/cta';
import WhyWeStartedSection from './components/whywestarted';
import OneStationGallerySection from './components/onestation';
import CustomLoader from './components/customloader';
import VideoSection from './components/video';

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

  return (
    <>
      <HeroSection />
      <WhyWeStartedSection />
      <VideoSection />
      <OurVisionSection />
      {/* <OneStationGallerySection /> */}
      <CTASection />
    </>
  );
};

export default Page;
