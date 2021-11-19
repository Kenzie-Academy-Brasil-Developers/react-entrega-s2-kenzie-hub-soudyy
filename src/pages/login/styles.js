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
    margin: 10px 0;
    padding: 10px;
    border-radius: 10px;
    transition: 0.5s;
    :focus {
      border-radius: 10px 10px 0 0;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const appear = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;

export const Animation = styled.div`
  .buttons {
    display: flex;
  }
  animation: ${appear};
`;
