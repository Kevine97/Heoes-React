import { heroes } from "../data/heroes";

const HeroesById = (id) => {
  
  return heroes.filter((hero) => hero.id === id);
};

export default HeroesById;