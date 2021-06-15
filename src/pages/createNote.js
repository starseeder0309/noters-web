import React, { useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';

import NoteForm from '../components/NoteForm';

import { GET_NOTES, GET_MY_NOTES } from '../gql/query';

import { CREATE_NOTE } from '../gql/mutation';

const CreateNotePage = (props) => {
  useEffect(() => {
    document.title = '노트 생성 | 노터스';
  });

  const [data, { loading, error }] = useMutation(CREATE_NOTE, {
    refetchQueries: [{ query: GET_NOTES }, { query: GET_MY_NOTES }],

    onCompleted: (data) => {
      props.history.push(`/note/${data.createNote.id}`);
    },
  });

  return (
    <React.Fragment>
      {loading && <p>데이터를 불러오는 중입니다...</p>}

      {error && <p>오류가 발생했습니다!</p>}

      <NoteForm action={data} />
    </React.Fragment>
  );
};

export default CreateNotePage;
