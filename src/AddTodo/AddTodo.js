import React, { Component } from 'react'

class AddTodo extends Component {
    constructor(props){
        super(props)

        this.state = {
            text: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
   
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        this.props.addTodo({
            id: Date.now(),
            text: this.state.text,
            completed: false
        })
       this.setState({
           text: ''
       })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.text} placeholder="new todo" onChange={this.handleChange} name="text"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default AddTodo;