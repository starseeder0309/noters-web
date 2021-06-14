import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import BasicLayout from '../layouts/BasicLayout';

import HomePage from './home';
import MyNotesPage from './myNotes';
import MyFavoritesPage from './myFavorites';
import NotePage from './note';
import SignUpPage from './signUp';

const Pages = () => {
  return (
    <Router>
      <BasicLayout>
        <Route exact path="/" component={HomePage} />
        <Route path="/my-notes" component={MyNotesPage} />
        <Route path="/my-favorites" component={MyFavoritesPage} />
        <Route path="/note/:id" component={NotePage} />
        <Route path="/sign-up" component={SignUpPage} />
      </BasicLayout>
    </Router>
  );
};

export default Pages;
