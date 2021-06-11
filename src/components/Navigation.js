import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/my-notes">나의 노트</Link>
        </li>
        <li>
          <Link to="/my-favorites">나의 즐겨찾기</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
