import BlogsClient from './BlogsClient';

export const metadata = {
    title: 'Event Planning Blogs & Ideas | Syncity Events Uttarakhand',
    description: 'Explore expert tips, destination wedding ideas, corporate event trends, and wellness retreat insights across Uttarakhand with Syncity Events',
    openGraph: {
        title: 'Event Planning Blogs & Ideas | Syncity Events Uttarakhand',
        description: 'Explore expert tips, destination wedding ideas, corporate event trends, and wellness retreat insights across Uttarakhand with Syncity Events',
        type: 'website',
    }
};

export default function BlogsPage() {
    return <BlogsClient />;
}
