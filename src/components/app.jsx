import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from "./home";
import Films from "./films";
import People from "./people";
import '../assets/logo.png';

class App extends Component {


render() {
    return (
        
    <Router>
        <Fragment>
            <Link className="btn btn-primary" to="/">Go Home</Link>
            <Link className="btn btn-primary" to="/films">View Films</Link> 
            <Link className="btn btn-primary" to="/people">View People</Link> 
            <Switch>
                <Route exact path="/" component={Home} /> 
                <Route path="/films" component={Films} /> 
                <Route path="/people" component={People} />
            </Switch>
        </Fragment>
    </Router>);


}
};







export default App;