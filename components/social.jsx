// components/Social.jsx
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Vortex } from "@/components/ui/vortex";
import { SiHackerrank, SiLeetcode, SiGooglecloud } from "react-icons/si";

const socialLinks = [
  {
    icon: <MdEmail className="w-12 h-12" />,
    url: "mailto:hemax.work@gmail.com",
    label: "Email",
    hoverColor: "hover:text-red-500",
  },
  {
    icon: <FaGithub className="w-12 h-12" />,
    url: "https://github.com/hemaxpatel",
    label: "GitHub",
    hoverColor: "hover:text-gray-300",
  },
  {
    icon: <FaLinkedin className="w-12 h-12" />,
    url: "https://www.linkedin.com/in/hemax-patel",
    label: "LinkedIn",
    hoverColor: "hover:text-blue-400",
  },
  {
    icon: <FaInstagram className="w-12 h-12" />,
    url: "https://www.instagram.com/hemax_patel",
    label: "Instagram",
    hoverColor: "hover:text-pink-400",
  },
  {
    icon: <SiHackerrank className="w-12 h-12" />,
    url: "https://www.hackerrank.com/hemaxpatel",
    label: "HackerRank",
    hoverColor: "hover:text-green-500",
  },
  {
    icon: <SiLeetcode className="w-12 h-12" />,
    url: "https://leetcode.com/hemaxpatel",
    label: "LeetCode",
    hoverColor: "hover:text-yellow-400",
  },
  {
    icon: <SiGooglecloud className="w-12 h-12" />,
    url: " https://www.cloudskillsboost.google/public_profiles/444b90fd-6496-431d-bf77-99290f5912ee",
    label: "Google Cloud",
    hoverColor: "hover:text-blue-400",
  },
];

export default function Social() {
  return (
    <div className="w-full h-full overflow-hidden">
      <Vortex className="flex flex-col items-center justify-center w-full h-full px-2 py-4 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
          Social Nebula
        </h2>

        <div className="flex flex-wrap justify-center gap-12 mt-12">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              aria-label={link.label}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white transition-transform transform hover:scale-110 ${link.hoverColor}`}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </Vortex>
    </div>
  );
}
