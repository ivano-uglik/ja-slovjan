"use client";
import { FaHome, FaBook, FaUserCircle, FaRocket } from "react-icons/fa";
import Logo from "@/public/logo-variants/transparent-coloured.svg";

import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import { usePathname } from "next/navigation";
const josefinSans = Josefin_Sans({ subsets: ["latin"] });

import Cyrillic from "@/public/svg/cyrillic.svg";
import Link from "next/link";
import { IconType } from "react-icons";
import { useSession } from "@/context/SessionContext";
import supabase from "@/supabase/supabase-client";

export default function Sidebar(element: { element: any }) {
  // navItems?: { label: string; path: string }[];

  const { session } = useSession() || {};

  const pathName = usePathname();
  const items: {
    icon: any;
    label: string;
    path: string;
  }[] = [
    {
      icon: <FaHome />,
      label: "Početkova",
      path: "/dashboard/",
    },
    {
      icon: <FaBook />,
      label: "Povědky",
      path: "/dashboard/learn/stories",
    },
    {
      icon: <FaRocket />,
      label: "T. s izslědkami",
      path: "/dashboard/leaderboard",
    },
    {
      icon: <Image src={Cyrillic} className="w-[1.5rem]" alt="" />,
      label: "Kirilica",
      path: "/dashboard/learn/cyrillic",
    },
    {
      icon: <FaUserCircle />,
      label: "Profil",
      path: "/dashboard/profile",
    },
  ];
  return (
    <div className="flex">
      <div className="w-[15vw] h-screen flex flex-col items-center pt-8 gap-16 border-r bg-white sticky top-0">
        <div>
          <Image src={Logo} className="w-32" alt="Logo" />
        </div>
        <div>
          <div className="grid grid-rows-1 gap-4">
            {items.map((item, index) => {
              return (
                <Link
                  href={item.path}
                  key={index}
                  className={`${
                    josefinSans.className
                  } flex items-center gap-8 px-6 py-4 text-lg rounded-2xl ${
                    item.path == pathName
                      ? "border border-color-active bg-[#F9F9F9] text-color-active transition-all duration-500 ease-in-out"
                      : "text-color-not-active hover:bg-[#F9F9F9]"
                  }`}
                >
                  <div>{item.icon}</div>
                  <h5>{item.label}</h5>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-end items-center h-32 w-full px-16 bg-white">
          {session?.user ? (
            <button
              onClick={() => supabase.auth.signOut()}
              className="p-4 px-8 bg-green-400 rounded-3xl text-black hover:bg-green-900 hover:text-white transition-all ease-in-out"
            >
              Logout
            </button>
          ) : (
            <a
              href="/auth/registration"
              className="p-4 px-8 bg-color-not-active rounded-3xl text-white hover:bg-black"
            >
              Login
            </a>
          )}
        </div>
        {element && element.element}
      </div>
    </div>
  );
}
