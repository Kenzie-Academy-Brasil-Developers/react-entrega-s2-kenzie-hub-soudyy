import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dotted var(--honey);
  border-radius: 10px;
  width: 400px;
  box-shadow: 0px 0px 60px var(--honey);
  color: var(--honey);
  transition: 1s;
  :hover {
    color: var(--darkblue);
    box-shadow: 0px 0px 60px var(--darkblue);
  }
  div {
    margin-top: 10px;
  }

  button {
    margin: 10px;
  }
  select {
    background-color: var(--white);
    color: var(--darkblue);
    margin-top: 20px;
    padding: 10px;
    border-radius: 10px;
    transition: 0.5s;
    :focus {
      border-radius: 10px 10px 0 0;
    }
  }
  ${Error}
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  .courseSelect {
    display: flex;
    background-color: black;
    width: 50px;
    height: 50px;
    font-size: 2rem;
  }
`;

const appear = keyframes``;

export const Animation = styled.div`
  .buttons {
    display: flex;
  }
  animation: ${appear};
`;
