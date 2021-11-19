import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { Register } from "../registration";
import { Redirect, useHistory } from "react-router";
import { Button } from "../../components/Button";
import { Card } from "../../components/WorkCard";
import { useEffect, useState } from "react";
import { api } from "../../service";
import { Div } from "../registration/styles";
import { CardHolder, Table } from "./syles";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { AddButton } from "../../components/AddButton";

export const Dashboard = ({ authenticated, setAuthenticated, data }) => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  console.log("olha o data", data);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Hud:token")) || ""
  );
  const [technology, setTechnology] = useState([]);
  const onSubmitFunction = (data) => {
    console.log(data);
    api
      .post("/users/works", data)
      .then(() => {
        toast.success("Card Criado com sucesso");
        <Card data={data} />;
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo de errado não está certo");
      });
  };
  function loadTechnology() {
    api
      .get("/users/works", {
        headers: { Authorization: `Bearer ${token}` },
        params: { completed: false },
      })
      .then((response) => {
        const apiTechnology = response.data.data.map((technology) => ({
          ...technology,
          createdAt: new Date(technology.createdAt).toLocaleDateString(
            "pt-BR",
            {
              day: "2-digit",
              month: "long",
              year: "numeric",
            }
          ),
        }));
      })
      .catch((err) => console.log(err));
  }
  const authentication = () => {
    if (authenticated === false) {
      history.push("/");
    }
  };
  useEffect(() => {
    authentication();
  }, []);

  return (
    <Table>
      <header className="top">
        <h1>DashBoard</h1>
        <figure>
          <img src="" alt="" />
        </figure>
      </header>
      <CardHolder className="cardsSection">
        <div className="myTech">
          <h1>Minhas Tecnologias</h1>
          <AddButton></AddButton>
        </div>
        <div className="myWorks">
          <h1>Meus trabalhos</h1>
          <AddButton></AddButton>
        </div>
        <div className="userInfo">
          <header>
            <figure>
              <img src="" alt="" />
            </figure>
            <div className="userName">
              <h3>name</h3>
              <span>modulo</span>
              <span>desc modulo</span>
            </div>
          </header>
          <div>
            <div>icon</div>
            <h5>Ligar agora </h5>
            <p>11 1 1111-1111</p>
          </div>
          <div>Enviar e-mail</div>
          <Button onClick={() => setAuthenticated(false)}>
            <Link to="/">Sair</Link>
          </Button>
        </div>
      </CardHolder>
    </Table>
  );
};
