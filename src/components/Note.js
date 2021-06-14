import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';

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

        <UserActions>
          <em>즐겨찾기 수:</em> {note.favoriteCount}
        </UserActions>
      </MetaData>

      <ReactMarkdown source={note.content} />
    </StyledNote>
  );
};

export default Note;
