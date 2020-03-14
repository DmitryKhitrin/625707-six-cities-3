import React, {PureComponent} from "react";
import {sortTypes} from "../utils/sort-types";

export const withSortMenu = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        sortType: sortTypes.POPULAR,
        isMenuOpen: false
      };
      this._setSortType = this._setSortType.bind(this);
      this._toggleSortMenu = this._toggleSortMenu.bind(this);
      this._closeMenu = this._closeMenu.bind(this);
    }

    componentWillUnmount() {
      this.setState(this.setState({
        sortType: sortTypes.POPULAR,
        isMenuOpen: false
      }));
    }

    _closeMenu() {
      this.setState({
        isMenuOpen: false
      });
    }

    _toggleSortMenu() {
      this.setState({
        isMenuOpen: !this.state.isMenuOpen
      });
    }

    _setSortType(evt) {
      this.setState({sortType: evt.target.textContent});
      this._closeMenu();
    }

    render() {
      const {isMenuOpen, sortType} = this.state;

      return (
        <Component
          {...this.props}
          isMenuOpen={isMenuOpen}
          sortType={sortType}
          setSortType={this._setSortType}
          toggleSortMenu={this._toggleSortMenu}
        />
      );
    }
  }

  return WithActiveItem;
};
