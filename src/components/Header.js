import React from 'react';
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

const Header = () => {
  return (
    <Wrapper>
      <img src={logo} alt="NOTERS" height="40" />
      <LogoText>NOTERS</LogoText>
    </Wrapper>
  );
};

export default Header;
