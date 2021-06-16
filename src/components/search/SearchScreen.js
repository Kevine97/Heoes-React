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
    <div  className="container-fluid mt-5">
      <h1>Search Screen</h1>
      <hr />

      <div className="row  bg-white  py-5">
        <div className="col-lg-5 col-md-12 col-sm-12 mx-auto">
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

            <button className="btn btn-primary btn-block m-1 btn-block"> Search...</button>
          </form>
        </div>

        <div className="col-lg-5 col-md-12 col-sm-12 mx-auto">
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
