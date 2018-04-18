import React, { Component } from 'react';
import "isomorphic-fetch";
import "es6-promise";


class Home extends Component {

 
    
    render() {
        return(
            <div>
            <h1 className='text-center'>This site is created to locate your favorite movie from Studio Ghibli.</h1>
            <br />
            <h2 className='text-center'>Use this site to navigate through the films and favorite charactors.</h2>
            </div>
        );
    }
}



export default Home;