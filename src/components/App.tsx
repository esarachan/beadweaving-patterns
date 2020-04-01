import * as React from "react";

import ombreBeats from "../patterns/generators/ombreBeats";

import Header from "./header/Header";
import PeyotePatternAscii from "./patterns/PeyotePatternAscii";

const App = () => (
  <React.Fragment>
    <Header />
    <PeyotePatternAscii pattern={ombreBeats()} />
  </React.Fragment>
);

export default App;
