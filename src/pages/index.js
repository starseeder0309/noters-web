import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import BasicLayout from '../layouts/BasicLayout';

import Home from './home';
import MyNotes from './myNotes';
import MyFavorites from './myFavorites';

const Pages = () => {
  return (
    <Router>
      <BasicLayout>
        <Route exact path="/" component={Home} />
        <Route path="/my-notes" component={MyNotes} />
        <Route path="/my-favorites" component={MyFavorites} />
      </BasicLayout>
    </Router>
  );
};

export default Pages;
