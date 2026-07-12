import Image from "next/image";
import { Check } from "lucide-react";

import { SectionLabel } from "@/components/landing/section-label";
import { Section, SectionHeading } from "@/components/ui/section";
import type { AboutContent } from "@/content/types";
import { getIcon } from "@/lib/icons";

type AboutSectionProps = {
  content: AboutContent;
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <Section id="over-mij">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="mx-auto w-full max-w-sm lg:mx-0">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-muted">
            {content.portrait ? (
              <Image
                src={content.portrait}
                alt={content.portraitAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 24rem"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-muted-foreground">
                Portrait placeholder
              </div>
            )}
          </div>

          <div className="mt-4 grid gap-3">
            {content.credentials.map((credential) => {
              const Icon = getIcon(credential.icon);
              return (
                <div
                  key={credential.label}
                  className="glass-pill flex items-center gap-3 rounded-2xl px-4 py-3"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                    <Icon className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-medium tracking-wide text-muted-foreground uppercase">
                      {credential.type}
                    </p>
                    <p className="text-sm font-semibold leading-snug text-foreground">
                      {credential.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:pl-4">
          <SectionLabel>{content.sectionLabel}</SectionLabel>
          <SectionHeading className="text-3xl font-bold sm:text-4xl">
            {content.heading}
          </SectionHeading>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">{content.body}</p>

          <ul className="mt-8 space-y-4">
            {content.skills.map((skill) => (
              <li key={skill} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-orange/10">
                  <Check className="size-3.5 text-brand-orange" />
                </span>
                <span className="text-foreground">{skill}</span>
              </li>
            ))}
          </ul>

          {content.sameAs.length > 0 ? (
            <ul className="mt-8 flex flex-wrap gap-3">
              {content.sameAs.map((link) => {
                const Icon = getIcon(link.icon);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:border-brand-orange/40 hover:bg-brand-orange/5 hover:text-brand-orange"
                    >
                      <Icon className="size-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
