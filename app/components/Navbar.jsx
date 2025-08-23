import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { handleScroll } from "@/utils/scrollUtils";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, satIsScroll] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closemenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      // Check if scrolled past 50px
      if (scrollY > 50) {
        satIsScroll(true);
      } else {
        satIsScroll(false);
      }

      // Check if at bottom of page
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Consider "bottom" as within 100px of the actual bottom
      if (scrollTop + windowHeight >= documentHeight - 100) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScrollEvent);

    // Call once on mount to set initial state
    handleScrollEvent();

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* Left Sidebar - Email */}
      <div
        className={`fixed left-8 z-40 hidden lg:block transition-all duration-700 ease-in-out ${
          isAtBottom ? "top-1/2 -translate-y-1/2" : "bottom-8 translate-y-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <a
            href="mailto:jaynico.olano@gmail.com"
            className="writing-mode-vertical text-base font-Ovo text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors duration-300 hover:-translate-y-1 transform"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            jaynico.olano@gmail.com
          </a>
          <div className="w-px h-20 bg-gray-400 dark:bg-gray-600"></div>
        </div>
      </div>

      {/* Right Sidebar - Social Icons */}
      <div
        className={`fixed right-8 z-40 hidden lg:block transition-all duration-700 ease-in-out ${
          isAtBottom ? "top-1/2 -translate-y-1/2" : "bottom-8 translate-y-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          <a
            href="https://github.com/jaynico-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 opacity-70 hover:opacity-100 transition-all duration-300 hover:-translate-y-1 transform"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          <a
            href="https://linkedin.com/in/jaynicoolano"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 opacity-70 hover:opacity-100 transition-all duration-300 hover:-translate-y-1 transform"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          <div className="w-px h-20 bg-gray-400 dark:bg-gray-600"></div>
        </div>
      </div>

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white/50 bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a
          onClick={() => handleScroll("top")}
          className="text-neutral-800 hover:text-black dark:text-neutral-400 dark:hover:text-white font-bold text-2xl transition-colors cursor-pointer"
        >
          Jay Nico
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white/50 bg-opacity-50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          <li>
            <button onClick={() => handleScroll("top")} className="font-Ovo">
              Home
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll("about")} className="font-Ovo">
              About me
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("experience")}
              className="font-Ovo"
            >
              Experience
            </button>
          </li>
          <li>
            <button onClick={() => handleScroll("work")} className="font-Ovo">
              My Work
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("contact")}
              className="font-Ovo"
            >
              Contact me
            </button>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>

          {/* Show Contact button when not scrolled, Resume button when scrolled */}
          {!isScroll ? (
            <a
              onClick={() => handleScroll("contact")}
              className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
            >
              Contact
              <Image
                src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
                className="w-3"
                alt="arrow icon"
              />
            </a>
          ) : (
            <a
              href="https://drive.google.com/file/d/1XKT3bUAW_NUQFOCACbQNyghblKrxHpVe/view?usp=sharing"
              target="_blank"
              className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
            >
              Resume
              <Image
                src={assets.download_icon}
                className="w-3"
                alt="download icon"
              />
            </a>
          )}

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>

        {/* --------- mobile menu --------- */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closemenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a
              className="font-Ovo"
              onClick={() => {
                closemenu();
                handleScroll("top");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="font-Ovo"
              onClick={() => {
                closemenu();
                handleScroll("about");
              }}
            >
              About me
            </a>
          </li>
          <li>
            <a
              className="font-Ovo"
              onClick={() => {
                closemenu();
                handleScroll("experience");
              }}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className="font-Ovo"
              onClick={() => {
                closemenu();
                handleScroll("work");
              }}
            >
              My Work
            </a>
          </li>
          <li>
            <a
              className="font-Ovo"
              onClick={() => {
                closemenu();
                handleScroll("contact");
              }}
            >
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
