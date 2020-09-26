import React, { Component } from 'react';
import './day.css';
import {reactLocalStorage} from 'reactjs-localstorage';

class Day extends React.Component {
    state = {
        date: this.props.Date,
        //id: Math.random().toString(16).substring(2, 10),
        todo: reactLocalStorage.getObject(this.props.Date).todo || []
        
    }
    
    handleTitleChange = (event) => {
        let currentTodo = this.state.todo;
        currentTodo[event.target.id].title = event.target.value;

        this.setState({todo: currentTodo});
        reactLocalStorage.setObject(this.state.date, {todo: this.state.todo});
        
    }

    handleDescriptionChange = (event) => {
        let currentTodo = this.state.todo;
        currentTodo[event.target.id].description = event.target.value;

        this.setState({todo: currentTodo});
        reactLocalStorage.setObject(this.state.date, {todo: this.state.todo});
        
    }
    handleBtnAdd = () => {
        let currentTodo = this.state.todo;
        currentTodo.push({title: 'title', description: 'description'});
        this.setState({todo: currentTodo});
        reactLocalStorage.setObject(this.state.date, {todo: this.state.todo});
        
    }

    handleBtnDel = (event) => {
        if (this.state.todo.length <= 1) {
            //console.log(currentTodo);
            let currentTodo = [];
            this.setState({todo: currentTodo});
            localStorage.removeItem(this.state.date);
        } else {
            let currentTodo = [];
            
            for (let i = 0; i < this.state.todo.length; i++) {
                
                if (i !== Number(event.target.id)) {
                    //console.log('i:' + i, 'event.target.id:' + event.target.id);
                    currentTodo.push(this.state.todo[i]); 
                }
            }
            this.setState({todo: currentTodo});
            reactLocalStorage.setObject(this.state.date, {todo: currentTodo});
        }
    }

    render(){
    //console.log('console', this.props);
    let selectedDay =  this.props.Date.split('.');
    return (
        <div className='dayComponent'>
            <div className="today">
                {new Date(selectedDay[2], selectedDay[1]-1,selectedDay[0]).toLocaleString('default', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                
            </div> 
                
            <div className='todoComponent'>
                
                {this.state.todo.map((el, ind) => (
                    <div key={ind} >
                        <form className = 'OneTodo'>
                            <div >
                                <input type='text'
                                    name='title' 
                                     id = {ind} 
                                     value = {el.title}
                                    onChange = {this.handleTitleChange}
                                />
                            
                            
                                <input type='text' 
                                    name='description' 
                                    id = {ind} 
                                    value = {el.description}
                                    onChange = {this.handleDescriptionChange}
                                />
                            </div>
                            <div > 

                                <input type='button' 
                                    className='btnDel' 
                                    value = 'Delete' 
                                    id = {ind}  
                                    onClick = {this.handleBtnDel}/>
                            </div>
                        </form>
                        
                    </div>
                    
                ))}
                <form className='btnComponent'>
                    <input type='submit' className='btnAdd' value = 'Add todo' onClick = {this.handleBtnAdd}/>
                </form>
            </div>

        </div>
    )}
}

export default Day;
