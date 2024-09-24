'use client'

import { useEffect, useState } from 'react'
import { CreatePostForm } from '@/components/CreatePostForm'
import { PostList } from '@/components/PostList'


interface Post {
    id: string;
    title: string;
    content: string;
}

export default function AdminPostsPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    async function fetchPosts() {
        try {
            const response = await fetch('/api/posts');
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const data = await response.json();
            setPosts(data);
        } catch (error: unknown) {
            setError(error instanceof Error ? error.message : 'Unknown error occurred');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="container mx-auto px-6 py-8">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-gray-200">
                Posts
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
                Manage your blog posts here.
            </p>
            <hr className="my-4 border-gray-200 dark:border-zinc-700" />
            <div className="mt-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-xl font-medium text-zinc-900 dark:text-gray-200">
                                Create Post
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Create a new blog post.
                            </p>
                        </div>
                        <CreatePostForm fetchPosts={fetchPosts} />
                    </div>
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h2 className="text-xl font-medium text-zinc-900 dark:text-gray-200">
                                Existing Posts
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                Manage your existing blog posts.
                            </p>
                        </div>
                        <PostList posts={posts} loading={loading} error={error} />
                    </div>
                </div>
            </div>
        </div>
    )
}
