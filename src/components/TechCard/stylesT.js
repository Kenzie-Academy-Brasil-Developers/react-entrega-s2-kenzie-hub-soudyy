import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  .contact {
    display: flex;
    align-items: center;

    background-color: var(--lightblue);
    border-radius: 3px;
    margin: 5px 5px 0 5px;

    .icon {
      height: 100%;
    }
    .infos {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      p {
        margin-left: 0;
        margin-top: 0;
      }
    }
    svg {
      margin: 0 15px 0 10px;
      width: 35px;
      height: 100%;
      border-radius: 3px;
      background-color: var(--darkblue);
      color: var(--honey);
      padding: 5px;
    }
  }
  button {
    width: 80%;
    background-color: var(--darkblue);
    color: var(--honey);
    :hover {
      box-shadow: 0px 0px 20px var(--darkblue);
    }
    margin-bottom: 10px;
  }
`;

const appear = keyframes`
0% {  transform: translateX(500px); }
100% {  transform: translateX(0); }
`;
export const BoxItens = styled.div`
  .myTech,
  .myWorks {
    display: flex;
    background: black;
    animation: ${appear};
  }
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 5px;
  }
  .scroll {
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 500px;
  }
`;
