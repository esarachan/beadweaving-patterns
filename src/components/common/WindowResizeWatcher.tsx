import * as React from "react";
import times from "lodash.times";

type CanaryLineProps = {
  onChangeLength: (length: number) => void;
};

type CanaryLineState = {
  length: number;
};

class CanaryLine extends React.Component<CanaryLineProps, CanaryLineState> {
  domElement: any;

  constructor(props: CanaryLineProps) {
    super(props);
    this.state = { length: 0 };
    this.domElement = null;
  }

  componentDidMount() {
    this.handleWindowResize();
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  }

  isOverflowing = () =>
    this.domElement.scrollWidth > this.domElement.clientWidth;

  setStateP = async (state: CanaryLineState) =>
    new Promise((resolve) => this.setState(state, resolve));

  handleOverflow = async () => {
    const maxLength = this.state.length - 1;
    await this.setStateP({ length: maxLength });
    this.props.onChangeLength(maxLength);
  };

  handleWindowResize = async () => {
    await this.setStateP({ length: 0 });
    while (!this.isOverflowing()) {
      await this.setStateP({ length: this.state.length + 1 });
    }
    await this.handleOverflow();
  };

  setDOMElement = (domElement: any) => {
    this.domElement = domElement;
  };

  render() {
    return (
      <div ref={this.setDOMElement} className="ascii-art canary-line">
        {times(this.state.length, () => " ")}
      </div>
    );
  }
}

type WindowResizeWatcherProps = {
  children: React.ReactNode;
};

type WindowResizeWatcherState = {
  widthInChars: number;
};

class WindowResizeWatcher extends React.Component<
  WindowResizeWatcherProps,
  WindowResizeWatcherState
> {
  constructor(props: WindowResizeWatcherProps) {
    super(props);
    this.state = { widthInChars: 0 };
  }

  handleChangeWidth = (widthInChars: number) => this.setState({ widthInChars });

  render() {
    const transformedChildren = React.Children.toArray(this.props.children).map(
      (child) =>
        React.cloneElement(child as React.ReactElement<any>, {
          containerWidthChars: this.state.widthInChars,
        })
    );
    return (
      <React.Fragment>
        <CanaryLine onChangeLength={this.handleChangeWidth} />
        {transformedChildren}
      </React.Fragment>
    );
  }
}

export default WindowResizeWatcher;
