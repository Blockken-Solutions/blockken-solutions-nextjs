import Link from "next/link";
import { notFound } from "next/navigation";

import { AgentDetail } from "@/components/agents/agent-detail";
import { JsonLd } from "@/components/seo/json-ld";
import { agentsPage, getAgentBySlug, getAllAgentSlugs } from "@/content/agents";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/metadata";
import { buildAgentGraph } from "@/lib/structured-data";

type AgentDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllAgentSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: AgentDetailPageProps) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);

  if (!agent) {
    return createMetadata({
      pathname: `/agents/${slug}`,
      title: "Agent niet gevonden",
      description: agentsPage.seo.description,
      noIndex: true,
    });
  }

  return createMetadata({
    pathname: `/agents/${slug}`,
    title: `${agent.title} — AI Agent voor KMO's | ${site.name}`,
    description: agent.longDescription,
  });
}

export default async function AgentDetailPage({ params }: AgentDetailPageProps) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);

  if (!agent) {
    notFound();
  }

  return (
    <>
      <JsonLd data={buildAgentGraph(agent)} />
      <AgentDetail agent={agent} />
    </>
  );
}
