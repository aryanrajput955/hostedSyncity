import ContactClient from "./ContactClient";

export const metadata = {
  title: "Contact Us | Syncity Events",
  description:
    "Get in touch with Syncity Events for destination weddings, corporate events, wellness retreats, farm tourism, and special occasions in Haridwar, Uttarakhand.",
  openGraph: {
    title: "Contact Us | Syncity Events",
    description:
      "Get in touch with Syncity Events for destination weddings, corporate events, wellness retreats, farm tourism, and special occasions in Haridwar, Uttarakhand.",
    url: "https://syncityevents.com/contact",
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
  return <ContactClient />;
}

