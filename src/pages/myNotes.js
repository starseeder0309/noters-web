import React, { useEffect } from 'react';

const MyNotes = () => {
  useEffect(() => {
    // 문서 제목을 갱신한다.
    document.title = '나의 노트 | 노터스';
  });

  return (
    <div>
      <h1>노터스</h1>
      <p>이곳은 나의 노트 페이지입니다.</p>
    </div>
  );
};

export default MyNotes;
