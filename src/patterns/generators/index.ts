import ombreBeats from "./ombreBeats";
import type { PeyotePattern } from "../types";

const patterns: { [key: string]: () => PeyotePattern } = {
  ombreBeats,
};

export default patterns;
