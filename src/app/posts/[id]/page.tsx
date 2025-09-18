"use client";

import { useFetch } from "@/hooks/useFetch";

import { useParams } from "next/navigation";
import Card from "@/components/Card";
import { Post } from "@/types/posts";

export default function PostDetails() {
  const params = useParams();
  const { data: post, loading, error } = useFetch<Post>(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (loading) return <p>Loading post...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Post Details</h1>
      <Card title={post.title}>
        <p>{post.body}</p>

      </Card>
    </div>
  );
}
