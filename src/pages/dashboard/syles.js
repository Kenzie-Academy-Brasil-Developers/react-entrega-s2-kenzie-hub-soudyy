import styled from "styled-components";

export const Table = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .top {
    color: var(--darkblue);
    margin-top: 20px;
    background-color: var(--honey);
    display: flex;
    justify-content: space-between;
    width: 80vw;
    h1 {
      align-self: center;
      margin: 10px;
    }
  }
  figure {
    margin: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  figure img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

export const CardHolder = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  .userInfo,
  .myTech,
  .myWorks {
    border-radius: 10px;
    box-shadow: 0px 0px 40px var(--honey);
    margin-left: 15px;
    transition: 1s;
    h1,
    button {
      margin-top: 10px;
    }
    :hover {
      box-shadow: 0px 0px 20px var(--darkblue);
    }
  }
  .userInfo header {
    display: flex;
    border-radius: 10px 10px 0 0;
    align-items: center;
    background-color: var(--darkblue);
    width: 100%;
    color: var(--honey);
  }
  .userInfo {
    background-color: var(--honey);
    color: black;
    figure {
      margin: 10px;
    }
  }
  .userName {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    width: 10vw;
  }
  .myTech {
    display: flex;
    color: var(--darkblue);
    width: 30vw;
    background-color: var(--honey);
  }
  .myWorks {
    display: flex;
    color: var(--darkblue);
    width: 25vw;
    background-color: var(--honey);
  }
`;
