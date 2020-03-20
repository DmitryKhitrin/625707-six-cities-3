import React, {PureComponent} from "react";
import {Subtract} from "utility-types";
import {SORT_TYPES} from "../utils/sort-types";

type InjectedProps = {
  isMenuOpen: boolean;
  sortType: string;
  onSetSortType: (T: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  onToggleSortMenu: () => void;
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
      this._handleSetSortType = this._handleSetSortType.bind(this);
      this._handleToggleSortMenu = this._handleToggleSortMenu.bind(this);
      this._handleCloseMenu = this._handleCloseMenu.bind(this);
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
          onSetSortType={this._handleSetSortType}
          onToggleSortMenu={this._handleToggleSortMenu}
        />
      );
    }

    _handleCloseMenu() {
      this.setState({
        isMenuOpen: false
      });
    }

    _handleToggleSortMenu() {
      this.setState({
        isMenuOpen: !this.state.isMenuOpen
      });
    }

    _handleSetSortType(event: any) {
      this.setState({sortType: event.target.textContent});
      this._handleCloseMenu();
    }
  }

  return WithActiveItem;
};
