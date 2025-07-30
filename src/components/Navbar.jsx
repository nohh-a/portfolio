/**
 * Navbar Component
 * Fixed navbar, animates appearance on scroll, mobile menu
 */

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";

const navitems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    // "scroll" is the name of the event, handleScrolls is the callback func to run whenever event occurs
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        /**
         * fixed - sticks to top of view
         * z-40 - appears on top of most elements
         * transtition-all - smooth transtition for animations
         * duration-300 - transition lasts 300ms
         *
         * py-3 - smaller padding when scrolled
         * bg-background/80 - translucent background
         * backdrop-blur-md - applies blur to elemends behind bar
         * shdaow-xs - subtle shadow
         */
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      {/**
       * container - max-width and hori padding based on screen size
       * flex - horizontal layout
       * items-center vertically center contents
       * justify-between - space between logo and nav items
       *
       * relative z-10 - Position relative to the parent container.
       *                 relative used in conjunction wiht z-10 because z-10
       *                 only works in conjuction with non-static positions.
       *                 By default elements are static position so using relative/absolute/fixed makes em non-static
       *
       */}
      <div className="container flex items-center justify-between">
        <a className="text-xl font-bold text-primary flex items-center">
          <span className="relative z-10">
            <span className="text-glow text-foreground" href="#hero">
              Noah Rodriguez
            </span>{" "}
            Portfolio
          </span>
        </a>

        {/* desktop nav  */}
        {/**
         * hidden: not shown on small screens
         * md:flex flex layout at medium screem size
         * space-x-8: horizontal gap between nav links
         */}
        <div className="hidden md:flex space-x-8">
          {navitems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile nav  */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div
          /**
           * Fixed inset-0: fills entire screen
           * backdrop-blur-md: blurs behind the menu
           * flex: align elements in row or column layout
           * items-center: center horizontally
           * justify-center: center vertically
           */
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navitems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
