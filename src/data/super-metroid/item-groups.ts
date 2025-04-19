import type { Location as L, Locations as LS } from "@/components/games/metroid-maps/Map.astro";

export const sectors = [
  'brinstar-1', 'brinstar-2',
  'crateria-1', 'crateria-2',
  'maridia-1', 'maridia-2',
  'norfair-1', 'norfair-2',
  'tourian',
  'wrecked-ship',
] as const;
export type Sector = typeof sectors[number];

export type Location = L<Sector>;
export type Locations<V extends Location> = LS<Sector, V>;

//---- Bosses and Minibosses ----//

interface Boss extends Location {
  id: `b${Capitalize<string>}`;
  name: `Boss${string}`;
  status: 'important';
}
interface MiniBoss extends Location {
  id: `mb${Capitalize<string>}`;
  name: `Miniboss${string}`;
  status: 'important';
}

export const b = {
  mbT: {id: 'mbT', sector: 'crateria-1', x: 35.6, y: 11, name: 'Miniboss - Torizo', status: 'important', depends: 'hB'},
  mbSs: {id: 'mbSs', sector: 'brinstar-1', x: 27.1, y: 36.7, name: 'Miniboss - Spore Spawn', status: 'important', depends: ['m01', 'hB']},
  bK: {id: 'bK', sector: 'brinstar-2', x: 74.9, y: 58.7, name: 'Boss - Kraid', status: 'important', depends: 'hHjb'},
  mbC: {id: 'mbC', sector: 'norfair-1', x: 62.8, y: 79.5, name: 'Miniboss - Crocomire', status: 'important', depends: 'hVs'},
  bPh: {id: 'bPh', sector: 'wrecked-ship', x: 75.6, y: 15.3, name: 'Boss - Phantoon', status: 'important', depends: 'hGb'},
  mbB: {id: 'mbB', sector: 'maridia-2', x: 70, y: 43.8, name: 'Miniboss - Botwoon', status: 'important', depends: 'hGs'},
  bD: {id: 'bD', sector: 'maridia-2', x: 92, y: 46, name: 'Boss - Draygon', status: 'important', depends: ['hGb', 'hGs', 'mbB']},
  mbGt: {id: 'mbGt', sector: 'norfair-2', x: 67.1, y: 88, name: 'Miniboss - Gold Torizo', status: 'important', depends: 'hWab'},
  bR: {id: 'bR', sector: 'norfair-2', x: 72.8, y: 89.5, name: 'Boss - Ridley', status: 'important', depends: 'hWab'},
  bMb: {id: 'bMb', sector: 'tourian', x: 14.2, y: 28.1, name: 'Boss - Mother Brain', status: 'important', depends: ['m01', 'hMb', 'sm01']},
} satisfies Locations<Boss | MiniBoss>;

//---- Energy Tanks ----//

interface EnergyTank extends Location {
  id: `et${number}`;
  name: 'Energy tank';
}

export const et = {
  et01: {id: 'et01', sector: 'crateria-1', x: 17.2, y: 11, name: "Energy tank", depends: 'hB'},
  et02: {id: 'et02', sector: 'norfair-1', x: 52.7, y: 72.3, name: "Energy tank", depends: 'sm01'},
  et03: {id: 'et03', sector: 'brinstar-2', x: 57, y: 59.5, name: "Energy tank", depends: 'bK'},
  et04: {id: 'et04', sector: 'norfair-1', x: 67, y: 79.5, name: "Energy tank", depends: 'hVs'},
  et05: {id: 'et05', sector: 'crateria-1', x: 24.2, y: 5.3, name: "Energy tank", depends: ['hSbo-d', 'hSj-n', 'hSa-e']},
  et06: {id: 'et06', sector: 'brinstar-1', x: 25.7, y: 43.8, name: "Energy tank", depends: ['hWab', 'pb01']},
  et07: {id: 'et07', sector: 'brinstar-1', x: 4.4, y: 46.7, name: "Energy tank", depends: 'pb01'},
  et08: {id: 'et08', sector: 'wrecked-ship', x: 74.2, y: 6.7, name: "Energy tank", depends: 'hGs'},
  et09: {id: 'et09', sector: 'maridia-2', x: 77.2, y: 43.8, name: "Energy tank", depends: ['hMb-h', 'mbB', 'hSba-e']},
  et10: {id: 'et10', sector: 'maridia-1', x: 61.4, y: 49.5, name: "Energy tank", depends: ['hGb-d', 'hGs', 'hSj-e']},
  et11: {id: 'et11', sector: 'norfair-2', x: 71.4, y: 89.5, name: "Energy tank", depends: 'hSj'},
  et12: {id: 'et12', sector: 'norfair-2', x: 92.8, y: 80.9, name: "Energy tank", depends: 'hWab'},
  et13: {id: 'et13', sector: 'brinstar-1', x: 7.1, y: 50.9, name: "Energy tank", depends: ['hSbo', 'pb01', 'hGs']},
  et14: {id: 'et14', sector: 'brinstar-1', x: 40, y: 46.7, name: "Energy tank", depends: 'hHjb'},
} satisfies Locations<EnergyTank>;

