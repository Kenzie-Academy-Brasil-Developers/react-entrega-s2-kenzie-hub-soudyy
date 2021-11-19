import { Button } from "../Button";
import { Div } from "./styles";
export const Card = ({ title, date, onClick }) => {
  return (
    <Div>
      <h1>Nome da tecnologia</h1>
      <p>nivel</p>
      <Button onClick={onClick}>Remover</Button>
    </Div>
  );
};
