import * as React from "react";
import times from "lodash.times";

import AsciiArt from "./AsciiArt";

const HORIZONTAL_PADDING_CHARS = 1;
const CORNER_CHAR = "+";
const HORIZONTAL_BORDER_CHAR = "-";
const VERTICAL_BORDER_CHAR = "|";

type TextBoxProps = {
  centeredInChars?: number;
  text: string;
};

const getCenteredMarginLength = (
  containerLength: number,
  contentLength: number
) => (containerLength - contentLength) / 2;

// Currently only supports a single line of text
const TextBox = (props: TextBoxProps) => {
  const topAndBottomBorder =
    CORNER_CHAR +
    times(
      props.text.length + 2 * HORIZONTAL_PADDING_CHARS,
      () => HORIZONTAL_BORDER_CHAR
    ).join("") +
    CORNER_CHAR;
  const content =
    VERTICAL_BORDER_CHAR +
    times(HORIZONTAL_PADDING_CHARS, () => " ").join("") +
    props.text +
    times(HORIZONTAL_PADDING_CHARS, () => " ").join("") +
    VERTICAL_BORDER_CHAR;

  const leftMarginLength = props.centeredInChars
    ? getCenteredMarginLength(props.centeredInChars, content.length)
    : 0;
  const leftMargin = times(leftMarginLength, () => " ").join("");

  const asciiArt =
    leftMargin +
    topAndBottomBorder +
    "\n" +
    leftMargin +
    content +
    "\n" +
    leftMargin +
    topAndBottomBorder;

  return <AsciiArt art={asciiArt} />;
};

export default TextBox;
