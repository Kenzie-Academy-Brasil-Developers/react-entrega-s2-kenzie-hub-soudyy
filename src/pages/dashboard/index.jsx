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
import img from "../../assets/img/profpic.jpg";
import { AddButton } from "../../components/AddButton";
import { InputPlace } from "../../components/setTechs";

export const Dashboard = ({ authenticated, setAuthenticated, data }) => {
  console.log(data);
  const history = useHistory();
  const [itens, setItens] = useState([]);
  const [selectedField, setSelectedField] = useState("");
  const [technology, setTechnology] = useState([]);
  const [works, setWorks] = useState([]);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Hud:token")) || ""
  );

  const onSubmitFunction = (data) => {
    console.log(data);
    api
      .post(`/users/${selectedField}`, data)
      .then(() => {
        toast.success("Card Criado com sucesso");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Algo de errado não está certo");
      });
  };

  function loadTechnology() {
    api
      .get(`/users/${data.user.id}`, {
        headers: { Authorization: `Bearer ${token}` },
        params: { completed: false },
      })
      .then((response) => {})
      .catch((err) => console.log(err));
  }
  const authentication = () => {
    localStorage.clear();
    setAuthenticated(false);
    history.push("/login");
  };
  useEffect(() => {
    if (data === []) {
      localStorage.clear();
      setAuthenticated(true);
      history.push("/home");
    }
  }, []);

  return (
    <Table>
      <header className="top">
        <h1>DashBoard</h1>
        <figure>
          <img src={img} alt="" />
        </figure>
      </header>
      <CardHolder className="cardsSection">
        <div className="myTech">
          <h1>Minhas Tecnologias</h1>
          <AddButton
            onClick={() => {
              setSelectedField("techs");
            }}
          ></AddButton>
        </div>
        <div className="myWorks">
          <h1>Meus trabalhos</h1>
          <AddButton
            onClick={() => {
              setSelectedField("works");
            }}
          ></AddButton>
        </div>
        <div className="userInfo">
          <header>
            <figure>
              <img src={img} alt="" />
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
          <Button onClick={() => authentication()}>Sair</Button>
        </div>
      </CardHolder>
      <InputPlace />
    </Table>
  );
};
