export type Bead = {
  char: string,
  color: string,
};

export type PeyotePattern = {
  firstColumnIsElevated: boolean,
  rows: Bead[][],
};
