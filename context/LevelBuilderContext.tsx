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
import { Level, Level_with_steps } from "@/supabase/types";
import { createLevelWithSteps } from "@/supabase/actions";
import { useSession } from "./SessionContext";
import { useRouter } from "next/navigation";

const LevelBuilderContext = createContext<any>(null);

const LevelBuilderProvider = ({ children }: { children: ReactNode }) => {
  const [stepsCompleted, setStepsCompleted] = useState<number>(0);
  const [steps, setSteps] = useState<Step[]>([]);
  const [stepTemplates, setStepTemplates] = useState<string[]>([]);
  const [language, setLanguage] = useState<string>("");
  const [levelGroup, setLevelGroup] = useState<string>("");
  const [title, setTitle] = useState<string>("My title");
  const [description, setDescription] = useState<string>("");
  const [order, setOrder] = useState<number>(0);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isFailure, setIsFailure] = useState<boolean>(false);
  const { session } = useSession();

  const router = useRouter();
  const [progressFormula, setProgressFormula] = useState<number>(0);

  const createLevel = async () => {
    const level: Level_with_steps = {
      user_id: session?.user.id,
      level_group_name: levelGroup,
      description,
      language,
      steps,
      order,
    };

    const response = await createLevelWithSteps(level);
    if (process.env.NEXT_PUBLIC_DEV) console.log(response, level);

    if (response?.success) {
      router.push("/level-builder/builder/success");
    } else {
      router.push("/level-builder/builder/failure");
    }
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
    progressFormula,
    setProgressFormula,
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
  progressFormula: number;
  setProgressFormula: (value: SetStateAction<number>) => void;
}

export const useLevelBuilder = (): LevelBuilderInterface =>
  useContext(LevelBuilderContext);

export default LevelBuilderProvider;
