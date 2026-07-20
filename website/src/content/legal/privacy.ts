import type { LegalPageContent } from "@/content/types";

export const privacyPage: LegalPageContent = {
  title: "Privacybeleid",
  seo: {
    title: "Privacybeleid — blockken.solutions",
    description:
      "Lees hoe blockken.solutions uw persoonsgegevens verwerkt conform GDPR. Data controller, doeleinden, bewaartermijnen en uw rechten.",
  },
  sections: [
    {
      heading: "1. Wie is verantwoordelijk?",
      paragraphs: [
        "blockken.solutions, handelsnaam van Wouter Blockken (blockken.solutions), bereikbaar via wouter@blockken.solutions, is verantwoordelijk voor de verwerking van persoonsgegevens op deze website.",
      ],
    },
    {
      heading: "2. Welke gegevens verzamelen we?",
      paragraphs: [
        "We verzamelen alleen gegevens die u vrijwillig verstrekt of die automatisch worden gegenereerd bij het gebruik van onze diensten:",
      ],
      list: [
        "Contactgegevens (naam, e-mailadres) wanneer u ons mailt of een strategiegesprek plant",
        "Website-URL wanneer u onze gratis website scan gebruikt",
        "Technische loggegevens (IP-adres, browsertype) via onze hostingprovider",
      ],
    },
    {
      heading: "3. Waarvoor gebruiken we uw gegevens?",
      paragraphs: [
        "We verwerken persoonsgegevens uitsluitend voor de volgende doeleinden:",
      ],
      list: [
        "Beantwoorden van contactaanvragen en strategiegesprekken plannen",
        "Uitvoeren van de gratis website scan en resultaten tonen",
        "Verbeteren van onze website en diensten",
        "Naleving van wettelijke verplichtingen",
      ],
    },
    {
      heading: "4. Bewaartermijn",
      paragraphs: [
        "Contactgegevens bewaren we maximaal 2 jaar na het laatste contact, tenzij een langere bewaartermijn wettelijk verplicht is. Scan-resultaten worden niet permanent opgeslagen.",
      ],
    },
    {
      heading: "5. Subverwerkers",
      paragraphs: [
        "We maken gebruik van de volgende subverwerkers, allen met verwerkersovereenkomst en EU-hosting waar mogelijk:",
      ],
      list: [
        "Netlify — website hosting",
        "Resend — e-mailverzending voor contactformulieren",
        "Google PageSpeed Insights — gratis website scan",
        "OpenAI / Anthropic — AI-verwerking voor agentdiensten (indien van toepassing)",
      ],
    },
    {
      heading: "6. Uw rechten",
      paragraphs: [
        "Conform GDPR heeft u recht op inzage, rectificatie, verwijdering, beperking van verwerking, dataportabiliteit en bezwaar. Stuur een verzoek naar wouter@blockken.solutions. U heeft ook het recht een klacht in te dienen bij de Gegevensbeschermingsautoriteit (GBA).",
      ],
    },
    {
      heading: "7. Cookies",
      paragraphs: [
        "Deze website gebruikt geen tracking cookies. Enkel technisch noodzakelijke cookies kunnen worden gebruikt voor basisfuncties. Bij toevoeging van analytics informeren we u en vragen we toestemming.",
      ],
    },
  ],
};
