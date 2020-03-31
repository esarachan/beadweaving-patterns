import type { Bead } from '../types';

const A: Bead = 'A';
const B: Bead = 'B';
const C: Bead = 'C';
const D: Bead = 'D';

const config = {
  firstColumnIsElevated: true,
  columnWavelengths: [3, 4, 5, 6, 7, 8, 7, 6, 5, 4],
  numRows: 100,
  colors: [A, B, C, D],
};

const pattern = () => {
  return {
    firstColumnIsElevated: true,
    rows: [
      [A, A, A, A],
      [B, B, B, B],
      [C, C, C, C],
    ],
  };
};

export default pattern;
