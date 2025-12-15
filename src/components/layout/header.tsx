
"use client";

import { useContext, useState } from "react";
import {
  Menu,
  Download,
  SquareUserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageContext } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { FlagEN, FlagFR, FlagES } from "@/components/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { AnimatedSectionTitle } from "../shared/section";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);
  const t = translations[language].nav;

  const navItems = [
    { href: "#about", label: t.about },
    { href: "#experience", label: t.experience },
    { href: "#education", label: t.education },
    { href: "#languages", label: t.languages },
    { href: "#hobbies", label: t.hobbies },
    { href: "#contact", label: t.contact },
  ];

  const LanguageSwitcher = () => {
    const flags: { [key: string]: React.ReactNode } = {
      en: <FlagEN className="h-4 w-6 rounded-sm" />,
      fr: <FlagFR className="h-4 w-6 rounded-sm" />,
      es: <FlagES className="h-4 w-6 rounded-sm" />,
    };

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            {flags[language]}
            <span className="sr-only">Switch language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setLanguage("en")}>
            <FlagEN className="mr-2 h-4 w-6" />
            English
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLanguage("fr")}>
            <FlagFR className="mr-2 h-4 w-6" />
            Français
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLanguage("es")}>
            <FlagES className="mr-2 h-4 w-6" />
            Español
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };
  
  const NavLinks = ({isMobile = false}) => (
    <>
    {navItems.map((item) => (
      <motion.a
        key={item.href}
        href={item.href}
        onClick={() => setIsOpen(false)}
        className={cn(
            "font-medium transition-colors hover:text-primary",
            isMobile ? "block w-full rounded-md p-3 text-lg hover:bg-muted" : "text-sm"
        )}
        whileHover={{ y: -2, scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {item.label}
      </motion.a>
    ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <div className="flex flex-1 items-center justify-start">
            <a href="#hero" className="mr-6 flex items-center gap-2">
            <SquareUserRound className="h-6 w-6" />
            <span className="font-headline text-lg font-bold">Ilyass Folio</span>
            </a>
        </div>
        <nav className="hidden flex-1 items-center justify-center gap-6 md:flex">
         <NavLinks />
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <LanguageSwitcher />
          <Button asChild className="hidden sm:flex">
            <a href="/Ilyass_Elmjaber_CV.pdf" download="Ilyass_Elmjaber_CV.pdf">
              <Download className="mr-2 h-4 w-4" />
              {t.cv}
            </a>
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 p-6 text-lg font-medium">
                <NavLinks isMobile={true}/>
                <Button asChild size="lg" className="mt-4">
                  <a href="/Ilyass_Elmjaber_CV.pdf" download="Ilyass_Elmjaber_CV.pdf">
                    <Download className="mr-2 h-4 w-4" />
                    {t.cv}
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
