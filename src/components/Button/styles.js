import styled from "styled-components";

export const ButtonAccept = styled.button`
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
export const ButtonAdd = styled.button`
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
export const Cancel = styled.button`
  margin: 10px 10px 0 0;
  align-self: flex-end;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  transition: 0.5s;
  border: none;
  :hover {
    box-shadow: 0 0 20px var(--cancel);
  }
  svg {
    color: var(--cancel);
    width: 100%;
    height: 100%;
  }
`;
