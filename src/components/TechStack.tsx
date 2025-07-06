"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { v4 as uuid } from "uuid";

import { SKILLS } from "@/constants";

const TechStack = () => {
  return (
    <div
      className={`
        mt-10
        lg:mt-28
      `}
    >
      <div
        className={`separator mx-auto w-1/3 border-t border-solid border-[#424242]`}
      ></div>
      <motion.h3
        animate={{
          y: [50, -10, 0],
          opacity: [0, 0.8, 1],
        }}
        whileInView={{
          y: [50, -10, 0],
          opacity: [0, 0.8, 1],
        }}
        className={`
          light:text-gray
          mt-8 text-center text-3xl font-bold uppercase
          md:mt-14
        `}
      >
        MY TECH STACKS
      </motion.h3>
      <div
        className={`
          mt-12 grid grid-cols-2 justify-center gap-y-11
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
        `}
      >
        {SKILLS.map((skill, i) => {
          const id = uuid();
          return (
            <motion.div
              animate={{
                opacity: [0, 1],
                transition: {
                  delay: 0.2 + i * 0.1,
                },
              }}
              whileInView={{
                opacity: [0, 1],
                transition: {
                  delay: 0.2 + i * 0.05,
                },
              }}
              key={id}
              className={`
                flex cursor-pointer flex-col items-center justify-center transition-all duration-300
                hover:scale-110
              `}
            >
              <div
                className={`bg bg-gray mx-auto flex size-24 items-center justify-center rounded-full shadow-lg`}
              >
                <div className="relative flex size-[60%] items-center justify-center">
                  <Image
                    src={skill.url}
                    alt={skill.title}
                    sizes="auto"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="mt-3 w-full text-center text-lg">{skill.title}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;
