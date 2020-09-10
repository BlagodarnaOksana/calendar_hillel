import React from 'react';
import './year.css';
import FA from 'react-fontawesome';

class Year extends React.Component {
  constructor(){
    super();
    this.state = { 
        //date: new Date().toLocaleString('default', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
        date: new Date(),
        
    };
  }
btnReduceYear = () => {
    this.setState({date: new Date(this.state.date.getFullYear()-1, this.state.date.getMonth(), this.state.date.getDate())});
}

btnIncreaseYear = () => {
    this.setState({date: new Date(this.state.date.getFullYear()+1, this.state.date.getMonth(), this.state.date.getDate())});
}

  render(){
  return (
  <div className='Year'>
      <FA name="chevron-left" onClick={this.btnReduceYear}/>
      {this.state.date.getFullYear()}
      <FA name="chevron-right" onClick={this.btnIncreaseYear}/>
  </div>
  )}
}

export default Year;
