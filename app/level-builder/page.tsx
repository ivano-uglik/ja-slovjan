"use client";
import image from "@/public/level-builder-placeholder.svg";
import { dela } from "../@lib/Fonts";
import Image from "next/image";
import Link from "next/link";
import { Templates } from "../@lib/Templates";

export default function LevelBuilder() {
  return (
    <div>
      <div className="content-wrap mx-auto px-4 lg:px-0">
        <div className="text-center">
          <h1 className={`${dela.className} py-16 text-3xl`}>
            Welcome to the LevelBuilder!
          </h1>
          <h2 className="mx-auto lg:w-4/5">
            The level builder is a tool you can use to build your own levels for{" "}
            <i className="italic">Ja, Slovjan</i> using preconfigured templates,
            or your own React.js templates, approved by our admins.
          </h2>
          <h3>
            Please check out{" "}
            <Link
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              className="text-primary underline underline-offset-4"
            >
              our docs
            </Link>
            , or watch a short video on how to build your first template:
          </h3>
          <div className="flex justify-center py-8">
            <Image src={image} alt="" />
          </div>
          <Link href="/level-builder/builder">
            <button
              className={`${dela.className} btn btn-lg btn-wide btn-primary`}
            >
              Start
            </button>
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
}
