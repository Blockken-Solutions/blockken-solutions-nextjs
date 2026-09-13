import type { SectorTypicalPackage } from "@/content/types";

export const PILOT_NOTE =
  "blockken.solutions is nieuw — wij zoeken 2–3 proefklanten per sector. Als proefklant krijgt u een scherp tarief, extra begeleiding en directe invloed op het product.";

export const DEFAULT_TYPICAL_PACKAGE: SectorTypicalPackage = {
  tierName: "Website + Blocks",
  setupPrice: "Vanaf € 1.899",
  monthlyPrice: "Vanaf € 149/mnd",
  includedBlocksNote: "1 Block naar keuze inbegrepen",
  extraBlockNote: "Extra Blocks vanaf € 399 eenmalig + € 15–29/mnd per stuk",
  pilotSetupPrice: "Vanaf € 1.329 setup (30% proefklantkorting)",
  roiScenario:
    "Typisch scenario: 10 telefoontjes per dag over dezelfde vragen × 3 min = 30 min/dag = 2,5 uur per week.",
};

export function getTypicalPackageForSector(
  overrides?: Partial<SectorTypicalPackage>,
): SectorTypicalPackage {
  return { ...DEFAULT_TYPICAL_PACKAGE, ...overrides };
}
