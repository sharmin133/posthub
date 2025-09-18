"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DashboardContent() {
  const data = [
    { name: "Posts", value: 42 },
    { name: "Users", value: 10 },
  ];

  return (
    <main className="pt-28 px-4 md:px-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to Dashboard</h1>

      {/* Cards container */}
      <div className="flex flex-col md:flex-row md:gap-6 gap-4">
        {/* Animated Card */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded shadow w-full md:max-w-md"
        >
          <h2 className="text-xl font-semibold mb-2">Stats Card</h2>
          <p>Placeholder stats: 42 posts, 10 users</p>
        </motion.div>

        {/* Bar Chart */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 rounded shadow w-full md:max-w-md"
        >
          <h2 className="text-xl font-semibold mb-4">Posts vs Users</h2>
          <div className="w-full h-64 sm:h-72 md:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#4F46E5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
