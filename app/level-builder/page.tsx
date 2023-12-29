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
              className="text-secondary underline underline-offset-4"
            >
              our docs
            </Link>
            , or watch a short video on how to build your first template:
          </h3>
          <div className="flex justify-center py-8">
            <Image src={image} alt="" />
          </div>
          <div className="hidden">
            <h3 className="text-xl">
              {
                "Or if you've done this sort of thing before, pick a template from our marketplace:"
              }
            </h3>
            <div className="flex justify-center gap-8 py-8">
              <button
                className={`${dela.className} btn btn-lg btn-secondary`}
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Marketplace
              </button>
              <button className={`${dela.className} btn btn-lg btn-secondary`}>
                My Themes
              </button>
            </div>
          </div>
          <Link href="/level-builder/builder">
            <button
              className={`${dela.className} btn btn-lg btn-wide btn-secondary`}
            >
              Start
            </button>
          </Link>
        </div>
      </div>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box max-w-[80%] h-[75%]">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-3xl text-center">Marketplace</h3>
            <p className="py-4 text-center">
              Welcome to the Marketplace, please pick a template:{" "}
            </p>
            <div className="flex flex-wrap gap-8 justify-center">
              {Templates.map((template, index) => {
                return (
                  <div
                    key={index}
                    className="w-96 p-8 border rounded-lg relative"
                  >
                    <Image src={image} alt="" />
                    <h1 className="text-center py-2 font-bold">
                      {template.title}
                    </h1>
                    <h2 className="text-sm">{template.description}</h2>
                    <div className="h-12">
                      <div className="h-8 absolute bottom-2 right-2 btn btn-outline btn-secondary">
                        <Link href={`level-builder/${template.template}`}>
                          Choose
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button className="cursor-default">close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
}
