import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  padding: 1em;
  background: #f5f4f0;

  @media (max-width: 700px) {
    padding-top: 64px;
  }

  @media (min-width: 700px) {
    position: fixed;
    width: 220px;
    height: calc(100% - 64px);
    overflow-y: scroll;
  }
`;

const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;

  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1.em;
    color: #333;
  }

  a:visited {
    color: #333;
  }

  a:hover,
  a:focus {
    color: #0077cc;
  }
`;

const Sider = () => {
  return (
    <Wrapper>
      <NavigationList>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/my-notes">나의 노트</Link>
        </li>
        <li>
          <Link to="/my-favorites">나의 즐겨찾기</Link>
        </li>
      </NavigationList>
    </Wrapper>
  );
};

export default Sider;
