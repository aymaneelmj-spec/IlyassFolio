"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Section, AnimatedSectionTitle } from "@/components/shared/section";
import { Progress } from "@/components/ui/progress";
import { LanguageContext } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { languages as languagesData } from "@/lib/data";
import { FlagEN, FlagFR, FlagES } from "@/components/icons";

const flagComponents: { [key: string]: React.ComponentType<any> } = {
  fr: FlagFR,
  en: FlagEN,
  es: FlagES,
};

export function LanguagesSection() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].languages;
  const langData = languagesData(t.content);

  return (
    <Section id="languages" className="bg-card">
      <div className="container px-4 md:px-6">
        <AnimatedSectionTitle className="text-center">{t.title}</AnimatedSectionTitle>
        <div className="mx-auto mt-12 grid max-w-4xl gap-8">
          {langData.map((lang, index) => {
            const FlagIcon = flagComponents[lang.code];
            return (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="grid grid-cols-[auto,1fr,auto] items-center gap-4">
                  <div className="flex items-center gap-4">
                    <FlagIcon className="h-8 w-12 rounded-md border" />
                    <h3 className="font-medium">{lang.name}</h3>
                  </div>
                  <LanguageBar value={lang.level} />
                  <span className="text-sm font-medium text-muted-foreground">{lang.proficiency}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

const LanguageBar = ({ value }: { value: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const [progress, setProgress] = useState(0);
  
    useEffect(() => {
      if (isInView) {
        setProgress(value);
      }
    }, [isInView, value]);
  
    return (
      <div ref={ref}>
        <Progress value={progress} className="h-3 transition-all duration-1000 ease-out" />
      </div>
    );
  };
