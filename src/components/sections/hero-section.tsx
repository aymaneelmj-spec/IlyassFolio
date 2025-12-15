
"use client";

import { motion, useAnimation } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useContext, useEffect } from "react";
import { LanguageContext } from "@/contexts/language-context";
import { translations } from "@/lib/translations";

export function HeroSection() {
  const { language } = useContext(LanguageContext);
  const t = translations[language].hero;
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      // Animate letters up and down in a wave
      await controls.start((i) => ({
        y: -10,
        transition: { delay: i * 0.1, type: "spring", stiffness: 300, damping: 15 },
      }));
      await controls.start({
        y: 0,
        transition: { type: "spring", stiffness: 300, damping: 15, stagger: 0.05, from: "last" },
      });
    };

    const interval = setInterval(() => {
      sequence();
    }, 5000); // Repeat every 5 seconds

    // Initial animation
    setTimeout(() => sequence(), 2000);

    return () => clearInterval(interval);
  }, [controls]);


  const name = "Ilyass Elmjaber";
  const tagline = t.tagline.split(" • ");

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };
  
  const letterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } },
    hover: {
      scale: 1.2,
      y: -5,
      color: "hsl(var(--primary))",
      transition: { type: "spring", stiffness: 300, damping: 10 },
    }
  };

  const taglineContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.8,
        delayChildren: name.length * 0.05 + 0.8,
      },
    },
  };

  const taglineItemVariants = {
    hidden: { opacity: 0, y: 20, width: 0 },
    visible: {
      opacity: 1,
      y: 0,
      width: "auto",
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden text-center"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-slate-900 to-background opacity-80" />
      <div className="absolute inset-0 z-0 h-full w-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="container relative z-10 px-4 md:px-6">
        <motion.h1
          className="font-headline text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl"
          variants={nameVariants}
          initial="hidden"
          animate="visible"
          aria-label={name}
        >
          {name.split("").map((char, index) => (
            <motion.span
              key={`${char}-${index}`}
              custom={index}
              variants={letterVariants}
              whileHover="hover"
              animate={controls}
              className="inline-block"
              style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        
        <motion.div
            className="mt-6 flex flex-wrap justify-center gap-x-3 text-lg text-muted-foreground sm:text-xl md:text-2xl"
            variants={taglineContainerVariants}
            initial="hidden"
            animate="visible"
        >
            {tagline.map((item, index) => (
            <motion.div key={item} className="overflow-hidden whitespace-nowrap">
                <motion.span variants={taglineItemVariants} className="inline-block">
                {item}
                </motion.span>
                {index < tagline.length - 1 && <span className="mx-1.5 inline-block text-primary"> • </span>}
            </motion.div>
            ))}
        </motion.div>
      </div>
      
      <motion.a
        href="#about"
        className="absolute bottom-10 z-10"
        aria-label="Scroll down"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{
          delay: 4,
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <ArrowDown className="h-8 w-8 text-primary" />
      </motion.a>
    </section>
  );
}
