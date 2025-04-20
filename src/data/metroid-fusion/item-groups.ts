import type { Location as L, Locations as LS } from "@/components/maps/Map.astro";

export const sectors = [
  'main-0',
  'srx-1',
  'tro-2',
  'pyr-3',
  'aqa-4',
  'arc-5',
  'noc-6',
] as const;
export type Sector = typeof sectors[number];

export type Location = L<Sector>;
export type Locations<V extends Location> = LS<Sector, V>;

//---- Admosferic Stavilizer ----//

interface AdmosfericStavilizer extends Location {
  id: `as${number}`;
  sector: 'srx-1';
  name: 'Admosferic Stavilizer';
}

export const as = {
  as1: {id: 'as1', sector: 'srx-1', x: 19.8, y: 14.2, name: 'Admosferic Stavilizer', depends: 'nr06'},
  as2: {id: 'as2', sector: 'srx-1', x: 27.6, y: 14.2, name: 'Admosferic Stavilizer', depends: 'nr06'},
  as3: {id: 'as3', sector: 'srx-1', x: 19.8, y: 25, name: 'Admosferic Stavilizer', depends: 'nr06'},
  as4: {id: 'as4', sector: 'srx-1', x: 26, y: 25, name: 'Admosferic Stavilizer', depends: 'nr06'},
  as5: {id: 'as5', sector: 'srx-1', x: 22.9, y: 18.8, name: 'Admosferic Stavilizer', depends: 'hCb'},
} satisfies Locations<AdmosfericStavilizer>;

//---- Data Rooms ----//

interface DataRoom extends Location {
  id: `dr${string}`;
  name: `Data Room - ${string}`;
}


export const dr = {
  drB: {id: 'drB', sector: 'tro-2', x: 36.1, y: 18.2, name: "Data Room - Bomb", status: 'important', depends: 'sl1'},
  drDm: {id: 'drDm', sector: 'aqa-4', x: 86.9, y: 51.4, name: "Data Room - Diffusion Missile", status: 'important', depends: 'sl4'},
  drE: {id: 'drE', sector: 'noc-6', x: 81.5, y: 89.7, name: "Data Room - Empty", status: 'important', depends: 'nr14'},
  drIm: {id: 'drIm', sector: 'arc-5', x: 45.4, y: 83.9, name: "Data Room - Ice Missile", status: 'important', depends: 'sl3'},
  drM: {id: 'drM', sector: 'main-0', x: 39, y: 38.4, name: "Data Room - Missile", status: 'important'},
  drPb: {id: 'drPb', sector: 'arc-5', x: 45.4, y: 83.9, name: "Data Room - Power Bomb", status: 'important', depends: 'nr20'},
  drSm: {id: 'drSm', sector: 'pyr-3', x: 89.6, y: 14.3, name: "Data Room - Super Missile", status: 'important', depends: 'sl2'},
} satisfies Record<string, DataRoom>;

//---- Detours ----//

interface Detour extends Location {
  id: `d${number}`;
  name: `Detour - ${string}`;
}

