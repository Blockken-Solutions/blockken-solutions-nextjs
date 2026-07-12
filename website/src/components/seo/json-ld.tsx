import type { Graph, Thing, WithContext } from "schema-dts";

type JsonLdProps = {
  data: WithContext<Thing> | Graph | Record<string, unknown>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
