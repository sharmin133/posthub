"use client";

import Card from "@/components/Card";
import { motion } from "framer-motion";

export default function DashboardHome() {
  const stats = [
    { title: "Total Users", value: 10 },
    { title: "Total Posts", value: 100 },
    { title: "Active Sessions", value: 5 },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Welcome to My Dashboard</h1>
      <p className="mb-6 text-gray-600">
        This is your dashboard home. Here you can see summary stats and quick insights.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <Card title={stat.title}>
              <p className="text-2xl font-bold">{stat.value}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
