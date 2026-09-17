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

export interface Location<
  I extends string = string,
  T extends string = string,
  N extends string = `${Capitalize<T>}`,
> extends L<Sector> {
  id: `${I}${string}`;
  name: `${N}${string}`;
  type: `${T}${string}`;
}
export type Locations<V extends Location> = LS<Sector, V>;

interface Unordered extends Location<'u'> { }

//---- Ancient Ciphers ----//

type AncientCipher =
  | Location<'ac', 'ancient-cipher', 'Ancient Cipher'>
  | Location<'ac', 'ancient-shrine', 'Ancient Shrine'>;

export const ac = {
  ac00c: { id: 'ac00c', sector: 'the-shrine', x: 46.5, y: 51.8, name: 'Ancient Cipher', type: 'ancient-cipher', depends: ['oQb-r'], info: '500$ + 2 Divine Remnants + 150 trace metals (optional).' },
  ac00s: { id: 'ac00s', sector: 'the-shrine', x: 46.5, y: 54.8, name: 'Ancient Shrine', type: 'ancient-shrine', depends: ['sPd'], info: ['9 devotees + 8800$', '(300$ + 500$ + 8000$)'] },
  ac01c: { id: 'ac01c', sector: 'the-commons', x: 28.4, y: 71.8, name: 'Ancient Cipher', type: 'ancient-cipher', depends: ['sWc-n'] },
  ac01s: { id: 'ac01s', sector: 'the-commons', x: 36.5, y: 61.8, name: 'Ancient Shrine', type: 'ancient-shrine', depends: ['sPd', 'ac00c-e'] },
  ac21c: { id: 'ac21c', sector: 'the-lost-garden-1', x: 96.7, y: 45.7, name: 'Ancient Cipher', type: 'ancient-cipher', depends: ['soTi-e', 'sSlt-n', 'sD-h'] },
  ac21s: { id: 'ac21s', sector: 'the-lost-garden-1', x: 74.6, y: 56.8, name: 'Ancient Shrine', type: 'ancient-shrine' },
  ac41c: { id: 'ac41c', sector: 'the-grand-bazaar', x: 60.5, y: 64.8, name: 'Ancient Cipher', type: 'ancient-cipher', depends: ['sDj', 'oOp42-r'] },
  ac41s: { id: 'ac41s', sector: 'the-grand-bazaar', x: 58.5, y: 67.8, name: 'Ancient Shrine', type: 'ancient-shrine', depends: ['sPd', 'oOp42-r'] },
  ac42c: { id: 'ac42c', sector: 'the-grand-bazaar', x: 43.5, y: 58.8, name: 'Ancient Cipher', type: 'ancient-cipher', depends: ['sWc-r', 'bTs-r'] },
} as const satisfies Locations<AncientCipher>;

//---- Artifact Fragments ----//

type ArtifactFragment = Location<'af', 'artifact-fragment', 'Artifact Fragment'>;

