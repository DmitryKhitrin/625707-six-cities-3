import React, {FC, memo} from "react";
import {connect} from "react-redux";
import {Header} from "../header/header";
import {RootState} from "../../redux/root-reducer";
import {ParsedLoginParams} from "../../redux/user/user-actions";
import {userSeletor, authSelector} from "../../redux/user/user-selectors";

type Props = {
  isAuthenticated: boolean;
  user: ParsedLoginParams;
}

const HeaderContainer: FC<Props> = (props) => {
  return <Header {...props} />;
};

const mapStateToProps = (state: RootState) => {
  return {
    isAuthenticated: authSelector(state),
    user: userSeletor(state)
  };
};

const MemoizedHeaderContainer = memo(connect(mapStateToProps, null)(HeaderContainer));
export {MemoizedHeaderContainer as HeaderContainer};
