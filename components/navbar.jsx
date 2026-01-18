"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed w-full z-50 bg-gradient-to-b from-black/30 to-transparent backdrop-blur-md text-white transition-all duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="px-8 py-6 max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center hover:scale-105 transition-transform duration-300"
        >
          <div className="text-3xl font-mono font-bold flex items-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              &lt;
            </span>
            <span className="text-white mx-1">HP</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              /&gt;
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group px-4 py-2 rounded-lg font-medium hover:bg-white/10 hover:backdrop-blur-sm transition-all duration-200"
            >
              <span className="group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:text-transparent">
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        {/* Hamburger Icon for md and below */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/80 backdrop-blur-sm px-6 md:px-16 pt-4 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-white font-medium hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
