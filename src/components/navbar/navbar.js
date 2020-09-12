import React, { Component } from 'react';
//import React from 'react';
import './navbar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

class Navbar extends React.Component {

    render(){

    return (
        <div className='navbar'>
            <Link to="/currentyear">
                <div>Current year</div>
            </Link>
            
            <Link to="/currentmonth">
                <div>Current month</div>
            </Link>
            
            <Link to="/today">
                <div>Today</div>
            </Link>
        </div>
    )}
}

export default Navbar;