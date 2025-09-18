"use client";

import { useFetch } from "@/hooks/useFetch";
import { Post } from "@/types/posts";


interface PostPageProps {
  params: { id: string };
}

export default function PostDetailsPage({ params }: PostPageProps) {
  const { id } = params;

  const { data: post, loading, error } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (loading) return <p>Loading post...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
}
