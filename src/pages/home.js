import React from 'react';

import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Home = () => {
  return (
    <div>
      <Header />

      <Navigation />

      <h1>노터스</h1>
      <p>이곳은 홈 페이지입니다.</p>
    </div>
  );
};

export default Home;
