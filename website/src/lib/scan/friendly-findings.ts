type FriendlyFindingCopy = {
  title: string;
  tip: string;
};

const FRIENDLY_FINDINGS: Record<string, FriendlyFindingCopy> = {
  "unused-javascript": {
    title: "Ongebruikte code vertraagt de site",
    tip: "Er wordt JavaScript geladen die niet nodig is. Minder code betekent sneller laden.",
  },
  "unused-css-rules": {
    title: "Ongebruikte stijlen vertragen de site",
    tip: "Er worden CSS-bestanden geladen die weinig of niet gebruikt worden.",
  },
  "robots-txt": {
    title: "Zoekmachines kunnen de site niet goed indexeren",
    tip: "Het robots.txt-bestand is ongeldig of blokkeert belangrijke pagina's.",
  },
  "heading-order": {
    title: "Paginastructuur is onduidelijk",
    tip: "Koppen staan niet in een logische volgorde. Dat bemoeilijkt navigatie en vindbaarheid.",
  },
  "link-name": {
    title: "Links zijn onduidelijk voor bezoekers",
    tip: "Sommige links hebben geen duidelijke tekst. Dat is lastig voor screenreaders en SEO.",
  },
  "largest-contentful-paint": {
    title: "Hoofdinhoud laadt te traag",
    tip: "Het grootste zichtbare element verschijnt te laat. Optimaliseer afbeeldingen en serversnelheid.",
  },
  "first-contentful-paint": {
    title: "Eerste inhoud verschijnt te laat",
    tip: "Bezoekers zien te lang een lege pagina. Snellere eerste weergave houdt bezoekers vast.",
  },
  "cumulative-layout-shift": {
    title: "Pagina verspringt tijdens het laden",
    tip: "Elementen verschuiven terwijl de pagina laadt. Reserveer ruimte voor afbeeldingen en advertenties.",
  },
  "total-blocking-time": {
    title: "Pagina reageert traag op interactie",
    tip: "Zware scripts blokkeren klikken en scrollen. Splits of stel niet-kritieke scripts uit.",
  },
  "speed-index": {
    title: "Pagina vult zich te traag",
    tip: "De zichtbare inhoud verschijnt te langzaam. Optimaliseer afbeeldingen en kritieke CSS.",
  },
  "render-blocking-resources": {
    title: "Bronnen blokkeren het laden",
    tip: "Scripts of stijlen houden de pagina tegen. Laad niet-essentiële bestanden later.",
  },
  "uses-responsive-images": {
    title: "Afbeeldingen zijn te groot",
    tip: "Afbeeldingen worden in een te hoge resolutie geladen voor mobiel. Gebruik passende formaten.",
  },
  "modern-image-formats": {
    title: "Afbeeldingen kunnen efficiënter",
    tip: "Modernere formaten zoals WebP of AVIF laden sneller zonder kwaliteitsverlies.",
  },
  "offscreen-images": {
    title: "Afbeeldingen buiten beeld laden te vroeg",
    tip: "Afbeeldingen onder de vouw worden meteen geladen. Stel ze uit tot ze nodig zijn.",
  },
  "uses-text-compression": {
    title: "Tekstbestanden zijn niet gecomprimeerd",
    tip: "Comprimeer HTML, CSS en JavaScript zodat ze sneller downloaden.",
  },
  "uses-long-cache-ttl": {
    title: "Bestanden worden niet goed gecached",
    tip: "Statische bestanden kunnen langer in de browser blijven, zodat herhaalde bezoeken sneller gaan.",
  },
  "document-title": {
    title: "Pagina mist een duidelijke titel",
    tip: "Zonder goede titel is de pagina moeilijker te vinden in Google.",
  },
  "meta-description": {
    title: "Pagina mist een beschrijving",
    tip: "Een korte meta-beschrijving helpt in zoekresultaten en klikgedrag.",
  },
  "image-alt": {
    title: "Afbeeldingen missen beschrijvingen",
    tip: "Zonder alt-tekst zijn afbeeldingen onzichtbaar voor screenreaders en minder vindbaar.",
  },
  "color-contrast": {
    title: "Tekst is moeilijk leesbaar",
    tip: "Het contrast tussen tekst en achtergrond is te laag voor veel bezoekers.",
  },
  "button-name": {
    title: "Knoppen missen een duidelijke naam",
    tip: "Sommige knoppen hebben geen leesbare tekst. Dat belemmert toegankelijkheid.",
  },
  "html-has-lang": {
    title: "Taal van de pagina is niet ingesteld",
    tip: "Geef de paginataal aan zodat screenreaders en zoekmachines de inhoud correct interpreteren.",
  },
  "viewport": {
    title: "Mobiele weergave is niet correct ingesteld",
    tip: "Zonder viewport-instelling schaalt de site slecht op smartphones.",
  },
  "is-on-https": {
    title: "Site gebruikt geen veilige verbinding",
    tip: "HTTPS beschermt bezoekers en is belangrijk voor vertrouwen en SEO.",
  },
  "errors-in-console": {
    title: "Er zijn technische fouten op de pagina",
    tip: "Foutmeldingen in de browser kunnen functionaliteit en snelheid verstoren.",
  },
  "font-display": {
    title: "Lettertypes vertragen de weergave",
    tip: "Tekst blijft onzichtbaar tot lettertypes laden. Stel font-display in voor snellere tekst.",
  },
  "network-dependency-tree": {
    title: "Laden hangt te sterk van elkaar af",
    tip: "Bestanden wachten op elkaar voordat ze laden. Verkort deze ketens voor snellere start.",
  },
  "critical-request-chains": {
    title: "Belangrijke bestanden laden te traag achter elkaar",
    tip: "Kritieke bronnen volgen elkaar op. Parallel laden of combineren versnelt de start.",
  },
  "server-response-time": {
    title: "Server reageert te traag",
    tip: "De server doet er te lang over om te antwoorden. Optimaliseer hosting of caching.",
  },
  "redirects": {
    title: "Te veel omleidingen",
    tip: "Extra redirects kosten laadtijd. Verwijs bezoekers zo direct mogelijk door.",
  },
  "crawlable-anchors": {
    title: "Links zijn moeilijk te volgen voor zoekmachines",
    tip: "Sommige links zijn niet crawlbaar. Gebruik gewone HTML-links waar mogelijk.",
  },
  "hreflang": {
    title: "Taalvarianten zijn onduidelijk",
    tip: "Hreflang-instellingen helpen zoekmachines de juiste taalversie te tonen.",
  },
  "canonical": {
    title: "Dubbele pagina's zijn niet duidelijk aangegeven",
    tip: "Een canonical-tag voorkomt dat zoekmachines dezelfde inhoud dubbel indexeren.",
  },
};

function stripMarkdownAndUrls(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, "$1")
    .replace(/https?:\/\/\S+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength).trimEnd();
  const lastSpace = truncated.lastIndexOf(" ");
  const cut = lastSpace > maxLength * 0.6 ? truncated.slice(0, lastSpace) : truncated;
  return `${cut}…`;
}

export function toFriendlyFinding(
  id: string,
  fallbackTitle: string,
  fallbackDescription: string,
): { title: string; description: string } {
  const mapped = FRIENDLY_FINDINGS[id];
  if (mapped) {
    return { title: mapped.title, description: mapped.tip };
  }

  const cleaned = stripMarkdownAndUrls(fallbackDescription);
  return {
    title: fallbackTitle,
    description: cleaned ? truncate(cleaned, 120) : "",
  };
}
