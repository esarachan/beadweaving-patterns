import * as React from "react";

type WindowResizeWatcherProps = {
  children: React.ReactNode;
};

type WindowResizeWatcherState = {
  width: number;
  height: number;
};

class WindowResizeWatcher extends React.Component<
  WindowResizeWatcherProps,
  WindowResizeWatcherState
> {
  constructor(props: WindowResizeWatcherProps) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return React.Children.toArray(this.props.children).map((child) =>
      React.cloneElement(child as React.ReactElement<any>, {
        containerWidth: this.state.width,
        containerHeight: this.state.height,
      })
    );
  }
}

export default WindowResizeWatcher;
