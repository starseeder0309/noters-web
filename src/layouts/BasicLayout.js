import React from 'react';

import Header from '../components/Header';
import Navigation from '../components/Navigation';

const BasicLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />

      <div className="wrapper">
        <Navigation />

        <main>{children}</main>
      </div>
    </React.Fragment>
  );
};

export default BasicLayout;
