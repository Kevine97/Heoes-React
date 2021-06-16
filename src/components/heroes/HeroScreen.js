import React, { useMemo } from "react";
import { useParams, Redirect, withRouter } from "react-router-dom";
import HeroesById from "../../selectors/HeroesById";
import TypeRutas from "../../types/TypeRutas";

const HeroScreen = ({ history }) => {
  window.scrollTo(0, 0)

  
  const { heroeId } = useParams();
  const hero = useMemo(() => HeroesById(heroeId), [heroeId]);
  if (!hero || hero.length === 0) {
    return <Redirect to={TypeRutas.home} />;
  }

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero[0];

  const handleRetunr = (e) => {
    e.preventDefault();

    if (history.length <= 2) {
      publisher === "DC Comics" ? history.push(TypeRutas.dc) : history.push(TypeRutas.marvel);
    } else {
      history.goBack();
    }
  };

  return (
    <div className="container-fluid row mt-5">
      <div className="col-lg-3 col-md-12 col-sm-12 mx-auto">
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          className="img-thumbnail img-fluid animate__animated animate__fadeIn"
        />
      </div>
      <div className="col-lg-8 col-md-12 col-sm-12 mx-auto animate__animated animate__flipInX">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b> {publisher}
          </li>
          <li className="list-group-item">
            <b>Frst_appearance: </b> {first_appearance}
          </li>
        </ul>
        <div className="list-group-item">
          <h5 className="mr-2">
            Characters: <span>{characters}</span>
          </h5>
        </div>
        <div className="list-group-item">
          <button className="btn btn-secondary mt-3" onClick={handleRetunr}>
          <i className="fas fa-arrow-left"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(HeroScreen);
