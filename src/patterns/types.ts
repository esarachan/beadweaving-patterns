import type { Color } from './colors';

export type Bead = {
  char: string,
  color: Color,
};

export type PeyotePattern = {
  firstColumnIsElevated: boolean,
  rows: Bead[][],
};
