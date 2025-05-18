"use client";

import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-cyan-500 border-solid"></div>
      <div className="absolute">
        <Image src="/globe.svg" alt="loading" width={100} height={100} />
      </div>
    </div>
  );
};

export default loading;
