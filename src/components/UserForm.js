import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './Button';

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

const UserForm = (props) => {
  const [values, setValues] = useState();

  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Wrapper>
      {props.formType === 'signUp' ? (
        <h2>서비스 가입</h2>
      ) : (
        <h2>서비스 접속</h2>
      )}

      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props.action({
            variables: {
              ...values,
            },
          });
        }}
      >
        {props.formType === 'signUp' && (
          <React.Fragment>
            <label htmlFor="username">사용자 이름:</label>
            <input
              required
              type="text"
              id="username"
              name="username"
              placeholder="사용자 이름"
              onChange={onChange}
            />
          </React.Fragment>
        )}

        <label htmlFor="email">이메일:</label>
        <input
          required
          type="email"
          id="email"
          name="email"
          placeholder="이메일"
          onChange={onChange}
        />

        <label htmlFor="password">패스워드</label>
        <input
          required
          type="password"
          id="password"
          name="password"
          placeholder="패스워드"
          onChange={onChange}
        />

        <Button type="submit">완료</Button>
      </Form>
    </Wrapper>
  );
};

export default UserForm;
