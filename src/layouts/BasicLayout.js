import React from 'react';

import styled from 'styled-components';

import Header from '../components/Header';
import Sider from '../components/Sider';

const Wrapper = styled.div`
  @media (min-width: 700px) {
    display: flex;
    top: 64px;
    position: relative;
    width: 100%;
    height: calc(100% - 64px);
    flex: auto;
    flex-direction: column;
  }
`;

const Main = styled.main`
  position: fixed;
  width: 100%;
  height: calc(100% - 185px);
  padding: 1em;
  overflow-y: scroll;

  @media (min-width: 700px) {
    flex: 1;
    margin-left: 220px;
    width: calc(100% - 220px);
    height: calc(100% - 64px);
  }
`;

const BasicLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />

      <Wrapper>
        <Sider />

        <Main>{children}</Main>
      </Wrapper>
    </React.Fragment>
  );
};

export default BasicLayout;
