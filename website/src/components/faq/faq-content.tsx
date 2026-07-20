"use client";

import { useMemo, useState } from "react";

import { FaqAnswer } from "@/components/faq/faq-answer";
import { BackToHomeLink } from "@/components/layout/back-to-home-link";
import { SectionLink } from "@/components/layout/section-link";

import { SectionLabel } from "@/components/landing/section-label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SectionDescription } from "@/components/ui/section-description";
import { Section, PageHeading } from "@/components/ui/section";
import type { FaqPageContent } from "@/content/types";
import { cn } from "@/lib/utils";

type FaqContentProps = {
  content: FaqPageContent;
};

export function FaqContent({ content }: FaqContentProps) {
  const [activeCategory, setActiveCategory] = useState("alle");

  const filterCategories = useMemo(
    () => [
      { id: "alle", label: "Alle" },
      ...content.categories.map((category) => ({
        id: category.id,
        label: category.label,
      })),
    ],
    [content.categories],
  );

  const visibleCategories = useMemo(() => {
    if (activeCategory === "alle") {
      return content.categories;
    }

    return content.categories.filter((category) => category.id === activeCategory);
  }, [activeCategory, content.categories]);

  return (
    <Section fade={false}>
      <div className="mx-auto max-w-3xl">
        <BackToHomeLink className="mb-6" />
        <SectionLabel>FAQ</SectionLabel>
        <PageHeading className="text-4xl font-bold sm:text-5xl">
          {content.heading}
        </PageHeading>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {content.subheading}
        </p>

        <nav
          className="mt-8 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:overflow-visible sm:px-0"
          aria-label="FAQ-categorieën"
        >
          <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                aria-pressed={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  activeCategory === category.id
                    ? "border-brand-orange bg-brand-orange text-white shadow-sm"
                    : "border-border bg-card text-muted-foreground hover:border-brand-orange/30 hover:text-foreground",
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="mt-10 space-y-10">
          {visibleCategories.map((category) => (
            <section key={category.id} aria-labelledby={`faq-${category.id}`}>
              {activeCategory === "alle" ? (
                <h2
                  id={`faq-${category.id}`}
                  className="mb-4 text-sm font-semibold tracking-wide text-brand-orange uppercase"
                >
                  {category.label}
                </h2>
              ) : null}

              <div className="rounded-2xl border border-border bg-card px-6 shadow-sm">
                <Accordion type="single" collapsible>
                  {category.items.map((item) => (
                    <AccordionItem key={item.id} value={item.id} id={item.id}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>
                        <FaqAnswer text={item.answer} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-border bg-card px-8 py-12 text-center shadow-sm sm:px-12">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            {content.cta.heading}
          </h2>
          <SectionDescription className="mx-auto mt-3 max-w-lg">
            {content.cta.subheading}
          </SectionDescription>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="orange" shape="pill" size="lg">
              <SectionLink href={content.cta.primary.href}>{content.cta.primary.label}</SectionLink>
            </Button>
            <Button asChild variant="outline" shape="pill" size="lg">
              <a href={content.cta.secondary.href}>
                {content.cta.secondary.label}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
