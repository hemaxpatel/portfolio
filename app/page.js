"use client";
// import React from "react";
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";

import IconCloud from "@/components/ui/icon-cloud";
import Particles from "@/components/ui/particles";
import Timeline from "@/components/timeline";
import Intro from "@/components/intro";
import Social from "@/components/social";
import ProjectCard from "@/components/projects/projectcard";
import projects from "@/components/projects/projects.js";

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
    "amazonaws",
    "googlecloud",
    "git",
    "github",
    "visualstudiocode",
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
      <div className="relative flex xl:h-[4000px] md:h-[4700px] h-[5150px]  w-full flex-col items-center justify-center overflow-hidden bg-foreground md:shadow-xl">
        {/* particles bg*/}
        <Particles
          className="absolute inset-0 z-0"
          quantity={600}
          ease={80}
          color={"#ffffff"}
          refresh
        />

        {/* intro */}
        <Intro />

        {/* Skill Planet */}
        <div className="mt-10 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
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
            <h2 className="inline-block p-4 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              My Journey
            </h2>
          </div>

          <Timeline />
        </div>

        {/* Projects */}
        <div className="mt-20 z-10 px-4 w-full max-w-6xl justify-center text-center">
          <h2 className="inline-block p-4 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Social Nebula */}
        <Social />
      </div>
    </>
  );
}
