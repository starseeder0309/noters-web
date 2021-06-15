import React, { useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

import NoteFeed from '../components/NoteFeed';

import { GET_MY_NOTES } from '../gql/query';

const MyNotesPage = () => {
  useEffect(() => {
    document.title = '나의 노트 | 노터스';
  });

  const { data, loading, error } = useQuery(GET_MY_NOTES);

  if (loading) {
    return <p>데이터를 불러오는 중입니다...</p>;
  }

  if (error) {
    return <p>오류가 발생했습니다!</p>;
  }

  if (data.me.notes.length !== 0) {
    return <NoteFeed notes={data.me.notes} />;
  } else {
    return <p>노트가 존재하지 않습니다.</p>;
  }
};

export default MyNotesPage;
