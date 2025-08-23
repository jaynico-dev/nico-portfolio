import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { handleScroll } from "@/utils/scrollUtils";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, satIsScroll] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closemenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        satIsScroll(true);
      } else {
        satIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
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
