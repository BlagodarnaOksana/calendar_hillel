import React, { Component } from 'react';
import './day.css';
import {reactLocalStorage} from 'reactjs-localstorage';

class Day extends React.Component {
    state = {
        date: '05.09.2020',
        todo: reactLocalStorage.getObject('05.09.2020').todo
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

    render(){
       
    return (
        <div className='dayComponent'>
            <div className="today">
            {new Date().toLocaleString('default', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div> 
                
            <div className='todoComponent'>
                {this.state.todo.map((el, ind) => (
                    <div key={ind}>
                        <div>
                            <input type='text' name='title' id = {ind}                                value = {el.title}
                                onChange = {this.handleTitleChange}
                            />
                        </div>
                        <div>
                            <input type='text' name='description' id = {ind} 
                                value = {el.description}
                                onChange = {this.handleDescriptionChange}
                            />
                        </div>
                        
                    </div>
                    
                ))}
                <input type='submit' value = 'Add' onClick = {this.handleBtnAdd}/>
            </div>

        </div>
    )}
}

export default Day;
