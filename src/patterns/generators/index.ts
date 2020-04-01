import ombreBeats from "./ombreBeats";
import type { PeyotePattern } from "../types";

const patterns: { [key: string]: (config: {}) => PeyotePattern } = {
  ombreBeats,
};

export default patterns;
