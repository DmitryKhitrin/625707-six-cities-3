import React, {FC} from 'react';
import {Route, Redirect} from 'react-router-dom';

type Props = {
  path: string;
  require: boolean;
  to: string;
  render: () => any;
}

export const PrivateRoute: FC<Props> = ({render, path, require, to}) => {
  return <Route path={path} exact render={() => require ? render() : <Redirect to={to} /> } />;
};

