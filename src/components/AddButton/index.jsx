import { Container } from "./styles";
import { IoAdd } from "react-icons/io5";

export const AddButton = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <IoAdd />
      {children}
    </Container>
  );
};
