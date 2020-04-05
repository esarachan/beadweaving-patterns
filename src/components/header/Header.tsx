import * as React from "react";

import TextBox from "../common/TextBox";

type HeaderProps = {
  containerWidthChars?: number;
};

const Header = (props: HeaderProps) => (
  <TextBox
    centeredInChars={props.containerWidthChars}
    text="Peyote Beading Pattern Generator"
  />
);

export default Header;
