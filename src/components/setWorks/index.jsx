import { useForm } from "react-hook-form";
import { InputContainer } from "./styled";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, CancelButton } from "../Button";

import { useState } from "react";
import { api } from "../../service";
import { toast } from "react-toastify";
import { useEffect } from "react";

export const WorkInput = ({
  selectedField,
  setButtonPopup,
  buttonPopup,
  works,
  setWorks,
}) => {
  console.log("input", selectedField);
  const schema = yup.object().shape({
    title: yup.string().required("nome do trabalho"),
    description: yup
      .string()
      .max(100, "maximo 100 caracteres")
      .required("nome do trabalho"),
    deploy_url: yup.string().required("Escolha um dos itens"),
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
      .post(`/users/works`, data, {
        headers: { Authorization: `Bearer ${token}` },
        params: { completed: false },
      })
      .then((_) => {
        setButtonPopup(false);
        toast.success("Card Criado com sucesso");
      })
      .catch((err) => {
        toast.error("Algo de errado não está certo");
      });
  };
  useEffect(() => {
    setWorks(JSON.parse(localStorage.getItem("@Hud:user")).works);
  }, [buttonPopup]);
  console.log("Workando", works);
  function loadWorks() {
    api
      .get(`/users/${JSON.parse(localStorage.getItem("@Hud:user")).id}`)
      .then((response) => {
        localStorage.setItem("@Hud:user", JSON.stringify(response.data));
        setWorks(response.data.works);
      });
    setButtonPopup(false);
  }

  return selectedField === "works" ? (
    <InputContainer>
      <div className="container">
        <CancelButton setButtonPopup={setButtonPopup} />

        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Trabalhos</h1>
          <div>
            <input
              {...register("title")}
              error={errors.title?.message}
              type="text"
              placeholder="Nome do trabalho"
            />
            <input
              {...register("description")}
              error={errors.description?.message}
              className="desc"
              type="text"
              placeholder="descrição"
            />
            <input
              {...register("deploy_url")}
              error={errors.deploy_url?.message}
              className="link"
              type="text"
              placeholder="Link"
            />
          </div>
          <Button className="set" type="submit" onClick={loadWorks}>
            Adicionar
          </Button>
        </form>
      </div>
    </InputContainer>
  ) : null;
};
