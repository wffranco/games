export const wrap = <T>(el: T | T[]): T[] => Array.isArray(el) ? el : ((el && [el]) ?? []);
