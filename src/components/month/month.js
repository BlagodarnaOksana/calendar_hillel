import React from 'react';
import './month.css';

class Month extends React.Component {
  
  render(){
    const firstDayOfMonth = this.props.firstDay;
    const firstDayOfNextMonth = new Date(firstDayOfMonth.getFullYear(),firstDayOfMonth.getMonth()+1, 1);
    const quantDayOfMonth = (firstDayOfNextMonth - firstDayOfMonth)/86400/1000;
    const weekDays = ['ПН', 'ВТ','СР','ЧТ','ПТ','СБ','ВС'];
    const day = [];
    const emptyDays = firstDayOfMonth.getDay()-1;

    for (let i = 0; i < emptyDays; i++) {
      day.push('');
    }
    for (let i = 1; i <= quantDayOfMonth; i++) {
      day.push(i);
    }
    
    console.log(quantDayOfMonth);
  return (
  <div >
    <div className='month'>
      {firstDayOfMonth.toLocaleString('default', {month: 'long'})}
    </div>
    <div className='weekDays'>
      {weekDays.map(dayTitle => <div> {dayTitle} </div>)}
      {day.map(day => <div> {day} </div>)}

    </div>
    
  </div>
  )}
}

export default Month;
