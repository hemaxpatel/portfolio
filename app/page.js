"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import Intro from "@/components/intro";
import Timeline from "@/components/timeline";
import Projects from "@/components/projects.jsx";
import Snowfall from "react-snowfall";

// Dynamically import components with SSR disabled to prevent hydration errors
const Particles = dynamic(() => import("@/components/ui/particles"), {
  ssr: false,
});
const IconCloud = dynamic(() => import("@/components/ui/icon-cloud"), {
  ssr: false,
});

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Custom images for skill planet
  const customImages = [
    { src: "/skills/c.png", alt: "C" },
    { src: "/skills/cpp.svg", alt: "C++" },
    { src: "/skills/java.svg", alt: "Java" },
    { src: "/skills/py.svg", alt: "Python" },
    { src: "/skills/html5.png", alt: "HTML5" },
    { src: "/skills/css.png", alt: "CSS3" },
    { src: "/skills/js.png", alt: "JavaScript" },
    { src: "/skills/ts.png", alt: "TypeScript" },
    { src: "/skills/react.png", alt: "React" },
    { src: "/skills/redux.svg", alt: "Redux" },
    { src: "/skills/tailwind.svg", alt: "Tailwind CSS" },
    { src: "/skills/bootstrap.png", alt: "Bootstrap" },
    { src: "/skills/nodejs.png", alt: "Node.js" },
    { src: "/skills/express.png", alt: "Express" },
    { src: "/skills/postman.png", alt: "Postman" },
    { src: "/skills/mongodb.png", alt: "MongoDB" },
    { src: "/skills/postgresql.png", alt: "PostgreSQL" },
    { src: "/skills/nextjs.png", alt: "Next.js" },
    { src: "/skills/prisma.png", alt: "Prisma" },
    { src: "/skills/csharp.png", alt: "C#" },
    { src: "/skills/dotnet.svg", alt: ".NET" },
    { src: "/skills/aws.png", alt: "AWS" },
    { src: "/skills/gcp.svg", alt: "Google Cloud" },
    { src: "/skills/git.svg", alt: "Git" },
    { src: "/skills/github.png", alt: "GitHub" },
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
        {/* Snowfall effect */}
        {/* <Snowfall color="white" snowflakeCount={200} /> */}

        {/* particles bg*/}
        {isMounted && (
          <Particles
            className="absolute inset-0 z-0"
            quantity={1000}
            ease={80}
            color={"#ffffff"}
            refresh
          />
        )}

        {/* intro */}
        <Intro />

        {/* Skill Planet */}
        <div className="mt-10 text-center z-10">
          <h2 className="inline-block text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
            Skill Planet
          </h2>
          <p className="text-gray-300 mt-2 text-sm md:text-base italic">
            Technologies orbiting my brain
          </p>
        </div>
        <IconCloud customImages={customImages} />

        {/* My Journey */}
        <div className="mt-20 z-10 px-4 md:px-10 w-full max-w-5xl">
          <div className="text-center">
            <h2 className="inline-block p-4 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500">
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
          <h2 className="inline-block p-4 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500">
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
