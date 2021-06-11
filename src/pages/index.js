import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './home';
import MyNotes from './myNotes';
import MyFavorites from './myFavorites';

const Pages = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/my-notes" component={MyNotes} />
      <Route path="/my-favorites" component={MyFavorites} />
    </Router>
  );
};

export default Pages;
