import React, {PureComponent} from "react";
import {Subtract} from "utility-types";
import {SORT_TYPES} from "../utils/sort-types";

type InjectedProps = {
  isMenuOpen: boolean;
  sortType: string;
  setSortType: (T: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  toggleSortMenu: () => void;
}

type LocalState = {
  sortType: string;
  isMenuOpen: boolean;
}

export const withSortMenu = (Component: any) => {

  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  class WithActiveItem extends PureComponent {
    state: LocalState;
    constructor(props: T) {
      super(props);
      this.state = {
        sortType: SORT_TYPES.POPULAR,
        isMenuOpen: false
      };
      this._setSortType = this._setSortType.bind(this);
      this._toggleSortMenu = this._toggleSortMenu.bind(this);
      this._closeMenu = this._closeMenu.bind(this);
    }

    componentWillUnmount() {
      this.setState({
        sortType: SORT_TYPES.POPULAR,
        isMenuOpen: false
      });
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

    _setSortType(event: any) {
      this.setState({sortType: event.target.textContent});
      this._closeMenu();
    }
  }

  return WithActiveItem;
};
