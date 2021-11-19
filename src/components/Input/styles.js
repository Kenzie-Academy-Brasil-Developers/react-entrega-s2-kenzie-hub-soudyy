import styled, { css } from "styled-components";

export const Cointainer = styled.div`
  text-align: left;
`;

export const InputContainer = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  border: 2px solid var(--gray);
  color: var(--gray);
  width: 100%;
  display: flex;
  transition: 0.4s;
  font-weight: 700px;
  border: 3px solid var(--honey);
  :hover {
    border: 3px solid var(--darkblue);
  }
  ${(props) =>
    props.isErrored &&
    css`
      color: red;
    `}
  input {
    background-color: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    margin: 10px;

    color: var(--black);
    &::placeholder {
      color: var(--gray);
    }
  }
`;
