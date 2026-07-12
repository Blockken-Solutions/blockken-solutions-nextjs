export function homeSection(id: string): string {
  return `/#${id}`;
}

export function contactWithAgent(agentSlug: string): string {
  return `/?agent=${encodeURIComponent(agentSlug)}#contact`;
}
