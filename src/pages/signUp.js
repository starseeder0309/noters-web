import React, { useEffect, useState } from 'react';
import { useMutation, useApolloClient, gql } from '@apollo/client';
import styled from 'styled-components';

import Button from '../components/Button';

const Wrapper = styled.div`
  border: 1px solid #f5f4f0;
  max-width: 500px;
  padding: 1em;
  margin: 0 auto;
`;

const Form = styled.form`
  label,
  input {
    display: block;
    line-height: 2em;
  }

  input {
    width: 100%;
    margin-bottom: 1em;
  }
`;

const SIGN_UP_USER = gql`
  mutation signUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password)
  }
`;

const SignUpPage = (props) => {
  const [values, setValues] = useState();
  const [signUp, { loading, error }] = useMutation(SIGN_UP_USER, {
    onCompleted: (data) => {
      localStorage.setItem('token', data.signUp);
      props.history.push('/');
    },
  });

  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    document.title = '서비스 가입 | 노터스';
  });

  return (
    <Wrapper>
      <h2>서비스 가입</h2>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          signUp({
            variables: {
              ...values,
            },
          });
        }}
      >
        <label htmlFor="username">사용자 이름:</label>
        <input
          required
          type="text"
          id="username"
          name="username"
          placeholder="사용자 이름"
          onChange={onChange}
        />

        <label htmlFor="email">이메일:</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="이메일"
          onChange={onChange}
        />

        <label htmlFor="password">패스워드:</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          placeholder="패스워드"
          onChange={onChange}
        />

        <Button type="submit">가입 완료</Button>
      </Form>
    </Wrapper>
  );
};

export default SignUpPage;
