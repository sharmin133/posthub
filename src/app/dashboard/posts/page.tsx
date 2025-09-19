"use client";

import Card from "@/components/Card";
import { useFetch } from "@/hooks/useFetch";

import Link from "next/link";
import { motion } from "framer-motion";
import { Post } from "@/types/posts";
import { HiArrowRight } from "react-icons/hi";

export default function PostsPage() {
  const { data: posts, loading, error } = useFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!posts) return <p>No posts found</p>;

  return (
    <div className="pt-32 px-4 md:px-8 bg-white min-h-screen transition-colors duration-300">
      <h1 className="md:text-5xl text-3xl text-center font-bold md:mb-12 mb-6 text-purple-900">
        All Posts
      </h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-fr">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="h-full"
          >
            <Card className="p-6 md:p-8 shadow-md rounded-lg flex flex-col h-full">
              {/* title */}
              <div className="h-16 flex items-center justify-center mb-4">
                <h3 className="font-semibold text-xl text-purple-900 text-center line-clamp-2">
                  {post.title}
                </h3>
              </div>

              {/* body */}
              <div className="flex-1">
                <p className="text-gray-700 text-base text-center line-clamp-3">
                  {post.body}
                </p>
              </div>

              {/* button */}
              <div className="h-12 flex items-center justify-center mt-4">
                <Link
                  href={`/dashboard/posts/${post.id}`}
                  className="inline-flex items-center gap-2 text-white font-bold px-4 py-2 rounded-xl 
      bg-gradient-to-r from-orange-500 to-orange-700
      hover:from-orange-900 hover:to-orange-400 transition-all duration-300"
                >
                  Read more
                  <HiArrowRight className="text-xl" />
                </Link>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
