import times from 'lodash.times';

import type { Bead } from '../types';

const A: Bead = { char: 'A', color: 'yellow' };
const B: Bead = { char: 'B', color: 'red' };
const C: Bead = { char: 'C', color: 'magenta' };
const D: Bead = { char: 'D', color: 'blue' };

const config = {
  firstColumnIsElevated: true,
  columnWavelengths: [3, 4, 5, 6, 7, 8, 7, 6, 5, 4],
  numRows: 100,
  beads: [A, B, C, D],
};

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
  }

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
        this.currentSequenceLength = this.currentSequenceLength - 1
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

  numBeadsToAdd = () => this.isFocusedBeadsTurn ? this.currentSequenceLength : 1;

  finalBeadIndex = () => this.beads.length - 1;

  previousBeadIndex = () => this.focusedBeadIndex === 0
    ? this.finalBeadIndex()
    : this.focusedBeadIndex - 1;

  nextBeadIndex = () => this.focusedBeadIndex === this.finalBeadIndex()
    ? 0
    : this.focusedBeadIndex + 1;
}

export default () => {
  const { firstColumnIsElevated, columnWavelengths, numRows, beads } = config;
  const columns = columnWavelengths
    .map(wavelength => new ColumnGenerator(wavelength, beads, numRows).generate());
  const rows = [];
  for (let i = 0; i < numRows; i++) {
    rows.push(columns.map(column => column[i]));
  }
  return { firstColumnIsElevated, rows };
};
