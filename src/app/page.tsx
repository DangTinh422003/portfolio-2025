"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

import LinkButton from "@/components/LinkButton";

const Homepage = () => {
  return (
    <div
      className={`
        relative flex items-center justify-center overflow-hidden
        lg:h-screen lg:w-screen
      `}
    >
      <div
        className={`
          bg-primary absolute top-0 left-0 z-0 hidden h-[200vh] w-screen translate-x-[-78%] rotate-[-16deg]
          xl:block
        `}
      />
      <div
        className={`
          relative z-50 container grid grid-cols-1
          lg:grid-cols-3
          xl:gap-16
          2xl:gap-20
        `}
      >
        <div
          className={`
            mt-10 flex items-center justify-center
            lg:col-span-1 lg:mt-0
          `}
        >
          <div
            className={`
              relative size-[14rem] overflow-hidden rounded-full shadow-lg
              lg:rounded-2xl
              xl:h-[32rem] xl:w-full
            `}
          >
            <Image
              src={"/portfolio_img.png"}
              className="object-cover"
              quality={100}
              sizes="auto"
              priority
              alt="Cao Dang Tinh Portfolio"
              fill
            />
          </div>
        </div>

        <div className="lg:col-span-2">
          <motion.h1
            whileInView={{
              y: [50, -10, 0],
              opacity: [0, 1],
              transition: {
                delay: 0.3,
                duration: 0.5,
              },
            }}
            animate={{
              y: [50, -10, 0],
              opacity: [0, 1],
              transition: {
                delay: 0.3,
                duration: 0.5,
              },
            }}
            className={`
              relative mt-8 text-center text-4xl leading-[1.05] font-bold
              md:mt-10 md:text-5xl
              xl:mt-0 xl:ml-10 xl:text-left xl:text-5xl
              2xl:text-6xl 2xl:leading-[1.2]
            `}
          >
            <TypeAnimation
              sequence={["I'm Dustin", 1000, "Fullstack", 1000]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              className={`
                text-primary
                before:bg-primary before:absolute before:top-7 before:-left-16 before:hidden before:h-2 before:w-11 before:rounded-lg
                before:content-[''] before:xl:block
              `}
            />
            <br />
            <span>Web Developer !</span>
          </motion.h1>

          <motion.p
            whileInView={{
              y: [50, -10, 0],
              opacity: [0, 1],
              transition: {
                delay: 0.35,
                duration: 0.5,
              },
            }}
            animate={{
              y: [50, -10, 0],
              opacity: [0, 1],
              transition: {
                delay: 0.35,
                duration: 0.5,
              },
            }}
            className={`
              mt-4 text-center text-sm leading-[1.8] font-normal
              lg:mt-8 lg:px-10
              xl:pr-20 xl:pl-0 xl:text-justify xl:text-base xl:leading-loose
              2xl:px-0 2xl:text-lg 2xl:leading-loose
            `}
          >
            Hi, my name is Dang Tinh, but you can call me Dustin. I am a
            full-stack web developer with over 3 years of experience,
            specializing in backend development with NestJS and frontend
            development with Next.js. I have worked on various projects, from
            small startups to enterprise applications, and always aim for
            high-quality, maintainable code. I am passionate about exploring new
            technologies, improving my skills, and solving real-world problems
            through software. I am always open to connecting with like-minded
            professionals and collaborating on exciting and innovative projects.
          </motion.p>

          <div
            className={`
              mt-4 flex flex-col items-center justify-center gap-4 pb-24
              md:mt-8 md:flex-row md:gap-7
              lg:pb-0
              xl:justify-start
            `}
          >
            <motion.div
              whileInView={{
                opacity: [0, 1],
                x: [-20, 0],
                transition: {
                  delay: 0.5,
                  duration: 0.5,
                },
              }}
              animate={{
                opacity: [0, 1],
                x: [-20, 0],
                transition: {
                  delay: 0.5,
                  duration: 0.5,
                },
              }}
              className={`
                hidden
                md:block
              `}
            >
              <LinkButton
                icon={<ArrowRight className="text-white" />}
                title="portfolio"
                href="/portfolio"
              />
            </motion.div>
            <motion.div
              whileInView={{
                opacity: [0, 1],
                x: [-20, 0],
                transition: {
                  delay: 0.7,
                  duration: 0.5,
                },
              }}
              animate={{
                opacity: [0, 1],
                x: [-20, 0],
                transition: {
                  delay: 0.7,
                  duration: 0.5,
                },
              }}
            >
              <LinkButton
                icon={<ArrowRight className="text-white" />}
                title="about"
                href="/about"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
