"use client";
import {
  ReactNode,
  useState,
  useEffect,
  createContext,
  useContext,
  SetStateAction,
} from "react";

const LevelStateContext = createContext<any>(null);

const LevelStateContextProvider = ({ children }: { children: ReactNode }) => {
  const [progressFormula, setProgressFormula] = useState<number>(0);
  const [steps, setSteps] = useState<number>();

  const value = {
    progressFormula,
    setProgressFormula,
    steps,
    setSteps,
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <LevelStateContext.Provider value={value}>
      {children}
    </LevelStateContext.Provider>
  );
};

interface LevelStateInterface {
  progressFormula: number;
  setProgressFormula: (value: SetStateAction<number>) => void;
  steps: number;
  setSteps: (value: SetStateAction<number>) => void;
}

export const useLevelState = (): LevelStateInterface =>
  useContext(LevelStateContext);

export default LevelStateContextProvider;
