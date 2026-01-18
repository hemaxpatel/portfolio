"use client";
// import React from "react";
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";

import Particles from "@/components/ui/particles";
import Intro from "@/components/intro";
import IconCloud from "@/components/ui/icon-cloud";
import Timeline from "@/components/timeline";
import Projects from "@/components/projects.jsx";
// import Social from "@/components/social.jsx";

export default function Home() {
  // icon cloud
  const slugs = [
    "c",
    "cplusplus",
    "java",
    "python",
    "html5",
    "css3",
    "javascript",
    "typescript",
    "react",
    "redux",
    "tailwindcss",
    "bootstrap",
    "nodedotjs",
    "express",
    "postman",
    "mongodb",
    "mysql",
    "postgresql",
    "nextdotjs",
    "prisma",
    "csharp",
    "dotnet",
    "amazonaws",
    "googlecloud",
    "git",
    "github",
    "visualstudiocode",
    "vercel",
    // "docker",
    // "figma",
  ];

  // particles
  // const { resolvedTheme } = useTheme();
  // const [color, setColor] = useState("#ffffff");

  // useEffect(() => {
  //   setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  // }, [resolvedTheme]);

  return (
    <>
      <div className="relative w-full flex flex-col items-center justify-start overflow-hidden bg-foreground md:shadow-xl min-h-screen">
        {/* particles bg*/}
        <Particles
          className="absolute inset-0 z-0"
          quantity={800}
          ease={80}
          color={"#ffffff"}
          refresh
        />

        {/* intro */}
        <Intro />

        {/* Skill Planet */}
        <div className="mt-10 text-center z-10">
          <h2 className="inline-block text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
            Skill Planet
          </h2>
          <p className="text-gray-300 mt-2 text-sm md:text-base italic">
            Technologies orbiting my brain
          </p>
        </div>
        <IconCloud iconSlugs={slugs} />

        {/* My Journey */}
        <div className="mt-20 z-10 px-4 md:px-10 w-full max-w-5xl">
          <div className="text-center">
            <h2 className="inline-block p-4 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              My Journey
            </h2>
          </div>

          <Timeline />
        </div>

        {/* Projects */}
        <div
          id="projects"
          className="my-20 z-10 px-4 w-full max-w-6xl justify-center text-center"
        >
          <h2 className="inline-block p-4 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
            Projects
          </h2>
          <Projects />
        </div>

        {/* Social Nebula */}
        {/* <Social /> */}
      </div>
    </>
  );
}
