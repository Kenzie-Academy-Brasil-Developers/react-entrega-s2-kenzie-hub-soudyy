import { Button, AddButton } from "../Button";
import img from "../../assets/img/profpic.jpg";
import { Popup } from "reactjs-popup";
import { TechInput } from "../setTechs";
import { FiSmartphone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BoxItens, Container } from "./stylesT";
import { TechCards, WorkCards } from "../Card";
import { WorkInput } from "../setWorks";
import { useState } from "react";
import { api } from "../../service";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const UserCard = ({ authentication, data }) => {
  return (
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
  );
};

export const TechCard = ({
  setSelectedField,
  selectedField,
  buttonPopup,
  setButtonPopup,
  data,
}) => {
  const handleDelete = () => {
    technology.find((item) => item.id);
  };
  const remove = () => {
    api.delete(`/users/techs/:${handleDelete}`);
  };
  console.log("tecch", buttonPopup);
  const [technology, setTechnology] = useState([]);
  return (
    <>
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
            <TechCards remove={remove} technology={technology} />
          </div>
        </div>
      </BoxItens>
    </>
  );
};

export const WorkCard = ({
  selectedField,
  setSelectedField,
  buttonPopup,
  setButtonPopup,
  data,
}) => {
  const [teste, setTeste] = useState("");
  const [works, setWorks] = useState([]);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Hud:token")) || ""
  );
  const handleDelete = (selected) => {
    console.log("selecionad", selected);
    setTeste(works.find((item) => selected === item.title));
  };
  useEffect(() => {
    console.log("effect", teste.title);
    remove();
  }, [handleDelete]);
  const remove = () => {
    api
      .delete(
        `/users/works/${
          (JSON.parse(localStorage.getItem("@Hud:user")), teste)
        }`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((_) => {
        // setCardTech(false)
        // requisicao()
        toast.success("Tecnologia removida com sucesso");
      });
  };
  return (
    <>
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
    </>
  );
};
