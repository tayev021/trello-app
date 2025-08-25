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

export const BGColorsBrighter = {
  [BGColors[0]]: '#71717a',
  [BGColors[1]]: '#dc2626',
  [BGColors[2]]: '#ea580c',
  [BGColors[3]]: '#facc15',
  [BGColors[4]]: '#22c55e',
  [BGColors[5]]: '#0ea5e9',
  [BGColors[6]]: '#7c3aed',
  [BGColors[7]]: '#334155',
};

type BGColorsTuple = typeof BGColors;

export type IBGColors = BGColorsTuple[number];
