"use client";

import {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

const AccountSetupContext = createContext<any>(null);

export default function AccountSetupProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [DOB, setDOB] = useState<string>("");
  const [learningReason, setLearningReason] = useState<string>("");
  const [howWellDoYouKnow, setHowWellDoYouKnow] = useState<string>("");
  const [timeLength, setTimeLength] = useState("");
  const [streak, setStreak] = useState("");

  async function createAccountInformation() {
    const information = { selectedLanguage, username, gender, DOB };
    console.log("Create Account Preferences:", information);
  }

  async function createAccountPreferences() {
    const information = {
      learningReason,
      howWellDoYouKnow,
      timeLength,
      streak,
    };
    console.log("Create Account Preferences:", information);
  }

  const value = {
    selectedLanguage,
    setSelectedLanguage,
    username,
    setUsername,
    gender,
    setGender,
    DOB,
    setDOB,
    learningReason,
    setLearningReason,
    howWellDoYouKnow,
    setHowWellDoYouKnow,
    timeLength,
    setTimeLength,
    streak,
    setStreak,
    createAccountInformation,
    createAccountPreferences,
  };
  return (
    <AccountSetupContext.Provider value={value}>
      {children}
    </AccountSetupContext.Provider>
  );
}

interface AccountSetupInterface {
  selectedLanguage: string;
  setSelectedLanguage: (value: string) => void;
  username: string;
  setUsername: (value: string) => void;
  gender: string;
  setGender: (value: string) => void;
  DOB: string;
  setDOB: (value: string) => void;
  learningReason: string;
  setLearningReason: (value: string) => void;
  howWellDoYouKnow: string;
  setHowWellDoYouKnow: (value: string) => void;
  timeLength: string;
  setTimeLength: (value: string) => void;
  streak: string;
  setStreak: (value: string) => void;
  createAccountInformation: any;
  createAccountPreferences: any;
}

export function useAccountSetup(): AccountSetupInterface {
  return useContext(AccountSetupContext);
}
