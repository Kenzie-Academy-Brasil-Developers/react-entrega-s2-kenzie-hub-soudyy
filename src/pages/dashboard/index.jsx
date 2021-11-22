import { useHistory } from "react-router";
import img from "../../assets/img/profpic.jpg";
import { useEffect, useState } from "react";
import { CardHolder, Table } from "./syles";
import { TechCard, UserCard, WorkCard } from "../../components/TechCard";

export const Dashboard = ({
  setAuthenticated,
  data,
  buttonPopup,
  setButtonPopup,
}) => {
  console.log(data);
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
          data={data}
          selectedField={selectedField}
          setSelectedField={setSelectedField}
          setButtonPopup={setButtonPopup}
          buttonPopup={buttonPopup}
        />
        <WorkCard
          data={data}
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
