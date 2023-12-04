"use client";

import { FaHome, FaBook, FaUserCircle, FaRocket } from "react-icons/fa";
import Logo from "@/public/logo-variants/transparent-coloured.svg";

import { Josefin_Sans } from "next/font/google";
import Image from "next/image";
import { usePathname } from "next/navigation";
const josefinSans = Josefin_Sans({ subsets: ["latin"] });

import Cyrillic from "@/public/svg/cyrillic.svg";
import Link from "next/link";
export default function Sidebar() {
  // className,
  // prev = [{ label: "Back to Homepage", path: "/" }],
  // active,
  // navItems,
  // className?: string;
  // prev?: { label: string; path: string }[] | null;
  // active?: { label: string; path: string }[];
  // navItems?: { label: string; path: string }[];

  const pathName = usePathname();
  const items = [
    {
      icon: <FaHome />,
      label: "Početkova",
      path: "/",
    },
    {
      icon: <FaBook />,
      label: "Povědky",
      path: "/learn/stories",
    },
    {
      icon: <FaRocket />,
      label: "T. s izslědkami",
      path: "/leaderboard",
    },
    {
      icon: <Image src={Cyrillic} className="w-[1.5rem]" alt="" />,
      label: "Kirilica",
      path: "/learn/cyrillic",
    },
    {
      icon: <FaUserCircle />,
      label: "Profil",
      path: "/profile",
    },
  ];
  return (
    <>
      <div className="w-96 h-[100vh] flex flex-col items-center pt-8 gap-16 border-r bg-white">
        <div>
          <Image src={Logo} className="w-48" alt="Logo" />
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
                  } flex items-center gap-8 p-6 text-lg ${
                    item.path == pathName
                      ? "border border-color-active rounded-2xl bg-[#F9F9F9] text-color-active"
                      : "text-color-not-active rounded-2xl hover:bg-[#F9F9F9]"
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
    </>
  );
}
