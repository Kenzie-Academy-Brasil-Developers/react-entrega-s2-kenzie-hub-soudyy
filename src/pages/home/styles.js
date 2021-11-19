import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  background-color: var(---black);
`;

export const Content = styled.div`
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 0px 0px 50px var(--honey);
  transition: 1s;
  border-radius: 50%;
  align-items: center;
  :hover {
    box-shadow: 0px 0px 50px var(--darkblue);
  }
  div {
    display: flex;
  }
`;
