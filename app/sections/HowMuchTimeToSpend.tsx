"use client";
import { useAccountSetup } from "@/context/AccountSetupContext";
import { dela } from "../@lib/Fonts";
import ContinueAccountSetupButton from "./ContinueAccountSetupButton";

export default function HowMuchTimeToSpend() {
  const time = [
    { name: "5 min" },
    { name: "10 min" },
    { name: "15 min" },
    { name: "30+ min" },
  ];
  const context = useAccountSetup();
  return (
    <div className="content-wrap mx-auto">
      <h1 className="text-center py-8 text-3xl font-bold">
        Koliko vremena želiš provesti na Ja, Slovjan na dan?
      </h1>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-4 justify-center flex-wrap px-4 lg:px-0">
        {time.map((text, index) => {
          return (
            <button
              key={index}
              className={`${
                dela.className
              } btn btn-lg btn-primary rounded-full transition-all ${
                context.timeLength === text.name && "btn-active"
              }`}
              onClick={() => {
                context.setTimeLength(text.name);
              }}
            >
              {text.name}
            </button>
          );
        })}
      </div>
      <div className="flex justify-center py-16">
        <ContinueAccountSetupButton link="/account-setup/streak" />
      </div>
    </div>
  );
}
