import { Container, Animation } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { api } from "../../service";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { Div } from "../registration/styles";

import { useEffect } from "react";

export const Login = ({ authenticated, setAuthenticated, setData }) => {
  console.log(authenticated);
  const schema = yup.object().shape({
    email: yup.string().email("").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Minimo 6 digitos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onSubmitFunction = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token } = response.data;
        setData(response.data);
        localStorage.setItem("@Hub:token", JSON.stringify(token));
        setAuthenticated(true);
        history.push("/dashboard");
      })

      .catch((err) => toast.error("Algo de errado não esta certo"));
  };

  const authentication = () => {
    if (authenticated === true) {
      history.push("/dashboard");
    }
  };
  useEffect(() => {
    authentication();
  }, []);

  return (
    <Div>
      <Container>
        <Animation>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Login</h1>
            <Input
              register={register}
              name="email"
              label="Email"
              placeholder="Seu Email"
              error={errors.email?.message}
            ></Input>
            <Input
              register={register}
              name="password"
              type="password"
              label="senha"
              placeholder="Digite uma senha"
              error={errors.password?.message}
            ></Input>
            <div className="buttons">
              <Button type="submit">Login</Button>
              <Button type="button">
                <Link to="/">voltar</Link>
              </Button>
            </div>
            <p>
              Não tem uma conta? <Link to="/register">Registre-se</Link>
            </p>
          </form>
        </Animation>
      </Container>
    </Div>
  );
};
