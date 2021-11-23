import { Button } from "../../components/Button";
import { Container, Content } from "./styles";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

export const Home = ({ authenticated }) => {
  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };
  useEffect(() => {
    if (authenticated === true) {
      history.push("/dashboard");
    }
  }, []);
  return (
    <Container>
      <Content>
        <h1>HackHub</h1>
        <p>É hora de demonstrar conhecimento (Mas ta dificil)</p>
        <div>
          <Button onClick={() => handleNavigation("/register")}>
            Cadastre-se
          </Button>
          <Button onClick={() => handleNavigation("/login")}>Login</Button>
        </div>
      </Content>
    </Container>
  );
};
