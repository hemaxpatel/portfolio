"use client";

import Link from "next/link";
import Particles from "@/components/ui/particles";
import { RocketIcon, OrbitIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-foreground text-white text-center px-6">
      {/* particles bg */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={500}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      <div className="relative z-10 flex flex-col items-center space-y-4">
        <RocketIcon className="w-20 h-20 text-blue-400 animate-bounce" />

        <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
          404
        </h1>

        <p className="text-2xl md:text-3xl font-semibold text-gray-200">
          Not Found
        </p>

        <p className="text-lg md:text-xl text-gray-400 italic">
          You seem lost in Space.
        </p>

        <OrbitIcon className="w-12 h-12 text-purple-400 animate-spin-slow mt-4" />

        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Fly back home
        </Link>
      </div>
    </div>
  );
}
