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
import { Level } from "@/supabase/types";

const LevelBuilderContext = createContext<any>(null);

const LevelBuilderProvider = ({ children }: { children: ReactNode }) => {
  const [stepsCompleted, setStepsCompleted] = useState<number>(0);
  const [steps, setSteps] = useState<Object[]>([]);
  const [stepTemplates, setStepTemplates] = useState<string[]>([]);
  const [language, setLanguage] = useState<string>("");
  const [levelGroup, setLevelGroup] = useState<string>("");
  const [title, setTitle] = useState<string>("My title");
  const [description, setDescription] = useState<string>("");
  const [order, setOrder] = useState<number>(0);

  const createLevel = async () => {
    // check if level group exists if not create it

    let level_group_id = 1;

    // figure all of this shit out, aaaaaaaaaaaaaa

    const level: Level = {
      order,
      level_group_id,
    };

    console.log({
      level,
      steps,
      language,
      levelGroup,
      title,
      description,
    });

    // TO-DO: save to supabase
  };

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
    order,
    setOrder,
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
  order: number;
  setOrder: (value: SetStateAction<number>) => void;
}

export const useLevelBuilder = (): LevelBuilderInterface =>
  useContext(LevelBuilderContext);

export default LevelBuilderProvider;


