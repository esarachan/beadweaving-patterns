import * as React from "react";

import ombreBeats from "../patterns/generators/ombreBeats";

import Header from "./header/Header";
import PeyotePatternAscii from "./patterns/PeyotePatternAscii";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <React.Fragment>
    <Header />
    <PeyotePatternAscii pattern={ombreBeats()} />
  </React.Fragment>
);
