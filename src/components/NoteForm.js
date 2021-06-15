import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './Button';

const Wrapper = styled.div`
  height: 100%;
`;

const Form = styled.form`
  height: 100%;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 90%;
`;

const NoteForm = (props) => {
  const [value, setValue] = useState({ content: props.content || '' });

  const onChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Wrapper>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props.action({
            variables: {
              ...value,
            },
          });
        }}
      >
        <TextArea
          required
          type="text"
          name="content"
          placeholder="노트의 내용을 작성해 주십시오."
          value={value.content}
          onChange={onChange}
        />

        <Button type="submit">저장</Button>
      </Form>
    </Wrapper>
  );
};

export default NoteForm;
