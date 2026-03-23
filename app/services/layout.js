export const metadata = {
  authors: [{ name: "Syncity Events" }],
  creator: "Syncity Events",
  publisher: "Syncity Events",
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
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

export default function ServicesLayout({ children }) {
  return children;
}
