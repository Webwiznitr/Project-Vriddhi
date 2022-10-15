import React, { useState } from "react";
import TeamData from "../components/TeamData";
import TeamCard from "../components/TeamCard";
import '../components/TeamCard.css'


const Team = () => {
  const [data, setData] = useState({});
  setData(TeamData);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-4 md:p-8 pt-4 bg-[#02022b]">
      {data.map((person) => {
        const { name, img, team } = person;
        return (
          <div className="flex justify-center rounded-lg color">
            <TeamCard name={name} img={img} team={team} />
          </div>
        );
      })}
    </div>
  );
};

export default Team;
