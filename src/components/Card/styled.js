import styled from "styled-components";

export const CreateCard = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--card);
  margin: 10px;
  border-radius: 5px;
  padding: 5px;

  transition: 0.5s;
  svg {
    background-color: var(--lightblue);
    width: 50px;
    height: 50px;
    padding: 5px;
    border-radius: 5px;
    margin: 0 5px 0 5px;
  }
  .desc {
    width: 80%;
  }
  :hover {
    box-shadow: 0px 0px 20px var(--darkblue);
    transform: scale(1.02);
  }
  button {
    width: 20px;
    height: 20px;
    text-align: center;
    border-radius: 50%;
    border: none;
    color: var(--darkblue);
    font-family: "Courier New", Courier, monospace;
    font-weight: 700;
    background-color: transparent;
    transition: 0.5s;
    :hover {
      text-shadow: 0px 0px 10px red;
      color: red;
    }
  }
`;