export const d = {
  d01: {id: 'd01', sector: 'main-0', x: 26.7, y: 69.3, name: 'Detour - Sector 0 → 1', depends: 'hWab'},
  d02: {id: 'd02', sector: 'main-0', x: 39, y: 61.7, name: 'Detour - Sector 0 → 2', depends: 'drPb'},
  d03: {id: 'd03', sector: 'main-0', x: 29.8, y: 72.5, name: 'Detour - Sector 0 → 6', depends: 'hWab'},
  d04: {id: 'd04', sector: 'srx-1', x: 6.7, y: 28.9, name: 'Detour - Sector 1 → 0', depends: 'hSa'},
  d05: {id: 'd05', sector: 'srx-1', x: 17.5, y: 12, name: 'Detour - Sector 1 → 2', depends: 'hSa'},
  d06: {id: 'd06', sector: 'srx-1', x: 6.7, y: 15, name: 'Detour - Sector 1 → 3', depends: 'hSa'},
  d07: {id: 'd07', sector: 'tro-2', x: 59.4, y: 24.3, name: 'Detour - Sector 2 → 0', depends: 'hSa'},
  d08: {id: 'd08', sector: 'tro-2', x: 37.6, y: 16.6, name: 'Detour - Sector 2 → 1', depends: 'hSa'},
  d09: {id: 'd09', sector: 'tro-2', x: 53.1, y: 15, name: 'Detour - Sector 2 → 4', depends: 'hSa'},
  d10: {id: 'd10', sector: 'pyr-3', x: 89.6, y: 9.8, name: 'Detour - Sector 3 → 1', depends: 'hSa'},
  d11: {id: 'd11', sector: 'pyr-3', x: 61.8, y: 17.5, name: 'Detour - Sector 3 → 5', depends: 'hSa'},
  d12: {id: 'd12', sector: 'aqa-4', x: 86.9, y: 59.1, name: 'Detour - Sector 4 → 2', depends: 'hSa'},
  d13: {id: 'd13', sector: 'aqa-4', x: 65.2, y: 54.5, name: 'Detour - Sector 4 → 5', depends: 'hSa'},
  d14: {id: 'd14', sector: 'aqa-4', x: 91.5, y: 49.8, name: 'Detour - Sector 4 → 6', depends: 'hSa'},
  d15: {id: 'd15', sector: 'arc-5', x: 45.4, y: 80.7, name: 'Detour - Sector 5 → 3', depends: 'hSa'},
  d16: {id: 'd16', sector: 'arc-5', x: 59.3, y: 88.6, name: 'Detour - Sector 5 → 4', depends: 'hGs'},
  d17: {id: 'd17', sector: 'arc-5', x: 28.3, y: 82.4, name: 'Detour - Sector 5 → 6', depends: 'hSa'},
  d18: {id: 'd18', sector: 'noc-6', x: 69.2, y: 86.6, name: 'Detour - Sector 6 → 0 (Restricted Lab)', depends: 'hWab'},
  d19: {id: 'd19', sector: 'noc-6', x: 70.8, y: 77.4, name: 'Detour - Sector 6 → 4', depends: 'hSa'},
  d20: {id: 'd20', sector: 'noc-6', x: 86.2, y: 75.7, name: 'Detour - Sector 6 → 5', depends: 'hSa'},
} satisfies Locations<Detour>;

//---- Energy Tanks ----//

interface EnergyTank extends Location {
  id: `et${number}`;
  name: 'Energy tank';
}

export const et = {
  et01: {id: 'et01', sector: 'main-0', x: 52.9, y: 46.2, name: "Energy tank", status: 'urgent', depends: 'drM'},
  et02: {id: 'et02', sector: 'main-0', x: 54.6, y: 46.2, name: "Energy tank", status: 'urgent', depends: 'drM'},
  et03: {id: 'et03', sector: 'main-0', x: 48.4, y: 61.7, name: "Energy tank", depends: 'drPb'},
  et04: {id: 'et04', sector: 'srx-1', x: 23.65, y: 15, name: "Energy tank", depends: 'nr06'},
  et05: {id: 'et05', sector: 'srx-1', x: 17.5, y: 18.1, name: "Energy tank", status: 'hard', depends: 'hSb'},
  et06: {id: 'et06', sector: 'srx-1', x: 8.2, y: 27.4, name: "Energy tank", depends: 'd01'},
  et07: {id: 'et07', sector: 'tro-2', x: 42.3, y: 12, name: "Energy tank", depends: 'hSa'},
  et08: {id: 'et08', sector: 'tro-2', x: 53.1, y: 18.2, name: "Energy tank", depends: 'drPb'},
  et09: {id: 'et09', sector: 'tro-2', x: 53.1, y: 29, name: "Energy tank", depends: 'drB'},
  et10: {id: 'et10', sector: 'pyr-3', x: 63.4, y: 12.8, name: "Energy tank", status: 'hard'},
  et11: {id: 'et11', sector: 'pyr-3', x: 78.8, y: 12.8, name: "Energy tank", depends: 'drSm'},
  et12: {id: 'et12', sector: 'pyr-3', x: 89.6, y: 23.6, name: "Energy tank", depends: 'hWib'},
  et13: {id: 'et13', sector: 'aqa-4', x: 71.4, y: 45.2, name: "Energy tank", depends: 'nr10'},
  et14: {id: 'et14', sector: 'aqa-4', x: 66.7, y: 63.8, name: "Energy tank", depends: 'hGs'},
  et15: {id: 'et15', sector: 'arc-5', x: 45.4, y: 87, name: "Energy tank", depends: 'nr16'},
  et16: {id: 'et16', sector: 'arc-5', x: 50, y: 87, name: "Energy tank", depends: 'hGs'},
  et17: {id: 'et17', sector: 'arc-5', x: 60.8, y: 82.4, name: "Energy tank", depends: 'nr24'},
  et18: {id: 'et18', sector: 'noc-6', x: 80, y: 77.4, name: "Energy tank", depends: 'nr14'},
  et19: {id: 'et19', sector: 'noc-6', x: 89.2, y: 78.9, name: "Energy tank", status: 'hard', depends: 'nr14'},
  et20: {id: 'et20', sector: 'noc-6', x: 76.9, y: 85, name: "Energy tank", depends: 'nr14'},
} satisfies Locations<EnergyTank>;

