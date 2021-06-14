import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components';

import logo from '../img/logo.svg';

const Wrapper = styled.header`
  width: 100%;
  height: 64px;
  padding: 0.5em 1em;
  display: flex;
  position: fixed;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

const LogoText = styled.h1`
  margin: 0;
  padding: 0;
  display: inline;
`;

const UserState = styled.div`
  margin-left: auto;
`;

const IS_SIGNED_IN = gql`
  {
    isSignedIn @client
  }
`;

const Header = (props) => {
  const { data } = useQuery(IS_SIGNED_IN);

  return (
    <Wrapper>
      <img src={logo} alt="NOTERS" height="40" />
      <LogoText>NOTERS</LogoText>

      <UserState>
        {data.isSignedIn ? (
          <p>접속 해제</p>
        ) : (
          <p>
            <Link to="/sign-in">접속</Link> 또는 <Link to="/sign-up">가입</Link>
          </p>
        )}
      </UserState>
    </Wrapper>
  );
};

export default Header;
