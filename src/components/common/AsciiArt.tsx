import * as React from "react";

import "./AsciiArt.css";

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

export default AsciiArt;
