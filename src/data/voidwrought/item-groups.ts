import type { Location as L, Locations as LS } from "@/components/maps/Map.astro";

export const sectors = [
  'the-abandoned-expedition',
  'the-commons',
  'the-court',
  'the-grand-bazaar',
  'the-lost-garden-1',
  'the-lost-garden-2',
  'the-mirrorways',
  'the-obsidian-observatory',
  'the-old-waters-1',
  'the-old-waters-2',
  'the-old-waters-3',
  'the-repository-of-the-unknown-1',
  'the-repository-of-the-unknown-2',
  'the-shrine',
  'the-surface',
] as const;
export type Sector = typeof sectors[number];

export type Location = L<Sector>;
export type Locations<V extends Location> = LS<Sector, V>;

interface Unordered extends Location {
  id: `u${string}${number}`;
}

//---- Ancient Ciphers ----//

interface AncientCipher extends Location {
  id: `ac${Capitalize<string>}`;
  name: `Ancient Cipher${string}`;
}

export const ac = {
} satisfies Locations<AncientCipher>;

//---- Artifact Fragments ----//

interface ArtifactFragment extends Location {
  id: `af${Capitalize<string>}`;
  name: 'Artifact Fragment';
}

export const af = {
  af01: { id: 'af01', sector: 'the-commons', x: 38.5, y: 61.8, name: 'Artifact Fragment', type: 'artifact-fragment' },
  af02: { id: 'af02', sector: 'the-commons', x: 37.5, y: 65.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['bTc'] },
  af03: { id: 'af03', sector: 'the-commons', x: 38.5, y: 54.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sLg'] },
  af04: { id: 'af04', sector: 'the-commons', x: 41.5, y: 53.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sLg'] },
  af05: { id: 'af05', sector: 'the-abandoned-expedition', x: 59.6, y: 47.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sLg'] },
  af06: { id: 'af06', sector: 'the-abandoned-expedition', x: 61.7, y: 52.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sTp', 'mb03'] },
  af07: { id: 'af07', sector: 'the-abandoned-expedition', x: 63.6, y: 50.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sLg'] },
  af100: { id: 'af100', sector: 'the-abandoned-expedition', x: 67.7, y: 47.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sDj'] },
} satisfies Locations<ArtifactFragment>;

//---- Bosses and Minibosses ----//

interface Boss extends Location {
  id: `b${Capitalize<string>}`;
  name: `Boss${string}`;
  status: 'important';
}
interface MiniBoss extends Location {
  id: `mb${Capitalize<string>}`;
  name: `Miniboss${string}`;
}

export const b = {
  bTc: { id: 'bTc', sector: 'the-commons', x: 41.5, y: 67.8, name: 'Boss - The Council', status: 'important', type: 'boss' },
  bEE: { id: 'bEE', sector: 'the-abandoned-expedition', x: 64, y: 47.8, name: 'Boss - The Eternal Engine', status: 'important', type: 'boss', depends: ['sLg'] },
  mb01: { id: 'mb01', sector: 'the-commons', x: 36.5, y: 69.8, name: 'Miniboss', type: 'miniboss', depends: ['bTc'] },
  mb02: { id: 'mb02', sector: 'the-commons', x: 37.5, y: 59.8, name: 'Miniboss', type: 'miniboss', depends: ['sSld'] },
  mb03: { id: 'mb03', sector: 'the-abandoned-expedition', x: 61.7, y: 52.8, name: 'Miniboss', type: 'miniboss', depends: ['sLg', 'sTp'] },
} satisfies Locations<Boss | MiniBoss>;

//---- Commune ----//

interface Commune extends Location {
  id: `c${Capitalize<string>}`;
}

export const c = {
  c01: { id: 'c01', sector: 'the-commons', x: 36.5, y: 55.8, name: 'Commune - The Faithful', type: 'commune' },
  c02: { id: 'c02', sector: 'the-abandoned-expedition', x: 72.6, y: 49.7, name: 'Commune - Journey\'s End', type: 'commune', depends: ['sLg', 'sTp-e'] },
  c03: { id: 'c03', sector: 'the-abandoned-expedition', x: 63.6, y: 51.8, name: 'Commune - Outsiders', type: 'commune', depends: ['sTp'] },
} satisfies Locations<Commune>;

//---- Devotees ----//

interface Devotee extends Location {
  id: `d${number}`;
  name: `Devotee${string}`;
}

export const d = {
  d01: { id: 'd01', sector: 'the-commons', x: 38.5, y: 67.8, name: 'Devotees (+2)', type: 'devotee', depends: ['bTc'] },
  d02: { id: 'd02', sector: 'the-commons', x: 39.5, y: 71.8, name: 'Devotee', type: 'devotee', depends: ['bTc'] },
  d03: { id: 'd03', sector: 'the-abandoned-expedition', x: 59.6, y: 45.7, name: 'Devotee', type: 'devotee', depends: ['sPd'] },
  d04: { id: 'd04', sector: 'the-lost-garden-1', x: 93.7, y: 53.8, name: 'Devotee', type: 'devotee', depends: ['sSt'] },
  d05: { id: 'd05', sector: 'the-lost-garden-1', x: 91.7, y: 39.8, name: 'Devotee', type: 'devotee', depends: ['sSt'] },
  d06: { id: 'd06', sector: 'the-lost-garden-1', x: 75.7, y: 56.8, name: 'Devotee', type: 'devotee', depends: ['sSt'] },
  d07: { id: 'd07', sector: 'the-court', x: 32.5, y: 54.8, name: 'Devotee', type: 'devotee', depends: ['sSt'] },
  d08: { id: 'd08', sector: 'the-lost-garden-2', x: 85.7, y: 62.8, name: 'Devotee', type: 'devotee', depends: ['sSt'] },
} satisfies Locations<Devotee>;

//---- Divine Remnants ----//

interface DivineRemnant extends Location {
  id: `dr${number}`;
  name: `Divine Remnant${string}`;
  type: 'divine-remnant';
}

export const dr = {
  dr01: { id: 'dr01', sector: 'the-commons', x: 43.5, y: 52.7, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sSld'] },
  dr02: { id: 'dr02', sector: 'the-commons', x: 35.5, y: 70.8, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sTp'] },
  dr03: { id: 'dr03', sector: 'the-commons', x: 37.5, y: 61.8, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sDj'] },
} satisfies Locations<DivineRemnant>;

//---- Dormant salt receptables ----//

interface DormantSalt extends Location {
  id: `dsr${number}`;
  name: 'Dormant salt receptable';
  type: 'dormant-salt-receptable';
}

export const dsr = {
  dsr01: { id: 'dsr01', sector: 'the-shrine', x: 49.5, y: 51.8, name: 'Dormant salt receptable', type: 'dormant-salt-receptable' },
  dsr02: { id: 'dsr02', sector: 'the-commons', x: 37.5, y: 54.8, name: 'Dormant salt receptable', type: 'dormant-salt-receptable' },
  dsr03: { id: 'dsr03', sector: 'the-commons', x: 42.5, y: 58.8, name: 'Dormant salt receptable', type: 'dormant-salt-receptable', depends: ['sSt'] },
  dsr04: { id: 'dsr04', sector: 'the-surface', x: 39.5, y: 44.7, name: 'Dormant salt receptable', type: 'dormant-salt-receptable', depends: ['sSt'] },
  dsr05: { id: 'dsr05', sector: 'the-grand-bazaar', x: 57.5, y: 50.8, name: 'Dormant salt receptable', type: 'dormant-salt-receptable', depends: ['sSt'] },
} satisfies Locations<DormantSalt | Unordered>;

//---- Envoys ----//

interface Envoy extends Location {
  id: `e${number}`;
  name: `Envoy${string}`;
}

export const e = {
  e01: { id: 'e01', sector: 'the-commons', x: 38.5, y: 57.8, name: 'Envoy', type: 'envoy' },
} satisfies Locations<Envoy>;

//---- Journal Entries ----//

interface JournalEntry extends Location {
  id: `je${Capitalize<string>}`;
  name: `Journal Entry${string}`;
}

export const je = {
  jeTr: { id: 'jeTr', sector: 'the-commons', x: 42.5, y: 52.7, name: 'Journal Entry - The Rods', type: 'journal-entry' },
  jeIsi: { id: 'jeIsi', sector: 'the-commons', x: 39.5, y: 69.8, name: 'Journal Entry - I saw it', type: 'journal-entry', depends: ['bTc'] },
  jeTn: { id: 'jeTn', sector: 'the-abandoned-expedition', x: 73.6, y: 47.8, name: 'Journal Entry - The navigator', type: 'journal-entry', depends: ['sPd'] },
} satisfies Locations<JournalEntry>;

//---- Metal Ingots ----//

interface MetalIngot extends Location {
  id: `mi${number}`;
  name: 'Metal ingot';
  type: 'metal-ingot';
}

export const mi = {
  mi01: { id: 'mi01', sector: 'the-commons', x: 37.5, y: 68.8, name: 'Metal ingot', type: 'metal-ingot', depends: ['bTc'] },
  mi02: { id: 'mi02', sector: 'the-commons', x: 42.5, y: 51.8, name: 'Metal ingot', type: 'metal-ingot', depends: ['sLg'] },
  mi03: { id: 'mi03', sector: 'the-commons', x: 42.5, y: 59.8, name: 'Metal ingot', type: 'metal-ingot', depends: ['sCa'] },
  mi04: { id: 'mi04', sector: 'the-abandoned-expedition', x: 67.7, y: 48.8, name: 'Metal ingot', type: 'metal-ingot', depends: ['sTp', 'sPd'] },
} satisfies Locations<MetalIngot>;

//---- Others ----//

export const o = {
  oAs: { id: 'oAs', sector: 'the-shrine', x: 48.6, y: 51.8, name: 'Awakening - Start', type: 'other' },
} satisfies Locations<Location>;

//---- Quests ----//

interface Quest extends Location {
  id: `q${Capitalize<string>}`;
  name: `Quest${string}`;
  type: 'quest';
}

export const q = {
  qPr: { id: 'qPr', sector: 'the-abandoned-expedition', x: 68.7, y: 51.8, name: 'Quest - Putrid Remains', type: 'quest', depends: ['qLc'] },
  qLc: { id: 'qLc', sector: 'the-abandoned-expedition', x: 64.6, y: 49.7, name: 'Quest - Lone Crewman', type: 'quest', depends: ['qPr'] },
} satisfies Locations<Quest>;

//---- Relics ----//

interface Relic extends Location {
  id: `r${Capitalize<string>}`;
  name: `Relic${string}`;
  type: 'relic';
}

export const r = {
  rCor: { id: 'rCor', sector: 'the-commons', x: 43.5, y: 71.8, name: 'Relic - Claws of Rahtek', type: 'relic', depends: ['bTc'] },
  rLt: { id: 'rLt', sector: 'the-commons', x: 38.5, y: 62.9, name: 'Relic - Living Talon', type: 'relic', depends: ['sDj'] },
} satisfies Locations<Relic>;

//---- Simulacrum ----//

interface Simulacrum extends Location {
  id: `s${Capitalize<string>}`;
  name: `Simulacrum${string}`;
  type: 'simulacrum';
}

export const s = {
  sSld: { id: 'sSld', sector: 'the-commons', x: 35.5, y: 53.8, name: 'Simulacrum - Adaptation (slide)', status: 'important', type: 'simulacrum' },
  sDj: { id: 'sDj', sector: 'the-commons', x: 32.4, y: 70.8, name: 'Simulacrum - Hollow Cartilage (double jump)', status: 'important', type: 'simulacrum', depends: ['sSld'] },
  sLg: { id: 'sLg', sector: 'the-commons', x: 39.5, y: 67.8, name: 'Simulacrum - Improved Ligaments (ledge grab)', status: 'important', type: 'simulacrum', depends: ['sSld', 'bTc'] },
  sTp: { id: 'sTp', sector: 'the-shrine', x: 50.5, y: 54.8, name: 'Simulacrum - Phased Flesh (teleport)', status: 'important', type: 'simulacrum' },
  sWc: { id: 'sWc', sector: 'the-grand-bazaar', x: 46.5, y: 58.8, name: 'Simulacrum - Spurs (wall climb)', status: 'important', type: 'simulacrum' },
  sPd: { id: 'sPd', sector: 'the-abandoned-expedition', x: 62.7, y: 47.8, name: 'Simulacrum - Augmented Cortex (possess devices)', status: 'important', type: 'simulacrum' },
  sD: { id: 'sD', sector: 'the-lost-garden-1', x: 92.7, y: 56.8, name: 'Simulacrum - Twitch Fibers (dash)', status: 'important', type: 'simulacrum' },
  sH: { id: 'sH', sector: 'the-lost-garden-1', x: 96.8, y: 52.8, name: 'Simulacrum - Entozoon Sac (hook)', status: 'important', type: 'simulacrum' },
  sCa: { id: 'sCa', sector: 'the-court', x: 32.5, y: 54.8, name: 'Simulacrum - Awakened Arm (charged attack)', status: 'important', type: 'simulacrum' },
  sSlt: { id: 'sSlt', sector: 'the-lost-garden-2', x: 85.7, y: 62.8, name: 'Simulacrum - Unstable Nuclei (slither)', status: 'important', type: 'simulacrum' },
} satisfies Locations<Simulacrum>;

//---- Souls ----//

interface Souls extends Location {
  id: `so${number}`;
  name: `Soul${string}`;
  type: 'soul';
}

export const so = {
  so01: { id: 'so01', sector: 'the-commons', x: 38.5, y: 69.8, name: 'Soul', type: 'soul', depends: ['bTc'] },
} satisfies Locations<Souls>;

//---- Shard of Vitae ----//

interface Shard extends Location {
  id: `sv${number}`;
  name: `Shard of Vitae${string}`;
  type: 'shard-of-vitae';
}

export const sv = {
  sv01: { id: 'sv01', sector: 'the-commons', x: 43.5, y: 51.8, name: 'Shard of Vitae', type: 'shard-of-vitae' },
  sv02: { id: 'sv02', sector: 'the-commons', x: 36.5, y: 69.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['mb01'] },
  sv03: { id: 'sv03', sector: 'the-commons', x: 37.5, y: 64.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['bTc'] },
  sv04: { id: 'sv04', sector: 'the-commons', x: 41.5, y: 60.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sLg'] },
  sv05: { id: 'sv05', sector: 'the-commons', x: 36.5, y: 59.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sSld', 'mb02'] },
  sv06: { id: 'sv06', sector: 'the-commons', x: 39.5, y: 54.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sTp'] },
  sv07: { id: 'sv07', sector: 'the-abandoned-expedition', x: 59.6, y: 50.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sTp'] },
  sv08: { id: 'sv08', sector: 'the-abandoned-expedition', x: 61.7, y: 50.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sLg-h', 'sWc-e', 'sDj-n'] },
  sv09: { id: 'sv09', sector: 'the-abandoned-expedition', x: 73.6, y: 47.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sLg-h', 'sPd', 'sWc-e', 'sDj-n'] },
  sv100: { id: 'sv100', sector: 'the-abandoned-expedition', x: 69.6, y: 45.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sLg'] },
  sv101: { id: 'sv101', sector: 'the-abandoned-expedition', x: 73.6, y: 45.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sLg'] },
  sv102: { id: 'sv102', sector: 'the-abandoned-expedition', x: 71.6, y: 51.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sLg'] },
  sv103: { id: 'sv103', sector: 'the-commons', x: 38.5, y: 63.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sLg'] },
  sv104: { id: 'sv104', sector: 'the-commons', x: 42.5, y: 63.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sWc'] },
  sv106: { id: 'sv106', sector: 'the-commons', x: 38.5, y: 68.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sDj'] },
  sv107: { id: 'sv107', sector: 'the-shrine', x: 47.5, y: 53.8, name: 'Shard of Vitae', type: 'shard-of-vitae' },
  sv108: { id: 'sv108', sector: 'the-court', x: 16.4, y: 62.8, name: 'Shard of Vitae', type: 'shard-of-vitae' },
  sv109: { id: 'sv109', sector: 'the-court', x: 21.5, y: 59.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sCa'] },
  sv110: { id: 'sv110', sector: 'the-court', x: 25.5, y: 47.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sCa'] },
  sv111: { id: 'sv111', sector: 'the-court', x: 27.5, y: 48.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sCa'] },
  sv112: { id: 'sv112', sector: 'the-old-waters-1', x: 39.5, y: 44.7, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: [] },
} satisfies Locations<Shard>;

//---- Unknown ----//

export const u = {
} satisfies Locations<Location>;
