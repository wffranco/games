import { b, et, h, m, mr, o, pb, rt, sectors, sm, type Location } from './item-groups';

export type Order = 'advanced' | 'sectors' | undefined;

export const orders = [
  {name: 'Chronological Order', value: undefined},
  {name: 'Advanced Order', value: 'advanced'},
  {name: 'Order by Sectors', value: 'sectors'},
] satisfies {name: string; value: Order}[];

export function sort(order?: Order): Location[] {
  switch (order) {
    case 'advanced': return advanced;
    case 'sectors': return chrono.slice().sort((a, b) => sectors.indexOf(a.sector) - sectors.indexOf(b.sector));
  }
  return chrono;
}

/** Constructing a list with the chronological order of locations */
const list = [
  // Start - Main
  o.oS1,
  // Brinstar
  h.hMb, m.m01, m.m02,
  // Crateria
  mr.mrC, h.hB, b.mbT, m.m03, et.et01,
  // Brinstar
  mr.mrB, m.m04, b.mbSs, sm.sm01, m.m05, h.hCb, h.hS,
  // Norfair
  et.et02, h.hHjb, m.m06,
  // Brinstar
  b.bK, h.hVs, et.et03,
  // Norfair
  m.m07, m.m08, m.m09, h.hWab, m.m10, h.hSbo, b.mbC, et.et04, pb.pb01, m.m11, m.m12, h.hGb, m.m13, mr.mrN, m.m14, h.hIb,
  // Brinstar
  m.m15, h.hXrs, pb.pb02, m.m16, pb.pb03,
  // Crateria
  pb.pb04, et.et05, m.m17, m.m18, m.m19, sm.sm02,
  // Brinstar
  pb.pb05, m.m20, et.et06, m.m21, pb.pb06, et.et07, sm.sm03, pb.pb07, rt.rt01, m.m22, m.m23, sm.sm04,
  // Crateria
  m.m24, m.m25,
  // Wrecked Ship
  b.bPh, mr.mrWs, sm.sm05, sm.sm06, m.m26, m.m27,
  // Crateria
  m.m28, m.m29,
  // Wrecked Ship
  m.m30, rt.rt02, h.hGs, et.et08,
  // Wrecked Ship Completed
  // Maridia
  mr.mrM, m.m31, sm.sm07, sm.sm08, m.m32, m.m33, m.m34, sm.sm09, b.mbB, et.et09,
  m.m35, b.bD, h.hSj, h.hPb, m.m36, pb.pb08, h.hSba, m.m37, et.et10, m.m38, rt.rt03,
  // Maridia Completed
  // Norfair
  m.m39, rt.rt04, m.m40, m.m41, b.mbGt, sm.sm10, h.hSa, m.m42, pb.pb09, b.bR, et.et11, et.et12, m.m43, pb.pb10, m.m44,
  // Norfair Completed
  // Brinstar
  et.et13, et.et14, m.m45, m.m46,
  // Brinstar Completed
  // Tourian
  o.oT, b.bMb,
  // Tourian Completed
  // Crateria
  o.oS2,
] satisfies Location[];

/** Constructing a list with the chronological order of locations */
export const advanced = [
  // Start - Main
  o.oS1,
  // Brinstar
  h.hMb, m.m01,
  // Crateria
  mr.mrC, h.hB, b.mbT, et.et01,
  // Brinstar
  mr.mrB, b.mbSs, sm.sm01, m.m05, h.hCb, pb.pb02, m.m16, pb.pb03, h.hS,
  // Norfair
  mr.mrN, et.et02, h.hHjb, m.m06,
  // Brinstar
  m.m15, b.bK, h.hVs, et.et03,
  // Norfair
  m.m07, m.m08, m.m09, h.hWab, m.m10, h.hSbo, b.mbC, et.et04, pb.pb01, m.m11, m.m12, h.hGb, m.m13, h.hIb, m.m14,
  // Brinstar
  h.hXrs,
  // Crateria
  m.m24, m.m25,
  // Wrecked Ship
  b.bPh, mr.mrWs, sm.sm05, sm.sm06, m.m26, m.m27,
  // Crateria
  m.m28, m.m29,
  // Wrecked Ship
  m.m30, rt.rt02, h.hGs, et.et08,
  // Wrecked Ship Completed
  // Maridia
  mr.mrM, m.m31, sm.sm07, m.m37, et.et10, sm.sm08, m.m32, m.m33, m.m34, sm.sm09,
  b.mbB, et.et09, m.m35, b.bD, h.hSj, m.m36, pb.pb08, h.hSba, h.hPb, m.m38, rt.rt03,
  // Maridia Completed
  // Norfair
  m.m39, rt.rt04, m.m40, m.m41, b.mbGt, sm.sm10, h.hSa, m.m42, pb.pb09, b.bR, et.et11, et.et12, m.m43, pb.pb10, m.m44,
  // Norfair Completed
  // Brinstar
  m.m20, et.et13, et.et06, m.m21, pb.pb06, m.m04, rt.rt01, m.m22, m.m23, sm.sm04,
  et.et07, sm.sm03, pb.pb07, pb.pb05, et.et14, m.m02, m.m45, m.m46,
  // Brinstar Completed
  // Crateria
  m.m19, sm.sm02, m.m03,
  pb.pb04, et.et05, m.m17, m.m18,
  // Crateria Completed
  // Tourian
  o.oT, b.bMb,
  // Tourian Completed
  // Crateria
  o.oS2,
] satisfies Location[];

export const chrono = list;
