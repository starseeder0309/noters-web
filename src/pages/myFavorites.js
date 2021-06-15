import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

import NoteFeed from '../components/NoteFeed';

import { GET_MY_FAVORITES } from '../gql/query';

const MyFavoritesPage = () => {
  useEffect(() => {
    // 문서 제목을 갱신한다.
    document.title = '나의 즐겨찾기 | 노터스';
  });

  const { data, loading, error } = useQuery(GET_MY_FAVORITES);

  if (loading) {
    return <p>데이터를 불러오는 중입니다...</p>;
  }

  if (error) {
    return <p>오류가 발생했습니다!</p>;
  }

  if (data.me.favorites.length !== 0) {
    return <NoteFeed notes={data.me.favorites} />;
  } else {
    return <p>즐겨찾기한 노트가 존재하지 않습니다.</p>;
  }
};

export default MyFavoritesPage;
