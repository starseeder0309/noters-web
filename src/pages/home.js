import React from 'react';
import { useQuery, gql } from '@apollo/client';

import NoteFeed from '../components/NoteFeed';

const GET_NOTES = gql`
  query NoteFeed($cursor: String) {
    noteFeed(cursor: $cursor) {
      cursor
      hasNextPage
      notes {
        id
        createdAt
        content
        favoriteCount
        author {
          username
          id
          avatar
        }
      }
    }
  }
`;

const HomePage = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_NOTES);

  if (loading) {
    return <p>데이터를 불러오는 중입니다...</p>;
  }

  if (error) {
    return <p>오류가 발생했습니다!</p>;
  }

  return <NoteFeed notes={data.noteFeed.notes} />;
};

export default HomePage;
