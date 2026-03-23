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
    canonical: 'https://www.syncityevents.com/contact',
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

export default function ContactLayout({ children }) {
  return children;
}
