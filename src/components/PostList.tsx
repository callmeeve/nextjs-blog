import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

interface Post {
  id: string;
  title: string;
  content: string;
}

interface PostListProps {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

export function PostList({ posts, loading, error }: PostListProps) {
  if (loading) {
    return <div className="animate-pulse space-y-4">Loading...</div>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (posts.length === 0) {
    return <p className="text-sm text-gray-500 dark:text-gray-400">No posts found</p>;
  }

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Card key={post.id} className="rounded-[0.3rem] bg-white dark:bg-zinc-800">
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 dark:text-gray-400">{post.content.substring(0, 100)}...</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}