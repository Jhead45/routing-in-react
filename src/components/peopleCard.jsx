import React from "react";
import { Link } from "react-router-dom";

const PeopleCard = props => {
  console.log(props);

  return (
      <div className="d-flex justify-content-center mt-3">
      <div className="card w-50">
        <div className="card-body">
          <h3 className="card-title">{props.value.name}</h3>
          <p className="card-text">{props.value.age}</p>
          <Link className="btn btn-primary" to={`/people/${props.value.id}`}>View Details</Link>
        </div>
      </div>
      </div>

  );
};

export default PeopleCard;
