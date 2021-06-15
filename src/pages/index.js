import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import BasicLayout from '../layouts/BasicLayout';

import HomePage from './home';
import MyNotesPage from './myNotes';
import MyFavoritesPage from './myFavorites';
import NotePage from './note';
import CreateNotePage from './createNote';
import UpdateNotePage from './updateNote';
import SignUpPage from './signUp';
import SignInPage from './signIn';

import { IS_SIGNED_IN } from '../gql/query';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { data, loading, error } = useQuery(IS_SIGNED_IN);

  if (loading) {
    return <p>데이터를 불러오는 중입니다...</p>;
  }

  if (error) {
    return <p>오류가 발생했습니다!</p>;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        data.isSignedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: { form: props.location },
            }}
          />
        )
      }
    />
  );
};

const Pages = () => {
  return (
    <Router>
      <BasicLayout>
        <Route exact path="/" component={HomePage} />
        <PrivateRoute path="/my-notes" component={MyNotesPage} />
        <PrivateRoute path="/my-favorites" component={MyFavoritesPage} />
        <Route path="/note/:id" component={NotePage} />
        <PrivateRoute path="/create-note" component={CreateNotePage} />
        <PrivateRoute path="/update-note/:id" component={UpdateNotePage} />
        <Route path="/sign-up" component={SignUpPage} />
        <Route path="/sign-in" component={SignInPage} />
      </BasicLayout>
    </Router>
  );
};

export default Pages;
