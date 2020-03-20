import React, {PureComponent} from "react";
import {Subtract} from "utility-types";

type State = {
  activeItem: string;
}

type InjectedProps = {
  activeItem: string;
  setActiveItem: (T: string) => void;
  removeActiveItem: () => void;
}

export const withActiveItem = (Component: any) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithActiveItem extends PureComponent<T, State> {
    state: State;
    props: T;

    constructor(props: P) {
      super(props);

      this.state = {
        activeItem: ``
      };

      this._handleSetActiveItem = this._handleSetActiveItem.bind(this);
      this._handleRemoveActiveItem = this._handleRemoveActiveItem.bind(this);
    }

    componentWillUnmount() {
      this.setState({
        activeItem: ``
      });
    }

    render() {
      const {activeItem} = this.state;

      return (
        <Component
          {...this.props}
          activeItem={activeItem}
          setActiveItem={this._handleSetActiveItem}
          removeActiveItem={this._handleRemoveActiveItem}
        />
      );
    }

    _handleSetActiveItem(value: string) {
      this.setState({activeItem: value});
    }

    _handleRemoveActiveItem() {
      this.setState({
        activeItem: ``
      });
    }
  }

  return WithActiveItem;
};

