import React, { Component } from 'react';
import './year.css';
import FA from 'react-fontawesome';
import Month from '../month/month';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Year extends React.Component {
  //state = {date: new Date()};

// btnReduceYear = () => {
//     this.setState({date: new Date(this.state.date.getFullYear()-1, this.state.date.getMonth(), this.state.date.getDate())});
// }

// btnIncreaseYear = () => {
//     this.setState({date: new Date(this.state.date.getFullYear()+1, this.state.date.getMonth(), this.state.date.getDate())});
// }
//date: new Date().toLocaleString('default', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  render(){
    
  let yearArr = [];
  for (let i = 0; i < 12; i++) {
    yearArr.push(new Date(this.props.year, i, 1));
  }
  
  return (
  <div>
    <div className='Year'>
      <Link to={`/year/${this.props.year-1}`}>
        <FA name="chevron-left" />
      </Link>
        {this.props.year}
        
      <Link to={`/year/${Number(this.props.year)+1}`}>
        <FA name="chevron-right" />
      </Link>
      
    </div>
    <div className='MonthBlock'>
        {yearArr.map((el, ind) =>( 
          <div key={ind}>
            <Month firstDay = {el} />
          </div>
        ))}
    </div>
  </div>
  )}
}

export default Year;
