import { Container, Animation, Div } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import { api } from "../../service";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Register = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();
  console.log(authenticated);
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    password: yup.string().min(6, "minimo 6 digitos").required("ta errado"),
    email: yup.string().email("e-mail invalido").required("Campo obrigatório"),
    bio: yup.string().required("descreva-se"),
    contact: yup.string().required("deixe algum meio de comunicação"),

    course_module: yup.string().required("qual modulo está?"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    api
      .post("/users", data)
      .then((_) => {
        toast.success("sucesso");
        setAuthenticated(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo de errado não está certo");
      });
  };
  useEffect(() => {
    if (authenticated === true) {
      history.push("/dashboard");
    }
  }, []);
  const options = [
    "Primeiro módulo (Introdução ao Frontend)",
    "Segundo módulo (Frontend Avançado)",
    "Terceiro módulo (Introdução ao Backend)",
    "Quarto módulo (Backend Avançado)",
  ];
  return (
    <Div>
      <Container>
        <Animation>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Cadastro</h1>
            <Input
              register={register}
              name="name"
              label="nome"
              placeholder="Seu nome"
              error={errors.name?.message}
            />
            <Input
              register={register}
              name="email"
              label="Email"
              placeholder="Seu Email"
              error={errors.email?.message}
            />
            <Input
              register={register}
              name="bio"
              type="text"
              label="biografia"
              placeholder="Diga um pouco sobre você"
              error={errors.bio?.message}
            />
            <Input
              register={register}
              name="contact"
              label="contato"
              placeholder="Seu contato"
              error={errors.contact?.message}
            />
            <select {...register("course_module")}>
              {options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
            <p>{errors.course_module?.message}</p>
            <Input
              register={register}
              name="password"
              label="senha"
              type="password"
              placeholder="senha"
              error={errors.password?.message}
            />
            <div className="buttons">
              <Button type="submit">Cadastrar-se</Button>
              <Button
                type="button"
                onClick={() => {
                  history.push("/");
                }}
              >
                voltar
              </Button>
            </div>
            <p>
              Já tem uma conta? <Link to="/login">Login</Link>
            </p>
          </form>
        </Animation>
      </Container>
    </Div>
  );
};
