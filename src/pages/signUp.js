import React, { useEffect, useState } from 'react';
import { useMutation, useApolloClient, gql } from '@apollo/client';

import UserForm from '../components/UserForm';

import { SIGN_UP_USER } from '../gql/mutation';

const SignUpPage = (props) => {
  const client = useApolloClient();

  const [signUp, { loading, error }] = useMutation(SIGN_UP_USER, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.signUp);

      client.writeData({
        data: { isSignedIn: true },
      });

      props.history.push('/');
    },
  });

  useEffect(() => {
    document.title = '서비스 가입 | 노터스';
  });

  return (
    <React.Fragment>
      <UserForm action={signUp} formType="signUp" />

      {loading && <p>데이터를 불러오는 중입니다...</p>}

      {error && <p>오류가 발생했습니다!</p>}
    </React.Fragment>
  );
};

export default SignUpPage;
