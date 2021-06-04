import { heroes } from "../data/heroes";

const GetHeroeByName = (name = "") => {
  if (name === "") {
    return [];
  }

  name = name.toLowerCase();
  const superhero = heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
  const alter_ego = heroes.filter((hero) => hero.alter_ego.toLowerCase().includes(name));
  const first_appearance = heroes.filter((hero) => hero.first_appearance.toLowerCase().includes(name));

   return superhero.length === 0 && alter_ego.length === 0 ? first_appearance : superhero.length === 0 && first_appearance.length === 0 ? alter_ego : superhero
}
export default GetHeroeByName;
