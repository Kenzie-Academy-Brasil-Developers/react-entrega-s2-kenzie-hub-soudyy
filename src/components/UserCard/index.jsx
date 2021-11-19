import { Button } from "../Button";
import { User } from "./stylesU";
export const Card = ({ title, date, onClick }) => {
  return (
    <User>
      <h1>Nome da tecnologia</h1>
      <p>nivel</p>
      <Button onClick={onClick}>Remover</Button>
    </User>
  );
};
