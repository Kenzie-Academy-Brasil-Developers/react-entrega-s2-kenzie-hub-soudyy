import { CreateCard } from "./styled";
import { GiTechnoHeart } from "react-icons/gi";
import { IoGitNetworkOutline } from "react-icons/io5";
export const TechCards = ({ name, level }) => {
  return (
    <CreateCard>
      <div className="icon">
        <GiTechnoHeart />
      </div>
      <div>
        <h3>{name}</h3>
        <span>{level}</span>
      </div>
    </CreateCard>
  );
};
export const WorkCards = ({ work, desc }) => {
  return (
    <CreateCard>
      <div className="icon">
        <IoGitNetworkOutline />
      </div>
      <div>
        <h3>{work}</h3>
        <span>{desc}</span>
      </div>
    </CreateCard>
  );
};
