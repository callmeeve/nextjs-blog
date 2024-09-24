'use client'

import { useState } from 'react';
import { Button } from "./ui/button";
import { Label } from './ui/label';
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from '@/hooks/use-toast';
import { z } from 'zod';

const postSchema = z.object({
    title: z.string().min(1, "Title is required"),
    content: z.string().min(1, "Content is required"),
});

interface CreatePostFormProps {
    fetchPosts: () => void;
}

export function CreatePostForm({ fetchPosts }: CreatePostFormProps) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form data using zod
        const result = postSchema.safeParse({ title, content });
        if (!result.success) {
            const errors = result.error.errors.map(err => err.message).join(", ");
            toast({
                title: "Validation Error",
                description: errors,
                variant: "destructive",
            });
            return;
        }

        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content }),
            });
            if (response.ok) {
                setTitle('');
                setContent('');
                toast({
                    title: "Success",
                    description: "Post created successfully",
                });
                fetchPosts();
            } else {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to create post');
            }
        } catch (error: unknown) {
            console.error(error);
            const errorMessage = error instanceof Error ? error.message : "Failed to create post";

            toast({
                title: "Error",
                description: errorMessage,
                variant: "destructive",
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Title
                </Label>
                <Input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="bg-white dark:bg-zinc-800 text-zinc-900 dark:text-gray-200 rounded-[0.3rem]"
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Content
                </Label>
                <Textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    className="bg-white dark:bg-zinc-800 text-zinc-900 dark:text-gray-200 rounded-[0.3rem]"
                    rows={5}
                />
            </div>
            <div className="flex justify-end">
                <Button type="submit">
                    Create Post
                </Button>
            </div>
        </form>
    );
}