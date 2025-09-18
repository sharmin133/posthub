"use client";

import Card from "@/components/Card";
import { useFetch } from "@/hooks/useFetch";

import Link from "next/link";
import { motion } from "framer-motion";
import { Post } from "@/types/posts";

export default function PostsPage() {
  const { data: posts, loading, error } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!posts) return <p>No posts found</p>;

  return (
    <div className="p-4 md:pt-28">
      <h1 className="text-2xl font-bold mb-6">All Posts</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {posts.map((post, index) => (
    <motion.div
      key={post.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card title={post.title}>
        <p>{post.body.slice(0, 80)}...</p>
        <Link href={`/dashboard/posts/${post.id}`} className="text-blue-500">
  Read more →
</Link>
      </Card>
    </motion.div>
  ))}
</div>
    </div>
  );
}

         
      