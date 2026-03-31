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

export default function BlogDetailLayout({ children }) {
  return (
    <>
      <Script
        id="blog-detail-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.syncityevents.com"
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blogs",
                item: "https://www.syncityevents.com/blogs"
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Blog Details",
                item: "https://www.syncityevents.com/blogs/"
              }
            ]
          })
        }}
      />
      {children}
    </>
  );
}
