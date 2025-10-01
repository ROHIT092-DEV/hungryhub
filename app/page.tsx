"use client";


import { Badge } from "@/components/ui/badge";
import { FolderOpenDot } from "lucide-react";
import Products from "@/components/Products";

export default function HeroSection() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-blue-100 via-purple-100 to-pink-100">
        {/* Badge */}
        <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-200">
          🔥 Fresh, Fast & Delicious
        </Badge>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight max-w-xl text-gray-800">
          Get Your Favorite{" "}
          <span className="text-2xl font-extrabold bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
            Fast Food
          </span>{" "}
          Delivered in Minutes
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-md text-gray-600">
          From juicy burgers to crispy fries, we bring you the{" "}
          <span className="font-semibold text-gray-800">
            best fast food experience
          </span>{" "}
          right at your doorstep. Quick, tasty, and always fresh.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <button
            className="bg-red-600 hover:bg-red-700 text-white  shadow-lg text-lg px-12 py-2 flex space-x-2 rounded-sm
        
        items-center cursor-pointer
        "
          >
            <FolderOpenDot />
            <p>See About Us</p>
          </button>
        </div>
      </section>

      {/* Products */}

      <Products />
    </>
  );
}
