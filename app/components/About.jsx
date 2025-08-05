import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none group"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className={`w-full rounded-3xl transition duration-500 
              ${isDarkMode ? "grayscale group-hover:grayscale-0" : ""}`}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-Ovo">
            Passionate and results-driven Software Developer with a background
            in Computer Science and real-world internship experience in
            full-stack web development using PHP, CodeIgniter, JavaScript, and
            SQL. Strong foundation in Java and Python, solid exposure to React,
            Firebase, and API development, with a commitment to clean,
            maintainable code. Skilled in agile collaboration, problem-solving,
            and eager to contribute to impactful tech projects while
            continuously growing in the software engineering field.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.03 }}
                className="flex items-start gap-4 border-[0.5px] border-gray-300 dark:border-white rounded-xl p-6 bg-white dark:bg-transparent hover:bg-lightHover dark:hover:bg-darkHover/50 transition duration-300 hover:shadow"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-7 mt-1 shrink-0"
                />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white text-base mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-white/80 leading-relaxed">
                    {description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="my-6 text-gray-700 font-Ovo dark:text-white/80"
          >
            Tools I use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="flex flex-wrap gap-4 sm:gap-6"
          >
            {toolsData.map(({ icon, name }, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center justify-center w-16 sm:w-20 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 p-2 bg-white dark:bg-transparent dark:hover:bg-darkHover/40 hover:bg-lightHover"
              >
                <Image src={icon} alt={name} className="w-6 sm:w-8 mb-1" />
                <span className="text-xs sm:text-sm text-center text-gray-700 dark:text-white/80">
                  {name}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
