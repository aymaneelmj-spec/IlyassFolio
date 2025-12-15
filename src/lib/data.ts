import {
  Store,
  ShoppingBag,
  PenTool,
  LineChart,
  TrendingUp,
  BarChart,
  BrainCircuit,
  AreaChart,
  Fish,
  Plane,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  type LucideIcon,
  Dribbble,
} from "lucide-react";
import { KitesurfingIcon } from "@/components/icons";

export const resumeContent = `
Ilyass Elmjaber - E-commerce Designer & Seller | Independent Trader/Investor | Finance Student

A dedicated and adaptable individual with strong communication and organization skills. Fluent in English and French, with the ability to learn quickly and work effectively under pressure. Eager to contribute in any professional environment and open to continuous learning.

Experience:
- Freelance E-commerce Designer & Seller (2022-Present): Designed and managed product listings on Etsy, Redbubble, and Shopify. Created eye-catching visuals, wrote engaging product descriptions, and handled customer communication. Gained hands-on experience in remote work, digital tools, and e-commerce platforms.
- Independent Trading/Investor Learner (2021-Present): Studied financial markets and developed strategies using technical and fundamental analysis. Learned to use trading platforms, analyze price action, and apply risk management techniques. Built discipline, focus, and decision-making under pressure.

Education:
- Licence Degree in Finance (In Progress) from FSJES Casablanca
- Engineering Studies (2021-2022) at HESTIM University, Casablanca
- Baccalauréat in Physical Sciences (2017-2021) from Académie Maurice Bucaille.

Skills:
- Soft Skills: Time Management, Communication, Quick Learner, Attention to Detail, Calm Under Pressure, Active Listening
- Languages: French (Native), English (Fluent), Spanish (Learning)
`;

export const skills = [
  { name: "Time management", level: 90 },
  { name: "Communication", level: 85 },
  { name: "Quick learner", level: 95 },
  { name: "Attention to detail", level: 92 },
  { name: "Calm under pressure", level: 88 },
  { name: "Active listening", level: 80 },
];

type ExperienceContent = {
  job1: { title: string, company: string, description: string };
  job2: { title: string, company: string, description: string };
};
export const experiences = (t: ExperienceContent) => [
  {
    title: t.job1.title,
    company: t.job1.company,
    period: "2022 - Present",
    description: t.job1.description,
    tags: ["E-commerce", "Design", "Shopify", "Etsy", "Redbubble"],
  },
  {
    title: t.job2.title,
    company: t.job2.company,
    period: "2021 - Present",
    description: t.job2.description,
    tags: ["Finance", "Trading", "Investment", "Risk Management"],
  },
];

type EducationContent = {
  degree1: string,
  degree2: string,
  degree3: string,
}
export const education = (t: EducationContent) => [
  {
    degree: t.degree1,
    institution: "FSJES Casablanca",
    period: "In Progress",
  },
  {
    degree: t.degree2,
    institution: "HESTIM University",
    period: "2021 - 2022",
  },
  {
    degree: t.degree3,
    institution: "Académie Maurice Bucaille",
    period: "2017 - 2021",
  },
];

type LanguageContent = {
  proficiency: {
    native: string,
    fluent: string,
    learning: string,
  }
}
export const languages = (t: LanguageContent) => [
  { name: "French", code: "fr", proficiency: t.proficiency.native, level: 100 },
  { name: "English", code: "en", proficiency: t.proficiency.fluent, level: 90 },
  { name: "Spanish", code: "es", proficiency: t.proficiency.learning, level: 40 },
];

type HobbyContent = {
  [key: string]: { name: string, description: string }
}
export const hobbies = (t: HobbyContent) => [
    { icon: KitesurfingIcon, ...t.kitesurfing },
    { icon: Dribbble, ...t.soccer },
    { icon: BrainCircuit, ...t.psychology },
    { icon: AreaChart, ...t.markets },
    { icon: Fish, ...t.fishing },
    { icon: Plane, ...t.traveling },
];

export const contactDetails = {
    phone: { label: "Phone", value: "+212 6 23 80 58 08", href: "tel:+212623805808" },
    email: { label: "Email", value: "ilyasselmjaber@gmail.com", href: "mailto:ilyasselmjaber@gmail.com" },
    location: { label: "Location", value: "53, allee des buis, Ain Sebaa, Casablanca" },
};

export const socialLinks: { name: string; url: string; icon: LucideIcon }[] = [
  { name: "LinkedIn", url: "https://linkedin.com", icon: Linkedin },
  { name: "GitHub", url: "https://github.com", icon: Github },
  { name: "Twitter", url: "https://twitter.com", icon: Twitter },
  { name: "Instagram", url: "https://instagram.com", icon: Instagram },
];
