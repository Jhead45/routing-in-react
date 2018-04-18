import React, { Component } from "react";
import "isomorphic-fetch";
import "es6-promise";

class Feature extends Component {
    constructor(props) {
      super(props);
      this.state = { films: [] };
    }
  
    componentDidMount() {
      fetch("https://ghibliapi.herokuapp.com/films/" + this.props.match.params.id)
        .then(result => result.json())
        .then(films => {
          this.setState({ films });
        });
    }
render() {
  return (
<table class="table">
  <thead>
    <tr>
      <th scope="col">{this.state.films.title}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Description</th>
      <td>{this.state.films.description}</td>
    </tr>
    <tr>
      <th scope="row">Director</th>
      <td>{this.state.films.director}</td>
    </tr>
    <tr>
      <th scope="row">Producer</th>
      <td>{this.state.films.producer}</td>
    </tr>
    <tr>
      <th scope="row">Release Date</th>
      <td>{this.state.films.release_date}</td>
    </tr>
    <tr>
      <th scope="row">Rating</th>
      <td>{this.state.films.rt_score}</td>
    </tr>
  </tbody>
</table>
  );
}
}


export default Feature;




/*
    <div className="card w-50">
      <div className="card-body">
        <h3 className="card-title">{props.value.title}</h3>
        <p className="card-text">{props.value.description}</p>
      </div>
    </div>

    */