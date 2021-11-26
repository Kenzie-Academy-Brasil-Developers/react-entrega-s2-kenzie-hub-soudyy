import { useHistory } from "react-router";
import img from "../../assets/img/profpic.jpg";
import { useEffect, useState } from "react";
import { CardHolder, Table } from "./syles";
import { TechCard, UserCard, WorkCard } from "../../components/TechCard";
import { api } from "../../service";

export const Dashboard = ({
  setAuthenticated,
  data,
  buttonPopup,
  setButtonPopup,
  works,
  setWorks,
  loadWorks,
  technology,
  setTechnology,
  loadTechs,
}) => {
  const history = useHistory();
  const [selectedField, setSelectedField] = useState("");

  const authentication = () => {
    localStorage.clear();
    setAuthenticated(false);
    history.push("/login");
  };

  useEffect(() => {
    if (data === []) {
      localStorage.clear();
      setAuthenticated(false);
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
        <TechCard
          technology={technology}
          setTechnology={setTechnology}
          loadTechs={loadTechs}
          data={data.user}
          selectedField={selectedField}
          setSelectedField={setSelectedField}
          setButtonPopup={setButtonPopup}
          buttonPopup={buttonPopup}
        />
        <WorkCard
          works={works}
          setWorks={setWorks}
          loadWorks={loadWorks}
          data={data.user}
          selectedField={selectedField}
          setSelectedField={setSelectedField}
          setButtonPopup={setButtonPopup}
          buttonPopup={buttonPopup}
        />
        <UserCard authentication={authentication} data={data.user} />
      </CardHolder>
    </Table>
  );
};
