"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Particles from "@/components/ui/particles";

const certifications = [
  "Microsoft Certified: Azure Fundamentals (AZ-900)",
  "Google Cloud Computing Foundations Certificate",
  "AWS Academy Graduate - AWS Academy Cloud Developing",
  "HackerRank Certified Software Engineer",
  "HackerRank Certified Frontend Developer",
  // "Postman API Fundamentals Student Expert",
  "IBM Node.js & MongoDB: Developing Backend Database Applicatons",
  // "Meta Programming the JavaScript",
  //   ,
];

const achievements = [
  // "5⭐ in C, C++ and Python on HackerRank",
  "5⭐ in Problem Solving on HackerRank",
  // "180+ Leetcode problems solved",
  "7 skill badges and 26 badges of Google Cloud",
  "20+ trophies and 110+ badges on Microsoft Learn",
];

const About = () => {
  const router = useRouter();
  return (
    <div className="relative w-full min-h-screen bg-foreground overflow-hidden">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0 z-0"
        quantity={300}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-40 pb-20 space-y-24">
        {/* About Me Section */}
        <section id="about-me" className="space-y-4">
          <h2 className="text-4xl font-bold text-cyan-400">About Me</h2>
          <p className="text-gray-300 text-lg leading-relaxed text-justify">
            I'm <strong>Hemax Patel</strong>, a passionate full-stack developer
            and cloud computing enthusiast. I love building scalable web apps,
            solving real-world problems, and exploring modern technologies like
            Next.js, AWS, and containerized environments. I’ve worked on live
            projects, participated in tech communities, and continuously strive
            to improve my DSA, DevOps, and system design skills.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed text-justify">
            My journey began as an intern working on a real-time event
            management system and has grown into a passion for developing robust
            solutions—from dashboards to alumni networks to cloud-native apps.
            Currently, I’m diving deeper into backend architecture and cloud.
          </p>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="space-y-4">
          <h2 className="text-4xl font-bold text-blue-400">
            <a
              href="https://drive.google.com/drive/folders/1hShzFLcSMQ-GfqDUzD22C3ZT81BOIzmu?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certifications
            </a>
          </h2>
          <ul className="list-disc pl-6 text-lg text-gray-300 space-y-2">
            {certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>

        {/* Achievements Section */}
        <section id="certifications" className="space-y-4">
          <h2 className="text-4xl font-bold text-purple-400">Achievements</h2>
          <ul className="list-disc pl-6 text-lg text-gray-300 space-y-2">
            {achievements.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </section>
        <div>
          <button
            onClick={() => router.push("/")}
            className="px-5 py-2 bg-transparent text-white rounded-lg font-medium shadow-md hover:border"
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
