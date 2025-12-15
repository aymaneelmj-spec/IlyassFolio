"use client";

import { useContext } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, MapPin } from "lucide-react";
import { Section, AnimatedSectionTitle } from "@/components/shared/section";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { LanguageContext } from "@/contexts/language-context";
import { translations } from "@/lib/translations";
import { contactDetails } from "@/lib/data";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export function ContactSection() {
  const { toast } = useToast();
  const { language } = useContext(LanguageContext);
  const t = translations[language].contact;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast({
        title: t.toast.title,
        description: t.toast.description,
      });
      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
        variant: "destructive"
      });
    }
  }

  const contactItems = [
    { icon: Phone, ...contactDetails.phone },
    { icon: Mail, ...contactDetails.email },
    { icon: MapPin, ...contactDetails.location },
  ];

  return (
    <Section id="contact">
      <div className="container px-4 md:px-6">
        <AnimatedSectionTitle className="text-center">{t.title}</AnimatedSectionTitle>
        <p className="mx-auto mt-4 max-w-[700px] text-center text-muted-foreground md:text-xl/relaxed">
          {t.subtitle}
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm">
                <CardHeader className="flex flex-row items-center gap-4">
                  <item.icon className="h-8 w-8 text-primary" />
                  <CardTitle>{item.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  {'href' in item && item.href ? (
                     <a href={item.href} className="hover:text-primary transition-colors">{item.value}</a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mx-auto mt-16 max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>{t.formTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.form.name}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.form.namePlaceholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.form.email}</FormLabel>
                        <FormControl>
                          <Input placeholder={t.form.emailPlaceholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t.form.message}</FormLabel>
                        <FormControl>
                          <Textarea placeholder={t.form.messagePlaceholder} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={form.formState.isSubmitting} className="w-full">
                    {form.formState.isSubmitting ? t.form.sending : t.form.submit}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
