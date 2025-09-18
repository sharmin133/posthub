"use client";

import { useFetch } from "@/hooks/useFetch";
import { Post } from "@/types/posts";
import Link from "next/link";


export default function PostsPage() {
  const { data: posts, loading, error } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <div className="grid gap-4">
        {posts?.slice(0, 10).map((post) => (
          <div key={post.id} className="border p-4 rounded bg-gray-100">
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-600">{post.body}</p>
            <Link href={`/posts/${post.id}`} className="text-blue-500">
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
