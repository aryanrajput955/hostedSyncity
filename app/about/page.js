import AboutClient from './AboutClient';

export const metadata = {
  title: "About Syncity Events - Our Heritage & Mission in Uttarakhand",
  description: "Discover the story of Syncity Events. Founded in 2021, we blend luxury with sustainability, crafting extraordinary celebrations in the Himalayas with precision and passion.",
  openGraph: {
    title: "About Syncity Events - Our Heritage & Mission in Uttarakhand",
    description: "Discover the story of Syncity Events. Founded in 2021, we blend luxury with sustainability, crafting extraordinary celebrations in the Himalayas with precision and passion.",
    url: "https://syncityevents.com/about",
    type: "website",
    locale: "en_IN",
    siteName: "Syncity Events",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Syncity Events - Our Heritage & Mission",
    description: "Discover the story of Syncity Events. Founded in 2021, we blend luxury with sustainability, crafting extraordinary celebrations in the Himalayas.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}