"use client";
import { dela } from "../@lib/Fonts";
import { useAccountSetup } from "@/context/AccountSetupContext";

export default function WelcomeScreen() {
  const context = useAccountSetup();
  return (
    <div className="content-wrap mx-auto">
      <div>
        <h1 className="text-xl font-semibold pt-8">
          Dobrodošao/la na <span className="font-bold">Ja, Slovjan</span>, prvu
          aplikaciju za učenje slavenskih jezika.
        </h1>
        <h2 className="py-2 text-lg">
          Prije nego što započnemo, postavit ćemo tvoj račun.
        </h2>
      </div>
      <form className="flex flex-col gap-4">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Unesi korisničko ime:</span>
          </div>
          <input
            type="text"
            placeholder="korisnik_"
            className="input input-bordered w-full max-w-xs"
            value={context.username}
            onChange={(e) => {
              context.setUsername(e.target.value);
            }}
          />
        </label>
        <select
          className="select w-full max-w-xs"
          onChange={(e) => {
            context.setGender(e.target.value);
          }}
        >
          <option disabled selected>
            Unesi rod:
          </option>
          <option>Muško</option>
          <option>Žensko</option>
          <option>Drugo</option>
        </select>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Unesi datum rođenja:</span>
          </div>
          <input
            type="text"
            placeholder="DD/MM/YYYY"
            className="input input-bordered w-full max-w-xs"
            value={context.DOB}
            onChange={(e) => {
              context.setDOB(e.target.value);
            }}
          />
        </label>
      </form>
      <button
        className={`${dela.className} btn btn-secondary btn-lg w-full max-w-xs my-4`}
      >
        Nastavi
      </button>
    </div>
  );
}
