export type OutreachTemplate = {
  id: string;
  title: string;
  channel: "email" | "linkedin";
  subject?: string;
  body: string;
};

export const outreachTemplates: OutreachTemplate[] = [
  {
    id: "scan-opener",
    title: "Gratis scan als opener",
    channel: "email",
    subject: "Korte website-check voor {bedrijf}",
    body: "Beste {naam},\n\nIk ben Wouter van blockken.solutions. Ik heb uw website even getest op snelheid en vindbaarheid — geen verkooppraat, wel drie concrete punten die opvielen.\n\n{scan_samenvatting}\n\nAls u wilt, bespreek ik dit 15 minuten vrijblijvend. Of bekijk zelf hoe een Block werkt — met screenshots per stap: {block_link}\n\nMet vriendelijke groet,\nWouter Blockken",
  },
  {
    id: "pilot-sector",
    title: "Pilot-aanbod per sector",
    channel: "email",
    subject: "Proefklantplaats voor {sector} — scherp tarief",
    body: "Beste {naam},\n\nblockken.solutions helpt KMO's met snelle websites en Blocks die telefoontjes, bestellingen en review-antwoorden overnemen. We zoeken 2–3 proefklanten in {sector}.\n\nAls proefklant: 30% korting op de setup, extra begeleiding, en u heeft direct invloed op het product. Meer info: {sector_link}\n\nInteresse in een kort gesprek?\n\nWouter Blockken\nblockken.solutions",
  },
  {
    id: "linkedin-scan",
    title: "LinkedIn scan follow-up",
    channel: "linkedin",
    body: "Hallo {naam}, ik testte websites van lokale KMO's op snelheid en vindbaarheid. Uw site viel op door {punt}. Geen pitch — ik deel graag de bevindingen als dat nuttig is. Groet, Wouter",
  },
];
