import React, { useEffect } from 'react';
import { useMutation, useApolloClient, gql } from '@apollo/client';

import UserForm from '../components/UserForm';

import { SIGN_IN_USER } from '../gql/mutation';

const SignInPage = (props) => {
  const client = useApolloClient();

  const [signIn, { loading, error }] = useMutation(SIGN_IN_USER, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.signIn);

      client.writeData({
        data: { isSignedIn: true },
      });

      props.history.push('/');
    },
  });

  useEffect(() => {
    document.title = '서비스 접속 | 노터스';
  });

  return (
    <React.Fragment>
      <UserForm action={signIn} formType="signIn" />

      {loading && <p>데이터를 불러오는 중입니다...</p>}

      {error && <p>오류가 발생했습니다!</p>}
    </React.Fragment>
  );
};

export default SignInPage;
