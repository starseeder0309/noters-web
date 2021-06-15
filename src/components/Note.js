import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';

import NoteUser from './NoteUser';

import { IS_SIGNED_IN } from '../gql/query';

const StyledNote = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;

const MetaData = styled.div`
  @media (min-width: 500px) {
    display: flex;
    align-items: top;
  }
`;

const UserActions = styled.div`
  margin-left: auto;
`;

const MetaInfo = styled.div`
  padding-right: 1em;
`;

const Note = ({ note }) => {
  const { data, loading, error } = useQuery(IS_SIGNED_IN);

  if (loading) {
    return <p>데이터를 불러오는 중입니다...</p>;
  }

  if (error) {
    return <p>오류가 발생했습니다!</p>;
  }

  return (
    <StyledNote>
      <MetaData>
        <MetaInfo>
          <img
            src={note.author.avatar}
            alt={`${note.author.username} 아바타`}
            height="50px"
          />
        </MetaInfo>

        <MetaInfo>
          <em>by</em> {note.author.username} <br />
          {format(note.createdAt, 'MMM Do YYYY')}
        </MetaInfo>

        {data.isSignedIn ? (
          <UserActions>
            <NoteUser note={note} />
          </UserActions>
        ) : (
          <UserActions>즐겨찾기 수: {note.favoriteCount}</UserActions>
        )}
      </MetaData>

      <ReactMarkdown source={note.content} />
    </StyledNote>
  );
};

export default Note;
