import * as React from "react";

import ombreBeats from "../patterns/generators/ombreBeats";
import PeyotePatternAscii from "./PeyotePatternAscii";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <PeyotePatternAscii pattern={ombreBeats()} />
);
