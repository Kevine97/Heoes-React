import React from "react";
import querystring from "query-string";
import { useLocation, withRouter } from "react-router-dom";
import useForm from "../../hooks/useForm";
import HeroesCard from "../heroes/HeroesCard";
import GetHeroeByName from "../../selectors/GetHeroeByName";

const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = querystring.parse(location.search);
  const [{ hero }, handleInputChange] = useForm({ hero: q });
  //const heroeFilter = useMemo(() =>  GetHeroeByName(hero), [hero])
  const heroeFilter = GetHeroeByName(hero)
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`?q=${hero}`);
    
  };
  return (
    <div>
      <h1>Search Screen</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Buscar Heroe"
              name="hero"
              className="form-control"
              autoComplete="off"
              value={hero}
              onChange={handleInputChange}
            />

            <button className="btn m-1 btn-block btn-dark"> Search...</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>

          {
              hero === "" ? <div className="alert alert-info animate__animated animate__bounce">Search a hero</div>:heroeFilter.length === 0 ? <div className="alert alert-danger animate__animated animate__bounce">Hero no encontrado <b>{hero}</b></div> : ''
          }
          {heroeFilter.map((hero) => (
            <HeroesCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(SearchScreen);
