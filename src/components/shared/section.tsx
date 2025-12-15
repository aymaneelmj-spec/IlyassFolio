"use client";

import { cn } from "@/lib/utils";
import type { ReactNode, HTMLAttributes } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type SectionProps = {
  id: string;
  className?: string;
  children: ReactNode;
};

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("w-full py-16 md:py-24 lg:py-32", className)}>
      {children}
    </section>
  );
}

export function SectionTitle({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl", className)}
      {...props}
    >
      {children}
    </h2>
  );
}

export function AnimatedSectionTitle({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
    >
       <SectionTitle className={className} {...props}>
        {children}
      </SectionTitle>
    </motion.div>
  );
}