export const af = {
  af01: { id: 'af01', sector: 'the-commons', x: 38.5, y: 61.8, name: 'Artifact Fragment', type: 'artifact-fragment' },
  af02: { id: 'af02', sector: 'the-commons', x: 37.5, y: 65.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['bTc'] },
  af03: { id: 'af03', sector: 'the-commons', x: 38.5, y: 54.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sLg'] },
  af04: { id: 'af04', sector: 'the-commons', x: 41.5, y: 53.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sLg'] },
  af05: { id: 'af05', sector: 'the-commons', x: 42.5, y: 49.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sLg'] },
  af06: { id: 'af06', sector: 'the-commons', x: 34.4, y: 67.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sCa'] },
  af07: { id: 'af07', sector: 'the-commons', x: 38.5, y: 71.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sSlt'] },
  af08: { id: 'af08', sector: 'the-commons', x: 30.4, y: 69.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sSlt'] },
  af11: { id: 'af11', sector: 'the-abandoned-expedition', x: 71.6, y: 50.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sDj'] },
  af12: { id: 'af12', sector: 'the-abandoned-expedition', x: 59.6, y: 47.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sLg'] },
  af13: { id: 'af13', sector: 'the-abandoned-expedition', x: 63.6, y: 50.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sLg'] },
  af14: { id: 'af14', sector: 'the-abandoned-expedition', x: 61.7, y: 52.8, name: 'Artifact Fragment - Reward', type: 'artifact-fragment', depends: ['sTp', 'mb11'] },
  af15: { id: 'af15', sector: 'the-abandoned-expedition', x: 62.6, y: 45.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sLg'] },
  af16: { id: 'af16', sector: 'the-abandoned-expedition', x: 66.6, y: 47.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sH'] },
  af21: { id: 'af21', sector: 'the-lost-garden-1', x: 86.7, y: 52.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sLg'] },
  af22: { id: 'af22', sector: 'the-lost-garden-1', x: 92.7, y: 50.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: [] },
  af23: { id: 'af23', sector: 'the-lost-garden-1', x: 91.7, y: 45.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sDj-e', 'sSlt-n'] },
  af24: { id: 'af24', sector: 'the-lost-garden-1', x: 92.7, y: 53.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sWc-n', 'sSlt-n'] },
  af25: { id: 'af25', sector: 'the-lost-garden-1', x: 90.7, y: 43.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['soTi', 'sSlt'] },
  af26: { id: 'af26', sector: 'the-lost-garden-1', x: 90.7, y: 42.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['soTi', 'sSlt'] },
  af27: { id: 'af27', sector: 'the-lost-garden-1', x: 89.7, y: 42.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['soTi', 'sSlt'] },
  af28: { id: 'af28', sector: 'the-lost-garden-1', x: 81.7, y: 41.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['soTi', 'sSlt'] },
  af29: { id: 'af29', sector: 'the-lost-garden-1', x: 80.7, y: 42.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['soTi', 'sSlt'] },
  af2a: { id: 'af2a', sector: 'the-lost-garden-1', x: 79.7, y: 42.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['soTi', 'sSlt'] },
  af2b: { id: 'af2b', sector: 'the-lost-garden-1', x: 83.7, y: 47.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['soTi', 'sSlt'] },
  af31: { id: 'af31', sector: 'the-court', x: 28.5, y: 53.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sD'] },
  af32: { id: 'af32', sector: 'the-court', x: 31.5, y: 54.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sD'] },
  af33: { id: 'af33', sector: 'the-court', x: 35.4, y: 55.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sD'] },
  af34: { id: 'af34', sector: 'the-court', x: 26.4, y: 56.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sD'] },
  af35: { id: 'af35', sector: 'the-court', x: 27.4, y: 56.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sD'] },
  af36: { id: 'af36', sector: 'the-court', x: 26.4, y: 55.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sH'] },
  af37: { id: 'af37', sector: 'the-court', x: 30.4, y: 50.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sDj-e', 'sWc-e', 'sH-e'] },
  af38: { id: 'af38', sector: 'the-court', x: 26.4, y: 50.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sDj'] },
  af39: { id: 'af39', sector: 'the-court', x: 26.4, y: 50.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sD'] },
  af3a: { id: 'af3a', sector: 'the-court', x: 26.4, y: 49.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sDj'] },
  af3b: { id: 'af3b', sector: 'the-court', x: 23.4, y: 48.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sDj'] },
  af3c: { id: 'af3c', sector: 'the-court', x: 22.4, y: 48.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sDj'] },
  af3d: { id: 'af3d', sector: 'the-court', x: 24.4, y: 53.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sSlt'] },
  af3e: { id: 'af3e', sector: 'the-court', x: 26.4, y: 47.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sH-e', 'sSlt-d'] },
  af3f: { id: 'af3f', sector: 'the-court', x: 17.4, y: 48.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sDj', 'sD'] },
  af3g: { id: 'af3g', sector: 'the-court', x: 17.4, y: 48.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sDj', 'sD'] },
  af3h: { id: 'af3h', sector: 'the-court', x: 17.4, y: 48.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sDj', 'sD'] },
  af41: { id: 'af41', sector: 'the-grand-bazaar', x: 52.5, y: 63.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sDj'] },
  af42: { id: 'af42', sector: 'the-grand-bazaar', x: 59.5, y: 60.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sDj-e'] },
  af51: { id: 'af51', sector: 'the-old-waters-1', x: 37.5, y: 47.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sSlt'] },
  af61: { id: 'af61', sector: 'the-repository-of-the-unknown-1', x: 69.6, y: 67.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sSlt'] },
  af62: { id: 'af62', sector: 'the-repository-of-the-unknown-1', x: 69.6, y: 67.8, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sSlt'] },
  af71: { id: 'af71', sector: 'the-surface', x: 34.5, y: 44.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sWc'] },
  af72: { id: 'af72', sector: 'the-surface', x: 36.5, y: 44.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sH-e', 'sSlt-n', 'sWc-n'] },
  af73: { id: 'af73', sector: 'the-surface', x: 37.5, y: 44.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sH-e', 'sSlt-n', 'sWc-n'] },
  af74: { id: 'af74', sector: 'the-surface', x: 45.5, y: 37.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sSlt'], info: 'Access from left room.' },
  af75: { id: 'af75', sector: 'the-surface', x: 49.5, y: 37.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sWc-e', 'sH-n'] },
  af81: { id: 'af81', sector: 'the-obsidian-observatory', x: 81.6, y: 35.7, name: 'Artifact Fragment', type: 'artifact-fragment', status: 'hard', info: 'Jumping over the enemy, wall climb + double jump + dash, or use slither starting on the left wall.' },
  af82: { id: 'af82', sector: 'the-obsidian-observatory', x: 77.6, y: 34.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sSlt'] },
  af83: { id: 'af83', sector: 'the-obsidian-observatory', x: 78.6, y: 32.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sSld', 'sWc'] },
  af84: { id: 'af84', sector: 'the-obsidian-observatory', x: 75.6, y: 27.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: ['sCa', 'sWc'] },
  af91: { id: 'af91', sector: 'the-mirrorways', x: 9.3, y: 55.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: [] },
  af92: { id: 'af92', sector: 'the-mirrorways', x: 3.3, y: 51.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: [] },
  af93: { id: 'af93', sector: 'the-mirrorways', x: 2.3, y: 53.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: [] },
  af94: { id: 'af94', sector: 'the-mirrorways', x: 1.3, y: 55.7, name: 'Artifact Fragment', type: 'artifact-fragment', depends: [] },
} as const satisfies Locations<ArtifactFragment>;

//---- Bosses and Minibosses ----//

interface Boss extends Location<'b', 'boss'> {
  status: 'important';
}

export const b = {
  bTa: { id: 'bTa', sector: 'the-obsidian-observatory', x: 78.1, y: 25.6, name: 'Boss - The Astronomer', status: 'important', type: 'boss' },
  bTc: { id: 'bTc', sector: 'the-commons', x: 41.5, y: 67.8, name: 'Boss - The Council', status: 'important', type: 'boss' },
  bEe: { id: 'bEe', sector: 'the-abandoned-expedition', x: 64, y: 47.7, name: 'Boss - The Eternal Engine', status: 'important', type: 'boss', depends: ['sLg'] },
  bTm: { id: 'bTm', sector: 'the-court', x: 33.9, y: 54.8, name: 'Boss - The Myrmidon', status: 'important', type: 'boss', depends: ['sD'] },
  bTpp: { id: 'bTpp', sector: 'the-court', x: 18.4, y: 48.7, name: 'Boss - The Pustulant Prince', status: 'important', type: 'boss', depends: ['sDj'] },
  bTs: { id: 'bTs', sector: 'the-grand-bazaar', x: 48.5, y: 59.8, name: 'Boss - The Skychild', status: 'important', type: 'boss', depends: ['oOp41-r'] },
  bTf: { id: 'bTf', sector: 'the-grand-bazaar', x: 86.7, y: 61.8, name: 'Boss - The Fermented', status: 'important', type: 'boss', depends: ['sDj', 'oTf-r'] },
  bTls: { id: 'bTls', sector: 'the-grand-bazaar', x: 55.5, y: 71.8, name: 'Boss - Time-lost Scholar', status: 'important', type: 'boss', depends: ['sDj', 'oTf-r'] },
  bUut: { id: 'bUut', sector: 'the-commons', x: 26.4, y: 73.8, name: 'Boss - Uut the Screamer', status: 'important', type: 'boss', depends: ['sSlt'] },
  bTai: { id: 'bTai', sector: 'the-repository-of-the-unknown-2', x: 92.7, y: 65.8, name: 'Boss - The Absolute Indexer', status: 'important', type: 'boss', depends: ['sSlt'] },
} as const satisfies Locations<Boss>;

//---- Commune ----//

type Commune = Location<'c', 'commune'>;

export const c = {
  c00: { id: 'c00', sector: 'the-shrine', x: 48, y: 52.8, name: 'Commune - The Whole', type: 'commune', info: ['4 devotes + 1150$', '(300$ + 850$)'] },
  c01: { id: 'c01', sector: 'the-commons', x: 36.5, y: 55.8, name: 'Commune - The Faithful', type: 'commune' },
  c02: { id: 'c02', sector: 'the-abandoned-expedition', x: 72.6, y: 49.7, name: 'Commune - Journey\'s End', type: 'commune', depends: ['sLg', 'sTp-e'] },
  c03: { id: 'c03', sector: 'the-abandoned-expedition', x: 63.6, y: 51.8, name: 'Commune - Outsiders', type: 'commune', depends: ['sTp'] },
  c21: { id: 'c21', sector: 'the-lost-garden-1', x: 85.6, y: 50.7, name: 'Commune - Cultivation', type: 'commune', depends: ['sLg'] },
  c22: { id: 'c22', sector: 'the-lost-garden-1', x: 81.6, y: 58.8, name: 'Commune - The Vats', type: 'commune', depends: [] },
  c31: { id: 'c31', sector: 'the-court', x: 29.5, y: 52.8, name: 'Commune - Lack of Faith', type: 'commune', depends: ['sD'] },
  c32: { id: 'c32', sector: 'the-court', x: 28.4, y: 50.7, name: 'Commune - A Child is Born', type: 'commune', depends: ['sLg'] },
  c41: { id: 'c41', sector: 'the-grand-bazaar', x: 59.5, y: 62.8, name: 'Commune - Calamity', type: 'commune', depends: [] },
  c51: { id: 'c51', sector: 'the-old-waters-2', x: 51.5, y: 49.7, name: 'Commune - Monoliths', type: 'commune', depends: [] },
  c61: { id: 'c61', sector: 'the-repository-of-the-unknown-1', x: 67.5, y: 67.8, name: 'Commune - To Know All', type: 'commune', depends: ['sCa', 'sSlt'] },
  c71: { id: 'c71', sector: 'the-surface', x: 48.5, y: 38.7, name: 'Commune - The Red Star', type: 'commune', depends: ['sDj-n', 'sWc-e'] },
  c72: { id: 'c72', sector: 'the-surface', x: 58.5, y: 41.7, name: 'Commune - Life Before the Star', type: 'commune', depends: ['sDj'] },
  c81: { id: 'c81', sector: 'the-obsidian-observatory', x: 79.6, y: 37.7, name: 'Commune - Stars Without Number', type: 'commune', depends: ['sWc-n', 'sH-n'] },
  c91: { id: 'c91', sector: 'the-mirrorways', x: 6.3, y: 52.7, name: 'Commune', type: 'commune', depends: [] },
} as const satisfies Locations<Commune>;

//---- Devotees ----//

type Devotee = Location<'d', 'devotee'>;

export const d = {
  d01: { id: 'd01', sector: 'the-commons', x: 38.5, y: 67.8, name: 'Devotees (+2)', type: 'devotee', depends: ['bTc'] },
  d02: { id: 'd02', sector: 'the-commons', x: 39.5, y: 71.8, name: 'Devotee', type: 'devotee', depends: ['bTc'] },
  d11: { id: 'd11', sector: 'the-abandoned-expedition', x: 59.6, y: 45.7, name: 'Devotee', type: 'devotee', depends: ['oOp02-r'] },
  d21: { id: 'd21', sector: 'the-lost-garden-1', x: 93.7, y: 53.8, name: 'Devotee', type: 'devotee', depends: ['sSt'] },
  d22: { id: 'd22', sector: 'the-lost-garden-1', x: 90.7, y: 39.7, name: 'Devotee', type: 'devotee', depends: ['sSt'] },
  d23: { id: 'd23', sector: 'the-lost-garden-1', x: 75.7, y: 56.8, name: 'Devotee', type: 'devotee', depends: ['sSt'] },
  d31: { id: 'd31', sector: 'the-court', x: 19.4, y: 61.8, name: 'Devotee', type: 'devotee', depends: ['sSt'] },
  d41: { id: 'd41', sector: 'the-grand-bazaar', x: 56.5, y: 60.8, name: 'Devotee', type: 'devotee', depends: ['sTp', 'oOp41-r'] },
} as const satisfies Locations<Devotee>;

//---- Divine Remnants ----//

type DivineRemnant = Location<'dr', 'divine-remnant', 'Divine Remnant'>;

export const dr = {
  dr00: { id: 'dr00', sector: 'the-shrine', x: 49.5, y: 52.3, name: 'Divine Remnant', type: 'divine-remnant', info: ['2 devotes + 1300$', '(300$ + 1000$)'] },
  dr01: { id: 'dr01', sector: 'the-shrine', x: 49, y: 52.8, name: 'Divine Remnant', type: 'divine-remnant', info: ['4 devotes + 1150$', '(300$ + 850$)'] },
  dr02: { id: 'dr02', sector: 'the-commons', x: 43.5, y: 52.7, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sSld'] },
  dr03: { id: 'dr03', sector: 'the-commons', x: 35.5, y: 70.8, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sTp'] },
  dr04: { id: 'dr04', sector: 'the-commons', x: 37.5, y: 61.8, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sDj'] },
  dr05: { id: 'dr05', sector: 'the-commons', x: 39.5, y: 63.8, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sDj'] },
  dr06: { id: 'dr06', sector: 'the-commons', x: 32.5, y: 67.8, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sDj', 'sWc-e', 'sD-h'] },
  dr07: { id: 'dr07', sector: 'the-commons', x: 37.5, y: 60.8, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sSlt'] },
  dr08: { id: 'dr08', sector: 'the-commons', x: 42.5, y: 62.8, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sSld'] },
  dr11: { id: 'dr11', sector: 'the-abandoned-expedition', x: 69.6, y: 51.8, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sSlt'] },
  dr21: { id: 'dr21', sector: 'the-lost-garden-2', x: 80.6, y: 63.8, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sSlt'] },
  dr22: { id: 'dr22', sector: 'the-lost-garden-1', x: 78.6, y: 57.8, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sCa'] },
  dr23: { id: 'dr23', sector: 'the-lost-garden-1', x: 94.7, y: 46.8, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sTp', 'sH-e', 'sWc-n'] },
  dr24: { id: 'dr24', sector: 'the-lost-garden-2', x: 68.5, y: 65.8, name: 'Divine Remnant', type: 'divine-remnant', depends: [] },
  dr25: { id: 'dr25', sector: 'the-lost-garden-1', x: 78.7, y: 42.7, name: 'Divine Remnant', type: 'divine-remnant', depends: ['soTi', 'sSlt'] },
  dr26: { id: 'dr26', sector: 'the-lost-garden-1', x: 81.6, y: 47.7, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sSlt'] },
  dr27: { id: 'dr27', sector: 'the-lost-garden-1', x: 79.6, y: 47.7, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sDj'] },
  dr28: { id: 'dr28', sector: 'the-lost-garden-1', x: 77.6, y: 48.8, name: 'Divine Remnant', type: 'divine-remnant', depends: ['soTi', 'sWc-e', 'sSlt-n'] },
  dr31: { id: 'dr31', sector: 'the-court', x: 32.5, y: 56.7, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sD'] },
  dr32: { id: 'dr32', sector: 'the-court', x: 17.4, y: 61.8, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sCa'] },
  dr33: { id: 'dr33', sector: 'the-court', x: 28.4, y: 50.7, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sDj'] },
  dr34: { id: 'dr34', sector: 'the-court', x: 23.4, y: 47.7, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sH'] },
  dr35: { id: 'dr35', sector: 'the-court', x: 25.4, y: 53.7, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sSlt'] },
  dr41: { id: 'dr41', sector: 'the-grand-bazaar', x: 49.5, y: 60.8, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sWc'] },
  dr42: { id: 'dr42', sector: 'the-grand-bazaar', x: 58.5, y: 66.8, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sSld'] },
  dr43: { id: 'dr43', sector: 'the-grand-bazaar', x: 59.5, y: 59.8, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sWc-e', 'sSlt-n'] },
  dr51: { id: 'dr51', sector: 'the-old-waters-1', x: 39.5, y: 47.7, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sSlt'] },
  dr52: { id: 'dr52', sector: 'the-old-waters-2', x: 47.5, y: 47.7, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sLg'] },
  dr61: { id: 'dr61', sector: 'the-repository-of-the-unknown-1', x: 69.6, y: 67.8, name: 'Divine Remnant', type: 'divine-remnant', depends: ['c61', 'sSlt'] },
  dr62: { id: 'dr62', sector: 'the-repository-of-the-unknown-2', x: 92.7, y: 64.8, name: 'Divine Remnant', type: 'divine-remnant', depends: ['bTai-r'] },
  dr71: { id: 'dr71', sector: 'the-surface', x: 37.5, y: 45.7, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sTp', 'sWc-e', 'sDj-n'] },
  dr72: { id: 'dr72', sector: 'the-surface', x: 53.5, y: 37.7, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sWc-e', 'sH-n'] },
  dr73: { id: 'dr73', sector: 'the-surface', x: 54.5, y: 39.7, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sSld', 'sLg'] },
  dr74: { id: 'dr74', sector: 'the-surface', x: 56.5, y: 38.7, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sDj-n', 'sWc-e'] },
  dr75: { id: 'dr75', sector: 'the-surface', x: 57.5, y: 37.7, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sWc-e', 'sH-n'] },
  dr76: { id: 'dr76', sector: 'the-surface', x: 58.5, y: 40.7, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sSlt'] },
  dr77: { id: 'dr77', sector: 'the-surface', x: 59.5, y: 37.7, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sWc-e', 'sH-n'] },
  dr78: { id: 'dr78', sector: 'the-surface', x: 64.5, y: 37.7, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sSlt'] },
  dr79: { id: 'dr79', sector: 'the-surface', x: 66.5, y: 37.7, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sSlt', 'sWc-e', 'sH-n'] },
  dr7a: { id: 'dr7a', sector: 'the-surface', x: 67.5, y: 37.7, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sSlt', 'sWc-e', 'sH-n'] },
  dr7b: { id: 'dr7b', sector: 'the-surface', x: 67.5, y: 40.7, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sDj'] },
  dr81: { id: 'dr81', sector: 'the-obsidian-observatory', x: 72.6, y: 34.7, name: 'Divine Remnant', type: 'divine-remnant', depends: ['sWc', 'sH'] },
  dr82: { id: 'dr82', sector: 'the-obsidian-observatory', x: 81.6, y: 31.7, name: 'Divine Remnant', type: 'divine-remnant', depends: [] },
} as const satisfies Locations<DivineRemnant>;

//---- Dormant salt receptables ----//

type DormantSalt = Location<'dsr', 'dormant-salt-receptable', 'Dormant salt receptable'>;

export const dsr = {
  dsr01: { id: 'dsr01', sector: 'the-shrine', x: 49.5, y: 51.8, name: 'Dormant salt receptable', type: 'dormant-salt-receptable' },
  dsr02: { id: 'dsr02', sector: 'the-commons', x: 37.5, y: 54.8, name: 'Dormant salt receptable', type: 'dormant-salt-receptable' },
  dsr03: { id: 'dsr03', sector: 'the-commons', x: 42.5, y: 58.8, name: 'Dormant salt receptable', type: 'dormant-salt-receptable', depends: ['sSlt'] },
  dsr04: { id: 'dsr04', sector: 'the-surface', x: 38.5, y: 44.7, name: 'Dormant salt receptable', type: 'dormant-salt-receptable', depends: ['sSlt'] },
  dsr05: { id: 'dsr05', sector: 'the-grand-bazaar', x: 57.5, y: 50.8, name: 'Dormant salt receptable', type: 'dormant-salt-receptable', depends: ['sSlt'] },
} as const satisfies Locations<DormantSalt | Unordered>;

//---- Envoys ----//

type Envoy = Location<'e', 'envoy'>;

export const e = {
  e00: { id: 'e00', sector: 'the-shrine', x: 49.5, y: 53.8, name: 'Envoy', type: 'envoy', info: ['3 devotes + 2800$', '(300$ + 500$ + 2000$)'] },
  e01: { id: 'e01', sector: 'the-commons', x: 38.5, y: 57.8, name: 'Envoy', type: 'envoy' },
  e02: { id: 'e02', sector: 'the-commons', x: 42.5, y: 62.8, name: 'Envoy', type: 'envoy' },
  e03: { id: 'e03', sector: 'the-commons', x: 30.4, y: 67.8, name: 'Envoy', type: 'envoy', depends: ['sDj'] },
  e04: { id: 'e04', sector: 'the-commons', x: 28.4, y: 69.8, name: 'Envoy', type: 'envoy', depends: ['sWc-n', 'sSlt-d'] },
  e05: { id: 'e05', sector: 'the-commons', x: 27.4, y: 72.8, name: 'Envoy', type: 'envoy', depends: ['sSlt-d'] },
  e21: { id: 'e21', sector: 'the-lost-garden-1', x: 90.7, y: 55.8, name: 'Envoy', type: 'envoy', depends: ['sSld'] },
  e22: { id: 'e22', sector: 'the-lost-garden-1', x: 83.7, y: 52.8, name: 'Envoy', type: 'envoy', depends: ['sDj'] },
  e23: { id: 'e23', sector: 'the-lost-garden-1', x: 88.7, y: 42.7, name: 'Envoy', type: 'envoy', depends: ['soTi', 'sSlt'] },
  e24: { id: 'e24', sector: 'the-lost-garden-1', x: 83.7, y: 47.7, name: 'Envoy', type: 'envoy', depends: ['soTi', 'sSlt'] },
  e31: { id: 'e31', sector: 'the-court', x: 22.4, y: 62.8, name: 'Envoy', type: 'envoy', depends: ['sWc-n', 'sH-n'] },
  e32: { id: 'e32', sector: 'the-court', x: 29.5, y: 51.8, name: 'Envoy', type: 'envoy', depends: ['sLg'] },
  e33: { id: 'e33', sector: 'the-court', x: 22.4, y: 57.7, name: 'Envoy', type: 'envoy', depends: ['sSlt'] },
  e34: { id: 'e34', sector: 'the-court', x: 28.5, y: 54.8, name: 'Envoy', type: 'envoy', depends: ['sSlt'] },
  e35: { id: 'e35', sector: 'the-court', x: 19.4, y: 58.8, name: 'Envoy', type: 'envoy', depends: ['sSlt'] },
  e41: { id: 'e41', sector: 'the-grand-bazaar', x: 54.5, y: 65.8, name: 'Envoy', type: 'envoy', depends: ['sH-n', 'sWc-n'] },
  e42: { id: 'e42', sector: 'the-grand-bazaar', x: 60.5, y: 66.8, name: 'Envoy', type: 'envoy', depends: ['sD'] },
  e43: { id: 'e43', sector: 'the-grand-bazaar', x: 57.5, y: 68.8, name: 'Envoy', type: 'envoy', depends: ['sWc-e', 'sSlt-d'] },
  e44: { id: 'e44', sector: 'the-grand-bazaar', x: 58.5, y: 48.8, name: 'Envoy', type: 'envoy', depends: ['sTp', 'sDj-e', 'sWc-n'] },
  e45: { id: 'e45', sector: 'the-grand-bazaar', x: 53.5, y: 51.8, name: 'Envoy', type: 'envoy', depends: ['sTp', 'sDj-e', 'sH-d'] },
  e46: { id: 'e46', sector: 'the-grand-bazaar', x: 58.5, y: 57.8, name: 'Envoy', type: 'envoy', depends: ['sTp'] },
  e51: { id: 'e51', sector: 'the-old-waters-2', x: 78.6, y: 65.8, name: 'Envoy', type: 'envoy', depends: ['sSlt'] },
  e52: { id: 'e52', sector: 'the-old-waters-3', x: 67.6, y: 54.8, name: 'Envoy', type: 'envoy', depends: ['sLg'] },
  e61: { id: 'e61', sector: 'the-repository-of-the-unknown-1', x: 72.6, y: 70.8, name: 'Envoy', type: 'envoy', depends: ['sSlt'] },
  e62: { id: 'e62', sector: 'the-repository-of-the-unknown-2', x: 91.7, y: 64.8, name: 'Envoy', type: 'envoy', depends: ['bTai-r'] },
  e81: { id: 'e81', sector: 'the-obsidian-observatory', x: 73.6, y: 35.8, name: 'Envoy', type: 'envoy', depends: [] },
  e82: { id: 'e82', sector: 'the-obsidian-observatory', x: 76.6, y: 36.7, name: 'Envoy', type: 'envoy', depends: ['sTp', 'sSld'] },
} as const satisfies Locations<Envoy>;

//---- Icor ----//

type Icor = Location<'i', 'icor'>;

export const i = {
  i01: { id: 'i01', sector: 'the-commons', x: 42.5, y: 53.8, name: 'Icor', type: 'icor', depends: ['sLg'] },
  i02: { id: 'i02', sector: 'the-commons', x: 39.5, y: 56.8, name: 'Icor', type: 'icor' },
  i03: { id: 'i03', sector: 'the-commons', x: 37.5, y: 57.8, name: 'Icor', type: 'icor' },
  i04: { id: 'i04', sector: 'the-commons', x: 38.5, y: 67.8, name: 'Icor', type: 'icor' },
  i21: { id: 'i21', sector: 'the-lost-garden-1', x: 74.6, y: 54.8, name: 'Icor', type: 'icor', depends: ['sDj'] },
  i22: { id: 'i22', sector: 'the-lost-garden-1', x: 81.6, y: 47.7, name: 'Icor', type: 'icor', depends: ['sTp'] },
  i31: { id: 'i31', sector: 'the-court', x: 25.4, y: 55.8, name: 'Icor', type: 'icor', depends: ['sD'] },
  i32: { id: 'i32', sector: 'the-court', x: 30.4, y: 51.8, name: 'Icor', type: 'icor', depends: ['sCa'] },
  i51: { id: 'i51', sector: 'the-old-waters-3', x: 64.5, y: 55.8, name: 'Icor', type: 'icor', depends: ['sLg'] },
  i91: { id: 'i91', sector: 'the-mirrorways', x: 9.3, y: 52.7, name: 'Icor', type: 'icor', depends: ['oLd91-r'] },
} as const satisfies Locations<Icor>;

//---- Journal Entries ----//

type JournalEntry = Location<'je', 'journal-entry', 'Journal Entry'>;

export const je = {
  je01: { id: 'je01', sector: 'the-commons', x: 42.5, y: 52.7, name: 'Journal Entry - The Rods', type: 'journal-entry' },
  je02: { id: 'je02', sector: 'the-commons', x: 39.5, y: 69.8, name: 'Journal Entry - I saw it', type: 'journal-entry', depends: ['bTc'] },
  je03: { id: 'je03', sector: 'the-commons', x: 23.4, y: 71.9, name: 'Journal Entry - Faith is a Gift', type: 'journal-entry', depends: ['sDj'] },
  je04: { id: 'je04', sector: 'the-commons', x: 32.5, y: 58.8, name: 'Journal Entry - The Crandle', type: 'journal-entry', depends: ['sDj'] },
  je11: { id: 'je11', sector: 'the-abandoned-expedition', x: 73.6, y: 47.7, name: 'Journal Entry - The navigator', type: 'journal-entry', depends: ['oOp04-r'] },
  je21: { id: 'je21', sector: 'the-lost-garden-2', x: 80.6, y: 64.8, name: 'Journal Entry - Dear Child', type: 'journal-entry', depends: ['sSlt'] },
  je22: { id: 'je22', sector: 'the-lost-garden-1', x: 81.7, y: 52.8, name: 'Journal Entry - What grows in the garden', type: 'journal-entry', depends: ['sDj'] },
  je23: { id: 'je23', sector: 'the-lost-garden-2', x: 67.5, y: 64.8, name: 'Journal Entry - Every Stone', type: 'journal-entry', depends: ['sSlt'] },
  je31: { id: 'je31', sector: 'the-court', x: 15.4, y: 60.8, name: 'Journal Entry - The Mechanism', type: 'journal-entry', depends: ['sSlt'] },
  je32: { id: 'je32', sector: 'the-court', x: 23.4, y: 58.7, name: 'Journal Entry - The Divine', type: 'journal-entry', depends: ['sSld'] },
  je41: { id: 'je41', sector: 'the-grand-bazaar', x: 61.5, y: 64.8, name: 'Journal Entry - It Crawled', type: 'journal-entry', depends: ['sWc'] },
  je42: { id: 'je42', sector: 'the-grand-bazaar', x: 59.5, y: 68.8, name: 'Journal Entry - Uut the Screamer Lies', type: 'journal-entry', depends: ['sWc'] },
  je43: { id: 'je43', sector: 'the-grand-bazaar', x: 58.5, y: 60.8, name: 'Journal Entry - What lies beyond', type: 'journal-entry', depends: ['sSld'] },
  je51: { id: 'je51', sector: 'the-old-waters-2', x: 48.5, y: 46.7, name: 'Journal Entry - Something in the water', type: 'journal-entry', depends: ['sLg'] },
  je52: { id: 'je52', sector: 'the-old-waters-3', x: 63.5, y: 55.8, name: 'Journal Entry - Something in the water', type: 'journal-entry', depends: ['sD-n', 'sDj-e'] },
  je71: { id: 'je71', sector: 'the-surface', x: 41.5, y: 39.7, name: 'Journal Entry - The Visitor', type: 'journal-entry', depends: ['sSlt'] },
  je72: { id: 'je72', sector: 'the-surface', x: 70.5, y: 39.7, name: 'Journal Entry - The Visitor', type: 'journal-entry', depends: ['sSlt'] },
  je81: { id: 'je81', sector: 'the-obsidian-observatory', x: 78.6, y: 38.7, name: 'Journal Entry - The Holy Mycelium', type: 'journal-entry', depends: [] },
  je82: { id: 'je82', sector: 'the-obsidian-observatory', x: 75.6, y: 33.7, name: 'Journal Entry - Notes on the Void', type: 'journal-entry', depends: ['sH'] },
  je83: { id: 'je83', sector: 'the-obsidian-observatory', x: 75.6, y: 27.7, name: 'Journal Entry - Reflections', type: 'journal-entry', depends: ['sDj'] },
} as const satisfies Locations<JournalEntry>;

//---- Minibosses ----//

type MiniBoss = Location<'mb', 'miniboss'>;

export const mb = {
  mb01: { id: 'mb01', sector: 'the-commons', x: 36.5, y: 69.8, name: 'Miniboss', type: 'miniboss', depends: ['bTc'] },
  mb02: { id: 'mb02', sector: 'the-commons', x: 37.5, y: 56.8, name: 'Miniboss', type: 'miniboss', depends: ['sLg'] },
  mb03: { id: 'mb03', sector: 'the-commons', x: 37.5, y: 59.8, name: 'Miniboss', type: 'miniboss', depends: ['sSld'] },
  mb04: { id: 'mb04', sector: 'the-commons', x: 31, y: 70.8, name: 'Miniboss', type: 'miniboss', depends: ['sCa'] },
  mb11: { id: 'mb11', sector: 'the-abandoned-expedition', x: 61.7, y: 52.8, name: 'Miniboss', type: 'miniboss', depends: ['sLg', 'sTp'], info: 'Combat (3 rounds)' },
  mb12: { id: 'mb12', sector: 'the-abandoned-expedition', x: 68.6, y: 51.8, name: 'Miniboss', type: 'miniboss', depends: ['sLg', 'sTp'], info: 'Combat (3 rounds)' },
  mb13: { id: 'mb13', sector: 'the-abandoned-expedition', x: 67.6, y: 44.7, name: 'Miniboss', type: 'miniboss', depends: ['sDj'], info: 'Combat (4 rounds)' },
  mb21: { id: 'mb21', sector: 'the-lost-garden-1', x: 90.7, y: 53.8, name: 'Miniboss - The Alchemist', type: 'miniboss', depends: ['sLg'] },
  mb22: { id: 'mb22', sector: 'the-lost-garden-1', x: 96.7, y: 51.8, name: 'Miniboss', type: 'miniboss', depends: [] },
  mb23: { id: 'mb23', sector: 'the-lost-garden-1', x: 89.2, y: 48.7, name: 'Miniboss', type: 'miniboss', depends: [] },
  mb31: { id: 'mb31', sector: 'the-court', x: 15.4, y: 59.8, name: 'Miniboss', type: 'miniboss', status: 'hard', depends: ['oOp31'] },
  mb41: { id: 'mb41', sector: 'the-grand-bazaar', x: 49, y: 63.8, name: 'Miniboss', type: 'miniboss', status: 'important', depends: ['sDj'] },
  mb71: { id: 'mb71', sector: 'the-surface', x: 56.5, y: 39.7, name: 'Miniboss', type: 'miniboss', depends: ['sLg'] },
  mb81: { id: 'mb81', sector: 'the-obsidian-observatory', x: 76.1, y: 38.7, name: 'Miniboss', type: 'miniboss', depends: [] },
} as const satisfies Locations<MiniBoss>;

//---- Metal Ingots ----//

type MetalIngot = Location<'mi', 'metal-ingot', 'Metal ingot'>;

export const mi = {
  mi00: { id: 'mi00', sector: 'the-shrine', x: 47.5, y: 52.3, name: 'Metal ingot', type: 'metal-ingot', info: ['3 devotes + 1300$', '(300$ + 1000$)'] },
  mi01: { id: 'mi01', sector: 'the-commons', x: 37.5, y: 68.8, name: 'Metal ingot', type: 'metal-ingot', depends: ['bTc'] },
  mi02: { id: 'mi02', sector: 'the-commons', x: 42.5, y: 51.8, name: 'Metal ingot', type: 'metal-ingot', depends: ['sLg'] },
  mi03: { id: 'mi03', sector: 'the-commons', x: 42.5, y: 59.8, name: 'Metal ingot', type: 'metal-ingot', depends: ['sCa'] },
  mi04: { id: 'mi04', sector: 'the-commons', x: 41.5, y: 69.8, name: 'Metal ingot', type: 'metal-ingot', depends: ['sWc'] },
  mi11: { id: 'mi11', sector: 'the-abandoned-expedition', x: 67.7, y: 48.8, name: 'Metal ingot', type: 'metal-ingot', depends: ['oOp03'] },
  mi21: { id: 'mi21', sector: 'the-lost-garden-1', x: 87.7, y: 51.8, name: 'Metal ingot', type: 'metal-ingot', depends: ['sSld'] },
  mi22: { id: 'mi22', sector: 'the-lost-garden-1', x: 87.7, y: 46.7, name: 'Metal ingot', type: 'metal-ingot', depends: ['sSld', 'sLg-d', 'sWc-e'] },
  mi31: { id: 'mi31', sector: 'the-court', x: 21.4, y: 47.7, name: 'Metal ingot', type: 'metal-ingot', depends: ['sTp', 'sH-e', 'sSlt-d'] },
  mi41: { id: 'mi41', sector: 'the-grand-bazaar', x: 59.5, y: 64.8, name: 'Metal ingot', type: 'metal-ingot', depends: ['sH'] },
  mi71: { id: 'mi71', sector: 'the-surface', x: 42.5, y: 41.7, name: 'Metal ingot', type: 'metal-ingot', depends: ['sSlt'] },
} as const satisfies Locations<MetalIngot>;

//---- Monoliths ----//

type Monolith = Location<'mo', 'monolith'>;

export const mo = {
  mo01: { id: 'mo01', sector: 'the-old-waters-1', x: 39.5, y: 47.7, name: 'Monolith #1', type: 'monolith', depends: ['sSlt'] },
  mo02: { id: 'mo02', sector: 'the-old-waters-2', x: 47.5, y: 46.7, name: 'Monolith #2', type: 'monolith', depends: ['sLg'] },
  mo03: { id: 'mo03', sector: 'the-old-waters-3', x: 60.5, y: 54.8, name: 'Monolith #3', type: 'monolith', depends: ['sLg'] },
} as const satisfies Locations<Monolith>;

//---- Others ----//

export const o = {
  oAs: { id: 'oAs', sector: 'the-shrine', x: 48.6, y: 51.8, name: 'Awakening - Start', type: 'other' },
  oCe: { id: 'oCe', sector: 'the-repository-of-the-unknown-1', x: 76.1, y: 72.8, name: 'Cerebrum', type: 'npc', depends: ['qMio-r'] },
  oLd91: { id: 'oLd91', sector: 'the-mirrorways', x: 9.3, y: 52.7, name: 'Locked Door', type: 'other', depends: ['oOp91-r', 'oOp94-r', 'oOp93-r'], info: 'Locked door. Activate 3 switches to open it.' },
  oOp01: { id: 'oOp01', sector: 'the-abandoned-expedition', x: 61.6, y: 47.7, name: 'Open Path', type: 'other', depends: ['sPd'], info: 'Open the path to a Void Gate' },
  oOp02: { id: 'oOp02', sector: 'the-abandoned-expedition', x: 61.6, y: 44.7, name: 'Open Path', type: 'other', depends: ['sPd', 'd11-r'], info: 'Open the path to a Devotee' },
  oOp03: { id: 'oOp03', sector: 'the-abandoned-expedition', x: 69.6, y: 48.7, name: 'Open Path', type: 'other', depends: ['sTp', 'sPd', () => mi.mi11.id], info: 'Below the Chamber of Reflection. Open the path to a Metal Ingot' },
  oOp04: { id: 'oOp04', sector: 'the-abandoned-expedition', x: 70.6, y: 45.7, name: 'Open Path', type: 'other', depends: ['sTp', 'sPd', 'je11-r', 'sv14-r'], info: 'Open the path to a Journal Entry and a Shard of Vitae' },
  oOp21: { id: 'oOp21', sector: 'the-lost-garden-2', x: 72.6, y: 64.8, name: 'Open Path', type: 'other', depends: ['sSlt'], info: 'Open the path to the to right door.' },
  oOp22: { id: 'oOp22', sector: 'the-lost-garden-2', x: 77.6, y: 63.8, name: 'Open Path', type: 'other', depends: ['sPd'], info: 'Enable the elevator.' },
  oOp31: { id: 'oOp31', sector: 'the-court', x: 19.4, y: 61.8, name: 'Open Path', type: 'other', depends: ['sPd'], info: 'Open the top left door.' },
  oOp32: { id: 'oOp32', sector: 'the-court', x: 16.4, y: 60.8, name: 'Open Path', type: 'other', depends: ['sSlt', 'sPd', 'oCs01-r', 'oCs02-r', 'oCs03-r'], info: 'Open the path to The Mirrorways.' },
  oOp41: { id: 'oOp41', sector: 'the-grand-bazaar', x: 54.5, y: 59.8, name: 'Open Path', type: 'other', depends: ['sD', 'sDj', 'd41-r'], info: 'Open the top right path.' },
  oOp42: { id: 'oOp42', sector: 'the-grand-bazaar', x: 57.5, y: 62.8, name: 'Open Path', type: 'other', depends: ['sDj'], info: 'Open the bottom path.' },
  oOp91: { id: 'oOp91', sector: 'the-mirrorways', x: 6.3, y: 51.7, name: 'Open Path - Switch #1', type: 'other', depends: ['oLd91-r'] },
  oOp92: { id: 'oOp92', sector: 'the-mirrorways', x: 5.3, y: 52.7, name: 'Open Path - Switch #2', type: 'other', depends: ['oTv-r'] },
  oOp93: { id: 'oOp93', sector: 'the-mirrorways', x: 3.3, y: 55.7, name: 'Open Path - Switch #3', type: 'other', depends: ['oLd91-r'] },
  oOp94: { id: 'oOp94', sector: 'the-mirrorways', x: 3.3, y: 53.7, name: 'Open Path to The Vizier', type: 'other', depends: ['oLd91-r'] },
  oPf01: { id: 'oPf01', sector: 'the-commons', x: 41.5, y: 67.8, name: 'Progenitor Flesh', type: 'progenitor-flesh', depends: ['bTc-r'], info: 'Reward after killing The Skychild.' },
  oPf21: { id: 'oPf21', sector: 'the-lost-garden-2', x: 86.7, y: 61.8, name: 'Progenitor Flesh', type: 'progenitor-flesh', depends: ['bTf-r'], info: 'Reward after killing The Fermented.' },
  oPf31: { id: 'oPf31', sector: 'the-court', x: 18.4, y: 52.7, name: 'Progenitor Flesh', type: 'progenitor-flesh', depends: ['bTpp-r'], info: 'Reward after killing The Apostate.' },
  oPf32: { id: 'oPf32', sector: 'the-court', x: 17.4, y: 48.7, name: 'Progenitor Flesh', type: 'progenitor-flesh', depends: ['bTpp-r'], info: 'Reward after killing The Apostate.' },
  oPf41: { id: 'oPf41', sector: 'the-grand-bazaar', x: 48.5, y: 59.8, name: 'Progenitor Flesh', type: 'progenitor-flesh', depends: ['bTs-r'], info: 'Reward after killing The Skychild.' },
  oPf61: { id: 'oPf61', sector: 'the-repository-of-the-unknown-2', x: 93.6, y: 64.8, name: 'Progenitor Flesh', type: 'progenitor-flesh', depends: ['bTai-r'] },
  oPf81: { id: 'oPf81', sector: 'the-obsidian-observatory', x: 80.6, y: 28.7, name: 'Progenitor Flesh', type: 'progenitor-flesh', depends: ['sCa', 'sDj'] },
  oPf82: { id: 'oPf82', sector: 'the-obsidian-observatory', x: 78.1, y: 25.6, name: 'Progenitor Flesh', type: 'progenitor-flesh', depends: ['bTa-r'] },
  oSpf: { id: 'oSpf', sector: 'the-commons', x: 40, y: 52.7, name: 'Sacrifice Progenitor Flesh', type: 'other', depends: ['bTc'], info: 'Sacrifice Progenitor Flesh (Obtained killing The Council). 3050$ for +2 health.' },
  oScA1: { id: 'oScA1', sector: 'the-commons', x: 41.5, y: 56.8, name: 'Shortcut A', type: 'shortcut', depends: ['sTp', 'oScA2-r'], info: 'Shortcut to The Lost Garden' },
  oScA2: { id: 'oScA2', sector: 'the-abandoned-expedition', x: 74.6, y: 48.8, name: 'Shortcut A', type: 'shortcut', depends: ['sTp', 'oScA1-r'], info: 'Shortcut to The Commons' },
  oScB1: { id: 'oScB1', sector: 'the-lost-garden-1', x: 83.7, y: 42.7, name: 'Shortcut B', type: 'shortcut', depends: ['sTp', 'oScB2-r'], info: 'Shortcut to The Court' },
  oScB2: { id: 'oScB2', sector: 'the-lost-garden-1', x: 87.7, y: 43.7, name: 'Shortcut B', type: 'shortcut', depends: ['sTp', 'oScB1-r'], info: 'Shortcut to The Court' },
  oScC1: { id: 'oScC1', sector: 'the-lost-garden-1', x: 83.7, y: 39.7, name: 'Shortcut C', type: 'shortcut', depends: ['sTp', 'oScC2-r'], info: 'Shortcut to The Court' },
  oScC2: { id: 'oScC2', sector: 'the-lost-garden-1', x: 88.7, y: 39.7, name: 'Shortcut C', type: 'shortcut', depends: ['sTp', 'oScC1-r'], info: 'Shortcut to The Court' },
  oCs01: { id: 'oCs01', sector: 'the-court', x: 24.4, y: 53.7, name: 'Cristal Switch #1', type: 'cristal-switch', depends: ['sSlt', 'oOp32-r'] },
  oCs02: { id: 'oCs02', sector: 'the-court', x: 26.4, y: 47.7, name: 'Cristal Switch #2', type: 'cristal-switch', depends: ['sSlt', 'oOp32-r'] },
  oCs03: { id: 'oCs03', sector: 'the-court', x: 20.4, y: 61.8, name: 'Cristal Switch #3', type: 'cristal-switch', depends: ['sTp', 'oOp32-r'] },
  oQb: { id: 'oQb', sector: 'the-shrine', x: 46.5, y: 51.8, name: 'Qagat the Burdened', type: 'npc', info: 'Merchant' },
  oYta: { id: 'oYta', sector: 'the-court', x: 20.4, y: 63.7, name: 'Yantir the Apostate', type: 'npc', info: 'Sell Souls' },
  oTf: { id: 'oTf', sector: 'the-lost-garden-2', x: 82.6, y: 65.8, name: 'Speedrun - The Fermented', type: 'other', depends: ['sDj', 'bTf-r'], info: 'Remove the cork to open the path, and run to the boss room.' },
  oKob: { id: 'oKob', sector: 'the-lost-garden-2', x: 86.7, y: 61.8, name: 'Reward - Key of Blood', type: 'item', depends: ['bTf-r', 'qIs-r'] },
  oKof: { id: 'oKof', sector: 'the-court', x: 18.4, y: 52.7, name: 'Reward - Key of Flesh', type: 'item', depends: ['bTpp-r', 'qIs-r'] },
  oKom: { id: 'oKom', sector: 'the-obsidian-observatory', x: 78.1, y: 25.6, name: 'Reward - Key of Mind', type: 'item', depends: ['bTa-r'] },
  oB: { id: 'oB', sector: 'the-surface', x: 36.5, y: 45.7, name: 'Burrower', type: 'other' },
  oSs1: { id: 'oSs1', sector: 'the-surface', x: 36.5, y: 43.7, name: 'Strange Stalk #1', type: 'strange-stalk', depends: ['sH-e', 'sSlt-n', 'sWc-n'], info: ['There are 3 of them.', 'Give them divine remains to get "Lifegiver" achievement.', 'Kill them to get "Lifetaker" achievement.'] },
  oSs2: { id: 'oSs2', sector: 'the-surface', x: 47.5, y: 37.7, name: 'Strange Stalk #2', type: 'strange-stalk', depends: [], info: ['There are 3 of them.', 'Give them divine remains to get "Lifegiver" achievement.', 'Kill them to get "Lifetaker" achievement.'] },
  oSs3: { id: 'oSs3', sector: 'the-surface', x: 62.5, y: 38.7, name: 'Strange Stalk #3', type: 'strange-stalk', depends: ['sSlt', 'sWc-n', 'sH-n'], info: ['There are 3 of them.', 'Give them divine remains to get "Lifegiver" achievement.', 'Kill them to get "Lifetaker" achievement.'] },
  oTv: { id: 'oTv', sector: 'the-mirrorways', x: 4.9, y: 53.7, name: 'The Vizier', type: 'npc', depends: ['oOp92-r'] },
  oBh: { id: 'oBh', sector: 'the-obsidian-observatory', x: 78.1, y: 25.6, name: 'Broken Helmet', type: 'item', depends: ['bTa-r', 'oTv-r'] },
  oTga: { id: 'oTga', sector: 'the-shrine', x: 46.5, y: 52.8, name: 'Quest - The Grand Artificer', type: 'quest', depends: ['qCp01-r', 'qCp02-r', 'qCp03-r'], info: 'Items seller.' },
  oEk: { id: 'oEk', sector: 'the-shrine', x: 46.5, y: 52.8, name: 'Endless Kaleidoscope', type: 'item', depends: ['oTga-r', 'oTv-r'], info: '5 divine remains + 15 artifact fragments + 500 trace metals' },
} as const satisfies Locations<Location<'o'>>;

//---- Ore Veins ----//

type OreVein = Location<'ov', 'ore-vein', 'Ore Vein'>;

export const ov = {
  ov21: { id: 'ov21', sector: 'the-lost-garden-1', x: 94.7, y: 52.7, name: 'Ore Vein', type: 'ore-vein', depends: ['sSlt'] },
  ov22: { id: 'ov22', sector: 'the-lost-garden-1', x: 88.7, y: 42.7, name: 'Ore Vein', type: 'ore-vein', depends: ['sSlt'] },
  ov23: { id: 'ov23', sector: 'the-lost-garden-1', x: 78.7, y: 41.7, name: 'Ore Vein', type: 'ore-vein', depends: ['sSlt'] },
  ov51: { id: 'ov51', sector: 'the-old-waters-2', x: 48.5, y: 48.7, name: 'Ore Vein', type: 'ore-vein', depends: ['sSlt'] },
  ov71: { id: 'ov71', sector: 'the-surface', x: 31.5, y: 43.7, name: 'Ore Vein', type: 'ore-vein', depends: ['sSlt'] },
  ov81: { id: 'ov81', sector: 'the-obsidian-observatory', x: 75.6, y: 37.7, name: 'Ore Vein', type: 'ore-vein', depends: ['sTp', 'sSlt'] },
  ov91: { id: 'ov91', sector: 'the-mirrorways', x: 9.3, y: 52.7, name: 'Ore Vein', type: 'ore-vein', depends: ['oLd91-r'] },
} as const satisfies Locations<OreVein>;

//---- Quests ----//

type Quest = Location<'q', 'quest'>;

export const q = {
  qLc: { id: 'qLc', sector: 'the-abandoned-expedition', x: 64.6, y: 49.7, name: 'Quest - Lone Crewman', type: 'quest', depends: ['qOpr-r', 'qPr-r'], info: 'Bring him "Putrid Remains"' },
  qOpr: { id: 'qOpr', sector: 'the-abandoned-expedition', x: 61.6, y: 50.7, name: 'Quest - Open Putrid Remains Path', type: 'quest', depends: ['qPr-r', 'qLc-r'], info: 'Kill the creature to open the Putrid Remains Path.' },
  qPr: { id: 'qPr', sector: 'the-abandoned-expedition', x: 69.6, y: 51.8, name: 'Quest - Putrid Remains', type: 'quest', depends: ['qOpr-r', 'qLc-r'], info: 'Give it to the Lone Crewman.' },
  qAch: { id: 'qAch', sector: 'the-old-waters-1', x: 85.6, y: 57.8, name: 'Quest - Achretis', type: 'quest', depends: ['qD'], info: 'Time to Choice: - Refuse to serve and move to "The Court" (You can do it later). - Serve and you will get "The Impure". Both give you different achievement.' },
  qAchr: { id: 'qAchr', sector: 'the-court', x: 29.5, y: 52.8, name: 'Quest - Achretis - Rejected', type: 'quest', depends: ['qAch-r'], info: 'You start here when you reject Achretis Quest.' },
  qCp01: { id: 'qCp01', sector: 'the-commons', x: 29.5, y: 59.8, name: 'Quest - Construct Part #1', type: 'quest', depends: ['sDj', 'oTga-r'] },
  qCp02: { id: 'qCp02', sector: 'the-lost-garden-2', x: 83.6, y: 64.8, name: 'Quest - Construct Part #2', type: 'quest', depends: ['sSlt', 'oTga-r'] },
  qCp03: { id: 'qCp03', sector: 'the-lost-garden-2', x: 63.5, y: 70.8, name: 'Quest - Construct Part #3', type: 'quest', depends: ['oTga-r'] },
  qVs01: { id: 'qVs01', sector: 'the-lost-garden-2', x: 64.5, y: 64.8, name: 'Quest - Vile Sediment', type: 'quest', depends: ['sSld'] },
  qVs02: { id: 'qVs02', sector: 'the-lost-garden-2', x: 66.5, y: 64.8, name: 'Quest - Vile Sediment', type: 'quest', depends: ['sSld'] },
  qVs03: { id: 'qVs03', sector: 'the-lost-garden-2', x: 67.5, y: 63.8, name: 'Quest - Vile Sediment', type: 'quest', depends: ['sSld'] },
  qVs04: { id: 'qVs04', sector: 'the-lost-garden-2', x: 68.5, y: 63.8, name: 'Quest - Vile Sediment', type: 'quest', depends: ['sSld'] },
  qVs05: { id: 'qVs05', sector: 'the-lost-garden-2', x: 75.6, y: 65.8, name: 'Quest - Vile Sediment', type: 'quest', depends: ['sSld'] },
  qVs06: { id: 'qVs06', sector: 'the-lost-garden-2', x: 86.7, y: 61.8, name: 'Quest - Vile Sediment', type: 'quest', depends: ['bTf-r'], info: 'Reward after killing The Fermented.' },
  qVs07: { id: 'qVs07', sector: 'the-lost-garden-2', x: 82.6, y: 62.8, name: 'Quest - Vile Sediment', type: 'quest', depends: ['sDj', 'bTf'] },
  qVs08: { id: 'qVs08', sector: 'the-lost-garden-2', x: 80.6, y: 65.8, name: 'Quest - Vile Sediment', type: 'quest', depends: ['sSlt'] },
  qVs09: { id: 'qVs09', sector: 'the-lost-garden-2', x: 76.6, y: 66.8, name: 'Quest - Vile Sediment', type: 'quest', depends: ['sSlt'] },
  qVs10: { id: 'qVs10', sector: 'the-lost-garden-2', x: 74.6, y: 64.8, name: 'Quest - Vile Sediment', type: 'quest', depends: ['sSlt'] },
  qIs: { id: 'qIs', sector: 'the-shrine', x: 48.5, y: 54.8, name: 'Quest - Inner Sanctum', type: 'quest', depends: ['oKof-r'], info: ['6 devotees + 800$', '(300$ + 500$ + 0$)', 'Find 3 keys'] },
  qMio: { id: 'qMio', sector: 'the-repository-of-the-unknown-1', x: 76.1, y: 72.8, name: 'Quest - Misterious Orb', type: 'quest', depends: ['oCe-r', 'qMao01-r', 'qSeo01-r'], info: ['We have 2 options: We can show it or activate it with The Vizier.', 'You could get 2 different achievements.'] },
  qMao01: { id: 'qMao01', sector: 'the-mirrorways', x: 4.9, y: 53.7, name: 'Quest - Manipulated Orb - From The Vizier', type: 'quest', depends: ['oCe-r', 'qMio-r'], info: 'If you show the Mistery Orb to The Vizier, he will Manipulate it for you. Go back to Cerebrum.' },
  qMao02: { id: 'qMao02', sector: 'the-repository-of-the-unknown-1', x: 76.1, y: 72.8, name: 'Quest - Manipulated Orb - Deliver to Cerebrum', type: 'quest', depends: ['qMao01-r'], info: 'Deliver the Manipulated Orb to Cerebrum. Then go back to The Vizier.' },
  qSeo01: { id: 'qSeo01', sector: 'the-mirrorways', x: 4.9, y: 53.7, name: 'Quest - Sealed Orb - From The Vizier', type: 'quest', depends: ['oCe-r', 'qMio-r'], info: 'If you Activate the Mistery Orb with The Vizier, you will seal him on it. Go back to Cerebrum.' },
  qSeo02: { id: 'qSeo02', sector: 'the-repository-of-the-unknown-1', x: 76.1, y: 72.8, name: 'Quest - Sealed Orb - Deliver to Cerebrum', type: 'quest', depends: ['qSeo01-r'], info: 'Deliver the Sealed Orb to Cerebrum. Then go back to The Vizier.' },
} as const satisfies Locations<Quest>;

//---- Relics ----//

type Relic = Location<'r', 'relic'>;

export const r = {
  rCc: { id: 'rCc', sector: 'the-grand-bazaar', x: 55.5, y: 71.8, name: 'Relic - Chrono Canister', type: 'relic', depends: [] },
  rCl: { id: 'rCl', sector: 'the-lost-garden-1', x: 91.7, y: 55.8, name: 'Relic - Cristaline Lens', type: 'relic', depends: ['bTc'] },
  rCol: { id: 'rCol', sector: 'the-surface', x: 51.5, y: 37.7, name: 'Relic - Condensed Light', type: 'relic', depends: ['sWc-e', 'sH-n'] },
  rCor: { id: 'rCor', sector: 'the-commons', x: 43.5, y: 71.8, name: 'Relic - Claws of Rahtek', type: 'relic', depends: ['bTc'] },
  rFs: { id: 'rFs', sector: 'the-lost-garden-1', x: 87.7, y: 42.7, name: 'Relic - Festering Spores', type: 'relic', depends: ['sTp', 'sSlt', 'soTi-e'] },
  rGe: { id: 'rGe', sector: 'the-commons', x: 31.5, y: 57.8, name: 'Relic - Guardian Eidolon', type: 'relic', depends: ['sTp', 'sDj'], info: 'You must open the door and then run to get there before it closes.' },
  rIa: { id: 'rIa', sector: 'the-mirrorways', x: 4.9, y: 53.7, name: 'Relic - Impossible Anomaly', type: 'relic', depends: ['oTv-r', 'oEk-r'] },
  rIs: { id: 'rIs', sector: 'the-lost-garden-1', x: 84.7, y: 44.7, name: 'Relic - Idol of So-Venat', type: 'relic', depends: ['sCa'] },
  rJp: { id: 'rJp', sector: 'the-surface', x: 40.5, y: 43.7, name: 'Relic - Jazier the Pompous', type: 'relic', depends: ['sTp', 'sSlt'] },
  rLt: { id: 'rLt', sector: 'the-commons', x: 38.5, y: 62.9, name: 'Relic - Living Talon', type: 'relic', depends: ['sDj'] },
  rMg: { id: 'rMg', sector: 'the-obsidian-observatory', x: 76.1, y: 38.7, name: 'Relic - Mutated Gastropod', type: 'relic', depends: ['mb81-r'] },
  rQab: { id: 'rQab', sector: 'the-shrine', x: 46.5, y: 51.8, name: 'Relic - Astronomer\'s Band', type: 'relic', depends: ['oQb-r'], info: '500$ + 2 Artifact Fragments' },
  rQss: { id: 'rQss', sector: 'the-shrine', x: 46.5, y: 51.8, name: 'Relic - Sky-shard', type: 'relic', depends: ['oQb-r'], info: '1200$ + 2 Artifact Fragments' },
  rQwn: { id: 'rQwn', sector: 'the-shrine', x: 46.5, y: 51.8, name: 'Relic - Wrapping of Namun', type: 'relic', depends: ['oQb-r'], info: '3500$ + 4 Artifact Fragments' },
  rQtg: { id: 'rQtg', sector: 'the-shrine', x: 46.5, y: 51.8, name: 'Relic - The Godseye', type: 'relic', depends: ['oQb-r'], info: '1500$ + 2 Artifact Fragments' },
  rSa: { id: 'rSa', sector: 'the-court', x: 27.4, y: 53.7, name: 'Relic - Spectral Axe', type: 'relic', depends: ['sSlt'] },
  rSb: { id: 'rSb', sector: 'the-old-waters-3', x: 69.6, y: 55.7, name: 'Relic - Spectral Blade', type: 'relic', depends: ['sLg'] },
  rSg: { id: 'rSg', sector: 'the-abandoned-expedition', x: 67.6, y: 44.7, name: 'Relic - Serrated Gland', type: 'relic', depends: ['mb13-r'], info: 'Reward' },
  rTbs: { id: 'rTbs', sector: 'the-mirrorways', x: 4.9, y: 53.7, name: 'Relic - The Black Sphere', type: 'relic', depends: ['oTv-r', 'oBh-r'] },
  rVj: { id: 'rVj', sector: 'the-commons', x: 80.6, y: 50.7, name: 'Relic - Volatile Jar', type: 'relic', depends: ['sCa'] },
  rWh: { id: 'rWh', sector: 'the-lost-garden-1', x: 96.7, y: 47.7, name: 'Relic - Warp Hook', type: 'relic', depends: ['sH'] },
} as const satisfies Locations<Relic>;

//---- Simulacrum (Abilities) ----//

type Simulacrum = Location<'s', 'simulacrum'>;

export const s = {
  sSld: { id: 'sSld', sector: 'the-commons', x: 35.5, y: 53.8, name: 'Simulacrum - Adaptation (slide)', status: 'important', type: 'simulacrum' },
  sLg: { id: 'sLg', sector: 'the-commons', x: 39.5, y: 67.8, name: 'Simulacrum - Improved Ligaments (ledge grab)', status: 'important', type: 'simulacrum', depends: ['sSld', 'bTc'] },
  sTp: { id: 'sTp', sector: 'the-shrine', x: 50.5, y: 54.8, name: 'Simulacrum - Phased Flesh (teleport)', status: 'important', type: 'simulacrum', info: 'Requires at least 2050$, opening right tunel, colapsed path and whispers.' },
  sPd: { id: 'sPd', sector: 'the-abandoned-expedition', x: 62.6, y: 47.7, name: 'Simulacrum - Augmented Cortex (possess devices)', status: 'important', type: 'simulacrum', depends: ['sLg', 'bEe'] },
  sD: { id: 'sD', sector: 'the-lost-garden-1', x: 92.7, y: 56.8, name: 'Simulacrum - Twitch Fibers (dash)', status: 'important', type: 'simulacrum', depends: ['sLg'] },
  sCa: { id: 'sCa', sector: 'the-court', x: 32.5, y: 54.8, name: 'Simulacrum - Awakened Arm (charged attack)', status: 'important', type: 'simulacrum', depends: ['sD'] },
  sDj: { id: 'sDj', sector: 'the-commons', x: 32.4, y: 70.8, name: 'Simulacrum - Hollow Cartilage (double jump)', status: 'important', type: 'simulacrum', depends: ['sCa'] },
  sWc: { id: 'sWc', sector: 'the-grand-bazaar', x: 46.5, y: 58.8, name: 'Simulacrum - Spurs (wall climb)', status: 'important', type: 'simulacrum', depends: ['bTs-r'] },
  sSlt: { id: 'sSlt', sector: 'the-lost-garden-2', x: 85.7, y: 62.8, name: 'Simulacrum - Unstable Nuclei (slither)', status: 'important', type: 'simulacrum', depends: ['sDj', 'bTf-r'] },
  sH: { id: 'sH', sector: 'the-lost-garden-1', x: 96.7, y: 52.8, name: 'Simulacrum - Entozoon Sac (hook)', status: 'important', type: 'simulacrum', depends: ['sSlt'] },
} as const satisfies Locations<Simulacrum>;

//---- Souls ----//

type Soul = Location<'so', 'soul'>;

export const so = {
  so01: { id: 'so01', sector: 'the-commons', x: 38.5, y: 69.8, name: 'Soul - The Star', type: 'soul', depends: ['sSlt'] },
  so02: { id: 'so02', sector: 'the-commons', x: 25.4, y: 73.8, name: 'Soul - Spectral Chakram', type: 'soul', depends: ['bUut-r'] },
  so21: { id: 'so21', sector: 'the-lost-garden-1', x: 90.7, y: 53.8, name: 'Soul - The Alchemist', type: 'soul', depends: ['mb21-r'], info: 'Reward after killing The Alchemist' },
  so22: { id: 'so22', sector: 'the-lost-garden-1', x: 85.6, y: 58.8, name: 'Soul - The Astronomer', type: 'soul', depends: ['soTi'] },
  so23: { id: 'so23', sector: 'the-lost-garden-2', x: 83.6, y: 65.8, name: 'Soul - The Fetid', type: 'soul', depends: [] },
  soTi: { id: 'soTi', sector: 'the-lost-garden-1', x: 85.6, y: 57.8, name: 'Soul - The Impure', type: 'soul', depends: ['qVs01', 'qAch-r'], info: 'Reward - Get all the Vile Sediments.' },
  so31: { id: 'so31', sector: 'the-court', x: 25.4, y: 49.7, name: 'Soul - The Attendant', type: 'soul', depends: ['sDj'] },
  so32: { id: 'so32', sector: 'the-court', x: 15.4, y: 59.8, name: 'Soul - Censer of Ta-Hun', type: 'soul', depends: ['mb31'], info: 'Reward after killing 3 rounds of enemies.' },
  so33: { id: 'so33', sector: 'the-court', x: 26.4, y: 47.7, name: 'Soul - Living Blade', type: 'soul', depends: ['sH-e', 'sSlt-d'] },
  so41: { id: 'so41', sector: 'the-grand-bazaar', x: 52.5, y: 47.8, name: 'Soul - The Treasurer', type: 'soul', depends: ['sPd-n', 'sDj-e'] },
  so42: { id: 'so42', sector: 'the-grand-bazaar', x: 57.5, y: 56.8, name: 'Soul - The Channeler', type: 'soul', depends: ['sD', 'sWc'] },
  so51: { id: 'so51', sector: 'the-old-waters-3', x: 60.5, y: 54.8, name: 'Soul - The Lost', type: 'soul', depends: ['oM01-r', 'oM02-r', 'oM03-r'], info: ['Absorbs Icor. After absorb 5000$, it turns into "The Servant".'] },
  so52: { id: 'so52', sector: 'the-old-waters-3', x: 60.5, y: 54.8, name: 'Soul - The Servant', type: 'soul', depends: ['so52-r'], info: ['Ranged attacks familiar.'] },
  so61: { id: 'so61', sector: 'the-repository-of-the-unknown-1', x: 93.6, y: 64.8, name: 'Soul - The Shattered [M]', type: 'soul', depends: ['bTai-r'] },
  so62: { id: 'so62', sector: 'the-repository-of-the-unknown-1', x: 76.1, y: 72.8, name: 'Soul - The Shattered [R] - From Cerebrum', type: 'soul', depends: ['qSeo02-r'], info: 'If you chose to activate the Misterious Orb with The Vizier, Cerebrum will give it to you as a reward.' },
  so71: { id: 'so71', sector: 'the-surface', x: 31.5, y: 44.7, name: 'Soul - The Unsealed', type: 'soul', depends: ['sSlt'] },
  so72: { id: 'so72', sector: 'the-surface', x: 60.5, y: 38.7, name: 'Soul - The Artificer', type: 'soul', depends: ['sDj'] },
  so91: { id: 'so91', sector: 'the-mirrorways', x: 4.3, y: 52.7, name: 'Soul - The Sentinel', type: 'soul', depends: ['oTv'] },
  so92: { id: 'so92', sector: 'the-mirrorways', x: 4.9, y: 53.7, name: 'Soul - The Shattered [R] - From The Vizier', type: 'soul', depends: ['qMao02-r'], info: 'If you chose to show the Mysterious Orb to the Vizier, he will give it to you as a reward.' },
  soQ01: { id: 'soQ01', sector: 'the-shrine', x: 46.5, y: 51.8, name: 'Soul - The Assassin', type: 'soul', depends: ['oQb-r'], info: '5000$ + 2 Divine Remnants + 4 Artifact Fragments + 500 Trace Metals' },
  soQ02: { id: 'soQ02', sector: 'the-shrine', x: 46.5, y: 51.8, name: 'Soul - The Slave', type: 'soul', depends: ['oQb-r'], info: '1000$ + 2 Artifact Fragments + 100 Trace Metals' },
  soY01: { id: 'soY01', sector: 'the-court', x: 20.4, y: 63.7, name: 'Soul - The Bulbous', type: 'soul', depends: ['oYta-r'], info: '2500$ + 4 Artifact Fragments' },
  soY02: { id: 'soY02', sector: 'the-court', x: 20.4, y: 63.7, name: 'Soul - The Chained', type: 'soul', depends: ['oYta-r'], info: '2500$ + 4 Artifact Fragments' },
  soY03: { id: 'soY03', sector: 'the-court', x: 20.4, y: 63.7, name: 'Soul - The Cavetous', type: 'soul', depends: ['oYta-r'], info: '850$ + 2 Artifact Fragments' },
  soY04: { id: 'soY04', sector: 'the-court', x: 20.4, y: 63.7, name: 'Soul - The Forgotten Warrior', type: 'soul', depends: ['oYta-r'], info: '4500$ + 4 Artifact Fragments' },
  soY05: { id: 'soY05', sector: 'the-court', x: 20.4, y: 63.7, name: 'Soul - The Legion', type: 'soul', depends: ['oYta-r'], info: '3500$ + 4 Artifact Fragments' },
  soY06: { id: 'soY06', sector: 'the-court', x: 20.4, y: 63.7, name: 'Soul - The Mother', type: 'soul', depends: ['oYta-r'], info: '2500$ + 2 Artifact Fragments' },
  soY07: { id: 'soY07', sector: 'the-court', x: 20.4, y: 63.7, name: 'Soul - The Shattered [L]', type: 'soul', depends: ['oYta-r'], info: '5000$ + 6 Artifact Fragments' },
  soY08: { id: 'soY08', sector: 'the-court', x: 20.4, y: 63.7, name: 'Soul - The Unmade', type: 'soul', depends: ['oYta-r'], info: '2500$ + 2 Artifact Fragments' },
} as const satisfies Locations<Soul>;

//---- Shard of Vitae ----//

type Shard = Location<'sv', 'shard-of-vitae', 'Shard of Vitae'>;

export const sv = {
  sv00: { id: 'sv00', sector: 'the-shrine', x: 47.5, y: 53.8, name: 'Shard of Vitae', type: 'shard-of-vitae', info: '4 devotes + 2800$ (300$ + 500$ + 2000$)' },
  sv01: { id: 'sv01', sector: 'the-commons', x: 43.5, y: 51.8, name: 'Shard of Vitae', type: 'shard-of-vitae' },
  sv02: { id: 'sv02', sector: 'the-commons', x: 36.5, y: 69.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['mb01'] },
  sv03: { id: 'sv03', sector: 'the-commons', x: 37.5, y: 64.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['bTc'] },
  sv04: { id: 'sv04', sector: 'the-commons', x: 41.5, y: 60.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sLg'] },
  sv05: { id: 'sv05', sector: 'the-commons', x: 36.5, y: 59.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sSld', 'mb03'] },
  sv06: { id: 'sv06', sector: 'the-commons', x: 39.5, y: 54.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sTp'] },
  sv07: { id: 'sv07', sector: 'the-commons', x: 42.5, y: 63.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sDj-n', 'sWc-e'] },
  sv08: { id: 'sv08', sector: 'the-commons', x: 42.5, y: 63.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sD-n', 'sDj-e', 'sWc-e'] },
  sv09: { id: 'sv09', sector: 'the-commons', x: 42.5, y: 62.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sCa', 'sDj'] },
  sv0a: { id: 'sv0a', sector: 'the-commons', x: 38.5, y: 68.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sDj'] },
  sv12: { id: 'sv12', sector: 'the-abandoned-expedition', x: 59.6, y: 50.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sTp'] },
  sv13: { id: 'sv13', sector: 'the-abandoned-expedition', x: 62.6, y: 49.8, name: 'Shard of Vitae', type: 'shard-of-vitae', status: 'careful', depends: ['sLg-d', 'sWc-e'], info: 'Breaking a wall. You can get it early (without wall jump) but maybe losing some Vitae.' },
  sv14: { id: 'sv14', sector: 'the-abandoned-expedition', x: 73.6, y: 47.7, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['oOp04-r'], status: 'careful', info: 'Jump high using any enemy, or come later with dash or double jump.' },
  sv15: { id: 'sv15', sector: 'the-abandoned-expedition', x: 73.6, y: 45.7, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sLg'] },
  sv16: { id: 'sv16', sector: 'the-abandoned-expedition', x: 71.6, y: 51.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sSlt'], info: 'You can get it either way, from above or from the left door.' },
  sv17: { id: 'sv17', sector: 'the-abandoned-expedition', x: 68.6, y: 45.7, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sSlt', 'sWc-e', 'sH-n'] },
  sv21: { id: 'sv21', sector: 'the-lost-garden-1', x: 89.6, y: 53.8, name: 'Shard of Vitae - Reward', type: 'shard-of-vitae', depends: ['sSlt'] },
  sv22: { id: 'sv22', sector: 'the-lost-garden-1', x: 88.7, y: 55.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sLg'] },
  sv23: { id: 'sv23', sector: 'the-lost-garden-1', x: 85.6, y: 56.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sSlt-n', 'sH-e'] },
  sv24: { id: 'sv24', sector: 'the-lost-garden-2', x: 50.5, y: 42.7, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: [] },
  sv25: { id: 'sv25', sector: 'the-lost-garden-2', x: 48.5, y: 45.7, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sSld'] },
  sv26: { id: 'sv26', sector: 'the-lost-garden-1', x: 76.6, y: 55.7, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sDj'] },
  sv27: { id: 'sv27', sector: 'the-lost-garden-1', x: 91.6, y: 57.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['soTi'] },
  sv28: { id: 'sv28', sector: 'the-lost-garden-1', x: 76.6, y: 52.8, name: 'Shard of Vitae', type: 'shard-of-vitae', status: 'careful', depends: ['sH', 'sDj-n'] },
  sv29: { id: 'sv29', sector: 'the-lost-garden-2', x: 69.6, y: 63.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: [] },
  sv2a: { id: 'sv2a', sector: 'the-lost-garden-1', x: 85.6, y: 47.7, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sLg-d', 'sDj-n', 'sWc-e'] },
  sv2b: { id: 'sv2b', sector: 'the-lost-garden-1', x: 84.6, y: 48.7, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: [] },
  sv31: { id: 'sv31', sector: 'the-court', x: 16.4, y: 62.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sD'] },
  sv32: { id: 'sv32', sector: 'the-court', x: 21.5, y: 59.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sSlt'] },
  sv33: { id: 'sv33', sector: 'the-court', x: 27.5, y: 48.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sDj'] },
  sv34: { id: 'sv34', sector: 'the-court', x: 25.4, y: 47.7, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sH'] },
  sv41: { id: 'sv41', sector: 'the-grand-bazaar', x: 54.5, y: 65.8, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sH-n', 'sWc-n'] },
  sv51: { id: 'sv51', sector: 'the-old-waters-1', x: 30.4, y: 48.7, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sSlt'] },
  sv52: { id: 'sv52', sector: 'the-old-waters-1', x: 32.4, y: 46.7, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sLg', 'sTp'] },
  sv53: { id: 'sv53', sector: 'the-old-waters-2', x: 50.5, y: 42.7, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sSlt'] },
  sv54: { id: 'sv54', sector: 'the-old-waters-2', x: 48.5, y: 45.7, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sSld', 'sLg'] },
  sv55: { id: 'sv55', sector: 'the-old-waters-3', x: 71.6, y: 55.7, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sSlt'] },
  sv81: { id: 'sv81', sector: 'the-obsidian-observatory', x: 75.6, y: 30.7, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sCa', 'sWc-e'] },
  sv82: { id: 'sv82', sector: 'the-obsidian-observatory', x: 82.6, y: 26.7, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['sCa', 'sDj'] },
  sv91: { id: 'sv91', sector: 'the-mirrorways', x: 9.3, y: 52.7, name: 'Shard of Vitae', type: 'shard-of-vitae', depends: ['oLd91-r'] },
} as const satisfies Locations<Shard>;

//---- Unknown ----//

export const u = {
} as const satisfies Locations<Location<'u'>>;
