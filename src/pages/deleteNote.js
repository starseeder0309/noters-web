import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { useMutation } from '@apollo/client';

import LinkButton from '../components/LinkButton';

import { GET_MY_NOTES, GET_NOTES } from '../gql/query';
import { DELETE_NOTE } from '../gql/mutation';

const DeleteNotePage = (props) => {
  useEffect(() => {
    document.title = '노트 삭제 | 노터스';
  });

  const [deleteNote] = useMutation(DELETE_NOTE, {
    variables: {
      id: props.noteId,
    },

    refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES }],

    onCompleted: (data) => {
      props.history.push('/my-notes');
    },
  });

  return <LinkButton onClick={deleteNote}>노트 삭제</LinkButton>;
};

export default withRouter(DeleteNotePage);
