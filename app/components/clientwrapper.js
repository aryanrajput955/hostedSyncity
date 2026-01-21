"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import CustomLoader from "./customloader";

export default function ClientWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname(); // ✅ works in App Router

  useEffect(() => {
    // initial load
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // route change trigger
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (isLoading) return <CustomLoader />;
  return <>{children}</>;
}