//---- Habilities ----//

interface Hability extends Location {
  id: `h${Capitalize<string>}`;
  status: 'important';
}

export const h = {
  hMb: {id: 'hMb', sector: 'brinstar-1', x: 31.5, y: 46.7, name: 'Morphing Ball', status: 'important'},
  hB: {id: 'hB', sector: 'crateria-1', x: 35.6, y: 11, name: 'Bomb', status: 'important', depends: ['hMb', 'm01']},
  hCb: {id: 'hCb', sector: 'brinstar-1', x: 19.9, y: 48.1, name: 'Charge Beam', status: 'important', depends: 'hB'},
  hS: {id: 'hS', sector: 'brinstar-2', x: 49.9, y: 56.6, name: 'Spazer', status: 'important', depends: 'sm01'},
  hHjb: {id: 'hHjb', sector: 'norfair-1', x: 49.9, y: 73.8, name: 'Hi-jump Boots', status: 'important', depends: 'sm01'},
  hVs: {id: 'hVs', sector: 'brinstar-2', x: 77.2, y: 59.5, name: 'Varia Suit', status: 'important', depends: 'bK'},
  hWab: {id: 'hWab', sector: 'norfair-2', x: 81.4, y: 70.9, name: 'Wave Beam', status: 'important', depends: 'hVs'},
  hSbo: {id: 'hSbo', sector: 'norfair-2', x: 92.8, y: 68.1, name: 'Speed Booster', status: 'important', depends: 'hVs'},
  hGb: {id: 'hGb', sector: 'norfair-1', x: 44.2, y: 88, name: 'Grappling Beam', status: 'important', depends: 'hVs'},
  hIb: {id: 'hIb', sector: 'norfair-1', x: 47, y: 68.1, name: 'Ice Beam', status: 'important', depends: 'sm01'},
  hXrs: {id: 'hXrs', sector: 'brinstar-1', x: 28.6, y: 53.8, name: 'X-Ray Scope', status: 'important', depends: 'hGb'},
  hGs: {id: 'hGs', sector: 'wrecked-ship', x: 62.8, y: 6.7, name: 'Gravity Suit', status: 'important', depends: 'hGb'},
  hSj: {id: 'hSj', sector: 'maridia-2', x: 90, y: 46.7, name: 'Space Jump', status: 'important', depends: 'bD'},
  hPb: {id: 'hPb', sector: 'maridia-2', x: 75.6, y: 35.2, name: 'Plasma Beam', status: 'important', depends: 'hSj'},
  hSba: {id: 'hSba', sector: 'maridia-2', x: 82.8, y: 55.2, name: 'Spring Ball', status: 'important', depends: ['hSj']},
  hSa: {id: 'hSa', sector: 'norfair-2', x: 68.5, y: 88, name: 'Screw Attack', status: 'important', depends: 'mbGt'},
} satisfies Locations<Hability>;

//---- Missile Tanks ----//

interface MissileTank extends Location {
  id: `m${number}`;
  name: 'Missile tank';
}

