import ombreBeats from "./ombreBeats";
import type { PeyotePattern } from "../types";

type PatternGenerator = (config: {}) => PeyotePattern;

const patterns: { [key: string]: PatternGenerator } = {
  ombreBeats,
};

export default patterns;
