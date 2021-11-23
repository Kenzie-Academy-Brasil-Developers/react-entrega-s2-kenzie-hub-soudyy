import { CreateCard } from "./styled";
import { GiTechnoHeart } from "react-icons/gi";
import { IoGitNetworkOutline } from "react-icons/io5";

export const TechCards = ({ technology, handleDelete }) => {
  return technology !== [] ? (
    <>
      {technology.map((item) => {
        return (
          <CreateCard key={item.id}>
            <div className="icon">
              <GiTechnoHeart />
            </div>
            <div className="desc">
              <h3>{item.title}</h3>
              <span>{item.status}</span>
            </div>
            <button onClick={() => handleDelete(item.id)}>X</button>
          </CreateCard>
        );
      })}
    </>
  ) : null;
};
export const WorkCards = ({ works, handleDelete }) => {
  return works !== [] ? (
    <>
      {works.map((item) => {
        return (
          <CreateCard className="teste" key={item.id}>
            <div className="icon">
              <IoGitNetworkOutline />
            </div>
            <div className="desc">
              <h3>{item.title}</h3>
              <span>{item.description}</span>
            </div>
            <button onClick={() => handleDelete(item.id)}>X</button>
          </CreateCard>
        );
      })}
    </>
  ) : null;
};
