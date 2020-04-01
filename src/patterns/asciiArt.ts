import chalk from "chalk";

import type { Bead, PeyotePattern } from "./types";

const isOdd = (x: number) => !!(x % 2);
const isEven = (x: number) => !isOdd(x);

const beadToString = (bead: Bead, colorful: boolean) =>
  colorful ? chalk.hex(bead.color)(bead.char) : bead.char;

const rowToAsciiArt = (
  row: Bead[],
  firstColumnIsElevated: boolean,
  colorful: boolean
) => {
  const evenBeads = row.filter((bead, index) => isEven(index));
  const oddBeads = row.filter((bead, index) => isOdd(index));

  const evenBeadsAscii = evenBeads
    .map((bead) => beadToString(bead, colorful))
    .join(" ");
  const oddBeadsAscii =
    " " + oddBeads.map((bead) => beadToString(bead, colorful)).join(" ");

  if (firstColumnIsElevated) {
    return evenBeadsAscii + "\n" + oddBeadsAscii;
  } else {
    return oddBeadsAscii + "\n" + evenBeadsAscii;
  }
};

export const patternToAsciiArt = (
  pattern: PeyotePattern,
  colorful: boolean
) => {
  const rowAsciis = pattern.rows.map((row) =>
    rowToAsciiArt(row, pattern.firstColumnIsElevated, colorful)
  );
  return rowAsciis.join("\n");
};
