import React, { useEffect } from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';

import NoteForm from '../components/NoteForm';

import { GET_ME, GET_NOTE } from '../gql/query';
import { UPDATE_NOTE } from '../gql/mutation';

const UpdateNotePage = (props) => {
  useEffect(() => {
    document.title = '노트 수정 | 노터스';
  });

  const id = props.match.params.id;

  const { data: noteData, loading, error } = useQuery(GET_NOTE, {
    variables: { id },
  });
  const { data: userData } = useQuery(GET_ME);

  const [updateNote] = useMutation(UPDATE_NOTE, {
    variables: { id },
    onCompleted: () => {
      props.history.push(`/note/${id}`);
    },
  });

  if (loading) {
    return <p>데이터를 불러오는 중입니다...</p>;
  }

  if (error) {
    return <p>오류가 발생했습니다!</p>;
  }

  // TODO: userData에 undefined가 할당되는 이슈
  // if (userData.me.id !== noteData.note.author.id) {
  //   return <p>노트를 수정하기 위한 권한이 존재하지 않습니다.</p>;
  // }

  return <NoteForm content={noteData.note.content} action={updateNote} />;
};

export default UpdateNotePage;
