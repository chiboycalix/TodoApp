import React, { Component } from 'react'
import AddTodo from '../AddTodo'
import Todo from '../Todo'

class TodoList extends Component {
    constructor(props){
        super(props)

        this.state = {
            todos: [],
            todoToShow: 'all',
            toggleTodos: true
        }
    }
    addTodo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })  
    }

    handleToggle = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    return {
                        id: todo.id,
                        text: todo.text,
                        completed: !todo.completed
                    }
                }else{
                    return todo
                }
            })
        })
    }

    updatedTodo = (s) => {
        this.setState({
            todoToShow: s
        })
    }

    handleDelete = (id) => {
        this.setState({
            todos: this.state.todos.filter((todo) => {
                return todo.id !== id
            })
        })
    }

    removeCompletedTodos = () => {
        this.setState({
            todos: this.state.todos.filter((todo) => {
                return !todo.completed
            })
        })
    }

    toggleAllTodos = () => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                return {
                    ...todo,
                    completed: this.state.toggleTodos
                }
            }),
            toggleTodos: !this.state.toggleTodos
        })
    }
    render() {
        let todos = [];
        if(this.state.todoToShow === 'all'){
            todos = this.state.todos
        }else if(this.state.todoToShow === 'active'){
            todos = this.state.todos.filter((todo) => {
                return (!todo.completed)
            })
        }else{
            todos = this.state.todos.filter((todo) => {
                return (todo.completed)
            })
        }
        return (
            <div>
                <AddTodo addTodo={this.addTodo} />
                { todos.map((todo) => {
                    return (
                        <Todo 
                            key={todo.id} 
                            todo={todo} 
                            toggleTodo={() => this.handleToggle(todo.id)} 
                            handleDelete={() => this.handleDelete(todo.id)}    
                            />
                    )
                })}
                todo left: {this.state.todos.filter((todo) => {
                    return (!todo.completed)
                }).length}

                <div>
                    <button onClick={() => this.updatedTodo('all')}>All</button>
                    <button onClick={() => this.updatedTodo('active')}>Active</button>
                    <button onClick={() => this.updatedTodo('completed')}>Completed</button>
                </div>
                {this.state.todos.filter((todo) => {
                    return todo.completed
                }).length ? (<div>
                    <button onClick={this.removeCompletedTodos}>Remove completed todos</button>
                </div>) : (null)}
                
                <div>
                    <button onClick={this.toggleAllTodos}>Toggle all todos</button>
                </div>
            </div>
        )
    }
}
export default TodoList;