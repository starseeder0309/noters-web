import React, { useEffect } from 'react';
import { useMutation, gql } from '@apollo/client';

import NoteForm from '../components/NoteForm';

const CreateNotePage = (props) => {
  useEffect(() => {
    document.title = '노트 생성 | 노터스';
  });

  return <NoteForm />;
};

export default CreateNotePage;
