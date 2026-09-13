import Image from "next/image";
import Link from "next/link";

import { ContentSection } from "@/components/blocks/content-section";
import { SectionLink } from "@/components/layout/section-link";
import { Button } from "@/components/ui/button";
import { ButtonLabel } from "@/components/ui/button-label";
import type { BlockWalkthrough } from "@/content/types";
import { contactPlanSection, homeSection } from "@/lib/paths";
import { cn } from "@/lib/utils";

type BlockWalkthroughProps = {
  blockTitle: string;
  walkthrough: BlockWalkthrough;
};

function isNativeImageSrc(src: string, animated?: boolean): boolean {
  return animated || src.endsWith(".gif") || src.endsWith(".svg");
}

function WalkthroughImage({
  src,
  alt,
  animated,
}: {
  src: string;
  alt: string;
  animated?: boolean;
}) {
  if (isNativeImageSrc(src, animated)) {
    return (
      <img
        src={src}
        alt={alt}
        className="h-auto w-full rounded-2xl border border-border/80 bg-muted object-cover shadow-sm"
        loading="lazy"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={750}
      className="h-auto w-full rounded-2xl border border-border/80 bg-muted object-cover shadow-sm"
      sizes="(max-width: 1024px) 100vw, 896px"
    />
  );
}

export function BlockWalkthroughSection({ blockTitle, walkthrough }: BlockWalkthroughProps) {
  const title =
    walkthrough.heading ?? `Zo werkt ${blockTitle} in ${walkthrough.steps.length} stappen`;

  return (
    <ContentSection id="block-walkthrough" label="Voorbeeld" title={title}>
      <div className="space-y-10">
        {walkthrough.intro ? (
          <p className="text-lg leading-relaxed text-muted-foreground">{walkthrough.intro}</p>
        ) : null}

        <ol className="space-y-12">
          {walkthrough.steps.map((step, index) => (
            <li
              key={step.step}
              className={cn(
                "grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-10",
                index % 2 === 1 && "lg:[&>*:first-child]:order-2",
              )}
            >
              <div>
                <span className="inline-flex size-8 items-center justify-center rounded-full bg-brand-highlight/15 text-sm font-bold text-brand-accent">
                  {step.step}
                </span>
                <h3 className="mt-3 text-xl font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
              <WalkthroughImage
                src={step.imageSrc}
                alt={step.imageAlt}
                animated={step.animated}
              />
            </li>
          ))}
        </ol>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="primary" shape="pill" size="cta">
            <SectionLink href={contactPlanSection()}>
              <ButtonLabel>Plan een gesprek →</ButtonLabel>
            </SectionLink>
          </Button>
          <Button asChild variant="secondary" shape="pill" size="cta">
            <Link href={homeSection("prijzen")}>Bekijk prijzen</Link>
          </Button>
        </div>
      </div>
    </ContentSection>
  );
}
