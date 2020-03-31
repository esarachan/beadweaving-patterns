import type { Bead, PeyotePattern } from './types';

const isOdd = (x: number) => !!(x % 2);
const isEven = (x: number) => !isOdd(x);

const rowToAsciiArt = (row: Bead[], firstColumnIsElevated: boolean) => {
  const evenBeads = row.filter((bead, index) => isEven(index));
  const oddBeads = row.filter((bead, index) => isOdd(index));

  const evenBeadsAscii = evenBeads.join(' ');
  const oddBeadsAscii = ' ' + oddBeads.join(' ');

  if (firstColumnIsElevated) {
    return evenBeadsAscii + '\n' + oddBeadsAscii;
  } else {
    return oddBeadsAscii + '\n' + evenBeadsAscii;
  }
}

export const patternToAsciiArt = (pattern: PeyotePattern) => {
  const rowAsciis = pattern.rows.map(row => rowToAsciiArt(row, pattern.firstColumnIsElevated));
  return rowAsciis.join('\n');
};