export const m = {
  m01: {id: 'm01', sector: 'brinstar-1', x: 35.6, y: 48.1, name: 'Missile tank', status: 'important', depends: 'hMb'},
  m02: {id: 'm02', sector: 'brinstar-1', x: 41.4, y: 46.7, name: 'Missile tank', depends: ['hMb', 'm01']},
  m03: {id: 'm03', sector: 'crateria-1', x: 22.7, y: 12.5, name: 'Missile tank', depends: 'hB'},
  m04: {id: 'm04', sector: 'brinstar-1', x: 11.3, y: 38.1, name: 'Missile tank', depends: ['m01', 'hB']},
  m05: {id: 'm05', sector: 'brinstar-1', x: 19.9, y: 46.7, name: 'Missile tank', depends: 'hB'},
  m06: {id: 'm06', sector: 'norfair-1', x: 51.4, y: 72.3, name: 'Missile tank', depends: 'hHjb'},
  m07: {id: 'm07', sector: 'norfair-1', x: 61.4, y: 70.9, name: 'Missile tank', depends: 'hVs'},
  m08: {id: 'm08', sector: 'norfair-1', x: 72.8, y: 72.3, name: 'Missile tank', depends: 'hVs'},
  m09: {id: 'm09', sector: 'norfair-2', x: 77.1, y: 70.9, name: 'Missile tank', depends: 'hVs'},
  m10: {id: 'm10', sector: 'norfair-2', x: 91.4, y: 68.1, name: 'Missile tank', depends: 'hVs'},
  m11: {id: 'm11', sector: 'norfair-1', x: 60, y: 86.7, name: 'Missile tank', depends: 'hVs'},
  m12: {id: 'm12', sector: 'norfair-1', x: 51.4, y: 86.7, name: 'Missile tank', depends: 'hVs'},
  m13: {id: 'm13', sector: 'norfair-1', x: 55.6, y: 73.8, name: 'Missile tank', depends: 'hGb'},
  m14: {id: 'm14', sector: 'norfair-1', x: 42.8, y: 70.9, name: 'Missile tank', depends: 'hGb'},
  m15: {id: 'm15', sector: 'brinstar-2', x: 62.8, y: 58, name: 'Missile tank', depends: ['hMb-h', 'hHjb', 'pb01', 'hSba-e']},
  m16: {id: 'm16', sector: 'brinstar-2', x: 44.2, y: 48.1, name: 'Missile tank', depends: 'pb02'},
  m17: {id: 'm17', sector: 'crateria-1', x: 15.6, y: 6.7, name: 'Missile tank', depends: ['hMb', 'hSbo-d', 'hSj-n', 'hSa-e']},
  m18: {id: 'm18', sector: 'crateria-1', x: 15.6, y: 6.7, name: 'Missile tank', depends: ['hMb', 'hSbo-d', 'hSj-n', 'hSa-e']},
  m19: {id: 'm19', sector: 'crateria-1', x: 28.5, y: 28.1, name: 'Missile tank', depends: 'hB'},
  m20: {id: 'm20', sector: 'brinstar-1', x: 27.1, y: 48.1, name: 'Missile tank', depends: ['hIb-h', 'hSj-e']},
  m21: {id: 'm21', sector: 'brinstar-1', x: 19.9, y: 42.4, name: 'Missile tank', depends: ['hHjb-h', 'hGb-n', 'hSj-e']},
  m22: {id: 'm22', sector: 'brinstar-1', x: 15.7, y: 38.1, name: 'Missile tank', depends: ['hMb', 'hSbo']},
  m23: {id: 'm23', sector: 'brinstar-1', x: 15.7, y: 38.1, name: 'Missile tank', depends: ['hMb', 'hB', 'hSbo']},
  m24: {id: 'm24', sector: 'crateria-2', x: 51.4, y: 8.2, name: 'Missile tank', depends: 'hSbo'},
  m25: {id: 'm25', sector: 'crateria-2', x: 54.2, y: 9.6, name: 'Missile tank', depends: 'hSbo'},
  m26: {id: 'm26', sector: 'wrecked-ship', x: 65.6, y: 11, name: 'Missile tank', depends: 'hGb'},
  m27: {id: 'm27', sector: 'wrecked-ship', x: 78.5, y: 2.5, name: 'Missile tank', depends: 'hGb'},
  m28: {id: 'm28', sector: 'crateria-2', x: 55.5, y: 2.5, name: 'Missile tank', depends: 'hGb'},
  m29: {id: 'm29', sector: 'crateria-2', x: 54.2, y: 5.3, name: 'Missile tank', depends: 'hGb'},
  m30: {id: 'm30', sector: 'wrecked-ship', x: 67.1, y: 6.7, name: 'Missile tank', depends: 'hGb'},
  m31: {id: 'm31', sector: 'maridia-1', x: 49.9, y: 49.5, name: 'Missile tank', depends: ['sm01', 'hSbo', 'hGs']},
  m32: {id: 'm32', sector: 'maridia-1', x: 52.7, y: 40.9, name: 'Missile tank', depends: 'hGs'},
  m33: {id: 'm33', sector: 'maridia-1', x: 64.2, y: 40.9, name: 'Missile tank', depends: 'hGs'},
  m34: {id: 'm34', sector: 'maridia-2', x: 70, y: 45.2, name: 'Missile tank', depends: 'hGs'},
  m35: {id: 'm35', sector: 'maridia-2', x: 95.7, y: 42.4, name: 'Missile tank', depends: ['hGs', 'mbB']},
  m36: {id: 'm36', sector: 'maridia-2', x: 68.5, y: 52.4, name: 'Missile tank', depends: 'hGs'},
  m37: {id: 'm37', sector: 'maridia-1', x: 62.8, y: 50.9, name: 'Missile tank', depends: ['hHjb-h', 'hGs', 'hSj-n']},
  m38: {id: 'm38', sector: 'maridia-2', x: 64.2, y: 52.4, name: 'Missile tank', depends: ['hMb-h', 'hSj', 'hSba-e']},
  m39: {id: 'm39', sector: 'norfair-1', x: 69.9, y: 68.1, name: 'Missile tank', depends: ['sm01', 'hGb-n', 'hSj-e']},
  m40: {id: 'm40', sector: 'norfair-1', x: 67.1, y: 68.1, name: 'Missile tank', depends: ['hMb-h', 'm39', 'hSba-e']},
  m41: {id: 'm41', sector: 'norfair-2', x: 65.6, y: 86.7, name: 'Missile tank', depends: 'hSj'},
  m42: {id: 'm42', sector: 'norfair-2', x: 79.9, y: 79.5, name: 'Missile tank', depends: ['hMb', 'pb01', 'hSa']},
  m43: {id: 'm43', sector: 'norfair-2', x: 90, y: 72.3, name: 'Missile tank', depends: 'hSa'},
  m44: {id: 'm44', sector: 'norfair-2', x: 81.4, y: 72.3, name: 'Missile tank', depends: 'hSa'},
  m45: {id: 'm45', sector: 'brinstar-1', x: 37.1, y: 43.8, name: 'Missile tank', depends: ['hSbo', 'pb01', 'hGs', 'hSa-e']},
  m46: {id: 'm46', sector: 'brinstar-1', x: 37.1, y: 43.8, name: 'Missile tank', depends: ['hSbo', 'pb01', 'hGs', 'hSa-e']},
} satisfies Locations<MissileTank>;

