import React, {PureComponent} from "react";

export const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: ``
      };

      this._setActiveItem = this._setActiveItem.bind(this);
      this._removeActiveItem = this._removeActiveItem.bind(this);
    }

    componentWillUnmount() {
      this.setState({
        activeItem: ``
      });
    }

    _setActiveItem(value) {
      this.setState({activeItem: value});
    }

    _removeActiveItem() {
      this.setState({
        activeItem: null
      });
    }

    render() {
      const {activeItem} = this.state;

      return (
        <Component
          {...this.props}
          activeItem={activeItem}
          setActiveItem={this._setActiveItem}
          removeActiveItem={this._removeActiveItem}
        />
      );
    }
  }

  return WithActiveItem;
};

