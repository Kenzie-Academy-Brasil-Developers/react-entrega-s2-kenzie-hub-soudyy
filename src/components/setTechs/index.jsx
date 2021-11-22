import { useForm } from "react-hook-form";
import { InputContainer } from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, CancelButton } from "../Button";

import { useState } from "react";
import { api } from "../../service";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const InputPlace = ({ selectedField, setButtonPopup, data }) => {
  const [input, setInput] = useState("");
  const [technology, setTechnology] = useState([]);
  const [works, setWorks] = useState([]);
  const level = [
    "Selecione um nivel",
    "Iniciante",
    "Intermediário",
    "Avançado",
  ];
  console.log("input", selectedField);
  const schema = yup.object().shape({
    tech: yup.string().required("nome da Tecnologia"),
    work: yup.string().required("nome do trabalho"),
    desc: yup
      .string()
      .max(100, "maximo 100 caracteres")
      .required("nome do trabalho"),
    level: yup.string().required("Escolha um dos itens"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Hud:token")) || ""
  );
  console.log("input", input);
  const onSubmitFunction = (data) => {
    console.log("data", data);
    console.log("Escolha", selectedField);
    console.log("to aqui");
    api
      .post(`/users/${selectedField}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setButtonPopup(false);
        console.log(response.data);
        setTechnology(...technology, response.data);

        toast.success("Card Criado com sucesso");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo de errado não está certo");
      });
  };
  function warning() {
    toast.error("Ainda estou trabalhando nisso");
  }
  function loadTechnology() {
    api
      .get(`/users/:${data.user.id}`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { completed: false },
      })
      .then((response) => {})
      .catch((err) => console.log(err));
  }
  //const submitFunction = () => {};
  useEffect(() => {
    console.log(technology);
  }, [technology]);
  return selectedField === "techs" ? (
    <InputContainer>
      <div className="container">
        <CancelButton setButtonPopup={setButtonPopup} />

        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Tecnologias</h1>
          <input
            {...register("tech")}
            error={errors.tech?.message}
            type="text"
            placeholder="Nome da tecnologia"
            value={input}
            onChange={(evt) => setInput(evt.target.value)}
          />
          <select {...register("level")}>
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
  ) : (
    <InputContainer>
      <div className="container">
        <CancelButton setButtonPopup={setButtonPopup} />

        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Trabalhos</h1>
          <div>
            <input
              {...register("work")}
              error={errors.work?.message}
              type="text"
              placeholder="Nome do trabalho"
              value={input}
              onChange={(evt) => setInput(evt.target.value)}
            />
            <input
              {...register("desc")}
              error={errors.desc?.message}
              className="desc"
              type="text"
              placeholder="descrição"
              value={input}
              onChange={(evt) => setInput(evt.target.value)}
            />
          </div>
          <Button className="set" type="submit" onClick={() => warning()}>
            Adicionar
          </Button>
        </form>
      </div>
    </InputContainer>
  );
};