//---- Habilities ----//

interface Hability extends Location {
  id: `h${string}`;
  status: 'important';
}

export const h = {
  hCb: {id: 'hCb', sector: 'srx-1', x: 17.5, y: 21.2, name: 'Charge Beam', status: 'important', depends: 'nr06'},
  hGs: {id: 'hGs', sector: 'arc-5', x: 62.3, y: 85.4, name: 'Gravity Suit', status: 'important', depends: 'nr24'},
  hHj: {id: 'hHj', sector: 'tro-2', x: 56.1, y: 32, name: 'High Jump', status: 'important', depends: 'drB'},
  hMb: {id: 'hMb', sector: 'main-0', x: 52.9, y: 49.2, name: 'Morphing Ball', status: 'important', depends: 'drM'},
  hPb: {id: 'hPb', sector: 'tro-2', x: 56.1, y: 19.7, name: 'Plasma Beam', status: 'important', depends: 'hSj'},
  hSa: {id: 'hSa', sector: 'srx-1', x: 5.2, y: 25.9, name: 'Screw Attack', status: 'important', depends: 'd01'},
  hSb: {id: 'hSb', sector: 'aqa-4', x: 74.5, y: 43.7, name: 'Speed Booster', status: 'important', depends: 'nr10'},
  hSj: {id: 'hSj', sector: 'main-0', x: 48.4, y: 69.3, name: 'Space Jump', status: 'important', depends: 'drPb'},
  hVs: {id: 'hVs', sector: 'noc-6', x: 84.5, y: 91.3, name: 'Varia Suit', status: 'important', depends: 'drE'},
  hWab: {id: 'hWab', sector: 'noc-6', x: 80, y: 82, name: 'Wave Beam', status: 'important', depends: 'nr26'},
  hWib: {id: 'hWib', sector: 'pyr-3', x: 66.5, y: 22, name: 'Wide Beam', status: 'important', depends: 'nr17'},
} satisfies Locations<Hability>;

//---- Missile Tanks ----//

interface MissileTank extends Location {
  id: `m${number}`;
  name: 'Missile tank';
}

