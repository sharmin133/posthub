import React from "react";
import Image from "next/image";

export default function ConnectAndCreate() {
  return (
    <div className="w-full  flex flex-col md:flex-row items-center bg-gray-100 p-5 md:px-20">
      
      {/* Left: Image */}
      <div className="w-full  flex justify-center mb-6 md:mb-0">
        <Image
          src="https://i.ibb.co/JjMnWjxn/office-620817.jpg" 
          alt="Connect & Create"
          width={500}
          height={500}
          className="rounded-lg object-cover"
        />
      </div>

      {/* Right: Text */}
      <div className="w-full  flex flex-col justify-center text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Connect & Create
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-xl">
          Access your account to see posts, create content, and manage your profile. Login now to continue.
        </p>
      </div>

    </div>
  );
}
