import { as, d, dr, et, h, m, nr, o, pb, sectors, sl, type Location } from './item-groups';

export type Order = 'sectors' | undefined;

export const orders = [
  {name: 'Chronological Order', value: undefined},
  {name: 'Order by Sectors', value: 'sectors'},
] satisfies {name: string; value: Order}[];

export function sort(order?: Order): Location[] {
  switch (order) {
    case 'sectors': return chrono.slice().sort((a, b) => sectors.indexOf(a.sector) - sectors.indexOf(b.sector));
  }
  return chrono;
}

/** Constructing a list with the chronological order of locations */
const list = [
  // Start - Main
  o.oS1, nr.nr01, o.oE, nr.nr02, nr.nr03, dr.drM, nr.nr04, m.m01, m.m02, et.et01, et.et02, h.hMb, nr.nr05, m.m03,
  // Sector 1 - Srx
  nr.nr06, as.as1, et.et04, as.as2, as.as3, as.as4, m.m08, h.hCb, as.as5, m.m10, nr.nr07,
  // Sector 2 - Tro
  nr.nr08, sl.sl1, dr.drB, m.m14, m.m15, m.m16, et.et09, h.hHj, nr.nr09,
  // Sector 4 - Aqa
  nr.nr10, et.et13, m.m30, h.hSb, m.m31, m.m32, o.oPc, m.m33, m.m34, nr.nr11,
  // Sector 3 - Pyr
  nr.nr12, m.m23, sl.sl2, m.m24, dr.drSm, m.m25, et.et11, nr.nr13,
  // Sector 6 - Noc
  nr.nr14, m.m43, et.et18, et.et20, m.m44, dr.drE, h.hVs, m.m45, m.m46, et.et19, m.m47, nr.nr15,
  // Sector 5 - Arc
  nr.nr16, sl.sl3, dr.drIm, et.et15, m.m39, nr.nr17,
  // Sector 3
  h.hWib, m.m26, nr.nr18,
  // Main
  m.m04, m.m05, o.oHd, nr.nr19,
  // Sector 5
  nr.nr20, dr.drPb, pb.pb22, pb.pb23, pb.pb24, m.m40, pb.pb25, nr.nr21,
  // Main
  pb.pb01, m.m06, o.oS2, et.et03, m.m07, h.hSj, nr.nr22, d.d02,
  // Sector 2
  pb.pb07, h.hPb, nr.nr23,
  // Sector 5
  nr.nr24, m.m41, pb.pb26, pb.pb27, et.et17, h.hGs, et.et16, pb.pb28, d.d16,
  // Sector 4 - Should be completed before left the sector
  pb.pb18, m.m35, pb.pb19, sl.sl4, et.et14, m.m36, m.m37, pb.pb20, dr.drDm, m.m38, pb.pb21, nr.nr25,
  // Incomplete: 1, 2, 3, 5, 6
  // Sector 6
  nr.nr26, pb.pb30, pb.pb31, h.hWab, d.d18,
  // Main - Restricted Laboratory - Should be completed before left the sector
  nr.nr27, pb.pb03, d.d01,
  // Sector 1 - Should be completed before left the sector
  et.et06, pb.pb04, h.hSa, pb.pb05, et.et05, m.m09, m.m11, m.m12, m.m13, pb.pb06,
  // Incomplete: 2, 3, 5, 6
  // Optional - Find a N.R. for final scene, avoiding some items. Jump to main.
  // Sector 2 - Should be completed before left the sector
  d.d05,
  m.m19, m.m17, pb.pb08, pb.pb09, m.m20, m.m21, m.m22, pb.pb10, et.et08, m.m18, et.et07, pb.pb11,
  d.d09,
  // Incomplete: 3, 5, 6
  // Sector 6 - Should be completed before left the sector
  d.d14,
  m.m48, pb.pb32,
  // Incomplete: 3, 5
  // Sector 5 - Should be completed before left the sector
  d.d20,
  m.m42, pb.pb29,
  // Incomplete: 3
  // Sector 3 - Should be completed before left the sector
  d.d15,
  pb.pb12, et.et10, m.m27, pb.pb13, pb.pb14, et.et12, m.m28, pb.pb15, pb.pb16, m.m29, pb.pb17,
  // Go to any Navigation Room to start the final scene
  nr.nr28,
  pb.pb02,
  o.oOr,
  // Detours
  d.d04, d.d07,
  d.d08, d.d10,
  d.d12,
  d.d06,
  d.d19,
  d.d11, d.d13,
  d.d03, d.d17,
] satisfies Location[];

export const chrono = list;
