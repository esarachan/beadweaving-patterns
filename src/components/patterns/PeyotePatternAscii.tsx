import * as React from "react";

import { patternToAsciiArt } from "../../patterns/asciiArt";

import AsciiArt from "../common/AsciiArt";

import type { PeyotePattern } from "../../patterns/types";

type PeyotePatternAsciiProps = {
  pattern: PeyotePattern;
};

const PeyotePatternAscii = (props: PeyotePatternAsciiProps) => (
  <AsciiArt art={patternToAsciiArt(props.pattern, false)} />
);

export default PeyotePatternAscii;
