import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import LinkButton from './LinkButton';

import { GET_MY_FAVORITES } from '../gql/query';
import { TOGGLE_FAVORITE } from '../gql/mutation';

const FavoriteNote = (props) => {
  const [count, setCount] = useState(props.favoriteCount);
  const [favorited, setFavorited] = useState(
    props.me.favorites.filter((note) => note.id === props.noteId).length > 0
  );

  const [toggleFavorite] = useMutation(TOGGLE_FAVORITE, {
    variables: {
      id: props.noteId,
    },

    refetchQueries: [{ query: GET_MY_FAVORITES }],
  });

  return (
    <React.Fragment>
      {favorited ? (
        <LinkButton
          onClick={() => {
            toggleFavorite();
            setFavorited(false);
            setCount(count - 1);
          }}
        >
          즐겨찾기 해제
        </LinkButton>
      ) : (
        <LinkButton
          onClick={() => {
            toggleFavorite();
            setFavorited(true);
            setCount(count + 1);
          }}
        >
          즐겨찾기 등록
        </LinkButton>
      )}
      ({count})
    </React.Fragment>
  );
};

export default FavoriteNote;
