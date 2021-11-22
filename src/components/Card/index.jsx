import { CreateCard } from "./styled";
import { GiTechnoHeart } from "react-icons/gi";
import { IoGitNetworkOutline } from "react-icons/io5";
import { CancelButton } from "../Button";

export const TechCards = ({ technology, remove }) => {
  console.log("tecando", technology);
  return technology !== [] ? (
    <>
      {technology.map((item, index) => {
        return (
          <CreateCard key={`tech-${index}`}>
            <div className="icon">
              <GiTechnoHeart />
            </div>
            <div className="desc">
              <h3>{item.title}</h3>
              <span>{item.status}</span>
            </div>
            <button onClick={remove}>X</button>
          </CreateCard>
        );
      })}
    </>
  ) : null;
};
export const WorkCards = ({ works, handleDelete }) => {
  console.log(works);
  return works !== [] ? (
    <>
      {works.map((item, index) => {
        return (
          <CreateCard key={`work-${index}`}>
            <div className="icon">
              <IoGitNetworkOutline />
            </div>
            <div className="desc">
              <h3>{item.title}</h3>
              <span>{item.description}</span>
            </div>
            <button onClick={() => handleDelete(item.title)}>X</button>
          </CreateCard>
        );
      })}
    </>
  ) : null;
};
