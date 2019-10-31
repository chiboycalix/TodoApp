import React from 'react';
import './App.css';
import TodoList from './TodoList/TodoList';
// import AddTodo from './AddTodo';

function App() {
  return (
    <div className="App">
    <div className="container">
        <TodoList />
    </div>
    </div>
  );
}

export default App;
