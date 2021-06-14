import React, { useEffect } from 'react';

const MyFavoritesPage = () => {
  useEffect(() => {
    // 문서 제목을 갱신한다.
    document.title = '나의 즐겨찾기 | 노터스';
  });

  return (
    <div>
      <h1>노터스</h1>
      <p>이곳은 나의 즐겨찾기 페이지입니다.</p>
    </div>
  );
};

export default MyFavoritesPage;
