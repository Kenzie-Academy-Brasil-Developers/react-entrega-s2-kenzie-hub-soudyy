import { Button, AddButton } from "../Button";
import img from "../../assets/img/profpic.jpg";
import { Popup } from "reactjs-popup";
import { TechInput } from "../setTechs";
import { FiSmartphone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BoxItens, Container, MyTechs, MyWorks } from "./stylesT";
import { TechCards, WorkCards } from "../Card";
import { WorkInput } from "../setWorks";
import { useState } from "react";
import { api } from "../../service";
import { toast } from "react-toastify";

export const UserCard = ({ authentication, data }) => {
  return (
    <div>
      <Container className="userInfo">
        <header>
          <figure>
            <img src={img} alt="" />
          </figure>
          <div className="userName">
            <h3>{data.name}</h3>
            <span>{data.course_module}</span>
          </div>
        </header>
        <div className="contact">
          <div className="icon">
            <FiSmartphone />
          </div>
          <div className="infos">
            <h5>Ligar agora </h5>
            <p>{data.contact}</p>
          </div>
        </div>
        <div className="contact">
          <div className="icon">
            <AiOutlineMail />
          </div>
          <div className="infos">
            <h5>Enviar e-mail </h5>
            <p>{data.email}</p>
          </div>
        </div>
        <Button onClick={() => authentication()}>Logoff</Button>
      </Container>
    </div>
  );
};

export const TechCard = ({
  setSelectedField,
  selectedField,
  buttonPopup,
  setButtonPopup,
  data,
  loadTechs,
  technology,
  setTechnology,
}) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Hud:token")) || ""
  );
  const handleDelete = (selected) => {
    api
      .delete(`/users/techs/${selected}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        loadTechs();
        toast.success("Tecnologia removida com sucesso");
      });
  };

  return (
    <MyTechs>
      <BoxItens className="myTech">
        <div>
          <div className="header">
            <h1>Minhas Tecnologias</h1>
            <AddButton
              onClick={() => {
                setSelectedField("techs");
                setButtonPopup(true);
              }}
            ></AddButton>
          </div>
          <div>
            <Popup
              trigger={
                buttonPopup === true ? (
                  <TechInput
                    technology={technology}
                    setTechnology={setTechnology}
                    loadTechs={loadTechs}
                    buttonPopup={buttonPopup}
                    selectedField={selectedField}
                    setButtonPopup={setButtonPopup}
                    data={data}
                  />
                ) : null
              }
            ></Popup>
          </div>
          <div className="scroll">
            <TechCards handleDelete={handleDelete} technology={technology} />
          </div>
        </div>
      </BoxItens>
    </MyTechs>
  );
};

export const WorkCard = ({
  selectedField,
  setSelectedField,
  buttonPopup,
  setButtonPopup,
  data,
  works,
  setWorks,
  loadWorks,
}) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Hud:token")) || ""
  );
  const handleDelete = (selected) => {
    api
      .delete(`/users/works/${selected}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((_) => {
        loadWorks();
        toast.success("trabalho removido com sucesso");
      });
  };
  return (
    <MyWorks>
      <BoxItens className="myWorks">
        <div className="header">
          <h1>Meus trabalhos</h1>
          <AddButton
            onClick={() => {
              setSelectedField("works");
              setButtonPopup(true);
            }}
          ></AddButton>
        </div>
        <div>
          <Popup
            trigger={
              buttonPopup === true ? (
                <WorkInput
                  works={works}
                  loadWorks={loadWorks}
                  setWorks={setWorks}
                  buttonPopup={buttonPopup}
                  selectedField={selectedField}
                  setButtonPopup={setButtonPopup}
                  data={data}
                />
              ) : null
            }
          ></Popup>

          <div className="scroll">
            <WorkCards handleDelete={handleDelete} works={works} />
          </div>
        </div>
      </BoxItens>
    </MyWorks>
  );
};
