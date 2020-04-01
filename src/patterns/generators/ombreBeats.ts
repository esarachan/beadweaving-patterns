import times from "lodash.times";

import type { Bead } from "../types";

const orange: Bead = { char: "O", color: "#fc8200" };
const magenta: Bead = { char: "M", color: "#bd0097" };
const blue: Bead = { char: "B", color: "#2a00fa" };

// TODO: memoize
class ColumnGenerator {
  wavelength: number;
  beads: Bead[];
  numRows: number;
  focusedBeadIndex: number;
  focusedBeadIsIncreasing: boolean;
  currentSequenceLength: number;
  isFocusedBeadsTurn: boolean;

  constructor(wavelength: number, beads: Bead[], numRows: number) {
    this.wavelength = wavelength;
    this.beads = beads;
    this.numRows = numRows;

    this.initState();
  }

  initState = () => {
    this.focusedBeadIndex = 0;
    this.focusedBeadIsIncreasing = false;
    this.currentSequenceLength = this.wavelength;
    this.isFocusedBeadsTurn = true;
  };

  generate = () => {
    const column: Bead[] = [];
    while (column.length < this.numRows) {
      const bead = this.beadToAdd();
      const numToAdd = this.numBeadsToAdd();
      times(numToAdd, () => column.push(bead));

      this.updateState();
    }
    this.initState(); // in case we need to do it again
    return column.slice(0, this.numRows);
  };

  updateState = () => {
    if (!this.focusedBeadIsIncreasing && this.currentSequenceLength === 1) {
      this.focusedBeadIndex = this.nextBeadIndex();
      this.focusedBeadIsIncreasing = true;
    } else {
      this.isFocusedBeadsTurn = !this.isFocusedBeadsTurn;
    }
    if (this.currentSequenceLength === this.wavelength) {
      this.focusedBeadIsIncreasing = false;
    }

    if (this.isFocusedBeadsTurn) {
      if (this.focusedBeadIsIncreasing) {
        this.currentSequenceLength = this.currentSequenceLength + 1;
      } else {
        this.currentSequenceLength = this.currentSequenceLength - 1;
      }
    }
  };

  beadToAdd = () => {
    if (this.isFocusedBeadsTurn) {
      return this.beads[this.focusedBeadIndex];
    }
    if (this.focusedBeadIsIncreasing) {
      return this.beads[this.previousBeadIndex()];
    }
    return this.beads[this.nextBeadIndex()];
  };

  numBeadsToAdd = () =>
    this.isFocusedBeadsTurn ? this.currentSequenceLength : 1;

  finalBeadIndex = () => this.beads.length - 1;

  previousBeadIndex = () =>
    this.focusedBeadIndex === 0
      ? this.finalBeadIndex()
      : this.focusedBeadIndex - 1;

  nextBeadIndex = () =>
    this.focusedBeadIndex === this.finalBeadIndex()
      ? 0
      : this.focusedBeadIndex + 1;
}

export default ({
  firstColumnIsElevated = true,
  columnWavelengths = [4, 5, 6, 5, 4, 3, 4, 5, 6, 5],
  numRows = 1000,
  beads = [orange, magenta, blue, magenta],
} = {}) => {
  const columns = columnWavelengths.map((wavelength) =>
    new ColumnGenerator(wavelength, beads, numRows).generate()
  );
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(columns.map((column) => column[i]));
  }
  return { firstColumnIsElevated, rows };
};
