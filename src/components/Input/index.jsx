import { Cointainer, InputContainer } from "./styles";

export const Input = ({ label, register, name, error, ...rest }) => {
  return (
    <Cointainer type="button" {...rest}>
      <div>
        {label} {!!error && <span> - {error}</span>}
      </div>
      <InputContainer isErrored={!!error}>
        <input {...register(name)} {...rest}></input>
      </InputContainer>
    </Cointainer>
  );
};
