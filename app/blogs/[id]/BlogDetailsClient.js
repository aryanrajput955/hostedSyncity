'use client'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const BlogDetailsClient = ({ id, initialBlog }) => {
    const router = useRouter()
    const [blog, setBlog] = useState(initialBlog)
    const [isLoading, setIsLoading] = useState(!initialBlog)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!initialBlog && id) {
            fetchBlogDetails()
        }
    }, [id, initialBlog])

    const fetchBlogDetails = async () => {
        try {
            setIsLoading(true)
            const baseUrl = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '')
            const response = await axios.get(
                `${baseUrl}/api/blogs/${id}`
            )
            if (response.data.success) {
                setBlog(response.data.data)
            } else {
                setError('Failed to load blog details')
            }
        } catch (err) {
            console.error('Error fetching blog details:', err)
            setError('Blog not found or an error occurred')
        } finally {
            setIsLoading(false)
        }
    }

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    }

    const handleShare = (platform) => {
        const url = encodeURIComponent(window.location.href);
        const text = encodeURIComponent(blog?.title || 'Check out this block post!');
        let shareUrl = '';

        switch (platform) {
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
                break;
            case 'whatsapp':
                shareUrl = `https://api.whatsapp.com/send?text=${text}%20${url}`;
                break;
            default:
                return;
        }

        window.open(shareUrl, '_blank', 'width=600,height=400');
    };

    const calculateReadingTime = (content) => {
        const wordsPerMinute = 200
        const text = content.replace(/<[^>]*>?/gm, '')
        const words = text.split(/\s+/).length
        const minutes = Math.ceil(words / wordsPerMinute)
        return minutes
    }

    if (isLoading) {
        return (
            <div className='min-h-screen bg-background flex justify-center items-center'>
                <div className='animate-spin rounded-full h-16 w-16 border-b-4 border-primary'></div>
            </div>
        )
    }

    if (error || !blog) {
        return (
            <div className='min-h-screen bg-background flex flex-col justify-center items-center px-4'>
                <div className='text-center p-8 bg-card rounded-2xl shadow-xl max-w-md w-full border border-border'>
                    <svg
                        className='w-16 h-16 text-destructive mx-auto mb-4'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                        />
                    </svg>
                    <h2 className='text-2xl font-bold text-foreground mb-2 font-jost'>
                        {error || 'Blog Not Found'}
                    </h2>
                    <p className='text-gray-600 mb-6 font-jost'>
                        The blog post you are looking for might have been removed or is temporarily unavailable.
                    </p>
                    <Link
                        href='/blogs'
                        className='inline-block px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-jost'>
                        Back to Blogs
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-[#FBFBFB] text-neutral-900'>
            {/* Navigation Bar Placeholder (if global nav isn't sticky) or just padding */}
            <div className="pt-24 lg:pt-32"></div>

            <article className='max-w-[90%] w-full mx-auto px-4 sm:px-6 lg:px-8 pb-20'>
                {/* Back Link */}
                <div className="mb-12">
                    <Link
                        href='/blogs'
                        className='group inline-flex items-center gap-2 text-muted-foreground hover:text-primary font-medium transition-colors duration-300'>
                        <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center shadow-md group-hover:shadow-lg transition-all border border-border">
                            <svg className='w-5 h-5 transform group-hover:-translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M15 19l-7-7 7-7' />
                            </svg>
                        </div>
                        <span className="text-sm font-bold uppercase tracking-wide">Back to Blogs</span>
                    </Link>
                </div>

                {/* Split Header Layout (Wide) */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16'>
                    {/* Left: Text Header */}
                    <header className='text-left'>
                        <div className='flex flex-wrap items-center gap-3 text-sm font-bold mb-6 uppercase tracking-wider text-muted-foreground'>
                            <span className='px-4 py-1.5 bg-accent text-accent-foreground rounded-full shadow-sm'>
                                {blog.category || 'Travel'}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                            <span>{formatDate(blog.date)}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                            <span>{calculateReadingTime(blog.content)} min read</span>
                        </div>

                        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-serif text-neutral-900 leading-[1.1] mb-8'>
                            {blog.title}
                        </h1>

                        <div className='flex items-center gap-5'>
                            <div className='w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-xl ring-4 ring-background'>
                                {blog.author.charAt(0)}
                            </div>
                            <div className='text-left'>
                                <p className='text-neutral-900 font-bold text-lg leading-none mb-1.5'>
                                    {blog.author}
                                </p>
                                <p className='text-muted-foreground text-sm font-semibold tracking-wide uppercase'>
                                    Author & Traveler
                                </p>
                            </div>
                        </div>
                    </header>

                    {/* Right: Featured Image */}
                    <div className='relative w-full aspect-[4/3] lg:aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl group'>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                        {blog.image ? (
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className='w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out'
                            />
                        ) : (
                            <div className='w-full h-full bg-gray-200 flex items-center justify-center text-gray-400'>
                                No Image Available
                            </div>
                        )}
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                    {/* Share / Social Sidebar (Desktop) - Adjusted Position */}
                    <div className='hidden lg:flex lg:col-span-1 flex-col items-center gap-6 sticky top-32 h-fit pt-8'>
                        <div className="text-gray-400 text-xs font-bold uppercase tracking-widest rotate-180" style={{ writingMode: 'vertical-rl' }}>Share this story</div>
                        <div className="h-12 w-px bg-gray-300"></div>
                        {/* Icons remain the same... */}
                        {/* Twitter */}
                        <button onClick={() => handleShare('twitter')} aria-label="Share to Twitter" className='w-11 h-11 rounded-full bg-white text-blue-400 shadow-lg border border-gray-50 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all transform hover:scale-110'>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                        </button>
                        {/* Facebook */}
                        <button onClick={() => handleShare('facebook')} aria-label="Share to Facebook" className='w-11 h-11 rounded-full bg-white text-blue-800 shadow-lg border border-gray-50 flex items-center justify-center hover:bg-blue-800 hover:text-white transition-all transform hover:scale-110'>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                        </button>
                        {/* WhatsApp */}
                        <button onClick={() => handleShare('whatsapp')} aria-label="Share to WhatsApp" className='w-11 h-11 rounded-full bg-white text-green-500 shadow-lg border border-gray-50 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all transform hover:scale-110'>
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.97 0C5.358 0 .001 5.358.001 11.97c0 2.21.579 4.318 1.661 6.182L.098 24l5.968-1.564a11.905 11.905 0 0 0 5.904 1.562h.005C18.572 23.998 23.94 18.625 23.94 12c0-3.218-1.254-6.248-3.53-8.528A11.921 11.921 0 0 0 11.97 0zm0 21.983c-1.859 0-3.684-.501-5.284-1.448l-.379-.224-3.929 1.03.1042-3.834-.246-.392a9.927 9.927 0 0 1-1.536-5.32c0-5.503 4.478-9.98 9.982-9.98 2.668 0 5.174 1.04 7.062 2.929 1.889 1.888 2.928 4.394 2.928 7.064 0 5.503-4.478 9.98-9.982 9.98zM17.443 14.5c-.299-.15-1.772-.876-2.046-.976-.274-.101-.475-.151-.673.15-.199.301-.774.975-.95 1.176-.174.2-.349.225-.648.075-.299-.15-1.265-.466-2.408-1.488-.888-.795-1.489-1.776-1.664-2.076-.174-.3-.018-.462.132-.612.135-.134.299-.35.449-.525.15-.175.201-.299.301-.5.099-.2.05-.375-.025-.525-.075-.15-.673-1.625-.92-2.225-.24-.585-.487-.506-.673-.516-.174-.008-.375-.008-.574-.008-.2 0-.524.075-.798.375-.274.3-1.048 1.025-1.048 2.5 0 1.475 1.073 2.9 1.222 3.1.15.201 2.115 3.226 5.122 4.526.716.311 1.275.496 1.708.635.719.231 1.373.198 1.889.12.576-.087 1.772-.725 2.022-1.425.249-.7.249-1.301.174-1.425-.074-.125-.274-.2-.573-.35z"/>
                            </svg>
                        </button>
                    </div>

                    {/* Blog Content Centered */}
                    <div className='col-span-1 lg:col-span-10 lg:col-start-2'>
                        <div className='bg-card rounded-[2.5rem] p-8 md:p-14 lg:p-20 shadow-2xl border border-border'>
                            <div
                                className='max-w-none w-full text-neutral-800 leading-relaxed font-light
                                [&_p]:text-lg md:[&_p]:text-xl [&_p]:mb-5 [&_p]:leading-relaxed
                                [&_h1]:text-4xl [&_h1]:font-serif [&_h1]:text-neutral-900 [&_h1]:mt-10 [&_h1]:mb-6 
                                [&_h2]:text-3xl [&_h2]:font-serif [&_h2]:text-neutral-900 [&_h2]:mt-10 [&_h2]:mb-6 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-neutral-200
                                [&_h3]:text-2xl [&_h3]:font-serif [&_h3]:text-neutral-900 [&_h3]:mt-8 [&_h3]:mb-4
                                [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-3
                                [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-3
                                [&_li]:text-lg [&_li]:pl-2
                                [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-6 [&_blockquote]:py-4 [&_blockquote]:bg-primary/5 [&_blockquote]:rounded-r-xl [&_blockquote]:italic [&_blockquote]:text-neutral-700 [&_blockquote]:text-xl [&_blockquote]:my-8 [&_blockquote]:font-serif
                                [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_a]:font-medium [&_a]:transition-colors hover:[&_a]:text-primary/80
                                [&_img]:rounded-2xl [&_img]:shadow-lg [&_img]:my-10 [&_img]:w-full [&_img]:h-auto
                                [&_strong]:font-semibold [&_strong]:text-neutral-900
                                [&_*]:break-words [&_*]:max-w-full'
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                            />

                            {/* Mobile Share (Visible only on small screens) */}
                            <div className="lg:hidden flex justify-center gap-6 mt-16 pt-10 border-t border-gray-100">
                            {/* Mobile Share (Visible only on small screens) */}
                            <div className="lg:hidden flex flex-wrap justify-center gap-4 mt-16 pt-10 border-t border-gray-100">
                                <button onClick={() => handleShare('twitter')} className='w-12 h-12 rounded-full bg-blue-50 text-blue-400 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all'>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                </button>
                                <button onClick={() => handleShare('facebook')} className='w-12 h-12 rounded-full bg-blue-50 text-blue-800 flex items-center justify-center hover:bg-blue-800 hover:text-white transition-all'>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                                </button>
                                <button onClick={() => handleShare('whatsapp')} className='w-12 h-12 rounded-full bg-green-50 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all'>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.97 0C5.358 0 .001 5.358.001 11.97c0 2.21.579 4.318 1.661 6.182L.098 24l5.968-1.564a11.905 11.905 0 0 0 5.904 1.562h.005C18.572 23.998 23.94 18.625 23.94 12c0-3.218-1.254-6.248-3.53-8.528A11.921 11.921 0 0 0 11.97 0zm0 21.983c-1.859 0-3.684-.501-5.284-1.448l-.379-.224-3.929 1.03.1042-3.834-.246-.392a9.927 9.927 0 0 1-1.536-5.32c0-5.503 4.478-9.98 9.982-9.98 2.668 0 5.174 1.04 7.062 2.929 1.889 1.888 2.928 4.394 2.928 7.064 0 5.503-4.478 9.98-9.982 9.98zM17.443 14.5c-.299-.15-1.772-.876-2.046-.976-.274-.101-.475-.151-.673.15-.199.301-.774.975-.95 1.176-.174.2-.349.225-.648.075-.299-.15-1.265-.466-2.408-1.488-.888-.795-1.489-1.776-1.664-2.076-.174-.3-.018-.462.132-.612.135-.134.299-.35.449-.525.15-.175.201-.299.301-.5.099-.2.05-.375-.025-.525-.075-.15-.673-1.625-.92-2.225-.24-.585-.487-.506-.673-.516-.174-.008-.375-.008-.574-.008-.2 0-.524.075-.798.375-.274.3-1.048 1.025-1.048 2.5 0 1.475 1.073 2.9 1.222 3.1.15.201 2.115 3.226 5.122 4.526.716.311 1.275.496 1.708.635.719.231 1.373.198 1.889.12.576-.087 1.772-.725 2.022-1.425.249-.7.249-1.301.174-1.425-.074-.125-.274-.2-.573-.35z"/>
                                    </svg>
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar Placeholder (Optional for future use: Table of Contents, Related Posts) */}
                    <div className='hidden lg:block lg:col-span-1'>
                        {/* Could be used for a scroll progress indicator or similar */}
                    </div>
                </div>
            </article>
        </div>
    )
}

export default BlogDetailsClient
