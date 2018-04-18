import React, { Component } from "react";
import "isomorphic-fetch";
import "es6-promise";

class Person extends Component {
    constructor(props) {
      super(props);
      this.state = { person: [] };
    }
  
    componentDidMount() {
      fetch("https://ghibliapi.herokuapp.com/people/" + this.props.match.params.id)
        .then(result => result.json())
        .then(person => {
          this.setState({ person });
        });
    }
render() {
  return (
<table class="table">
  <thead>
    <tr>
      <th scope="col">{this.state.person.name}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Gender</th>
      <td>{this.state.person.gender}</td>
    </tr>
    <tr>
      <th scope="row">age</th>
      <td>{this.state.person.age}</td>
    </tr>
    <tr>
      <th scope="row">Eye Color</th>
      <td>{this.state.person.eye_color}</td>
    </tr>
    <tr>
      <th scope="row">Hair Color</th>
      <td>{this.state.person.hair_color}</td>
    </tr>
  </tbody>
</table>
  );
}
}


export default Person;