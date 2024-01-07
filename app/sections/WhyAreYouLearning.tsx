"use client";
import { dela } from "../@lib/Fonts";
import { useAccountSetup } from "@/context/AccountSetupContext";
import ContinueAccountSetupButton from "./ContinueAccountSetupButton";

export default function WhyAreYouLearning() {
  const reasons = [
    { name: "Komunikacija sa slavenima" },
    { name: "Putovanje" },
    { name: "Poslovne prilike" },
    { name: "Osobni razvoj" },
    { name: "Prevazilaženje jezičnih barijera" },
    { name: "Povezivanje s obitelji i/ili zajednicom" },
  ];
  const context = useAccountSetup();
  return (
    <div className="content-wrap mx-auto">
      <h1 className="text-center py-8 text-3xl font-bold">
        Zašto učiš (jezik)?
      </h1>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-4 justify-center flex-wrap px-4 lg:px-0">
        {reasons.map((reason, index) => {
          return (
            <button
              key={index}
              className={`${
                dela.className
              } btn btn-lg btn-secondary rounded-full transition-all ${
                context.learningReason === reason.name && "btn-active"
              }`}
              onClick={() => {
                context.setLearningReason(reason.name);
              }}
            >
              {reason.name}
            </button>
          );
        })}
      </div>
      <div className="flex justify-center py-16">
        <ContinueAccountSetupButton link="/account-setup/how-well-do-you-know" />
      </div>
    </div>
  );
}
