"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-md border-b border-border/50"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={scrollToTop}
            className="font-bold text-xl text-foreground hover:text-purple-600 transition-all duration-300 transform hover:scale-105 animate-slide-in-left"
          >
            Owen Siau
          </button>

          <nav className="hidden md:flex space-x-8">
            {["About", "Skills", "Projects"].map(
              (
                item,
                index, // , "Experience", "Contact"
              ) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-muted-foreground hover:text-blue-200 transition-all duration-300 font-medium relative group transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ),
            )}
          </nav>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden hover:bg-accent/10 transition-all duration-300 transform hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col space-y-2">
              {["About", "Skills", "Projects"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left py-2 text-muted-foreground hover:text-purple-600 transition-all duration-300 transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
