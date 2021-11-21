import { createGlobalStyle } from "styled-components";
import back from "../assets/img/backRegister.jpg";
export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    
}
:root{
    --white:#f5f5f5;
    --lightblue:#99B2DD;
    --darkblue:#03254E;
    --black:#0c0d0d;
    --honey:#DDF2EB;
    --gray:gray;
    --cancel:#C33149;
    --card:#AAC0AF;
}

body{
   
    background-color: var(--lightblue);
    color: var(--white);
}
body,input,button{
    font-family: 'Lato';
    font-size:1rem;
}

h1,h2,h3,h4,h5,h6{
    font-family: 'Roboto';
    font-weight: 700;
}

button{
    cursor:pointer;
}
a{
    text-decoration:none;
    color: var(--darkblue);
    :hover {
      color: var(--honey);
    }
}
  p {
    margin: 10px;
    color: var(--black);
  }
  body {
      background-image: url(${back});
      background-repeat: no-repeat;
      background-size: 100% 100%;
      width: 100vw;
      height: 100vh;
  }
`;
