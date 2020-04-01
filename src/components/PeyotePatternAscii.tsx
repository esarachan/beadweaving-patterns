import * as React from "react";

import { patternToAsciiArt } from "../patterns/asciiArt";

import type { PeyotePattern } from "../patterns/types";

type AsciiArtProps = {
  art: string;
};

const AsciiArt = (props: AsciiArtProps) => {
  const lines = props.art.split("\n");
  return (
    <div className="ascii-art">
      {lines.map((line, index) => (
        <div className="ascii-art-line" key={index}>
          {line}
        </div>
      ))}
    </div>
  );
};

type PeyotePatternAsciiProps = {
  pattern: PeyotePattern;
};

const PeyotePatternAscii = (props: PeyotePatternAsciiProps) => (
  <AsciiArt art={patternToAsciiArt(props.pattern, false)} />
);

export default PeyotePatternAscii;