export const m = {
  m01: {id: 'm01', sector: 'main-0', x: 46.9, y: 47.8, name: 'Missile tank', status: 'urgent', depends: 'drM'},
  m02: {id: 'm02', sector: 'main-0', x: 45.3, y: 47.8, name: 'Missile tank', status: 'urgent', depends: 'drM'},
  m03: {id: 'm03', sector: 'main-0', x: 34.5, y: 50.8, name: 'Missile tank', depends: 'hMb'},
  m04: {id: 'm04', sector: 'main-0', x: 23.6, y: 49.2, name: 'Missile tank', depends: 'hSb'},
  m05: {id: 'm05', sector: 'main-0', x: 29.9, y: 43, name: 'Missile tank', depends: 'sl2'},
  m06: {id: 'm06', sector: 'main-0', x: 37.5, y: 54, name: 'Missile tank', depends: 'nr21'},
  m07: {id: 'm07', sector: 'main-0', x: 50, y: 64.9, name: 'Missile tank', depends: 'drPb'},
  m08: {id: 'm08', sector: 'srx-1', x: 23.7, y: 24.3, name: 'Missile tank', depends: 'nr06'},
  m09: {id: 'm09', sector: 'srx-1', x: 19.1, y: 18.1, name: 'Missile tank', depends: 'hCb'},
  m10: {id: 'm10', sector: 'srx-1', x: 29.9, y: 15, name: 'Missile tank', depends: 'nr06'},
  m11: {id: 'm11', sector: 'srx-1', x: 14.3, y: 18.1, name: 'Missile tank', depends: 'hVs'},
  m12: {id: 'm12', sector: 'srx-1', x: 12.8, y: 16.6, name: 'Missile tank', depends: 'hSa'},
  m13: {id: 'm13', sector: 'srx-1', x: 11.3, y: 16.6, name: 'Missile tank', depends: 'hSj'},
  m14: {id: 'm14', sector: 'tro-2', x: 40.7, y: 18.2, name: 'Missile tank', depends: 'drB'},
  m15: {id: 'm15', sector: 'tro-2', x: 34.5, y: 19.7, name: 'Missile tank', depends: 'drB'},
  m16: {id: 'm16', sector: 'tro-2', x: 37.6, y: 33.6, name: 'Missile tank', depends: 'drB'},
  m17: {id: 'm17', sector: 'tro-2', x: 48.4, y: 19.7, name: 'Missile tank', depends: 'hHj'},
  m18: {id: 'm18', sector: 'tro-2', x: 48.4, y: 16.6, name: 'Missile tank', depends: 'hHj'},
  m19: {id: 'm19', sector: 'tro-2', x: 40.7, y: 16.6, name: 'Missile tank', depends: 'hHj'},
  m20: {id: 'm20', sector: 'tro-2', x: 40.7, y: 29, name: 'Missile tank', depends: 'hHj'},
  m21: {id: 'm21', sector: 'tro-2', x: 39.2, y: 30.5, name: 'Missile tank', depends: 'hHj'},
  m22: {id: 'm22', sector: 'tro-2', x: 59.4, y: 33.6, name: 'Missile tank', status: 'hard', depends: 'hSa'},
  m23: {id: 'm23', sector: 'pyr-3', x: 71, y: 19, name: 'Missile tank', depends: 'nr12'},
  m24: {id: 'm24', sector: 'pyr-3', x: 78.8, y: 15.9, name: 'Missile tank', status: 'careful', depends: 'nr12'},
  m25: {id: 'm25', sector: 'pyr-3', x: 88.1, y: 15.9, name: 'Missile tank', depends: 'drSm'},
  m26: {id: 'm26', sector: 'pyr-3', x: 83.5, y: 25.2, name: 'Missile tank', depends: 'hWib'},
  m27: {id: 'm27', sector: 'pyr-3', x: 66.5, y: 15.9, name: 'Missile tank', depends: 'drM'},
  m28: {id: 'm28', sector: 'pyr-3', x: 88.1, y: 25.2, name: 'Missile tank', depends: 'hWib'},
  m29: {id: 'm29', sector: 'pyr-3', x: 85, y: 9.8, name: 'Missile tank', depends: 'drSm'},
  m30: {id: 'm30', sector: 'aqa-4', x: 65.2, y: 46.7, name: 'Missile tank', depends: 'nr10'},
  m31: {id: 'm31', sector: 'aqa-4', x: 77.5, y: 43.7, name: 'Missile tank', depends: 'hSb'},
  m32: {id: 'm32', sector: 'aqa-4', x: 79.1, y: 45.2, name: 'Missile tank', depends: 'hSb'},
  m33: {id: 'm33', sector: 'aqa-4', x: 57.4, y: 51.4, name: 'Missile tank', depends: 'oPc'},
  m34: {id: 'm34', sector: 'aqa-4', x: 71.4, y: 51.4, name: 'Missile tank', depends: 'oPc'},
  m35: {id: 'm35', sector: 'aqa-4', x: 74.5, y: 54.5, name: 'Missile tank', depends: 'hGs'},
  m36: {id: 'm36', sector: 'aqa-4', x: 72.9, y: 60.7, name: 'Missile tank', depends: 'hGs'},
  m37: {id: 'm37', sector: 'aqa-4', x: 85.3, y: 53, name: 'Missile tank', depends: 'hGs'},
  m38: {id: 'm38', sector: 'aqa-4', x: 80.6, y: 51.4, name: 'Missile tank', depends: 'drSm'},
  m39: {id: 'm39', sector: 'arc-5', x: 34.6, y: 82.4, name: 'Missile tank', depends: 'sl3'},
  m40: {id: 'm40', sector: 'arc-5', x: 34.6, y: 77.8, name: 'Missile tank', depends: 'drIm'},
  m41: {id: 'm41', sector: 'arc-5', x: 48.4, y: 88.6, name: 'Missile tank', status: 'hard', depends: 'nr16'},
  m42: {id: 'm42', sector: 'arc-5', x: 31.5, y: 82.4, name: 'Missile tank', depends: 'sl3'},
  m43: {id: 'm43', sector: 'noc-6', x: 75.3, y: 77.4, name: 'Missile tank', depends: 'nr14'},
  m44: {id: 'm44', sector: 'noc-6', x: 75.3, y: 89.7, name: 'Missile tank', depends: 'nr14'},
  m45: {id: 'm45', sector: 'noc-6', x: 86.2, y: 85, name: 'Missile tank', depends: 'hVs'},
  m46: {id: 'm46', sector: 'noc-6', x: 84.5, y: 86.6, name: 'Missile tank', depends: 'hVs'},
  m47: {id: 'm47', sector: 'noc-6', x: 89.2, y: 77.4, name: 'Missile tank', depends: 'nr14'},
  m48: {id: 'm48', sector: 'noc-6', x: 83.1, y: 82, name: 'Missile tank', depends: 'hWab'},
} satisfies Locations<MissileTank>;

