"use client";

import { useContext } from "react";
import { Briefcase } from "lucide-react";
import { Section, AnimatedSectionTitle } from "@/components/shared/section";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { LanguageContext } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { experiences } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].experience;
  const experienceData = experiences(t.content);

  return (
    <Section id="experience" className="bg-card">
      <div className="container px-4 md:px-6">
        <AnimatedSectionTitle className="text-center">{t.title}</AnimatedSectionTitle>
        <div className="relative mt-12">
          <div
            className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-border md:block"
            aria-hidden="true"
          />
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div
                className={cn(
                  "relative flex w-full items-center",
                  "md:justify-start",
                  index % 2 !== 0 && "md:justify-end"
                )}
              >
                <div
                  className={cn(
                    "w-full",
                    "md:w-1/2",
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  )}
                >
                  <div className="rounded-lg border bg-background p-6 shadow-lg transition-all hover:shadow-primary/20 hover:shadow-2xl">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="font-headline text-xl font-bold text-primary">
                        {exp.title}
                      </h3>
                      <span className="text-sm font-medium text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mb-4 text-muted-foreground">{exp.company}</p>
                    <p className="text-sm">{exp.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
