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
    <div className="p-4 md:pt-28 max-w-4xl">
      <h1 className="text-2xl font-bold mb-4 text-center">Post Details</h1>
  <Card className="p-6 md:p-8 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold mb-3 text-center">{post.title}</h2>
          <p className="text-gray-700 text-base md:text-lg text-center">{post.body}</p>
        </Card>
    </div>
  );
}