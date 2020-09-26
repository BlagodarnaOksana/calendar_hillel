//import React, { Component } from 'react';
import React from 'react';
import './month.css';
import {reactLocalStorage} from 'reactjs-localstorage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";


class Month extends React.Component {
  
  render(){
    const firstDayOfMonth = this.props.firstDay;
    const firstDayOfNextMonth = new Date(firstDayOfMonth.getFullYear(),firstDayOfMonth.getMonth()+1, 1);
    const quantDayOfMonth = (firstDayOfNextMonth - firstDayOfMonth)/86400/1000;
    const weekDays = ['ПН', 'ВТ','СР','ЧТ','ПТ','СБ','ВС'];
    const day = [];
    const emptyDays = firstDayOfMonth.getDay() || 7;
    const today = new Date().getDate();
    const currMonth = new Date().getMonth() === firstDayOfMonth.getMonth();
    const currYear = new Date().getFullYear() === firstDayOfMonth.getFullYear();

    for (let i = 1; i < emptyDays; i++) {
      day.push(' ');
    }
    for (let i = 1; i <= quantDayOfMonth; i++) {
      day.push(i);
    }
    // let q = 42 - day.length;
    // for (let i = 0; i < q; i++) {
    //   day.push(' ');
    // }
    
    //console.log(emptyDays);
  return (
  <div className='monthComponent'>
    <div className='month'>
      <Link to={`/year/${firstDayOfMonth.getFullYear()}/month/${firstDayOfMonth.getMonth()+1}`}>
        <div className='monthName'>
          {firstDayOfMonth.toLocaleString('default', {month: 'long'})}
        </div>
      </Link>
    </div>
    <div className='weekDays'>
      {weekDays.map((dayTitle, ind) => <div className='dayTitle' key={ind}> {dayTitle} </div>)}
      
      {day.map((day, ind) => (
        <Link to={`/day/${day}.${firstDayOfMonth.getMonth()+1}.${firstDayOfMonth.getFullYear()}`}>
            <div key={ind} 
            // className={today === day && currMonth && currYear? 'currDay' : ''}
            className = {reactLocalStorage.get(day + '.' + String(firstDayOfMonth.getMonth()+1) + '.'+ firstDayOfMonth.getFullYear()) ? 'dayWithTodo': 'everyDay'}
            > 
            {day} 
            </div>
        </Link>
      ))
      }

    </div>
    
  </div>
  )}
}

export default Month;
