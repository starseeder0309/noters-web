import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GET_ME } from '../gql/query';

const NoteUser = (props) => {
  const { data, loading, error } = useQuery(GET_ME);

  if (loading) {
    return <p>데이터를 불러오는 중입니다...</p>;
  }

  if (error) {
    return <p>오류가 발생했습니다!</p>;
  }

  return (
    <React.Fragment>
      {data.me.id === props.note.author.id && (
        <React.Fragment>
          <Link to={`/update-note/${props.note.id}`}>노트 수정</Link>
        </React.Fragment>
      )}
      <br />
      즐겨찾기 수: {props.note.favoriteCount}
    </React.Fragment>
  );
};

export default NoteUser;
