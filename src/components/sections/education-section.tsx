"use client";

import { useContext } from "react";
import { GraduationCap } from "lucide-react";
import { Section, AnimatedSectionTitle } from "@/components/shared/section";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LanguageContext } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { education } from "@/lib/data";

export function EducationSection() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].education;
  const educationData = education(t.content);

  return (
    <Section id="education">
      <div className="container px-4 md:px-6">
        <AnimatedSectionTitle className="text-center">{t.title}</AnimatedSectionTitle>
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-1 md:grid-cols-2">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm transition-all hover:shadow-primary/20 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="font-headline">{edu.degree}</CardTitle>
                      <CardDescription>{edu.institution}</CardDescription>
                    </div>
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
