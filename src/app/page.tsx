"use client";
import PortfolioPage from '@/components/portfolio-page';
import { motion } from 'framer-motion';

export default function Home() {
  const profileSummary = "A dedicated and adaptable individual with strong communication and organization skills. Fluent in English and French, with the ability to learn quickly and work effectively under pressure. Eager to contribute in any professional environment and open to continuous learning.";

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <PortfolioPage profileSummary={profileSummary} />
    </motion.main>
  );
}
