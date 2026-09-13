import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputRoot = path.join(__dirname, "../public/images/blocks");

const FONT = "system-ui,sans-serif";
const COLORS = {
  bg: "#f4f4f5",
  surface: "#ffffff",
  border: "#e4e4e7",
  muted: "#71717a",
  text: "#18181b",
  subtext: "#52525b",
  accent: "#0f766e",
  accentLight: "#ecfdf5",
  accentSoft: "#f0fdf4",
  accentBorder: "#bbf7d0",
  success: "#166534",
  highlight: "#fef3c7",
  shadow: "rgba(24,24,27,0.08)",
};

function esc(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function svgWrap({ label, stepLabel, url, siteName, nav, step, body }) {
  const navItems = nav
    .map(
      (item, index) =>
        `<text x="${920 + index * 72}" y="118" text-anchor="end" fill="${index === 0 ? COLORS.accent : COLORS.subtext}" font-family="${FONT}" font-size="13" font-weight="${index === 0 ? "600" : "500"}">${esc(item)}</text>`,
    )
    .join("\n  ");

  const progress = [1, 2, 3, 4]
    .map((n) => {
      const active = n === step;
      const done = n < step;
      const fill = active ? COLORS.accent : done ? COLORS.accentLight : "#fafafa";
      const stroke = active || done ? COLORS.accent : COLORS.border;
      const textFill = active ? "#ffffff" : done ? COLORS.accent : COLORS.muted;
      return `<circle cx="${520 + (n - 1) * 36}" cy="168" r="14" fill="${fill}" stroke="${stroke}"/>
  <text x="${520 + (n - 1) * 36}" y="173" text-anchor="middle" fill="${textFill}" font-family="${FONT}" font-size="12" font-weight="600">${n}</text>`;
    })
    .join("\n  ");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="750" viewBox="0 0 1200 750" role="img" aria-label="${esc(label)}">
  <defs>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#18181b" flood-opacity="0.08"/>
    </filter>
  </defs>
  <rect width="1200" height="750" fill="${COLORS.bg}"/>
  <rect x="70" y="48" width="1060" height="620" rx="18" fill="${COLORS.surface}" stroke="${COLORS.border}" filter="url(#shadow)"/>
  <circle cx="98" cy="76" r="7" fill="#ef4444"/>
  <circle cx="122" cy="76" r="7" fill="#f59e0b"/>
  <circle cx="146" cy="76" r="7" fill="#22c55e"/>
  <rect x="190" y="64" width="860" height="28" rx="14" fill="#fafafa" stroke="${COLORS.border}"/>
  <text x="210" y="83" fill="${COLORS.muted}" font-family="${FONT}" font-size="13">${esc(url)}</text>
  <rect x="90" y="104" width="1020" height="54" rx="12" fill="#fafafa" stroke="${COLORS.border}"/>
  <rect x="108" y="118" width="28" height="28" rx="8" fill="${COLORS.accentLight}"/>
  <text x="122" y="137" text-anchor="middle" fill="${COLORS.accent}" font-family="${FONT}" font-size="14" font-weight="700">${esc(siteName.charAt(0))}</text>
  <text x="148" y="137" fill="${COLORS.text}" font-family="${FONT}" font-size="16" font-weight="700">${esc(siteName)}</text>
  ${navItems}
  ${progress}
  ${body}
  <text x="600" y="710" text-anchor="middle" fill="${COLORS.muted}" font-family="${FONT}" font-size="24">${esc(stepLabel)}</text>
</svg>`;
}

function card(x, y, w, h, content, options = {}) {
  const stroke = options.stroke ?? COLORS.border;
  const fill = options.fill ?? COLORS.surface;
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" fill="${fill}" stroke="${stroke}"/>
  ${content}`;
}

function button(x, y, w, h, label, primary = true) {
  const fill = primary ? COLORS.accent : "#fafafa";
  const textFill = primary ? "#ffffff" : COLORS.text;
  const stroke = primary ? COLORS.accent : COLORS.border;
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${fill}" stroke="${stroke}"/>
  <text x="${x + w / 2}" y="${y + h / 2 + 6}" text-anchor="middle" fill="${textFill}" font-family="${FONT}" font-size="15" font-weight="600">${esc(label)}</text>`;
}

function field(x, y, w, h, label, value, active = false) {
  const fill = active ? COLORS.accentLight : "#fafafa";
  const stroke = active ? COLORS.accent : COLORS.border;
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="${fill}" stroke="${stroke}"/>
  <text x="${x + 16}" y="${y + 22}" fill="${COLORS.muted}" font-family="${FONT}" font-size="12">${esc(label)}</text>
  <text x="${x + 16}" y="${y + 44}" fill="${COLORS.text}" font-family="${FONT}" font-size="16" font-weight="500">${esc(value)}</text>`;
}

function stars(x, y, count = 5) {
  return Array.from({ length: count })
    .map(
      (_, i) =>
        `<polygon points="${x + i * 22},${y + 12} ${x + i * 22 + 4},${y + 4} ${x + i * 22 + 8},${y + 12} ${x + i * 22 + 2},${y + 8} ${x + i * 22 + 6},${y + 8}" fill="#f59e0b"/>`,
    )
    .join("\n  ");
}

const blocks = {
  aanvraagfilter: {
    siteName: "Garage Peeters",
    url: "garage-peeters.be/contact",
    nav: ["Contact", "Diensten", "Afspraak"],
    steps: [
      {
        label: "Stap 1: formulier starten",
        stepLabel: "Stap 1 - Formulier starten",
        body: `
  <rect x="250" y="210" width="700" height="360" rx="20" fill="${COLORS.surface}" stroke="${COLORS.border}"/>
  <text x="600" y="260" text-anchor="middle" fill="${COLORS.text}" font-family="${FONT}" font-size="28" font-weight="700">Hoe kunnen we helpen?</text>
  <text x="600" y="292" text-anchor="middle" fill="${COLORS.muted}" font-family="${FONT}" font-size="16">Beantwoord enkele korte vragen voor een gerichte doorverwijzing</text>
  ${card(
    320,
    320,
    560,
    120,
    `<text x="350" y="360" fill="${COLORS.subtext}" font-family="${FONT}" font-size="14">Gemiddelde doorlooptijd</text>
  <text x="350" y="390" fill="${COLORS.text}" font-family="${FONT}" font-size="22" font-weight="700">2 minuten</text>
  <text x="350" y="418" fill="${COLORS.muted}" font-family="${FONT}" font-size="14">Banden, herstel, onderhoud of pechhulp</text>`,
  )}
  ${button(470, 470, 260, 48, "Start aanvraag")}`,
      },
      {
        label: "Stap 2: gerichte vragen",
        stepLabel: "Stap 2 - Gerichte vragen",
        body: `
  ${card(
    360,
    210,
    480,
    390,
    `${field(390, 240, 420, 56, "Dienst", "Bandenwissel")}
  ${field(390, 310, 420, 56, "Voertuig", "Peugeot 308")}
  <text x="390" y="400" fill="${COLORS.subtext}" font-family="${FONT}" font-size="14">Is dit dringend?</text>
  <rect x="390" y="412" width="120" height="40" rx="20" fill="${COLORS.accentLight}" stroke="${COLORS.accent}"/>
  <text x="450" y="437" text-anchor="middle" fill="${COLORS.accent}" font-family="${FONT}" font-size="15" font-weight="600">Ja, vandaag</text>
  <rect x="520" y="412" width="120" height="40" rx="20" fill="#fafafa" stroke="${COLORS.border}"/>
  <text x="580" y="437" text-anchor="middle" fill="${COLORS.subtext}" font-family="${FONT}" font-size="15">Nee</text>
  ${button(430, 520, 220, 44, "Volgende stap")}`,
  )}`,
      },
      {
        label: "Stap 3: doorverwijzing",
        stepLabel: "Stap 3 - Automatische doorverwijzing",
        body: `
  ${card(
    220,
    220,
    360,
    300,
    `<text x="250" y="258" fill="${COLORS.muted}" font-family="${FONT}" font-size="13">Aanvraag</text>
  <text x="250" y="288" fill="${COLORS.text}" font-family="${FONT}" font-size="20" font-weight="700">Bandenwissel</text>
  <text x="250" y="318" fill="${COLORS.subtext}" font-family="${FONT}" font-size="15">Peugeot 308 - dringend</text>
  <rect x="250" y="340" width="300" height="1" fill="${COLORS.border}"/>
  <text x="250" y="378" fill="${COLORS.muted}" font-family="${FONT}" font-size="13">Route</text>
  <text x="250" y="408" fill="${COLORS.accent}" font-family="${FONT}" font-size="18" font-weight="700">Bandenafdeling</text>`,
  )}
  <path d="M590 360 H650" stroke="${COLORS.accent}" stroke-width="3" marker-end="url(#arrow)"/>
  ${card(
    670,
    220,
    310,
    300,
    `<text x="700" y="258" fill="${COLORS.muted}" font-family="${FONT}" font-size="13">Contact</text>
  <text x="700" y="288" fill="${COLORS.text}" font-family="${FONT}" font-size="18" font-weight="700">Team Banden</text>
  <text x="700" y="318" fill="${COLORS.subtext}" font-family="${FONT}" font-size="15">03 123 45 67</text>
  <text x="700" y="350" fill="${COLORS.subtext}" font-family="${FONT}" font-size="15">banden@garage-peeters.be</text>
  <rect x="700" y="380" width="240" height="44" rx="22" fill="${COLORS.accentLight}" stroke="${COLORS.accent}"/>
  <text x="820" y="408" text-anchor="middle" fill="${COLORS.accent}" font-family="${FONT}" font-size="14" font-weight="600">Prioriteit: hoog</text>`,
    { fill: COLORS.accentSoft, stroke: COLORS.accentBorder },
  )}`,
      },
      {
        label: "Stap 4: bevestiging",
        stepLabel: "Stap 4 - Bevestiging voor bezoeker",
        body: `
  ${card(
    380,
    220,
    440,
    360,
    `<circle cx="600" cy="290" r="34" fill="${COLORS.accentLight}"/>
  <text x="600" y="300" text-anchor="middle" fill="${COLORS.accent}" font-family="${FONT}" font-size="34">&#10003;</text>
  <text x="600" y="360" text-anchor="middle" fill="${COLORS.text}" font-family="${FONT}" font-size="24" font-weight="700">Bedankt voor uw aanvraag</text>
  <text x="600" y="392" text-anchor="middle" fill="${COLORS.muted}" font-family="${FONT}" font-size="16">We verwijzen u door naar onze bandenafdeling</text>
  <rect x="430" y="420" width="340" height="56" rx="14" fill="#fafafa" stroke="${COLORS.border}"/>
  <text x="600" y="454" text-anchor="middle" fill="${COLORS.text}" font-family="${FONT}" font-size="16">Bel 03 123 45 67 of plan online</text>
  ${button(470, 500, 260, 44, "Plan afspraak")}`,
  )}`,
      },
    ],
  },
  "review-hulp": {
    siteName: "Brasserie De Linde",
    url: "brasserie-de-linde.be/reviews",
    nav: ["Reviews", "Menu", "Reserveren"],
    steps: [
      {
        label: "Stap 1: review plakken",
        stepLabel: "Stap 1 - Review plakken",
        body: `
  ${card(
    250,
    210,
    700,
    380,
    `<text x="280" y="250" fill="${COLORS.text}" font-family="${FONT}" font-size="20" font-weight="700">Google-review plakken</text>
  ${stars(280, 268)}
  <rect x="280" y="300" width="640" height="120" rx="14" fill="#fafafa" stroke="${COLORS.border}"/>
  <text x="300" y="332" fill="${COLORS.subtext}" font-family="${FONT}" font-size="15">"Heerlijk gegeten, maar wachttijd was lang op zaterdag."</text>
  <text x="300" y="360" fill="${COLORS.muted}" font-family="${FONT}" font-size="14">Geplaatst door Sophie V. - 2 dagen geleden</text>
  ${button(430, 450, 220, 44, "Genereer antwoorden")}`,
  )}`,
      },
      {
        label: "Stap 2: antwoordsuggesties",
        stepLabel: "Stap 2 - Antwoordsuggesties",
        body: `
  ${card(250, 210, 700, 92, `<text x="280" y="252" fill="${COLORS.accent}" font-family="${FONT}" font-size="14" font-weight="700">Aanbevolen - Warm</text>
  <text x="280" y="278" fill="${COLORS.text}" font-family="${FONT}" font-size="15">Bedankt voor uw feedback - we werken aan kortere wachttijden op drukke momenten.</text>`, { fill: COLORS.accentLight, stroke: COLORS.accent })}
  ${card(250, 318, 700, 72, `<text x="280" y="348" fill="${COLORS.subtext}" font-family="${FONT}" font-size="14" font-weight="600">Formeel</text>
  <text x="280" y="372" fill="${COLORS.subtext}" font-family="${FONT}" font-size="15">Dank u voor uw review. Wij nemen uw opmerking over wachttijd ter harte.</text>`)}
  ${card(250, 406, 700, 72, `<text x="280" y="436" fill="${COLORS.subtext}" font-family="${FONT}" font-size="14" font-weight="600">Kort</text>
  <text x="280" y="460" fill="${COLORS.subtext}" font-family="${FONT}" font-size="15">Bedankt Sophie! We proberen zaterdag sneller te schakelen.</text>`)}
  ${button(430, 510, 220, 44, "Kies suggestie")}`,
      },
      {
        label: "Stap 3: kiezen en aanpassen",
        stepLabel: "Stap 3 - Kiezen en aanpassen",
        body: `
  ${card(
    250,
    210,
    700,
    340,
    `<text x="280" y="250" fill="${COLORS.text}" font-family="${FONT}" font-size="18" font-weight="700">Geselecteerd antwoord</text>
  <rect x="280" y="270" width="640" height="140" rx="14" fill="#fafafa" stroke="${COLORS.accent}"/>
  <text x="300" y="310" fill="${COLORS.text}" font-family="${FONT}" font-size="15">Bedankt voor uw feedback - we werken aan kortere wachttijden op zaterdag.</text>
  <text x="300" y="340" fill="${COLORS.muted}" font-family="${FONT}" font-size="14">142 tekens - professioneel en vriendelijk</text>
  <rect x="280" y="430" width="180" height="36" rx="18" fill="${COLORS.accentLight}" stroke="${COLORS.accent}"/>
  <text x="370" y="453" text-anchor="middle" fill="${COLORS.accent}" font-family="${FONT}" font-size="14" font-weight="600">Toon warmer</text>
  <rect x="480" y="430" width="180" height="36" rx="18" fill="#fafafa" stroke="${COLORS.border}"/>
  <text x="570" y="453" text-anchor="middle" fill="${COLORS.subtext}" font-family="${FONT}" font-size="14">Maak korter</text>
  ${button(720, 430, 200, 36, "Opslaan", false)}`,
  )}`,
      },
      {
        label: "Stap 4: klaar om te posten",
        stepLabel: "Stap 4 - Klaar om te posten",
        body: `
  ${card(
    340,
    220,
    520,
    340,
    `<circle cx="600" cy="290" r="34" fill="${COLORS.accentLight}"/>
  <text x="600" y="300" text-anchor="middle" fill="${COLORS.accent}" font-family="${FONT}" font-size="34">&#10003;</text>
  <text x="600" y="360" text-anchor="middle" fill="${COLORS.text}" font-family="${FONT}" font-size="22" font-weight="700">Klaar om te posten</text>
  <text x="600" y="392" text-anchor="middle" fill="${COLORS.muted}" font-family="${FONT}" font-size="15">Kopieer en plak in Google Business</text>
  ${button(430, 430, 180, 44, "Kopieer antwoord")}
  ${button(630, 430, 180, 44, "Open Google", false)}`,
  )}`,
      },
    ],
  },
  "digitale-receptie": {
    siteName: "Winkel Janssens",
    url: "winkel-janssens.be",
    nav: ["Assortiment", "Contact", "Openingsuren"],
    steps: [
      {
        label: "Stap 1: hulpvenster",
        stepLabel: "Stap 1 - Hulpvenster opent",
        body: `
  <rect x="220" y="210" width="760" height="340" rx="16" fill="#fafafa" stroke="${COLORS.border}"/>
  <rect x="260" y="250" width="220" height="180" rx="12" fill="${COLORS.surface}" stroke="${COLORS.border}"/>
  <rect x="500" y="250" width="220" height="180" rx="12" fill="${COLORS.surface}" stroke="${COLORS.border}"/>
  <rect x="740" y="250" width="220" height="180" rx="12" fill="${COLORS.surface}" stroke="${COLORS.border}"/>
  <text x="370" y="350" text-anchor="middle" fill="${COLORS.muted}" font-family="${FONT}" font-size="14">Product 1</text>
  <text x="610" y="350" text-anchor="middle" fill="${COLORS.muted}" font-family="${FONT}" font-size="14">Product 2</text>
  <text x="850" y="350" text-anchor="middle" fill="${COLORS.muted}" font-family="${FONT}" font-size="14">Product 3</text>
  ${button(930, 500, 120, 48, "Hulp", true)}`,
      },
      {
        label: "Stap 2: vraag stellen",
        stepLabel: "Stap 2 - Vraag stellen",
        body: `
  ${card(
    640,
    210,
    360,
    390,
    `<rect x="670" y="240" width="300" height="44" rx="12" fill="${COLORS.accentLight}"/>
  <text x="820" y="268" text-anchor="middle" fill="${COLORS.accent}" font-family="${FONT}" font-size="16" font-weight="700">Digitale receptie</text>
  <rect x="670" y="300" width="240" height="56" rx="18" fill="#fafafa" stroke="${COLORS.border}"/>
  <text x="688" y="334" fill="${COLORS.text}" font-family="${FONT}" font-size="15">Zijn jullie zondag open?</text>
  <rect x="670" y="380" width="280" height="64" rx="16" fill="${COLORS.accentSoft}" stroke="${COLORS.accentBorder}"/>
  <text x="688" y="410" fill="${COLORS.success}" font-family="${FONT}" font-size="14">Typ uw vraag of kies een veelgestelde vraag</text>
  <rect x="670" y="470" width="300" height="40" rx="20" fill="#fafafa" stroke="${COLORS.border}"/>
  <text x="688" y="495" fill="${COLORS.muted}" font-family="${FONT}" font-size="14">Stel een vraag...</text>`,
  )}`,
      },
      {
        label: "Stap 3: direct antwoord",
        stepLabel: "Stap 3 - Direct antwoord",
        body: `
  ${card(
    640,
    210,
    360,
    390,
    `<rect x="670" y="240" width="300" height="44" rx="12" fill="${COLORS.accentLight}"/>
  <text x="820" y="268" text-anchor="middle" fill="${COLORS.accent}" font-family="${FONT}" font-size="16" font-weight="700">Digitale receptie</text>
  <rect x="670" y="300" width="240" height="56" rx="18" fill="#fafafa" stroke="${COLORS.border}"/>
  <text x="688" y="334" fill="${COLORS.text}" font-family="${FONT}" font-size="15">Zijn jullie zondag open?</text>
  <rect x="670" y="380" width="300" height="88" rx="16" fill="${COLORS.accentSoft}" stroke="${COLORS.accentBorder}"/>
  <text x="688" y="412" fill="${COLORS.success}" font-family="${FONT}" font-size="15">Ja, op zondag open van 8u tot 12u.</text>
  <text x="688" y="438" fill="${COLORS.muted}" font-family="${FONT}" font-size="13">Gebaseerd op uw openingsuren</text>
  ${button(670, 490, 300, 40, "Nog een vraag", false)}`,
  )}`,
      },
      {
        label: "Stap 4: doorverwijzing",
        stepLabel: "Stap 4 - Doorverwijzing naar afspraak",
        body: `
  ${card(
    640,
    210,
    360,
    390,
    `<rect x="670" y="240" width="300" height="44" rx="12" fill="${COLORS.accentLight}"/>
  <text x="820" y="268" text-anchor="middle" fill="${COLORS.accent}" font-family="${FONT}" font-size="16" font-weight="700">Digitale receptie</text>
  <rect x="670" y="300" width="300" height="72" rx="16" fill="${COLORS.accentSoft}" stroke="${COLORS.accentBorder}"/>
  <text x="688" y="332" fill="${COLORS.success}" font-family="${FONT}" font-size="15">Wilt u meteen reserveren?</text>
  <text x="688" y="356" fill="${COLORS.muted}" font-family="${FONT}" font-size="13">Ik help u met een afspraak op zondagvoormiddag.</text>
  ${button(670, 400, 300, 44, "Plan afspraak")}
  ${button(670, 460, 300, 40, "Liever bellen", false)}`,
  )}`,
      },
    ],
  },
  "bestel-afhaal": {
    siteName: "Bakkerij Janssens",
    url: "bakkerij-janssens.be/bestellen",
    nav: ["Bestellen", "Assortiment", "Afhalen"],
    steps: [
      {
        label: "Stap 1: producten bekijken",
        stepLabel: "Stap 1 - Producten bekijken",
        body: `
  <rect x="220" y="210" width="240" height="200" rx="16" fill="${COLORS.surface}" stroke="${COLORS.border}"/>
  <rect x="240" y="230" width="200" height="100" rx="10" fill="${COLORS.highlight}"/>
  <text x="340" y="360" text-anchor="middle" fill="${COLORS.text}" font-family="${FONT}" font-size="16" font-weight="600">Stokbrood</text>
  <text x="340" y="384" text-anchor="middle" fill="${COLORS.accent}" font-family="${FONT}" font-size="15" font-weight="700">&#8364; 2,00</text>
  <rect x="480" y="210" width="240" height="200" rx="16" fill="${COLORS.surface}" stroke="${COLORS.border}"/>
  <rect x="500" y="230" width="200" height="100" rx="10" fill="#fde68a"/>
  <text x="600" y="360" text-anchor="middle" fill="${COLORS.text}" font-family="${FONT}" font-size="16" font-weight="600">Taart</text>
  <text x="600" y="384" text-anchor="middle" fill="${COLORS.accent}" font-family="${FONT}" font-size="15" font-weight="700">&#8364; 18,00</text>
  <rect x="740" y="210" width="240" height="200" rx="16" fill="${COLORS.surface}" stroke="${COLORS.border}"/>
  <rect x="760" y="230" width="200" height="100" rx="10" fill="#fed7aa"/>
  <text x="860" y="360" text-anchor="middle" fill="${COLORS.text}" font-family="${FONT}" font-size="16" font-weight="600">Croissant</text>
  <text x="860" y="384" text-anchor="middle" fill="${COLORS.accent}" font-family="${FONT}" font-size="15" font-weight="700">&#8364; 1,80</text>
  ${button(430, 450, 220, 44, "In winkelmand")}`,
      },
      {
        label: "Stap 2: winkelmandje",
        stepLabel: "Stap 2 - Winkelmandje vullen",
        body: `
  ${card(
    680,
    210,
    300,
    390,
    `<text x="710" y="250" fill="${COLORS.text}" font-family="${FONT}" font-size="18" font-weight="700">Winkelmandje</text>
  <rect x="710" y="270" width="240" height="56" rx="12" fill="#fafafa" stroke="${COLORS.border}"/>
  <text x="730" y="304" fill="${COLORS.text}" font-family="${FONT}" font-size="15">2&#215; Stokbrood - &#8364; 4,00</text>
  <rect x="710" y="340" width="240" height="56" rx="12" fill="#fafafa" stroke="${COLORS.border}"/>
  <text x="730" y="374" fill="${COLORS.text}" font-family="${FONT}" font-size="15">1&#215; Taart - &#8364; 18,00</text>
  <rect x="710" y="420" width="240" height="1" fill="${COLORS.border}"/>
  <text x="710" y="450" fill="${COLORS.subtext}" font-family="${FONT}" font-size="14">Totaal</text>
  <text x="930" y="450" text-anchor="end" fill="${COLORS.text}" font-family="${FONT}" font-size="18" font-weight="700">&#8364; 22,00</text>
  ${button(710, 520, 240, 44, "Verder")}`,
  )}`,
      },
      {
        label: "Stap 3: afhaalmoment",
        stepLabel: "Stap 3 - Afhaalmoment kiezen",
        body: `
  ${card(
    360,
    210,
    480,
    390,
    `<text x="390" y="250" fill="${COLORS.text}" font-family="${FONT}" font-size="20" font-weight="700">Kies afhaalmoment</text>
  <rect x="390" y="280" width="140" height="44" rx="22" fill="${COLORS.accentLight}" stroke="${COLORS.accent}"/>
  <text x="460" y="308" text-anchor="middle" fill="${COLORS.accent}" font-family="${FONT}" font-size="15" font-weight="600">Vandaag 14u</text>
  <rect x="550" y="280" width="140" height="44" rx="22" fill="#fafafa" stroke="${COLORS.border}"/>
  <text x="620" y="308" text-anchor="middle" fill="${COLORS.subtext}" font-family="${FONT}" font-size="15">Vandaag 17u</text>
  <rect x="710" y="280" width="100" height="44" rx="22" fill="#fafafa" stroke="${COLORS.border}"/>
  <text x="760" y="308" text-anchor="middle" fill="${COLORS.subtext}" font-family="${FONT}" font-size="15">Morgen</text>
  ${field(390, 360, 420, 56, "Naam", "Jan Peeters")}
  ${field(390, 430, 420, 56, "Telefoon", "0471 12 87 27")}
  ${button(490, 520, 220, 44, "Naar betaling")}`,
  )}`,
      },
      {
        label: "Stap 4: betalen en bevestiging",
        stepLabel: "Stap 4 - Betalen en bevestiging",
        body: `
  ${card(
    380,
    220,
    440,
    360,
    `<circle cx="600" cy="290" r="34" fill="${COLORS.accentLight}"/>
  <text x="600" y="300" text-anchor="middle" fill="${COLORS.accent}" font-family="${FONT}" font-size="34">&#10003;</text>
  <text x="600" y="360" text-anchor="middle" fill="${COLORS.text}" font-family="${FONT}" font-size="24" font-weight="700">Bestelling bevestigd</text>
  <text x="600" y="392" text-anchor="middle" fill="${COLORS.muted}" font-family="${FONT}" font-size="16">Afhalen vandaag om 14u - order #1042</text>
  <rect x="430" y="420" width="340" height="56" rx="14" fill="#fafafa" stroke="${COLORS.border}"/>
  <text x="600" y="454" text-anchor="middle" fill="${COLORS.text}" font-family="${FONT}" font-size="16">Bancontact - &#8364; 22,00 betaald</text>
  ${button(470, 500, 260, 44, "Bekijk bestelling")}`,
  )}`,
      },
    ],
  },
  cadeaubon: {
    siteName: "Cadeau Atelier",
    url: "cadeau-atelier.be/cadeaubon",
    nav: ["Cadeaubon", "Collecties", "Contact"],
    steps: [
      {
        label: "Stap 1: bedrag kiezen",
        stepLabel: "Stap 1 - Bedrag kiezen",
        body: `
  ${card(
    360,
    210,
    480,
    390,
    `<text x="600" y="260" text-anchor="middle" fill="${COLORS.text}" font-family="${FONT}" font-size="22" font-weight="700">Kies een bedrag</text>
  <rect x="390" y="290" width="100" height="48" rx="24" fill="${COLORS.accentLight}" stroke="${COLORS.accent}"/>
  <text x="440" y="320" text-anchor="middle" fill="${COLORS.accent}" font-family="${FONT}" font-size="16" font-weight="700">&#8364; 25</text>
  <rect x="510" y="290" width="100" height="48" rx="24" fill="#fafafa" stroke="${COLORS.border}"/>
  <text x="560" y="320" text-anchor="middle" fill="${COLORS.subtext}" font-family="${FONT}" font-size="16">&#8364; 50</text>
  <rect x="630" y="290" width="100" height="48" rx="24" fill="#fafafa" stroke="${COLORS.border}"/>
  <text x="680" y="320" text-anchor="middle" fill="${COLORS.subtext}" font-family="${FONT}" font-size="16">&#8364; 100</text>
  <text x="600" y="380" text-anchor="middle" fill="${COLORS.muted}" font-family="${FONT}" font-size="15">Direct per e-mail te versturen</text>
  ${button(490, 520, 220, 44, "Volgende stap")}`,
  )}`,
      },
      {
        label: "Stap 2: personaliseren",
        stepLabel: "Stap 2 - Personaliseren",
        body: `
  ${card(
    300,
    210,
    600,
    390,
    `<text x="330" y="250" fill="${COLORS.text}" font-family="${FONT}" font-size="20" font-weight="700">Personaliseer uw cadeaubon</text>
  ${field(330, 280, 540, 56, "Ontvanger", "Sarah Janssens")}
  ${field(330, 350, 540, 56, "Afzender", "Familie De Smet")}
  <rect x="330" y="420" width="540" height="100" rx="14" fill="#fafafa" stroke="${COLORS.border}"/>
  <text x="350" y="450" fill="${COLORS.muted}" font-family="${FONT}" font-size="12">Persoonlijke boodschap</text>
  <text x="350" y="478" fill="${COLORS.text}" font-family="${FONT}" font-size="15">Veel plezier met uw cadeau!</text>
  ${button(490, 540, 220, 44, "Naar betaling")}`,
  )}`,
      },
      {
        label: "Stap 3: online betalen",
        stepLabel: "Stap 3 - Online betalen",
        body: `
  ${card(
    380,
    210,
    440,
    390,
    `<text x="600" y="260" text-anchor="middle" fill="${COLORS.text}" font-family="${FONT}" font-size="22" font-weight="700">&#8364; 50,00</text>
  <text x="600" y="290" text-anchor="middle" fill="${COLORS.muted}" font-family="${FONT}" font-size="15">Cadeaubon voor Sarah Janssens</text>
  <rect x="430" y="320" width="340" height="64" rx="14" fill="${COLORS.accentLight}" stroke="${COLORS.accent}"/>
  <text x="600" y="358" text-anchor="middle" fill="${COLORS.accent}" font-family="${FONT}" font-size="18" font-weight="700">Bancontact</text>
  <rect x="430" y="410" width="340" height="48" rx="24" fill="#fafafa" stroke="${COLORS.border}"/>
  <text x="600" y="440" text-anchor="middle" fill="${COLORS.subtext}" font-family="${FONT}" font-size="15">iDEAL / creditcard</text>
  ${button(470, 520, 260, 44, "Betalen")}`,
  )}`,
      },
      {
        label: "Stap 4: bon per e-mail",
        stepLabel: "Stap 4 - Bon per e-mail",
        body: `
  ${card(
    300,
    210,
    600,
    390,
    `<rect x="430" y="240" width="340" height="180" rx="16" fill="${COLORS.accentLight}" stroke="${COLORS.accent}"/>
  <text x="600" y="290" text-anchor="middle" fill="${COLORS.accent}" font-family="${FONT}" font-size="18" font-weight="700">Cadeaubon</text>
  <text x="600" y="330" text-anchor="middle" fill="${COLORS.text}" font-family="${FONT}" font-size="32" font-weight="700">&#8364; 50</text>
  <text x="600" y="360" text-anchor="middle" fill="${COLORS.subtext}" font-family="${FONT}" font-size="15">Voor Sarah Janssens</text>
  <text x="600" y="460" text-anchor="middle" fill="${COLORS.text}" font-family="${FONT}" font-size="18" font-weight="700">Verstuurd per e-mail</text>
  <text x="600" y="490" text-anchor="middle" fill="${COLORS.muted}" font-family="${FONT}" font-size="15">sarah.janssens@email.be</text>
  ${button(490, 540, 220, 44, "Nieuwe bon", false)}`,
  )}`,
      },
    ],
  },
};

async function main() {
  for (const [slug, config] of Object.entries(blocks)) {
    const dir = path.join(outputRoot, slug);
    await mkdir(dir, { recursive: true });

    for (const [index, stepConfig] of config.steps.entries()) {
      const svg = svgWrap({
        label: stepConfig.label,
        stepLabel: stepConfig.stepLabel,
        url: config.url,
        siteName: config.siteName,
        nav: config.nav,
        step: index + 1,
        body: stepConfig.body,
      });
      const filePath = path.join(dir, `step-${index + 1}.svg`);
      await writeFile(filePath, `${svg}\n`, "utf8");
    }
  }
}

await main();
