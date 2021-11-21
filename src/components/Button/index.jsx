import { ButtonAccept, ButtonAdd, Cancel } from "./styles";
import { IoAdd } from "react-icons/io5";
import { ImCancelCircle } from "react-icons/im";

export const Button = ({ children, ...rest }) => {
  return <ButtonAccept {...rest}>{children}</ButtonAccept>;
};

export const AddButton = ({ children, ...rest }) => {
  return (
    <ButtonAdd {...rest}>
      <IoAdd />
      {children}
    </ButtonAdd>
  );
};
export const CancelButton = ({ setButtonPopup }) => {
  return (
    <Cancel
      onClick={() => {
        setButtonPopup(false);
      }}
    >
      <ImCancelCircle />
    </Cancel>
  );
};
