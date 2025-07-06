"use client";
import { motion } from "framer-motion";
import { Code } from "lucide-react";

import { EXPERIENCES } from "@/constants";

const Experiences = () => {
  return (
    <div className="container pb-10">
      <div
        className={`
          separator mx-auto my-6 border-t border-solid border-[#424242]
          lg:my-14
          xl:my-20
        `}
      />

      <div>
        <motion.h3
          animate={{
            y: [50, -10, 0],
            opacity: [0, 0.8, 1],
          }}
          whileInView={{
            y: [50, -10, 0],
            opacity: [0, 0.8, 1],
          }}
          className={`text-center text-3xl font-bold uppercase`}
        >
          EDUCATION & EXPERIENCE
        </motion.h3>

        <div
          className={`
            mt-10 grid grid-cols-1 gap-x-10 gap-y-6 pb-16
            md:mt-20
            lg:grid-cols-2 lg:gap-10
          `}
        >
          {EXPERIENCES.map((exp, i) => (
            <div className="relative flex gap-4" key={i}>
              <div className="bg-gray absolute top-0 left-5.5 h-full w-0.5" />
              <div className="bg-primary relative z-50 flex size-10 min-h-10 min-w-10 items-center justify-center rounded-full text-white">
                <Code size={20} />
              </div>

              <div>
                <p className="text-muted-foreground font-semibold">
                  {exp.time}
                </p>
                <div className="text-lg uppercase">
                  <p className="font-bold">{exp.title}</p>
                  <p className="font-semibold">{exp.subTitle}</p>
                </div>
                <p className="text-muted-foreground mt-2 text-sm">
                  {exp.description || "No description available."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
