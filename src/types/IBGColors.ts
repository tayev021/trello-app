export const BGColors = [
  '#F1F2F4',
  '#fecaca',
  '#fed7aa',
  '#fef08a',
  '#86efac',
  '#a5f3fc',
  '#f5d0fe',
  '#cbd5e1',
] as const;

type BGColorsTuple = typeof BGColors;

export type IBGColors = BGColorsTuple[number];
