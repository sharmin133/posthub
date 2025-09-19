"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="relative w-screen h-[50vh] md:h-[90vh]"
    >
      {/* banner image */}
      <Image
        src="https://i.ibb.co/3mgrcxwK/bible-5124602-1920.jpg"
        alt="Banner"
        fill
        style={{ objectFit: "cover" }}
      />
    </motion.section>
  );
}
