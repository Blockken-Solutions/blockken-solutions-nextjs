import Image from "next/image";

import { Section, SectionHeading } from "@/components/ui/section";
import { imageUrl } from "@/sanity/image";
import type { Project, ProjectsGridBlock } from "@/sanity/types";

type ProjectsGridProps = {
  block: ProjectsGridBlock;
  projects: Project[];
};

export function ProjectsGrid({ block, projects }: ProjectsGridProps) {
  return (
    <Section>
      {block.heading ? <SectionHeading>{block.heading}</SectionHeading> : null}
      {block.intro ? (
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{block.intro}</p>
      ) : null}
      {projects.length === 0 ? (
        <p className="mt-10 text-muted-foreground">
          No projects found. Add projects in Sanity Studio.
        </p>
      ) : (
        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const coverSrc = project.coverImage?.asset
              ? imageUrl(project.coverImage, { width: 800, height: 450 })
              : null;

            return (
              <li
                key={project._id}
                className="overflow-hidden rounded-lg border border-border bg-card"
              >
                {coverSrc ? (
                  <div className="relative aspect-video w-full">
                    <Image
                      src={coverSrc}
                      alt={project.title ?? ""}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ) : null}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    /{project.slug}
                  </p>
                  {project.description ? (
                    <p className="mt-3 text-muted-foreground">
                      {project.description}
                    </p>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </Section>
  );
}
