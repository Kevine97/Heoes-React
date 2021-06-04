import React from "react";
import { Link } from "react-router-dom";

const HeroesCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card ms-3 " style={{ maxWidth: "540px" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={`./assets/heroes/${id}.jpg`}
            className="card-img img-fluid"
            alt={superhero}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            {alter_ego !== characters && (
              <p className="card-text">{characters}</p>
            )}
            <p className="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>

            <div className="">
              <Link className="badge badge-secondary py-2" to={`./hero/${id}`}>
              <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroesCard;
