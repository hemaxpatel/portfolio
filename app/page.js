"use client";
import React from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Vortex } from "@/components/ui/vortex";
import IconCloud from "@/components/ui/icon-cloud";
import Particles from "@/components/ui/particles";
import Timeline from "@/components/timeline";
import Intro from "@/components/intro";

export default function Home() {
  // icon cloud
  const slugs = [
    "c",
    "cplusplus",
    "typescript",
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "tailwindcss",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "python",
    "bootstrap",
    "postgresql",
    "mongodb",
    "git",
    "github",
    "visualstudiocode",
    "figma",
  ];

  // particles
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <>
      <div className="relative flex h-[3000px] w-full flex-col items-center justify-center overflow-hidden bg-foreground md:shadow-xl">
        {/* intro */}
        <Intro />

        {/* icon cloud */}
        <div className="mt-10 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            Skill Planet
          </h2>
          <p className="text-gray-300 mt-2 text-sm md:text-base italic">
            Technologies orbiting my brain
          </p>
        </div>
        <IconCloud iconSlugs={slugs} />

        {/* timeline */}
        <div className="mt-20 z-10 px-4 md:px-10 w-full max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white tracking-wide uppercase drop-shadow-lg">
            My Journey 🌌
          </h1>
          <Timeline />
        </div>

        {/* Vortex */}
        <div className="w-full h-full overflow-hidden">
          <Vortex
            backgroundColor="black"
            className="flex flex-col items-center justify-center w-full h-full px-2 py-4 md:px-10"
          >
            <h2 className="text-2xl font-bold text-center text-white md:text-6xl">
              The hell is this?
            </h2>
            <p className="max-w-xl mt-6 text-sm text-center text-white md:text-2xl">
              This is chemical burn. It&apos;ll hurt more than you&apos;ve ever
              been burned and you&apos;ll have a scar.
            </p>
          </Vortex>
        </div>

        {/* particles */}
        <Particles
          className="absolute inset-0 z-0"
          quantity={500}
          ease={80}
          color={"#ffffff"}
          refresh
        />
      </div>
    </>
  );
}
