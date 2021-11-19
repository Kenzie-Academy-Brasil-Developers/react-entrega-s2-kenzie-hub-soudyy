import { Button } from "../Button";
import { Tech } from "./stylesT";
export const Card = ({ title, date, onClick }) => {
  return (
    <Tech>
      <h1>Nome da tecnologia</h1>
      <p>nivel</p>
      <Button onClick={onClick}>Remover</Button>
    </Tech>
  );
};
