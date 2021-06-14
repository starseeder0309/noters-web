import styled from 'styled-components';

const LinkButton = styled.button`
  background: none;
  color: #0077cc;
  border: none;
  padding: 0;
  font: inherit;
  text-decoration: underline;
  cursor: pointer;

  :hover,
  :active {
    color: #004499;
  }
`;

export default LinkButton;
