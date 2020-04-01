import * as React from "react";

import ombreBeats from "../patterns/generators/ombreBeats";

import Header from "./header/Header";
import PeyotePatternAscii from "./patterns/PeyotePatternAscii";
import WindowResizeWatcher from "./common/WindowResizeWatcher";

const App = () => (
  <WindowResizeWatcher>
    <Header />
    <PeyotePatternAscii pattern={ombreBeats()} />
  </WindowResizeWatcher>
);

export default App;
