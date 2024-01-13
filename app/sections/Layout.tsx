"use client";
import { FaHome, FaBook, FaUserCircle, FaRocket } from "react-icons/fa";
import Logo from "@/public/logo-variants/transparent-coloured.svg";

import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
const josefinSans = Josefin_Sans({ subsets: ["latin"] });

import Cyrillic from "@/public/svg/cyrillic.svg";
import Link from "next/link";
import { BsFire } from "react-icons/bs";
import { useSession } from "@/context/SessionContext";
import supabase from "@/supabase/supabase-client";
import { ReactNode } from "react";

export default function Sidebar({ children }: { children: ReactNode }) {
  // navItems?: { label: string; path: string }[];

  const router = useRouter();

  const pathName = usePathname();

  const items: {
    icon: any;
    label: string;
    path: string;
  }[] = [
    {
      icon: <FaHome className="w-full h-full" />,
      label: "Početkova",
      path: "/dashboard",
    },
    {
      icon: <FaBook className="w-full h-full" />,
      label: "Povědky",
      path: "/dashboard/learn/stories",
    },
    {
      icon: <FaRocket className="w-full h-full" />,
      label: "T. s izslědkami",
      path: "/dashboard/leaderboard",
    },
    {
      icon: <Image src={Cyrillic} className="w-full h-full" alt="cyrillic" />,
      label: "Kirilica",
      path: "/dashboard/learn/cyrillic",
    },
    {
      icon: <FaUserCircle className="w-full h-full" />,
      label: "Profil",
      path: "/dashboard/profile",
    },
  ];
  return (
    <div className="flex">
      {/* LEFT SIDEBAR */}
      <div className="lg:w-[30vw] xl:w-[15vw] h-screen hidden md:flex flex-col items-center pt-8 gap-16 border-r bg-white sticky top-0">
        <div>
          <Image src={Logo} className="w-32" alt="Logo" />
        </div>
        <div>
          <ul className="grid grid-rows-1 gap-4">
            {items.map((item, index) => {
              return (
                <Link
                  href={item.path}
                  key={index}
                  className={`${
                    josefinSans.className
                  } flex items-center gap-8 px-6 py-4 text-lg ${
                    item.path == pathName
                      ? " bg-base-200 text-primary transition-all duration-500 ease-in-out"
                      : "text-primary hover:bg-base-200"
                  }`}
                >
                  <div className="w-6 aspect-square">{item.icon}</div>
                  <h5>{item.label}</h5>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      {/* RIGHT CONTENT SECTION */}
      <div className="w-full pt-12 sm:p-0">
        {/* STREAK AND XP TOP APPBAR */}
        <div className="hidden shadow  sm:flex justify-between items-center padding-large-x h-[15vh] w-full bg-white">
          <div className="flex items-center cursor-pointer gap-2">
            <div className="w-8 aspect-square">
              <BsFire className="w-full fill-primary h-full" />
            </div>
            <p className="text-2xl font-bold">2</p>
          </div>
          <p className="opacity-50 text-xl">Total XP: 10000</p>
        </div>

        <div className="h-[85vh] md:py-12">{children}</div>

        {/* MOBILE NAVBAR */}
        <ul className="fixed left-0 bottom-0 w-screen md:hidden flex justify-between flex-nowrap bg-base-100">
          {items.map((item, index) => {
            return (
              <Link
                href={item.path}
                key={index}
                className={`${
                  josefinSans.className
                } border-r border-t border-gray-300 w-full justify-center flex items-center p-5 ${
                  item.path == pathName
                    ? " bg-base-200 text-primary transition-all duration-500 ease-in-out"
                    : "text-primary"
                }`}
              >
                <div className="w-6 aspect-square">{item.icon}</div>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
