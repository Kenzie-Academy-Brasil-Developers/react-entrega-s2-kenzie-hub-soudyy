import styled from "styled-components";

export const Container = styled.button`
  text-align: center;
  font-family: "roboto";
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 45px;
  width: 100px;
  border-radius: 10px;
  margin-left: 20px;
  background-color: var(--honey);
  border: none;
  transition: 0.5s;
  :hover {
    background-color: var(--honey);
    color: var(--lightblue);
  }
`;
