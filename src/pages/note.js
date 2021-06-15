import React from 'react';
import { useQuery, gql } from '@apollo/client';

import Note from '../components/Note';

import { GET_NOTE } from '../gql/query';

const NotePage = (props) => {
  const id = props.match.params.id;

  const { data, loading, error } = useQuery(GET_NOTE, { variables: { id } });

  if (loading) {
    return <p>데이터를 불러오는 중입니다...</p>;
  }

  if (error) {
    return <p>오류가 발생했습니다!</p>;
  }

  return <Note note={data.note} />;
};

export default NotePage;
