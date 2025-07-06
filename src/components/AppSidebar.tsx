"use client";
import { usePathname, useRouter } from "next/navigation";
import type React from "react";
import { type FC } from "react";
import { FaHouse, FaUser } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { MdBackpack } from "react-icons/md";
import { v4 as uuid } from "uuid";

const SIDEBARS: {
  icon: React.FC;
  title: string;
  href: string;
}[] = [
  {
    icon: FaHouse,
    title: "home",
    href: "/",
  },
  {
    icon: MdBackpack,
    title: "portfolio",
    href: "/portfolio",
  },
  {
    icon: FaUser,
    title: "about",
    href: "/about",
  },
  {
    icon: IoMailSharp,
    title: "contact",
    href: "/contact",
  },
];

const AppSidebar = () => {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <ul
      className={`
        bg-gray/40 fixed bottom-0 left-0 z-[100] flex w-full justify-center gap-10 px-4 py-3 backdrop-blur-sm
        lg:py-auto lg:px-auto lg:top-1/2 lg:right-[30px] lg:bottom-auto lg:left-auto lg:w-auto lg:-translate-y-1/2 lg:flex-col
        lg:justify-start lg:gap-5 lg:bg-transparent lg:p-0
      `}
    >
      {SIDEBARS.map((sidebar) => {
        const id = uuid();
        return (
          <li className="group relative z-10 cursor-pointer" key={id}>
            <div onClick={() => router.push(sidebar.href)}>
              <div
                className={`
                  size-[50px]
                  ${pathName === sidebar.href ? "bg-primary" : "bg-gray/80"}
                  transition-fade relative z-10 flex items-center justify-center rounded-full text-xl text-white shadow-xl
                  group-hover:bg-primary
                `}
              >
                <sidebar.icon />
              </div>
              <p
                className={`
                  transition-fade bg-primary invisible absolute top-0 right-0 z-0 hidden h-full items-center justify-center rounded-full
                  pr-8 pl-4 font-semibold text-white uppercase opacity-0 duration-[400ms]
                  group-hover:visible group-hover:pr-16 group-hover:pl-6 group-hover:opacity-100
                  lg:flex
                `}
              >
                {sidebar.title}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default AppSidebar;
