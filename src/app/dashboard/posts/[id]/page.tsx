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

  if (loading) return <p>Loading post...</p>; // loading
  if (error) return <p className="text-red-500">{error}</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div className="pt-32 px-4 md:px-8 bg-white min-h-screen transition-colors duration-300">
      {/* page title */}
      <h1 className="md:text-5xl text-3xl text-center font-bold md:mb-12 mb-6 text-purple-900">
        Posts Details
      </h1>

      {/* card section */}
      <Card title={post.title} className="p-6 md:p-8 shadow-md rounded-lg">
        <p className="text-gray-700 text-base  text-center">
          {post.body}
        </p>
      </Card>
    </div>
  );
}