//---- Navigation Rooms ----//

interface NavigationRoom extends Location {
  id: `nr${number}`;
  name: `${string}Navigation room${string}`;
}

export const nr = {
  nr01: {id: 'nr01', sector: 'main-0', x: 34.5, y: 52.4, name: 'Navigation room'},
  nr02: {id: 'nr02', sector: 'main-0', x: 34.5, y: 52.4, name: 'Navigation room'},
  nr03: {id: 'nr03', sector: 'main-0', x: 42.15, y: 46.2, name: 'Navigation room'},
  nr04: {id: 'nr04', sector: 'main-0', x: 40.6, y: 38.4, name: 'Navigation room'},
  nr05: {id: 'nr05', sector: 'main-0', x: 34.5, y: 52.4, name: 'Navigation room', depends: 'hMb'},
  nr06: {id: 'nr06', sector: 'srx-1', x: 6.7, y: 13.4, name: 'Navigation room', depends: 'nr05'},
  nr07: {id: 'nr07', sector: 'srx-1', x: 6.7, y: 13.4, name: 'Navigation room', depends: 'as5'},
  nr08: {id: 'nr08', sector: 'tro-2', x: 39.2, y: 15, name: 'Navigation room', depends: 'nr07'},
  nr09: {id: 'nr09', sector: 'tro-2', x: 39.2, y: 15, name: 'Navigation room', depends: 'hHj'},
  nr10: {id: 'nr10', sector: 'aqa-4', x: 86.9, y: 48.3, name: 'Navigation room', depends: 'nr09'},
  nr11: {id: 'nr11', sector: 'aqa-4', x: 86.9, y: 48.3, name: 'Navigation room', depends: 'oPc'},
  nr12: {id: 'nr12', sector: 'pyr-3', x: 69.6, y: 12.8, name: 'Navigation room', depends: 'nr11'},
  nr13: {id: 'nr13', sector: 'pyr-3', x: 69.6, y: 12.8, name: 'Navigation room', depends: 'drSm'},
  nr14: {id: 'nr14', sector: 'noc-6', x: 69.2, y: 75.7, name: 'Navigation room', depends: 'nr13'},
  nr15: {id: 'nr15', sector: 'noc-6', x: 69.2, y: 75.7, name: 'Navigation room', depends: 'hVs'},
  nr16: {id: 'nr16', sector: 'arc-5', x: 28.3, y: 79.3, name: 'Navigation room', depends: 'nr15'},
  nr17: {id: 'nr17', sector: 'arc-5', x: 28.3, y: 79.3, name: 'Navigation room', depends: 'drIm'},
  nr18: {id: 'nr18', sector: 'pyr-3', x: 69.6, y: 12.8, name: 'Navigation room', depends: 'hWib'},
  nr19: {id: 'nr19', sector: 'main-0', x: 34.5, y: 52.4, name: 'Navigation room', depends: 'oHd'},
  nr20: {id: 'nr20', sector: 'arc-5', x: 28.3, y: 79.3, name: 'Navigation room', depends: 'nr19'},
  nr21: {id: 'nr21', sector: 'arc-5', x: 28.3, y: 79.3, name: 'Navigation room', depends: 'drPb'},
  nr22: {id: 'nr22', sector: 'main-0', x: 45.3, y: 66.3, name: 'Navigation room', depends: 'drPb'},
  nr23: {id: 'nr23', sector: 'tro-2', x: 39.2, y: 15, name: 'Navigation room', depends: 'hPb'},
  nr24: {id: 'nr24', sector: 'arc-5', x: 28.3, y: 79.3, name: 'Navigation room', depends: 'nr23'},
  nr25: {id: 'nr25', sector: 'aqa-4', x: 86.9, y: 48.3, name: 'Navigation room', depends: 'drDm'},
  nr26: {id: 'nr26', sector: 'noc-6', x: 69.2, y: 75.7, name: 'Navigation room', depends: 'nr25'},
  nr27: {id: 'nr27', sector: 'main-0', x: 25.1, y: 69.3, name: 'Navigation room', depends: 'hWab'},
  nr28: {id: 'nr28', sector: 'pyr-3', x: 69.6, y: 12.8, name: 'Any Navigation room - Final secuence', depends: 'hWab'},
} satisfies Locations<NavigationRoom>;