//---- Map Rooms ----//

interface MapRoom extends Location {
  id: `mr${Capitalize<string>}`;
  name: `Map room ${string}`;
}

export const mr = {
  mrC: {id: 'mrC', sector: 'crateria-1', x: 32.8, y: 12.5, name: 'Map room - Crateria', depends: 'm01'},
  mrB: {id: 'mrB', sector: 'brinstar-1', x: 2.8, y: 38.1, name: 'Map room - Brinstar', depends: ['m01', 'hB']},
  mrN: {id: 'mrN', sector: 'norfair-1', x: 52.7, y: 70.9, name: 'Map room - Norfair', depends: 'sm01'},
  mrWs: {id: 'mrWs', sector: 'wrecked-ship', x: 67.1, y: 15.3, name: 'Map room - Wrecked Ship', depends: 'hGb'},
  mrM: {id: 'mrM', sector: 'maridia-1', x: 60, y: 56.6, name: 'Map room - Maridia', depends: 'hGs'},
} satisfies Locations<MapRoom>;

//---- Others ----//

export const o = {
  oS1: {id: 'oS1', sector: 'crateria-1', x: 38, y: 8.2, name: 'Ship - Start'},
  oT: {id: 'oT', sector: 'crateria-1', x: 24.2, y: 14, name: 'Tourian - Start', depends: ['bK', 'bPh', 'bD', 'bR']},
  oS2: {id: 'oS2', sector: 'crateria-1', x: 38, y: 8.2, name: 'Ship - End'},
} satisfies Locations<Location>;

//---- Power Bombs ----//

interface PowerBomb extends Location {
  id: `pb${number}`;
  name: 'Power Bomb';
}

