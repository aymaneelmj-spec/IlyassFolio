"use client";

import { createContext, type Dispatch, type SetStateAction } from "react";

type Language = "en" | "fr" | "es";

type LanguageContextType = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
};

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});
