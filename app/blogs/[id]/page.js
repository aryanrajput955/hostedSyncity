import connectDB from '@/app/config/database';
import Blog from '@/app/models/Blog';
import BlogDetailsClient from './BlogDetailsClient';

export async function generateMetadata({ params }) {
    await connectDB();
    const { id } = await params;

    try {
        const isObjectId = id.match(/^[0-9a-fA-F]{24}$/);
        const query = isObjectId ? { $or: [{ _id: id }, { slug: id }] } : { slug: id };
        const blog = await Blog.findOne(query);
        if (!blog) {
            return {
                title: 'Blog Not Found | Paradise Bliss',
                description: 'The requested blog post could not be found.'
            };
        }

        return {
            title: blog.metaTitle || blog.title,
            description: blog.metaDescription,
            alternates: {
                canonical: `https://www.syncityevents.com/blogs/${blog.slug}/`,
            },
            openGraph: {
                title: blog.metaTitle || blog.title,
                description: blog.metaDescription,
                images: [blog.image],
                url: `https://www.syncityevents.com/blogs/${blog.slug}/`,
            },
        };
    } catch (error) {
        return {
            title: 'Blog | Paradise Bliss',
            description: 'Explore our latest travel stories.'
        };
    }
}

export default async function BlogPage({ params }) {
    await connectDB();
    const { id } = await params;

    let initialBlog = null;
    try {
        const isObjectId = id.match(/^[0-9a-fA-F]{24}$/);
        const query = isObjectId ? { $or: [{ _id: id }, { slug: id }] } : { slug: id };
        const blog = await Blog.findOne(query);
        if (blog) {
            initialBlog = JSON.parse(JSON.stringify(blog));
        }
    } catch (error) {
        console.error('Error fetching blog for server render:', error);
    }

    return <BlogDetailsClient id={id} initialBlog={initialBlog} />;
}
