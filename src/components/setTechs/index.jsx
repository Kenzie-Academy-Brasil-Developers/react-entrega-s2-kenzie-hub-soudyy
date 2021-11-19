import { useForm } from "react-hook-form";
import { InputContainer } from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../Button";
import { ImCancelCircle } from "react-icons/im";

export const InputPlace = ({ field }) => {
  const level = [
    "Selecione um nivel",
    "Iniciante",
    "Intermediário",
    "Avançado",
  ];

  const schema = yup.object().shape({
    tech: yup.string().required("nome da Tecnologia"),
    work: yup.string().required("nome do trabalho"),
    desc: yup
      .string()
      .max(150, "maximo 150 caracteres")
      .required("nome do trabalho"),
    level: yup.string().required("Escolha um dos itens"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitFunction = () => {};

  return field === "techs" ? (
    <InputContainer>
      <div className="container">
        <Button className="cancel" onClick={() => {}}>
          <ImCancelCircle />
        </Button>
        <form onSubmit={handleSubmit()}>
          <h1>Tecnologias</h1>
          <input
            register={register}
            error={errors.tech?.message}
            type="text"
            placeholder="Nome da tecnologia"
          />
          <select {...register("level")}>
            {level.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          <Button className="set" type="submit">
            Pronto
          </Button>
        </form>
      </div>
    </InputContainer>
  ) : (
    <InputContainer>
      <div className="container">
        <Button className="cancel" onClick={() => {}}>
          <ImCancelCircle />
        </Button>
        <form>
          <h1>Trabalhos</h1>
          <div>
            <input
              register={register}
              error={errors.work?.message}
              type="text"
              placeholder="Nome do trabalho"
            />
            <input
              register={register}
              error={errors.desc?.message}
              className="desc"
              type="text"
              placeholder="descrição"
            />
          </div>
          <Button className="set" type="submit">
            Pronto
          </Button>
        </form>
      </div>
    </InputContainer>
  );
};
