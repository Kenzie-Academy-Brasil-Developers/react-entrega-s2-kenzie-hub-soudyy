import styled from "styled-components";

export const Container = styled.button`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 10px;
  margin-left: 20px;
  background-color: var(--darkblue);
  border: none;
  transition: 0.5s;
  svg {
    font-size: 30px;
    color: var(--honey);
  }
  :hover {
    box-shadow: 0px 0px 20px var(--darkblue);
    color: var(--lightblue);
  }
`;
