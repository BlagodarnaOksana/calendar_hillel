import React, { Component } from 'react';
import './month.css';

class Month extends React.Component {
  
  render(){
    const firstDayOfMonth = this.props.firstDay;
    const firstDayOfNextMonth = new Date(firstDayOfMonth.getFullYear(),firstDayOfMonth.getMonth()+1, 1);
    const quantDayOfMonth = (firstDayOfNextMonth - firstDayOfMonth)/86400/1000;
    const weekDays = ['ПН', 'ВТ','СР','ЧТ','ПТ','СБ','ВС'];
    const day = [];
    const emptyDays = firstDayOfMonth.getDay() || 7;

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
    
    console.log(emptyDays);
  return (
  <div className='monthComponent'>
    <div className='month'>
      {firstDayOfMonth.toLocaleString('default', {month: 'long'})}
    </div>
    <div className='weekDays'>
      {weekDays.map((dayTitle, ind) => <div className='dayTitle' key={ind}> {dayTitle} </div>)}
      {day.map((day, ind) => <div key={ind}> {day} </div>)}

    </div>
    
  </div>
  )}
}

export default Month;
