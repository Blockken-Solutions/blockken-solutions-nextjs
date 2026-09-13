import type { SectorListing, SectorsPageContent } from "@/content/types";

import {
  getTypicalPackageForSector,
  PILOT_NOTE,
} from "./sector-packages";

export const sectorsPage: SectorsPageContent = {
  heading: "Blocks per sector",
  subheading:
    "Of u nu bakker, garage of kapper bent — kies de Blocks die passen bij uw zaak. Wij adviseren graag welke combinatie het meeste oplevert.",
  seo: {
    title: "Blocks per sector — blockken.solutions",
    description:
      "Blocks voor voedingsretail, garages, kappers, horeca en dienstverleners. Ontdek welke Blocks passen bij uw sector.",
  },
};

export const sectors: SectorListing[] = [
  {
    slug: "voedingsretail",
    title: "Voedingsretail",
    subtitle: "Bakker · slager · traiteur · delicatessen · viswinkel",
    intro:
      "Feestdagen, dagelijkse bestellingen en constante telefoontjes over openingstijden — uw website kan meer dragen dan informeren.",
    painPoints: [
      {
        pain: "Klanten bellen constant voor openingstijden en allergenen",
        blockSlug: "digitale-receptie",
      },
      {
        pain: "Feestdagen = chaos aan de toonbank",
        blockSlug: "bestel-afhaal",
      },
      {
        pain: "Cadeaubonnen handmatig bijhouden op papier",
        blockSlug: "cadeaubon",
      },
      {
        pain: "Negatieve Google-review over wachttijd",
        blockSlug: "review-hulp",
      },
    ],
    recommendedBlockSlugs: ["bestel-afhaal", "digitale-receptie", "cadeaubon"],
    blockUseCases: [
      {
        blockSlug: "bestel-afhaal",
        detail: "Brood, patisserie, feestdagen-menu vooraf bestellen",
      },
      {
        blockSlug: "digitale-receptie",
        detail: "Bent u zondag open? / Heeft u glutenvrij? / Kan ik bestellen?",
      },
      {
        blockSlug: "cadeaubon",
        detail: "Eindejaarsgeschenk voor bedrijven",
        outcome: "Omzet vóór de feestdagen, nieuwe klanten via cadeau-ontvangers",
      },
    ],
    bundleStory: "Voor feestdagen en dagelijkse bestellingen",
    pilotNote: `${PILOT_NOTE} We zoeken momenteel pilotklanten in voedingsretail.`,
    typicalPackage: getTypicalPackageForSector({
      roiScenario:
        "Typisch scenario: 15 bestellingen per dag telefonisch × 4 min = 1 uur/dag aan orderopname — online bestellen neemt het grootste deel over.",
    }),
    seo: {
      title: "Blocks voor voedingsretail — blockken.solutions",
      description:
        "Blocks voor bakkers, slagers en traiteurs: online bestellen, cadeaubonnen en digitale receptie.",
    },
  },
  {
    slug: "garages",
    title: "Garages",
    subtitle: "Autoherstel · bandencentrum · carrosserie · APK-station",
    intro:
      "De telefoon staat roodgloeiend met prijsvragen en aanvragen buiten uw specialisatie. Laat uw website het eerste contact opvangen.",
    painPoints: [
      {
        pain: "Telefoon roodgloeiend: 'Hoeveel kost een bandenwissel?'",
        blockSlug: "digitale-receptie",
      },
      {
        pain: "Aanvragen voor herstellingen buiten onze specialisatie",
        blockSlug: "aanvraagfilter",
      },
      {
        pain: "Nooit tijd om op Google-reviews te antwoorden",
        blockSlug: "review-hulp",
      },
    ],
    recommendedBlockSlugs: [
      "digitale-receptie",
      "aanvraagfilter",
      "review-hulp",
    ],
    blockUseCases: [
      {
        blockSlug: "digitale-receptie",
        detail: "Doet u bandenwissel zonder afspraak? / Is vervangwagen beschikbaar?",
      },
      {
        blockSlug: "aanvraagfilter",
        detail: "Wat is het probleem? → merk/type → dringend ja/nee",
        outcome: "Bandenwissel gaat naar bandenafdeling; motorpech naar herstel",
      },
      {
        blockSlug: "review-hulp",
        detail: "Klant klaagt over wachttijd",
        outcome: "Diplomatieke reactie die vertrouwen herstelt",
      },
    ],
    bundleStory: "Minder telefoon, betere leads",
    pilotNote: `${PILOT_NOTE} We zoeken momenteel pilotklanten in de autosector.`,
    typicalPackage: getTypicalPackageForSector({
      roiScenario:
        "Typisch scenario: 12 prijsvragen per dag × 3 min = 36 min/dag aan telefoon — uw website filtert en beantwoordt het merendeel.",
    }),
    seo: {
      title: "Blocks voor garages — blockken.solutions",
      description:
        "Blocks voor garages: digitale receptie, aanvraagfilter en review-hulp.",
    },
  },
  {
    slug: "kappers",
    title: "Kappers & beauty",
    subtitle: "Kapsalon · barbershop · nagelstudio · schoonheidssalon",
    intro:
      "Klanten bellen voor prijzen, beschikbaarheid en behandelingen. Geef antwoorden op uw website — en verkoop cadeaubonnen rond feestdagen.",
    painPoints: [
      {
        pain: "Klanten bellen voor prijzen en beschikbaarheid",
        blockSlug: "digitale-receptie",
      },
      {
        pain: "Mensen snappen niet welke behandeling ze nodig hebben",
        blockSlug: "aanvraagfilter",
      },
      {
        pain: "Reviews beantwoorden kost avonden",
        blockSlug: "review-hulp",
      },
      {
        pain: "Cadeaubonnen rond moederdag / kerst",
        blockSlug: "cadeaubon",
      },
    ],
    recommendedBlockSlugs: [
      "digitale-receptie",
      "aanvraagfilter",
      "cadeaubon",
    ],
    blockUseCases: [
      {
        blockSlug: "digitale-receptie",
        detail: "Neemt u walk-ins? / Wat kost een knipbeurt? / Hoe lang duurt balayage?",
      },
      {
        blockSlug: "aanvraagfilter",
        detail: "Wat wilt u laten doen? → lang/kort haar → nieuwe klant?",
        outcome: "Doorverwijzing naar online agenda of telefonisch contact",
      },
      {
        blockSlug: "cadeaubon",
        detail: "Verjaardag, moederdag, kerst",
        outcome: "Omzet vóór de feestdagen, nieuwe klanten via cadeau-ontvangers",
      },
    ],
    bundleStory: "Minder telefoon, meer cadeau-omzet",
    pilotNote: `${PILOT_NOTE} We zoeken momenteel pilotklanten in kappers & beauty.`,
    typicalPackage: getTypicalPackageForSector({
      roiScenario:
        "Typisch scenario: 8 telefoontjes per dag over prijzen × 2 min = 16 min/dag — plus extra omzet via digitale cadeaubonnen rond feestdagen.",
    }),
    seo: {
      title: "Blocks voor kappers & beauty — blockken.solutions",
      description:
        "Blocks voor kapsalons en beauty: digitale receptie, aanvraagfilter en cadeaubonnen.",
    },
  },
  {
    slug: "horeca",
    title: "Horeca",
    subtitle: "Restaurant · café · brasserie · lunchbar",
    intro:
      "Takeaway-aanvragen tijdens de service, reserveringsvragen en reviews over wachttijd — uw website kan meehelpen in drukke momenten.",
    painPoints: [
      {
        pain: "Takeaway-aanvragen via telefoon tijdens service",
        blockSlug: "bestel-afhaal",
      },
      {
        pain: "Reserverings- en menuvragen",
        blockSlug: "digitale-receptie",
      },
      {
        pain: "Google-reviews over wachttijd of prijs",
        blockSlug: "review-hulp",
      },
    ],
    recommendedBlockSlugs: ["bestel-afhaal", "digitale-receptie", "review-hulp"],
    blockUseCases: [
      {
        blockSlug: "bestel-afhaal",
        detail: "Takeaway zonder volledige webshop",
      },
      {
        blockSlug: "digitale-receptie",
        detail: "Zijn honden welkom? / Reserveren nodig? / Glutenvrije opties?",
      },
      {
        blockSlug: "review-hulp",
        detail: "Gemengde review over wachttijd",
        outcome: "Professionele reactie zonder defensief te klinken",
      },
    ],
    bundleStory: "Takeaway en klantvragen zonder extra personeel",
    pilotNote: `${PILOT_NOTE} We zoeken momenteel pilotklanten in horeca.`,
    typicalPackage: getTypicalPackageForSector({
      roiScenario:
        "Typisch scenario: takeaway-bestellingen tijdens de service onderbreken uw team — online bestellen houdt de vloer rustiger.",
    }),
    seo: {
      title: "Blocks voor horeca — blockken.solutions",
      description:
        "Blocks voor horeca: online bestellen, digitale receptie en review-hulp.",
    },
  },
  {
    slug: "dienstverleners",
    title: "Dienstverleners",
    subtitle: "Aannemer · elektricien · loodgieter · schilder · schoonmaak",
    intro:
      "Offerte-aanvragen buiten regio, steeds dezelfde vragen en weinig tijd voor Google-reviews. Filter serieuze leads vóór ze u bereiken.",
    painPoints: [
      {
        pain: "Offerte-aanvragen buiten regio of budget",
        blockSlug: "aanvraagfilter",
      },
      {
        pain: "Steeds dezelfde vragen over werkwijze en prijs",
        blockSlug: "digitale-receptie",
      },
      {
        pain: "Professionele uitstraling op Google",
        blockSlug: "review-hulp",
      },
    ],
    recommendedBlockSlugs: [
      "aanvraagfilter",
      "digitale-receptie",
      "review-hulp",
    ],
    blockUseCases: [
      {
        blockSlug: "aanvraagfilter",
        detail: "Wat voor project? → regio → budgetindicatie",
        outcome: "Off-topic aanvragen worden vriendelijk afgewezen",
      },
      {
        blockSlug: "digitale-receptie",
        detail: "Steeds dezelfde vragen over werkwijze en prijs",
      },
      {
        blockSlug: "review-hulp",
        detail: "Professionele uitstraling op Google",
        outcome: "Consistente, professionele reacties op reviews",
      },
    ],
    bundleStory: "Serieuze aanvragen, professionele uitstraling",
    pilotNote: `${PILOT_NOTE} We zoeken momenteel pilotklanten bij dienstverleners.`,
    typicalPackage: getTypicalPackageForSector({
      roiScenario:
        "Typisch scenario: 5 offerte-aanvragen per week waarvan 2 irrelevant — filteren bespaart u elk uur aan telefoon en mail.",
    }),
    seo: {
      title: "Blocks voor dienstverleners — blockken.solutions",
      description:
        "Blocks voor dienstverleners: aanvraagfilter, digitale receptie en review-hulp.",
    },
  },
];

export function getSectorBySlug(slug: string) {
  return sectors.find((sector) => sector.slug === slug);
}

export function getAllSectorSlugs(): string[] {
  return sectors.map((sector) => sector.slug);
}
