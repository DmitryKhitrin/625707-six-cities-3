import React from 'react';
import {Main} from '../main/main.jsx';

// eslint-disable-next-line react/prop-types
export const App = ({rentCount}) => {
  return (
    <>
      <Main rentCount={rentCount} />;
    </>
  );
};
