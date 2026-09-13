import { ContentSection } from "@/components/blocks/content-section";
import { BlockFaqAccordion } from "@/components/blocks/block-faq-accordion";
import type { BlockFaqItem } from "@/content/types";

type BlockExtraInfoProps = {
  blockFaq?: BlockFaqItem[];
};

export function BlockExtraInfo({ blockFaq }: BlockExtraInfoProps) {
  if (!blockFaq?.length) {
    return null;
  }

  return (
    <ContentSection id="block-faq-heading" label="Vragen" title="Veelgestelde vragen">
      <BlockFaqAccordion items={blockFaq} />
    </ContentSection>
  );
}
