"use client";
import {
  ReactNode,
  useState,
  useEffect,
  createContext,
  useContext,
  SetStateAction,
} from "react";
import supabase from "@/supabase/supabase-client";

const LevelBuilderContext = createContext<any>(null);

const LevelBuilderProvider = ({ children }: { children: ReactNode }) => {
  const [stepsCompleted, setStepsCompleted] = useState<number>(0);
  const [steps, setSteps] = useState<Object[]>([]);
  const [stepTemplates, setStepTemplates] = useState<string[]>([]);
  const [language, setLanguage] = useState<string>("");
  const [levelGroup, setLevelGroup] = useState<string>("");
  const [title, setTitle] = useState<string>("My title");
  const [description, setDescription] = useState<string>("");

  const createLevel = async () => {};

  const value = {
    stepsCompleted,
    setStepsCompleted,
    steps,
    setSteps,
    language,
    setLanguage,
    levelGroup,
    setLevelGroup,
    title,
    setTitle,
    description,
    setDescription,
    stepTemplates,
    setStepTemplates,
    createLevel,
  };

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <LevelBuilderContext.Provider value={value}>
      {children}
    </LevelBuilderContext.Provider>
  );
};

interface Step {
  component: string;
  order: number;
  params: Object;
}

interface LevelBuilderInterface {
  stepsCompleted: number;
  setStepsCompleted: (value: SetStateAction<number>) => void;
  steps: Step[];
  setSteps: (value: SetStateAction<Object[]>) => void;
  language: string;
  setLanguage: (value: SetStateAction<string>) => void;
  levelGroup: string;
  setLevelGroup: (value: SetStateAction<string>) => void;
  title: string;
  setTitle: (value: SetStateAction<string>) => void;
  description: string;
  setDescription: (value: SetStateAction<string>) => void;
  stepTemplates: string[];
  setStepTemplates: (value: SetStateAction<string[]>) => void;
  createLevel: () => void;
}

export const useLevelBuilder = (): LevelBuilderInterface =>
  useContext(LevelBuilderContext);

export default LevelBuilderProvider;
