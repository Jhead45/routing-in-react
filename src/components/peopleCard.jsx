import React from "react";
import { Link } from "react-router-dom";

const PeopleCard = props => {
  console.log(props);

  return (
   
      <div className="card w-50">
        <div className="card-body">
          <h3 className="card-title">{props.value.name}</h3>
          <p className="card-text">{props.value.age}</p>
          <Link className="btn btn-primary" to={`/people/${props.value.id}`}>View Details</Link>
        </div>
      </div>

  );
};

export default PeopleCard;
