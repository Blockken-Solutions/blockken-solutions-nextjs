import Image from "next/image";
import { Check } from "lucide-react";

import { SectionLabel } from "@/components/landing/section-label";
import { SectionDescription } from "@/components/ui/section-description";
import { Section, SectionHeading } from "@/components/ui/section";
import type { AboutContent } from "@/content/types";
import { getIcon } from "@/lib/icons";

type AboutSectionProps = {
  content: AboutContent;
};

function ProjectLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative size-12 shrink-0 overflow-hidden rounded-xl border border-border bg-white shadow-soft">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain p-1.5"
        sizes="48px"
      />
    </div>
  );
}

function ProjectHighlightCard({
  project,
  asLink,
}: {
  project: AboutContent["portfolioHighlights"][number];
  asLink: boolean;
}) {
  const logoAlt = project.logoAlt ?? project.client;
  const inner = (
    <>
      <div className="flex items-start gap-3">
        {project.logo ? (
          <ProjectLogo src={project.logo} alt={logoAlt} />
        ) : null}
        <div className="min-w-0 flex-1">
          <p className="font-label text-xs text-muted-foreground">{project.client}</p>
          <p
            className={
              asLink
                ? "mt-1 font-bold text-foreground transition-colors group-hover:text-primary"
                : "mt-1 font-bold text-foreground"
            }
          >
            {project.title}
          </p>
        </div>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.outcome}</p>
    </>
  );

  if (asLink && project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col rounded-2xl border border-border bg-card p-4 shadow-soft transition-shadow hover:shadow-soft-hover"
      >
        {inner}
      </a>
    );
  }

  return (
    <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-4 shadow-soft">
      {inner}
    </div>
  );
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <Section id="over-mij">
      <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="mx-auto w-full max-w-sm lg:mx-0">
          <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-border bg-muted shadow-soft-lg">
            {content.portrait ? (
              <Image
                src={content.portrait}
                alt={content.portraitAlt}
                fill
                className="object-cover transition-transform duration-400 hover:scale-[1.03]"
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
                  className="credential-pill flex items-center gap-3 rounded-2xl px-4 py-3"
                >
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Icon className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-label text-xs text-muted-foreground">
                      {credential.type}
                    </p>
                    <p className="text-sm font-bold leading-snug text-foreground">
                      {credential.label}
                    </p>
                    {credential.issuer ? (
                      <p className="text-xs text-muted-foreground">
                        {[credential.issuer, credential.year].filter(Boolean).join(" · ")}
                      </p>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:pl-4">
          <SectionLabel>{content.sectionLabel}</SectionLabel>
          <SectionHeading>
            {content.heading}
          </SectionHeading>
          <SectionDescription className="mt-6">{content.body}</SectionDescription>

          <ul className="mt-8 space-y-4">
            {content.skills.map((skill) => (
              <li key={skill} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-soft">
                  <Check className="size-3.5 text-brand-highlight-text" />
                </span>
                <span className="font-medium text-foreground">{skill}</span>
              </li>
            ))}
          </ul>

          {content.portfolioHighlights.length > 0 ? (
            <div className="mt-10">
              <p className="font-label text-xs text-brand-highlight-text">
                Eerdere projecten
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {content.portfolioHighlights.map((project) => (
                  <li key={project.title}>
                    <ProjectHighlightCard project={project} asLink={Boolean(project.href)} />
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {content.portfolioLink ? (
            <p className="mt-8">
              <a
                href={content.portfolioLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-foreground underline-offset-4 hover:underline"
              >
                {content.portfolioLink.label}
              </a>
            </p>
          ) : null}

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
                      className="inline-flex size-11 items-center justify-center border border-border bg-card text-foreground shadow-soft transition-[transform,box-shadow] hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-primary hover:shadow-[var(--shadow-soft-lg-active)]"
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
