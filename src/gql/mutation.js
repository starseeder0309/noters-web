import { gql } from '@apollo/client';

const SIGN_UP_USER = gql`
  mutation signUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password)
  }
`;

const SIGN_IN_USER = gql`
  mutation signIn($email: String, $password: String!) {
    signIn(email: $email, password: $password)
  }
`;

const CREATE_NOTE = gql`
  mutation createNote($content: String!) {
    createNote(content: $content) {
      id
      content
      createdAt
      favoriteCount
      favoritedBy {
        id
        username
      }
      author {
        id
        username
      }
    }
  }
`;

const UPDATE_NOTE = gql`
  mutation updateNote($id: ID!, $content: String!) {
    updateNote(id: $id, content: $content) {
      id
      content
      createdAt
      favoriteCount
      favoritedBy {
        id
        username
      }
      author {
        id
        username
      }
    }
  }
`;

const DELETE_NOTE = gql`
  mutation deleteNote($id: ID!) {
    deleteNote(id: $id)
  }
`;

const TOGGLE_FAVORITE = gql`
  mutation toggleFavorite($id: ID!) {
    toggleFavorite(id: $id) {
      id
      favoriteCount
    }
  }
`;

export {
  SIGN_UP_USER,
  SIGN_IN_USER,
  CREATE_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  TOGGLE_FAVORITE,
};