export const pb = {
  pb01: {id: 'pb01', sector: 'norfair-1', x: 52.7, y: 79.5, name: 'Power Bomb', depends: 'hVs'},
  pb02: {id: 'pb02', sector: 'brinstar-2', x: 45.6, y: 48.1, name: 'Power Bomb', depends: ['sm01-h', 'hIb-e']},
  pb03: {id: 'pb03', sector: 'brinstar-2', x: 45.6, y: 43.8, name: 'Power Bomb', depends: ['sm01-h', 'hIb-e']},
  pb04: {id: 'pb04', sector: 'crateria-1', x: 47, y: 3.9, name: 'Power Bomb', depends: 'pb01'},
  pb05: {id: 'pb05', sector: 'brinstar-1', x: 28.5, y: 46.7, name: 'Power Bomb', depends: 'hIb'},
  pb06: {id: 'pb06', sector: 'brinstar-1', x: 17.2, y: 43.8, name: 'Power Bomb', depends: ['sm01', 'hHjb-h', 'pb01', 'hGb-n', 'hSj-e']},
  pb07: {id: 'pb07', sector: 'brinstar-1', x: 12.8, y: 42.4, name: 'Power Bomb', depends: ['hMb-h', 'hHjb-h', 'pb01', 'hSj-e', 'hSba-e']},
  pb08: {id: 'pb08', sector: 'maridia-2', x: 69.9, y: 53.8, name: 'Power Bomb', depends: ['hMb', 'hGs', 'hSj']},
  pb09: {id: 'pb09', sector: 'norfair-2', x: 85.6, y: 85.2, name: 'Power Bomb', depends: ['hSa']},
  pb10: {id: 'pb10', sector: 'norfair-2', x: 92.8, y: 73.8, name: 'Power Bomb', depends: 'hSa'},
} satisfies Locations<PowerBomb>;

//---- Reserve Tanks ----//

interface ReserveTank extends Location {
  id: `rt${number}`;
  name: 'Reserve tank';
}

export const rt = {
  rt01: {id: 'rt01', sector: 'brinstar-1', x: 14.3, y: 38.1, name: 'Reserve tank', depends: 'hSbo'},
  rt02: {id: 'rt02', sector: 'wrecked-ship', x: 69.9, y: 3.9, name: 'Reserve tank', depends: 'hGb'},
  rt03: {id: 'rt03', sector: 'maridia-2', x: 64.2, y: 52.4, name: 'Reserve tank', depends: ['hMb-h', 'hSj', 'hSba-e']},
  rt04: {id: 'rt04', sector: 'norfair-1', x: 65.6, y: 68.1, name: 'Reserve tank', depends: ['hMb-h', 'm39', 'hSba-e']},
} satisfies Locations<ReserveTank>;

//---- Super Missiles ----//

interface SuperMissile extends Location {
  id: `sm${number}`;
  name: 'Super Missile';
}

export const sm = {
  sm01: {id: 'sm01', sector: 'brinstar-1', x: 29.9, y: 45.2, name: 'Super Missile', status: 'important', depends: 'mbSs'},
  sm02: {id: 'sm02', sector: 'crateria-1', x: 34.2, y: 15.3, name: 'Super Missile', depends: ['pb01', 'hIb', 'hPb-e']},
  sm03: {id: 'sm03', sector: 'brinstar-1', x: 2.8, y: 46.7, name: 'Super Missile', depends: ['sm01', 'pb01']},
  sm04: {id: 'sm04', sector: 'brinstar-1', x: 10, y: 36.7, name: 'Super Missile', depends: 'hSbo'},
  sm05: {id: 'sm05', sector: 'wrecked-ship', x: 69.9, y: 12.5, name: 'Super Missile', depends: 'hGb'},
  sm06: {id: 'sm06', sector: 'wrecked-ship', x: 78.5, y: 12.5, name: 'Super Missile', depends: 'hGb'},
  sm07: {id: 'sm07', sector: 'maridia-1', x: 51.4, y: 48.1, name: 'Super Missile', depends: ['hMb', 'hB', 'hGs']},
  sm08: {id: 'sm08', sector: 'maridia-1', x: 52.7, y: 40.9, name: 'Super Missile', depends: 'hGs'},
  sm09: {id: 'sm09', sector: 'maridia-2', x: 71.4, y: 45.2, name: 'Super Missile', depends: 'hGs'},
  sm10: {id: 'sm10', sector: 'norfair-2', x: 67.1, y: 86.7, name: 'Super Missile', depends: ['pb01-h', 'hSj', 'hSa-e']},
} satisfies Locations<SuperMissile>;
