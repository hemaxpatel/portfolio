"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Particles from "@/components/ui/particles";

const achievements = [
  {
    title: "HackerRank Stars",
    description: "Problem Solving Excellence",
    stat: 5,
    suffix: "⭐",
    color: "from-yellow-500/20 to-orange-500/20",
    borderColor: "border-yellow-500/30",
    hoverGlow: "hover:shadow-yellow-500/20",
    textColor: "text-yellow-400",
    url: "https://www.hackerrank.com/profile/hemaxpatel",
  },
  {
    title: "Coding Problems",
    description: "Solved across platforms",
    stat: 250,
    suffix: "+",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    hoverGlow: "hover:shadow-green-500/20",
    textColor: "text-green-400",
    url: "https://leetcode.com/u/hemaxpatel/",
  },
  {
    title: "Full Stack Projects",
    description: "Built from scratch",
    stat: 10,
    suffix: "+",
    color: "from-cyan-500/20 to-teal-500/20",
    borderColor: "border-cyan-500/30",
    hoverGlow: "hover:shadow-cyan-500/20",
    textColor: "text-cyan-400",
    url: "https://github.com/hemaxpatel",
  },
  {
    title: "Google Cloud Badges",
    description: "Skill badges earned",
    stat: 30,
    suffix: "+",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    hoverGlow: "hover:shadow-blue-500/20",
    textColor: "text-blue-400",
    url: "https://www.skills.google/public_profiles/444b90fd-6496-431d-bf77-99290f5912ee",
  },
  {
    title: "Microsoft Learn",
    description: "Trophies & badges",
    stat: 200,
    suffix: "+",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    hoverGlow: "hover:shadow-purple-500/20",
    textColor: "text-purple-400",
    url: "https://learn.microsoft.com/en-us/users/hemaxpatel",
  },
];

const certificationBadges = [
  {
    name: "AWS Certified Cloud Practitioner",
    image: "/badges/cloud-practitioner.png",
    verifyUrl:
      "https://www.credly.com/badges/ec84a817-fb36-4867-bd12-65faee67293d",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    image: "/badges/azure-fundamentals.png",
    verifyUrl:
      "https://www.credly.com/badges/82eb79d1-4150-4687-8c4c-412529827f1a",
  },
  {
    name: "Google Cloud Computing Foundations",
    image: "/badges/cloud-foundation.png",
    verifyUrl:
      "https://www.credly.com/badges/eeb0fb5a-3efd-464b-98c8-5fa959113e62",
  },
  {
    name: "Google Cloud Engineering Certificate",
    image: "/badges/cloud-engineering.png",
    verifyUrl:
      "https://www.credly.com/badges/b24fd02a-cf03-414e-b459-a7f0afcffa16",
  },
  {
    name: "GitHub Foundations",
    image: "/badges/github-foundations.png",
    verifyUrl: "",
  },
  {
    name: "Postman API Fundamentals Student Expert",
    image: "/badges/api-fundamentals.png",
    verifyUrl:
      "https://badges.parchment.com/public/assertions/CuGHr3xcRdGglt26Xs4Ddw?identity__email=hemaxpatel3124@gmail.com",
  },
];

// Counter component for animating numbers
const AnimatedCounter = ({ end, suffix, textColor, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className={`text-5xl font-bold ${textColor}`}>
      {count}
      {suffix}
    </div>
  );
};

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
        <section id="about-me" className="space-y-6">
          <h2 className="inline-block text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm <strong className="text-cyan-400">Hemax Patel</strong>, a
              passionate full-stack developer and cloud computing enthusiast. I
              love building scalable web apps, solving real-world problems, and
              exploring modern technologies like Next.js, AWS, etc. I've worked
              on live projects, participated in tech communities, and
              continuously strive to improve my problem solving skills.
            </p>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="space-y-6">
          <h2 className="inline-block text-4xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
            Achievements & Stats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {achievements.map((achievement, index) => (
              <a
                key={index}
                href={achievement.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-8 rounded-2xl backdrop-blur-xl bg-gradient-to-br ${achievement.color} border ${achievement.borderColor} shadow-xl hover:shadow-2xl ${achievement.hoverGlow} transition-all duration-500 hover:scale-105 overflow-hidden cursor-pointer`}
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-white/10 via-white/5 to-white/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />

                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                  {/* Animated Stat Number - Large and Bold */}
                  <AnimatedCounter
                    end={achievement.stat}
                    suffix={achievement.suffix}
                    textColor={achievement.textColor}
                  />

                  {/* Title */}
                  <div className="text-base font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                    {achievement.title}
                  </div>

                  {/* Description */}
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {achievement.description}
                  </div>

                  {/* View hint */}
                  <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to view →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="space-y-6">
          <h2 className="inline-block text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Certifications and Badges
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {certificationBadges.map((cert, index) => (
              <a
                key={index}
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col items-center justify-center p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105 hover:border-cyan-400/50 overflow-hidden cursor-pointer"
              >
                {/* Liquid glass shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Animated glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <div className="relative z-10">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-auto object-contain drop-shadow-lg"
                  />
                  <p className="text-sm text-gray-300 text-center mt-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {cert.name}
                  </p>
                  <p className="text-xs text-cyan-400/60 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to verify →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <div className="flex justify-center">
          <button
            onClick={() => router.push("/")}
            className="group px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-semibold border border-white/20 hover:border-white/40 shadow-lg hover:shadow-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-xl"
          >
            <span className="flex items-center gap-2">
              <span className="group-hover:-translate-x-1 transition-transform duration-300">
                ←
              </span>
              Back to Home
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
