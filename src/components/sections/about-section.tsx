"use client";

import { useContext } from "react";
import { motion, useInView } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Section, AnimatedSectionTitle } from "@/components/shared/section";
import { LanguageContext } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { skills } from "@/lib/data";
import { useRef, useEffect, useState } from "react";

export function AboutSection({ profileSummary }: { profileSummary: string }) {
  const { language } = useContext(LanguageContext);
  const t = translations[language].about;

  return (
    <Section id="about" className="bg-card">
      <div className="container grid gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
        <div>
          <AnimatedSectionTitle>{t.title}</AnimatedSectionTitle>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="mt-4 space-y-4 text-muted-foreground"
          >
            {profileSummary.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>
        </div>
        <div className="space-y-8">
          <AnimatedSectionTitle>{t.skillsTitle}</AnimatedSectionTitle>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <SkillBar value={skill.level} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

const SkillBar = ({ value }: { value: number }) => {
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
      <Progress value={progress} className="h-2 transition-all duration-1000 ease-out" />
    </div>
  );
};
