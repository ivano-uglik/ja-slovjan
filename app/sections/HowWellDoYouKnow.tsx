"use client";
import { dela } from "../@lib/Fonts";
import { useAccountSetup } from "@/context/AccountSetupContext";

export default function HowWellDoYouKnow() {
  const howWell = [
    { name: "Ništa" },
    { name: "Malo" },
    { name: "Dobro" },
    { name: "Odlično" },
  ];
  const context = useAccountSetup();
  return (
    <div className="content-wrap mx-auto">
      <h1 className="text-center py-8 text-3xl font-bold">
        Koliko dobro znaš komunicirati u (jezik)?
      </h1>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-4 justify-center flex-wrap px-4 lg:px-0">
        {howWell.map((text, index) => {
          return (
            <button
              key={index}
              className={`${
                dela.className
              } btn btn-lg btn-secondary rounded-full transition-all ${
                context.howWellDoYouKnow === text.name && "btn-active"
              }`}
              onClick={() => {
                context.setHowWellDoYouKnow(text.name);
              }}
            >
              {text.name}
            </button>
          );
        })}
      </div>
      <div className="flex justify-center py-16">
        <button
          className={`${dela.className} btn btn-secondary btn-lg btn-wide text-center`}
        >
          Nastavi
        </button>
      </div>
    </div>
  );
}
