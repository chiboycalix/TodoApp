import React from 'react';
import './Todo.css'

function Todo(props) {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className={props.todo.completed ? 'hide' : 'show'} onClick={props.toggleTodo}>
                <div>
                    {props.todo.text}
                </div>
                
            </div>
            <div>
                <button onClick={props.handleDelete}>x</button>
            </div>
        </div>
        
    )
}
export default Todo;