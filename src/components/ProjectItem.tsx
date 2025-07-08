"use client";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/effect-creative";

import clsx from "clsx";
import Image from "next/image";
import type React from "react";
import { useState } from "react";
import { EffectCreative, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperType, type SwiperOptions } from "swiper/types";

import { type Project } from "@/components/Projects";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectItemProps {
  project: Project;
}

const mainSwiperConfig: SwiperOptions = {
  autoplay: true,
  loop: true,
  spaceBetween: 10,
  modules: [Navigation, Thumbs, EffectCreative],
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
};

const subSwiperConfig: SwiperOptions = {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 2,
  breakpoints: {
    767: {
      slidesPerView: 3,
    },
  },
  watchSlidesProgress: true,
  modules: [Navigation, Thumbs],
};

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Dialog
      open={showDialog}
      onOpenChange={(open) => {
        setShowDialog(open);

        if (showDialog === true) {
          setActiveIndex(0);
          setThumbsSwiper(null);
        }
      }}
    >
      <DialogTrigger>
        <div
          className={`
            relative h-48 cursor-pointer overflow-hidden rounded-lg border bg-black/70 select-none
            md:h-54
            xl:h-54
          `}
        >
          <Image
            src={project.thumbnail}
            alt=""
            sizes="auto"
            fill
            className="object-cover"
          />

          <div
            className={`
              bg-background/60 absolute top-0 left-0 z-10 flex size-full items-center justify-center opacity-0 transition-all
              hover:opacity-100
            `}
          >
            <p className="text-3xl font-bold uppercase">{project.name}</p>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className={`
          bg-gray max-h-[80%] overflow-y-auto
          lg:min-w-6xl
        `}
      >
        <DialogHeader hidden>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <div
          className={`
            grid grid-cols-1 gap-6
            lg:grid-cols-2
          `}
        >
          {/* Information */}
          <div>
            <p
              className={`
                text-primary mb-2 border-b pb-2 text-2xl font-bold uppercase
                md:text-3xl
                lg:text-4xl
              `}
            >
              {project.name}
            </p>

            <div className="space-y-2">
              <Swiper
                {...mainSwiperConfig}
                thumbs={{ swiper: thumbsSwiper }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              >
                {project.images.map((image, index) => (
                  <SwiperSlide
                    key={index}
                    className="overflow-hidden rounded-lg"
                  >
                    <div
                      className={`
                        relative h-48 w-full cursor-pointer overflow-hidden rounded-lg
                        xl:h-72
                      `}
                    >
                      <Image
                        src={image}
                        alt="alt"
                        sizes="auto"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <Swiper {...subSwiperConfig} onSwiper={setThumbsSwiper}>
                {project.images.map((image, index) => (
                  <SwiperSlide
                    key={index}
                    className="overflow-hidden rounded-lg"
                  >
                    <div className="relative h-28 w-full cursor-pointer overflow-hidden rounded-lg select-none">
                      <div
                        className={clsx(
                          "absolute top-0 left-0 z-20 size-full",
                          activeIndex === index
                            ? "bg-transparent"
                            : "bg-black/70",
                        )}
                      />
                      <Image
                        src={image}
                        alt="alt"
                        sizes="auto"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          <div>
            <p
              className={`
                text-primary mb-2 border-b pb-2 text-2xl font-bold uppercase
                md:text-3xl
                lg:text-4xl
              `}
            >
              details
            </p>

            <div className="space-y-4">
              <p
                className={`
                  text-sm leading-[1.8]
                  md:text-base
                `}
              >
                {project.description}
              </p>
              <div
                className={`
                  space-y-2 text-sm
                  md:text-base
                `}
              >
                <p>
                  <span className="text-muted-foreground">Created</span>
                  {` - `}
                  <span>{project.createdAt}</span>
                </p>
                <p>
                  <span className="text-muted-foreground">Role</span>
                  {` - `}
                  <span>{project.role}</span>
                </p>
                <p>
                  <span className="text-muted-foreground">Frontend</span>
                  {` - `}
                  <span>{project.frontend.join(", ")}</span>
                </p>
                <p>
                  <span className="text-muted-foreground">Backend</span>
                  {` - `}
                  <span>{project.backend.join(", ")}</span>
                </p>
                {project.demo && (
                  <p>
                    <span className="text-muted-foreground">Demo</span>
                    {` - `}
                    <a
                      href={project.demo}
                      target="_blank"
                      className="text-primary underline"
                    >
                      Click here
                    </a>
                  </p>
                )}
                {project.source && (
                  <p>
                    <span className="text-muted-foreground">Source</span>
                    {` - `}
                    <a
                      href={project.source}
                      target="_blank"
                      className="text-primary underline"
                    >
                      Click here
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectItem;
