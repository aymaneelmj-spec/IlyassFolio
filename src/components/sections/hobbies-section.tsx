"use client";

import { useContext } from "react";
import { Section, AnimatedSectionTitle } from "@/components/shared/section";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { LanguageContext } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { hobbies } from "@/lib/data";

export function HobbiesSection() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].hobbies;
  const hobbiesData = hobbies(t.content);

  return (
    <Section id="hobbies">
      <div className="container px-4 md:px-6">
        <AnimatedSectionTitle className="text-center">{t.title}</AnimatedSectionTitle>
        <TooltipProvider>
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
            {hobbiesData.map((hobby, index) => (
              <motion.div
                key={hobby.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex justify-center"
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="group flex flex-col items-center gap-4 text-center">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-transparent bg-card transition-all group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:scale-110">
                        <hobby.icon className="h-12 w-12 text-muted-foreground transition-colors group-hover:text-primary" />
                      </div>
                      <p className="font-medium">{hobby.name}</p>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{hobby.description}</p>
                  </TooltipContent>
                </Tooltip>
              </motion.div>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </Section>
  );
}
