import React, { useMemo } from "react";
import GetHeroesByPublisher from "../../selectors/GetHeroesByPublisher";
import HeroesCard from "./HeroesCard";

const HeroesList = ({ publisher }) => {
  const heroesList = useMemo(() => GetHeroesByPublisher(publisher), [publisher]);
  // const heroesList = GetHeroesByPublisher(publisher);

  return (
    <div className="card-columns animate__animated animate__fadeIn">
      {heroesList.map((hero) => (
        <HeroesCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

export default HeroesList;
