import type { BlockItem, BlocksPageContent } from "@/content/types";

import { customBlock } from "./custom-block";

const BLOCKS_TIER = "Website + Blocks";

export const blocksPage: BlocksPageContent = {
  heading: "Blocks voor KMO's",
  subheading:
    "Hapklare extra's op uw website — beschikbaar vanaf het pakket Website + Blocks, met één Block inbegrepen.",
  tierRequirementNote:
    "Blocks zijn beschikbaar vanaf het pakket Website + Blocks. Eén Block zit inbegrepen; extra Blocks kosten vanaf € 399 eenmalig plus € 15/mnd.",
  seo: {
    title: "Blocks voor KMO's — blockken.solutions",
    description:
      "Hapklare Blocks voor lokale ondernemers: online bestellen, cadeaubonnen, digitale receptie, review-hulp en aanvraagfilter.",
  },
  filterCategories: ["Alle", "Verkoop", "Klantenservice", "Administratie"],
  blocks: [
    {
      slug: "aanvraagfilter",
      title: "Aanvraagfilter",
      description:
        "De juiste vragen stellen vóór een aanvraag in uw inbox belandt.",
      tagline:
        "De juiste vragen stellen vóór een aanvraag in uw inbox belandt.",
      category: "Verkoop",
      icon: "user-check",
      sectorTags: ["garages", "kappers", "dienstverleners"],
      summary:
        "Bezoekers doorlopen een korte reeks vragen op uw website. Op basis van hun antwoorden krijgen zij het juiste vervolg — of u krijgt alleen aanvragen binnen die voor u relevant zijn.",
      includes: [
        "Meerstaps-formulier op maat van uw bedrijf (vragen, antwoordopties, volgorde)",
        "Automatische doorverwijzing: juiste dienst, juiste contactpersoon, of een duidelijke afwijzing",
        "Overzichtelijke samenvatting per aanvraag in uw mailbox",
        "Aansluiting op uw bestaande contactflow",
      ],
      outcome:
        "Minder irrelevante telefoontjes en mails. Meer tijd voor echte klanten.",
      minTier: BLOCKS_TIER,
      includedInTier: BLOCKS_TIER,
      demoWalkthrough: {
        heading: "Zo werkt Aanvraagfilter",
        intro:
          "Zo ziet Aanvraagfilter eruit op de website van een garage — van eerste vraag tot gerichte doorverwijzing.",
        steps: [
          {
            step: 1,
            title: "Bezoeker start het formulier",
            description:
              "Op uw contactpagina start de bezoeker een korte reeks vragen — duidelijk en stap voor stap.",
            imageSrc: "/images/blocks/aanvraagfilter/step-1.svg",
            imageAlt: "Startscherm van het meerstaps-formulier",
          },
          {
            step: 2,
            title: "Gerichte vragen",
            description:
              "\"Wat is het probleem?\" → merk/type → dringend ja/nee — op maat van uw bedrijf.",
            imageSrc: "/images/blocks/aanvraagfilter/step-2.svg",
            imageAlt: "Bezoeker beantwoordt gerichte vragen",
            animated: true,
          },
          {
            step: 3,
            title: "Automatische doorverwijzing",
            description:
              "Bandenwissel gaat naar bandenafdeling; motorpech naar herstel — zonder handmatig sorteren.",
            imageSrc: "/images/blocks/aanvraagfilter/step-3.svg",
            imageAlt: "Doorverwijzing naar de juiste dienst",
          },
          {
            step: 4,
            title: "Bevestiging voor bezoeker",
            description:
              "De bezoeker ziet meteen het juiste vervolg — telefoonnummer, afspraaklink of duidelijke boodschap.",
            imageSrc: "/images/blocks/aanvraagfilter/step-4.svg",
            imageAlt: "Bevestigingsscherm met vervolgstap",
          },
        ],
      },
      idealFor: [
        "Garages en dienstverleners met veel offerte- of aanvraagmail",
        "Kappers die willen filteren vóór telefonisch contact",
        "Bedrijven die structuur willen in binnenkomende aanvragen",
      ],
      notIdealFor:
        "Minder geschikt als u enkel een eenvoudig contactformulier nodig heeft zonder filterlogica.",
      blockFaq: [
        {
          id: "sec-sluit-aan",
          question: "Sluit dit aan op mijn bestaande contactformulier?",
          answer:
            "Ja. Het Block vervangt of verrijkt uw huidige contactflow — aanvragen komen gestructureerd in uw mailbox.",
        },
        {
          id: "sec-vragen-wijzigen",
          question: "Kan ik de vragen later aanpassen?",
          answer:
            "Ja. Bij de start stellen we samen de vragen in; later kunt u ze zelf wijzigen of via ons laten aanpassen.",
        },
        {
          id: "sec-afwijzing",
          question: "Worden verkeerde aanvragen hard afgewezen?",
          answer:
            "Bezoekers krijgen een vriendelijke doorverwijzing of duidelijke boodschap — geen kale foutmelding.",
        },
      ],
      relatedSlugs: ["digitale-receptie", "review-hulp"],
    },
    {
      slug: "review-hulp",
      title: "Review-hulp",
      description:
        "Professionele antwoorden op Google-reviews, in uw stijl — u keurt goed.",
      tagline:
        "Professionele antwoorden op Google-reviews, in uw stijl — u keurt goed.",
      category: "Administratie",
      icon: "pen-line",
      sectorTags: [
        "voedingsretail",
        "garages",
        "kappers",
        "horeca",
        "dienstverleners",
      ],
      summary:
        "Helpt u professioneel te reageren op Google-reviews. U plakt de review, krijgt kant-en-klare antwoordsuggesties in uw stijl, en beslist zelf wat u publiceert.",
      includes: [
        "Eenvoudige interface om reviews in te voeren",
        "Meerdere antwoordvoorstellen per review (formeel, warm, kort)",
        "Afgestemd op uw schrijfstijl (ingesteld bij de start)",
        "U keurt altijd goed vóór publicatie — niets gaat automatisch live",
      ],
      outcome:
        "Consistente, professionele uitstraling op Google — zonder uren te spenderen aan formuleren.",
      minTier: BLOCKS_TIER,
      includedInTier: BLOCKS_TIER,
      demoWalkthrough: {
        heading: "Zo werkt Review-hulp",
        intro:
          "Zo ziet Review-hulp eruit voor een lokale zaak — van review plakken tot klaar om te posten.",
        steps: [
          {
            step: 1,
            title: "Review plakken",
            description:
              "U kopieert de Google-review en plakt die in de interface — positief of negatief.",
            imageSrc: "/images/blocks/review-hulp/step-1.svg",
            imageAlt: "Review plakken in de interface",
          },
          {
            step: 2,
            title: "Antwoordsuggesties",
            description:
              "Review-hulp stelt meerdere voorstellen voor — formeel, warm of kort, in uw stijl.",
            imageSrc: "/images/blocks/review-hulp/step-2.svg",
            imageAlt: "Meerdere antwoordsuggesties",
            animated: true,
          },
          {
            step: 3,
            title: "Kiezen en aanpassen",
            description:
              "U kiest het beste voorstel en past het desgewenst nog aan vóór publicatie.",
            imageSrc: "/images/blocks/review-hulp/step-3.svg",
            imageAlt: "Antwoord kiezen en aanpassen",
          },
          {
            step: 4,
            title: "Klaar om te posten",
            description:
              "U keurt goed en publiceert zelf op Google — niets gaat automatisch live.",
            imageSrc: "/images/blocks/review-hulp/step-4.svg",
            imageAlt: "Antwoord klaar om te posten",
          },
        ],
      },
      idealFor: [
        "Bedrijven met actieve Google-reviews (positief én negatief)",
        "Ondernemers die professioneel willen reageren zonder uren te typen",
        "Zaken met meerdere vestigingen of een vaste schrijfstijl",
      ],
      notIdealFor:
        "Minder geschikt als u nauwelijks reviews ontvangt of geen Google Business-profiel heeft.",
      blockFaq: [
        {
          id: "rev-auto",
          question: "Publiceert het automatisch op Google?",
          answer:
            "Nee. U plakt de review, kiest een voorstel en keurt zelf goed vóór publicatie — niets gaat automatisch live.",
        },
        {
          id: "rev-stijl",
          question: "Klinkt het als een robot?",
          answer:
            "Nee. Bij de start stellen we uw schrijfstijl in — formeel, warm of kort, afhankelijk van uw zaak.",
        },
        {
          id: "rev-negatief",
          question: "Werkt het ook voor negatieve reviews?",
          answer:
            "Juist dan. U krijgt diplomatieke voorstellen die vertrouwen herstellen zonder defensief te klinken.",
        },
      ],
      relatedSlugs: ["digitale-receptie", "aanvraagfilter"],
    },
    {
      slug: "digitale-receptie",
      title: "Digitale receptie",
      description:
        "Beantwoordt veelgestelde vragen en verwijst door naar afspraken.",
      tagline:
        "Beantwoordt veelgestelde vragen en verwijst door naar afspraken.",
      category: "Klantenservice",
      icon: "message-circle",
      sectorTags: [
        "voedingsretail",
        "garages",
        "kappers",
        "horeca",
        "dienstverleners",
      ],
      summary:
        "Een vriendelijk hulpvenster op uw website dat veelgestelde vragen beantwoordt, doorvraagt bij complexere vragen en bezoekers doorverwijst — naar uw openingsuren, contactgegevens, afspraakpagina of bestelformulier.",
      includes: [
        "Zichtbaar hulpvenster op elke pagina",
        "Antwoorden op uw meest gestelde vragen (uren, prijzen, bereikbaarheid, parkeren, …)",
        "Doorvragen bij complexere vragen",
        "Doorverwijzing naar de juiste pagina, telefoonnummer of afspraaklink",
      ],
      outcome:
        "Minder herhaalde telefoontjes. Klanten vinden zelf het antwoord — ook buiten openingsuren.",
      minTier: BLOCKS_TIER,
      includedInTier: BLOCKS_TIER,
      demoWalkthrough: {
        heading: "Zo werkt Digitale receptie",
        intro:
          "Zo ziet Digitale receptie eruit op de website van een bakker — van vraag tot antwoord in seconden.",
        steps: [
          {
            step: 1,
            title: "Bezoeker opent het hulpvenster",
            description:
              "Op elke pagina van uw website staat een vriendelijk hulpvenster — zichtbaar maar niet opdringerig.",
            imageSrc: "/images/blocks/digitale-receptie/step-1.svg",
            imageAlt: "Hulpvenster op een bakkerijwebsite",
          },
          {
            step: 2,
            title: "Klant stelt een vraag",
            description:
              "\"Bent u zondag open?\" — herkenbaar voor elke bakker of garage.",
            imageSrc: "/images/blocks/digitale-receptie/step-2.svg",
            imageAlt: "Bezoeker stelt een vraag in het chatvenster",
            animated: true,
          },
          {
            step: 3,
            title: "Direct antwoord",
            description:
              "Het Block antwoordt met uw openingsuren — geen telefoon, geen wachten.",
            imageSrc: "/images/blocks/digitale-receptie/step-3.svg",
            imageAlt: "Automatisch antwoord met openingsuren",
          },
          {
            step: 4,
            title: "Doorverwijzing indien nodig",
            description:
              "Complexere vragen? Doorverwijzing naar contact, bestelformulier of telefoonnummer.",
            imageSrc: "/images/blocks/digitale-receptie/step-4.svg",
            imageAlt: "Doorverwijzing naar contact of bestelformulier",
          },
        ],
      },
      idealFor: [
        "Bakkers, garages en kappers met veel herhaalde telefoonvragen",
        "Horeca en retail met vragen over uren, menu of bereikbaarheid",
        "Bedrijven die ook buiten openingsuren antwoorden willen geven",
      ],
      notIdealFor:
        "Minder geschikt als u al een volwaardige klantenservice-app met ticketingsysteem gebruikt.",
      blockFaq: [
        {
          id: "rec-agenda",
          question: "Kan het mijn agenda koppelen?",
          answer:
            "Standaard niet. Koppelingen met agenda of boekingssoftware zijn mogelijk in Digitaal maatwerk.",
        },
        {
          id: "rec-antwoorden",
          question: "Waar komen de antwoorden vandaan?",
          answer:
            "Bij de start voeren we samen uw veelgestelde vragen in — uren, prijzen, parkeren, allergenen, enzovoort.",
        },
      ],
      relatedSlugs: ["aanvraagfilter", "review-hulp"],
    },
    {
      slug: "bestel-afhaal",
      title: "Bestel & afhaal",
      description:
        "Klanten bestellen online, halen af op een gekozen tijdstip.",
      tagline: "Klanten bestellen online, halen af op een gekozen tijdstip.",
      category: "Verkoop",
      icon: "shopping-bag",
      sectorTags: ["voedingsretail", "horeca"],
      summary:
        "Klanten bekijken uw aanbod online, vullen een winkelmandje, kiezen een afhaalmoment en betalen — u bereidt de bestelling voor.",
      includes: [
        "Overzichtelijk menu / productlijst op uw website",
        "Winkelmandje en afhaaltijdslot (vandaag 14u, morgen 10u, …)",
        "Online betaling via beveiligde betaalpagina",
        "Besteloverzicht per e-mail (voor u én de klant)",
        "Zelf producten toevoegen, wijzigen of tijdelijk als uitverkocht markeren",
      ],
      outcome:
        "Extra omzet, minder wachtrijen, betere planning van productie.",
      minTier: BLOCKS_TIER,
      includedInTier: BLOCKS_TIER,
      demoWalkthrough: {
        heading: "Zo werkt Bestel & afhaal",
        intro:
          "Zo ziet online bestellen eruit op de website van een bakker — van product kiezen tot afhalen.",
        steps: [
          {
            step: 1,
            title: "Producten bekijken",
            description:
              "Klanten browsen door uw menu — brood, patisserie, feestdagen-assortiment.",
            imageSrc: "/images/blocks/bestel-afhaal/step-1.svg",
            imageAlt: "Productoverzicht op een bakkerijwebsite",
          },
          {
            step: 2,
            title: "Winkelmandje vullen",
            description:
              "Producten toevoegen, aantal kiezen en doorgaan naar afhaalmoment.",
            imageSrc: "/images/blocks/bestel-afhaal/step-2.svg",
            imageAlt: "Winkelmandje met geselecteerde producten",
            animated: true,
          },
          {
            step: 3,
            title: "Afhaalmoment kiezen",
            description:
              "Vandaag 14u, morgen 10u — klanten kiezen een beschikbaar tijdslot.",
            imageSrc: "/images/blocks/bestel-afhaal/step-3.svg",
            imageAlt: "Keuze van afhaaltijdslot",
          },
          {
            step: 4,
            title: "Betalen en bevestiging",
            description:
              "Online betalen via beveiligde betaalpagina — u én de klant ontvangen een bevestiging per mail.",
            imageSrc: "/images/blocks/bestel-afhaal/step-4.svg",
            imageAlt: "Bevestiging na online betaling",
          },
        ],
      },
      idealFor: [
        "Bakkers, slagers en traiteurs met dagelijkse of feestdag-bestellingen",
        "Restaurants en cafés met takeaway zonder volledige webshop",
        "Zaken die afhaalmomenten willen spreiden over de dag",
      ],
      notIdealFor:
        "Niet geschikt als u al een webshop met voorraadbeheer, verzending en complexe catalogus heeft.",
      blockFaq: [
        {
          id: "bestel-betalen",
          question: "Hoe betalen klanten?",
          answer:
            "Via een beveiligde betaalpagina (Bancontact, iDEAL, …). Transactiekosten worden transparant vermeld in uw offerte.",
        },
        {
          id: "bestel-producten",
          question: "Kan ik zelf producten toevoegen?",
          answer:
            "Ja. U voegt producten toe, past prijzen aan en markeert items tijdelijk als uitverkocht.",
        },
        {
          id: "bestel-tijden",
          question: "Kunnen klanten een afhaalmoment kiezen?",
          answer:
            "Ja. U stelt beschikbare tijdsloten in — vandaag 14u, morgen 10u, enzovoort.",
        },
      ],
      relatedSlugs: ["cadeaubon", "digitale-receptie"],
    },
    {
      slug: "cadeaubon",
      title: "Cadeaubon",
      description:
        "Verkoop digitale cadeaubonnen — automatisch per e-mail.",
      tagline: "Verkoop digitale cadeaubonnen — automatisch per e-mail.",
      category: "Verkoop",
      icon: "gift",
      sectorTags: ["voedingsretail", "kappers", "horeca"],
      summary:
        "Bezoekers kopen een digitale cadeaubon op uw website. De ontvanger krijgt automatisch een bon per e-mail — klaar om in te wisselen in uw zaak.",
      includes: [
        "Keuze uit vaste bedragen (bijv. €25 / €50 / €100) of vrije waarde",
        "Online betaling op uw website",
        "Automatische cadeaubon per e-mail (PDF met unieke code)",
        "Overzicht van verkochte bonnen",
        "Inwisseling in de zaak via unieke code",
      ],
      outcome:
        "Omzet vóór de feestdagen, nieuwe klanten via cadeau-ontvangers.",
      minTier: BLOCKS_TIER,
      includedInTier: BLOCKS_TIER,
      demoWalkthrough: {
        heading: "Zo werkt Cadeaubon",
        intro:
          "Zo ziet de verkoop van digitale cadeaubonnen eruit — van bedrag kiezen tot ontvanger krijgt de bon.",
        steps: [
          {
            step: 1,
            title: "Bedrag kiezen",
            description:
              "Bezoekers kiezen een vast bedrag (€ 25 / € 50 / € 100) of vullen een vrije waarde in.",
            imageSrc: "/images/blocks/cadeaubon/step-1.svg",
            imageAlt: "Keuze van cadeaubonbedrag",
          },
          {
            step: 2,
            title: "Personaliseren",
            description:
              "Naam van de ontvanger, persoonlijk bericht en gewenste leverdatum toevoegen.",
            imageSrc: "/images/blocks/cadeaubon/step-2.svg",
            imageAlt: "Cadeaubon personaliseren",
            animated: true,
          },
          {
            step: 3,
            title: "Online betalen",
            description:
              "Veilige betaling via Bancontact of iDEAL — direct op uw website.",
            imageSrc: "/images/blocks/cadeaubon/step-3.svg",
            imageAlt: "Online betaling van cadeaubon",
          },
          {
            step: 4,
            title: "Ontvanger krijgt de bon",
            description:
              "De ontvanger ontvangt automatisch een PDF-cadeaubon per e-mail met unieke code.",
            imageSrc: "/images/blocks/cadeaubon/step-4.svg",
            imageAlt: "Cadeaubon per e-mail ontvangen",
          },
        ],
      },
      idealFor: [
        "Kappers, horeca en voedingsretail rond feestdagen",
        "Bedrijven die cadeaubonnen nu handmatig bijhouden",
        "Zaken die extra omzet willen vóór de feestperiode",
      ],
      notIdealFor:
        "Minder geschikt als u fysieke cadeaubonnen wilt blijven uitsluitend verkopen aan de toonbank.",
      blockFaq: [
        {
          id: "cadeau-inwisselen",
          question: "Hoe wisselen ontvangers de bon in?",
          answer:
            "Met een unieke code in uw zaak — u ziet in het overzicht welke bonnen verkocht en ingewisseld zijn.",
        },
        {
          id: "cadeau-bedrag",
          question: "Vaste bedragen of vrije waarde?",
          answer:
            "Beide. U kiest vaste bedragen (bijv. € 25 / € 50) en kunt optioneel vrije waarde toelaten.",
        },
        {
          id: "cadeau-mail",
          question: "Krijgt de ontvanger automatisch een mail?",
          answer:
            "Ja. Na betaling ontvangt de ontvanger automatisch een PDF-cadeaubon per e-mail.",
        },
      ],
      relatedSlugs: ["bestel-afhaal", "digitale-receptie"],
    },
  ],
  customBlock,
};

export function getBlockPreviewItems(): BlockItem[] {
  return blocksPage.blocks.map(
    ({ slug, title, description, category, icon, sectorTags }) => ({
      slug,
      title,
      description,
      category,
      icon,
      sectorTags,
    }),
  );
}

export function getBlockBySlug(slug: string) {
  return blocksPage.blocks.find((block) => block.slug === slug);
}

export function getAllBlockSlugs(): string[] {
  return blocksPage.blocks.map((block) => block.slug);
}

export function getBlocksBySlugs(slugs: string[]) {
  return slugs
    .map((slug) => getBlockBySlug(slug))
    .filter((block): block is NonNullable<typeof block> => Boolean(block));
}
