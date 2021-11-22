import { Button, AddButton } from "../Button";
import img from "../../assets/img/profpic.jpg";
import { Popup } from "reactjs-popup";
import { InputPlace } from "../setTechs";
import { FiSmartphone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BoxItens, Container } from "./stylesT";
import { TechCards, WorkCards } from "../Card";

export const UserCard = ({ authentication, data }) => {
  console.log("user card", data);
  return (
    <Container className="userInfo">
      <header>
        <figure>
          <img src={img} alt="" />
        </figure>
        <div className="userName">
          {/* <h3>{data.name}</h3>
          <span>{data.course_module}</span> */}
        </div>
      </header>
      <div className="contact">
        <div className="icon">
          <FiSmartphone />
        </div>
        <div className="infos">
          <h5>Ligar agora </h5>
          {/* <p>{data.contact}</p> */}
        </div>
      </div>
      <div className="contact">
        <div className="icon">
          <AiOutlineMail />
        </div>
        <div className="infos">
          <h5>Enviar e-mail </h5>
          {/* <p>{data.email}</p> */}
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
  console.log("tecch", buttonPopup);

  return (
    <BoxItens className="myTech">
      <div className="header">
        <h1>Minhas Tecnologias</h1>
        <AddButton
          onClick={() => {
            setSelectedField("techs");
            setButtonPopup(true);
          }}
        ></AddButton>

        <Popup
          trigger={
            buttonPopup === true ? (
              <InputPlace
                selectedField={selectedField}
                setButtonPopup={setButtonPopup}
                data={data}
              />
            ) : null
          }
        ></Popup>
      </div>
      <div>
        <TechCards />
      </div>
    </BoxItens>
  );
};

export const WorkCard = ({
  selectedField,
  setSelectedField,
  buttonPopup,
  setButtonPopup,
  data,
}) => {
  return (
    <BoxItens className="myWorks">
      <div className="header">
        <h1>Meus trabalhos</h1>
        <AddButton
          onClick={() => {
            setSelectedField("works");
            setButtonPopup(true);
          }}
        ></AddButton>
        <Popup
          trigger={
            buttonPopup === true ? (
              <InputPlace
                selectedField={selectedField}
                setButtonPopup={setButtonPopup}
                data={data}
              />
            ) : null
          }
        ></Popup>
      </div>
      <div>
        <WorkCards />
      </div>
    </BoxItens>
  );
};
