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
  Cell,
} from "recharts";

export default function DashboardContent() {
  const data = [
    { name: "Posts", value: 42 },
    { name: "Users", value: 10 },
  ];

  return (
    <main className="pt-32 px-4 md:px-8 bg-white min-h-screen transition-colors duration-300">
      {/* title */}
      <h1 className="md:text-5xl text-3xl text-center font-bold md:mb-12 mb-6 text-purple-900">
        Welcome to Dashboard
      </h1>

      {/* cards */}
      <div className="flex flex-col md:flex-row md:gap-6 gap-4">

        {/* stats card */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-orange-200 p-6 rounded shadow w-full md:max-w-md transition-colors duration-300"
        >
          <h2 className="text-2xl  font-bold mb-2  text-purple-900">
            Stats Card
          </h2>
          <p className="text-gray-700 text-xl">
            Placeholder stats: 42 posts, 10 users
          </p>
        </motion.div>

        {/* bar chart */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-100 p-6 rounded shadow w-full md:max-w-md transition-colors duration-300"
        >
          <h2 className="text-2xl font-bold mb-4 text-purple-900">
            Posts vs Users
          </h2>
          <div className="w-full h-64 sm:h-72 md:h-64 bg-gray-300 rounded-lg p-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="name" stroke="#4C1F7A" />
                <YAxis stroke="#4C1F7A" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#4C1F7A",
                    color: "white",
                    borderRadius: "0.5rem",
                    border: "none",
                  }}
                />
                <Bar dataKey="value">
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      className={entry.name === "Posts" ? "fill-purple-700" : "fill-orange-500"}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