//---- Others ----//

export const o = {
  oS1: {id: 'oS1', sector: 'main-0', x: 46.75, y: 57, name: 'Ship - Start'},
  oE: {id: 'oE', sector: 'main-0', x: 28.2, y: 50.9, name: 'Exploring'},
  oHd: {id: 'oHd', sector: 'main-0', x: 29.9, y: 40, name: 'Habitation Deck', depends: 'sl2'},
  oOr: {id: 'oOr', sector: 'main-0', x: 39, y: 36.9, name: 'Operation Room', depends: 'hSa'},
  oPc: {id: 'oPc', sector: 'aqa-4', x: 57.4, y: 49.8, name: 'Pump Control', status: 'important', depends: 'hSb'},
  oS2: {id: 'oS2', sector: 'main-0', x: 46.75, y: 57, name: 'Ship - Update', depends: 'nr21'},
} satisfies Locations<Location>;

//---- Power Bombs ----//

interface PowerBomb extends Location {
  id: `pb${number}`;
  name: 'Power Bomb';
}

export const pb = {
  pb01: {id: 'pb01', sector: 'main-0', x: 28.2, y: 54, name: 'Power Bomb', depends: 'nr21'},
  pb02: {id: 'pb02', sector: 'main-0', x: 37.5, y: 47.8, name: 'Power Bomb', depends: 'drPb'},
  pb03: {id: 'pb03', sector: 'main-0', x: 23.6, y: 70.9, name: 'Power Bomb', status: 'hard', depends: 'hWab'},
  pb04: {id: 'pb04', sector: 'srx-1', x: 15.9, y: 28.9, name: 'Power Bomb', depends: 'd01'},
  pb05: {id: 'pb05', sector: 'srx-1', x: 22.1, y: 22.8, name: 'Power Bomb', status: 'hard', depends: 'drPb'},
  pb06: {id: 'pb06', sector: 'srx-1', x: 14.3, y: 12, name: 'Power Bomb', depends: 'hSa'},
  pb07: {id: 'pb07', sector: 'tro-2', x: 46.9, y: 24.3, name: 'Power Bomb', depends: 'drPb'},
  pb08: {id: 'pb08', sector: 'tro-2', x: 42.3, y: 24.3, name: 'Power Bomb', depends: 'drPb'},
  pb09: {id: 'pb09', sector: 'tro-2', x: 42.3, y: 27.3, name: 'Power Bomb', depends: 'drPb'},
  pb10: {id: 'pb10', sector: 'tro-2', x: 59.4, y: 30.5, name: 'Power Bomb', status: 'hard', depends: 'hSa'},
  pb11: {id: 'pb11', sector: 'tro-2', x: 42.3, y: 13.6, name: 'Power Bomb', depends: 'hSa'},
  pb12: {id: 'pb12', sector: 'pyr-3', x: 61.8, y: 17.5, name: 'Power Bomb', depends: 'drPb'},
  pb13: {id: 'pb13', sector: 'pyr-3', x: 78.8, y: 19, name: 'Power Bomb', depends: 'drPb'},
  pb14: {id: 'pb14', sector: 'pyr-3', x: 72.6, y: 26.8, name: 'Power Bomb', depends: 'drPb'},
  pb15: {id: 'pb15', sector: 'pyr-3', x: 92.8, y: 23.6, name: 'Power Bomb', depends: 'hSa'},
  pb16: {id: 'pb16', sector: 'pyr-3', x: 92.8, y: 14.3, name: 'Power Bomb', depends: 'hSa'},
  pb17: {id: 'pb17', sector: 'pyr-3', x: 77.3, y: 11.3, name: 'Power Bomb', depends: 'drPb'},
  pb18: {id: 'pb18', sector: 'aqa-4', x: 68.2, y: 54.5, name: 'Power Bomb', depends: 'hGs'},
  pb19: {id: 'pb19', sector: 'aqa-4', x: 68.2, y: 57.5, name: 'Power Bomb', depends: 'hGs'},
  pb20: {id: 'pb20', sector: 'aqa-4', x: 86.9, y: 53, name: 'Power Bomb', depends: 'hGs'},
  pb21: {id: 'pb21', sector: 'aqa-4', x: 76, y: 51.4, name: 'Power Bomb', depends: 'drPb'},
  pb22: {id: 'pb22', sector: 'arc-5', x: 37.6, y: 93.2, name: 'Power Bomb', depends: 'drPb'},
  pb23: {id: 'pb23', sector: 'arc-5', x: 39.1, y: 87, name: 'Power Bomb', depends: 'drPb'},
  pb24: {id: 'pb24', sector: 'arc-5', x: 36.1, y: 83.9, name: 'Power Bomb', depends: 'drPb'},
  pb25: {id: 'pb25', sector: 'arc-5', x: 33, y: 77.8, name: 'Power Bomb', status: 'hard', depends: 'drPb'},
  pb26: {id: 'pb26', sector: 'arc-5', x: 53.1, y: 83.9, name: 'Power Bomb', depends: 'nr24'},
  pb27: {id: 'pb27', sector: 'arc-5', x: 54.6, y: 82.4, name: 'Power Bomb', depends: 'nr24'},
  pb28: {id: 'pb28', sector: 'arc-5', x: 57.7, y: 87, name: 'Power Bomb', depends: 'hGs'},
  pb29: {id: 'pb29', sector: 'arc-5', x: 43.8, y: 77.8, name: 'Power Bomb', depends: 'nr24'},
  pb30: {id: 'pb30', sector: 'noc-6', x: 72.3, y: 78.9, name: 'Power Bomb', status: 'hard', depends: 'drPb'},
  pb31: {id: 'pb31', sector: 'noc-6', x: 69.2, y: 81.9, name: 'Power Bomb', status: 'hard', depends: 'drPb'},
  pb32: {id: 'pb32', sector: 'noc-6', x: 81.5, y: 80.5, name: 'Power Bomb', depends: 'hSa'},
} satisfies Locations<PowerBomb>;

//---- Security Levels ----//

interface SecurityLevel extends Location {
  id: `sl${number}`;
  name: `Security Level ${number}`;
  status: 'important';
}

export const sl = {
  sl1: {id: 'sl1', sector: 'tro-2', x: 48.4, y: 13.6, name: "Security Level 1", status: 'important', depends: 'nr08'},
  sl2: {id: 'sl2', sector: 'pyr-3', x: 66.5, y: 17.5, name: "Security Level 2", status: 'important', depends: 'nr12'},
  sl3: {id: 'sl3', sector: 'arc-5', x: 36.1, y: 91.6, name: "Security Level 3", status: 'important', depends: 'nr16'},
  sl4: {id: 'sl4', sector: 'aqa-4', x: 62.2, y: 63.8, name: "Security Level 4", status: 'important', depends: 'hGs'},
} satisfies Locations<SecurityLevel>;

