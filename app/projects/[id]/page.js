"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { projects } from "@/components/index.js";
import Particles from "@/components/ui/particles";

const ProjectDetails = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.id;
  const project = projects.find((p) => p.id.toString() === id);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [fullscreenImg, setFullscreenImg] = useState(null);

  if (!project) return <div className="text-white p-8">Project not found</div>;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % project.images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative pt-12 min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Particles */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={300}
        ease={80}
        color={"ffffff"}
        refresh
      />

      <div className="relative z-10 px-8 py-10 max-w-6xl mx-auto space-y-8">
        {/* Title Section */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {project.name}
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Slideshow */}
        <div className="relative w-full mx-auto group">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <img
              src={project.images[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] xl:h-[600px] object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
              onClick={() => setFullscreenImg(currentSlide)}
            />
            {/* Image overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-110"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-110"
          >
            &#8594;
          </button>

          {/* Slide indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {project.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? "bg-cyan-400 w-8"
                    : "bg-white/40 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <p className="text-lg text-gray-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, i) => {
              const colorSchemes = [
                "from-cyan-500/10 to-blue-500/10 border-cyan-500/30 text-cyan-300 hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-400/50",
                "from-purple-500/10 to-pink-500/10 border-purple-500/30 text-purple-300 hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-400/50",
                "from-green-500/10 to-emerald-500/10 border-green-500/30 text-green-300 hover:from-green-500/20 hover:to-emerald-500/20 hover:border-green-400/50",
                "from-orange-500/10 to-red-500/10 border-orange-500/30 text-orange-300 hover:from-orange-500/20 hover:to-red-500/20 hover:border-orange-400/50",
                "from-yellow-500/10 to-amber-500/10 border-yellow-500/30 text-yellow-300 hover:from-yellow-500/20 hover:to-amber-500/20 hover:border-yellow-400/50",
                "from-teal-500/10 to-cyan-500/10 border-teal-500/30 text-teal-300 hover:from-teal-500/20 hover:to-cyan-500/20 hover:border-teal-400/50",
              ];
              return (
                <span
                  key={i}
                  className={`px-4 py-2 rounded-full bg-gradient-to-r ${
                    colorSchemes[i % colorSchemes.length]
                  } font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm shadow-lg`}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold border border-white/20 hover:border-white/40 shadow-lg hover:shadow-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-xl flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </a>

          <button
            onClick={() => router.push("/#projects")}
            className="group px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold border border-white/20 hover:border-white/40 shadow-lg hover:shadow-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-xl flex items-center gap-2"
          >
            <span className="group-hover:-translate-x-1 transition-transform duration-300">
              ←
            </span>
            Back to Projects
          </button>
        </div>
      </div>

      {/* Fullscreen Image Modal with navigation */}
      {fullscreenImg !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50"
          onClick={() => setFullscreenImg(null)}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.images[fullscreenImg]}
              alt="Fullscreen"
              className="w-auto h-auto max-w-[98vw] max-h-[95vh] object-contain rounded-xl shadow-2xl"
            />

            {/* Close Button - top-left & red */}
            <button
              onClick={() => setFullscreenImg(null)}
              className="absolute top-5 right-5 text-white text-4xl font-bold"
            >
              &times;
            </button>

            {/* Prev */}
            <button
              onClick={() =>
                setFullscreenImg(
                  (prev) =>
                    (prev - 1 + project.images.length) % project.images.length
                )
              }
              className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-80"
            >
              &#8592;
            </button>

            {/* Next */}
            <button
              onClick={() =>
                setFullscreenImg((prev) => (prev + 1) % project.images.length)
              }
              className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white text-3xl bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-80"
            >
              &#8594;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
