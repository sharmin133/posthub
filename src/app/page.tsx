"use client";

import ConnectAndCreate from "@/components/ConnectAndCreateSection";
import HeroSection from "@/components/HeroSection";


export default function Home() {


  return (
    <div className="mt-20">
      <HeroSection></HeroSection>
      <ConnectAndCreate></ConnectAndCreate>
    </div>
  );
}
