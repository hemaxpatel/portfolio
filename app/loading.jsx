"use client";

import React from "react";
import { RocketIcon } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black relative">
      {/* Spinning ring around the rocket */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        <div className="absolute inset-0 animate-spin rounded-full border-t-4 border-blue-400 border-solid" />
        <RocketIcon className="w-20 h-20 text-blue-400 z-10" />
      </div>

      {/* Text below */}
      <p className="mt-6 text-xl text-blue-400 font-semibold italic tracking-wide text-center">
        Launching... please wait
      </p>
    </div>
  );
};

export default Loading;
