import React from "react";
import { Link } from "react-router-dom";

const FilmsCard = (props) => {
console.log(props);
  
  return (
      <div className="d-flex justify-content-center mt-3">
    <div className="card w-50 ">
      <div className="card-body">
        <h3 className="card-title">{props.value.title}</h3>
        <p className="card-text">{props.value.description}</p>
        <Link className="btn btn-primary" to={`/films/${props.value.id}`}>View Details</Link>
      </div>
    </div>
    </div>
  );
};




export default FilmsCard;