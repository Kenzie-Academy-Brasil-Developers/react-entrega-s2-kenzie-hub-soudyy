import { useForm } from "react-hook-form";
import { InputContainer } from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, CancelButton } from "../Button";
import { useState } from "react";
import { api } from "../../service";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const TechInput = ({
  selectedField,
  setButtonPopup,
  buttonPopup,
  technology,
  setTechnology,
  loadTechs,
}) => {
  const level = [
    "Selecione um nivel",
    "Iniciante",
    "Intermediário",
    "Avançado",
  ];

  const schema = yup.object().shape({
    title: yup.string().required("nome da Tecnologia"),
    status: yup.string().required("Escolha um dos itens"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Hud:token")) || ""
  );

  const onSubmitFunction = (data) => {
    api
      .post(`/users/techs`, data, {
        headers: { Authorization: `Bearer ${token}` },
        params: { completed: false },
      })
      .then((response) => {
        loadTechs();
        setButtonPopup(false);
        toast.success("Card Criado com sucesso");
      })
      .catch((err) => {
        toast.error("Algo de errado não está certo");
      });
  };

  useEffect(() => {
    setTechnology(JSON.parse(localStorage.getItem("@Hud:user")).techs);
  }, [buttonPopup]);

  return selectedField === "techs" ? (
    <InputContainer>
      <div className="container">
        <CancelButton setButtonPopup={setButtonPopup} />

        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Tecnologias</h1>
          <input
            {...register("title")}
            error={errors.title?.message}
            type="text"
            placeholder="Nome da tecnologia"
          />
          <select {...register("status")}>
            {level.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
          <Button className="set" type="submit">
            Adicionar
          </Button>
        </form>
      </div>
    </InputContainer>
  ) : null;
};
