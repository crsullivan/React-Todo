// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'
import './Todo.css'

const TodoList = props => {

     // console.log(props.todoList)
     return(
          <div>
               <h1>Todo List</h1>
               <Todo todoList={props.todoList} toggleTask={props.toggleTask}/>
               <button onClick={props.clearFinished}>Clear finished tasks</button>
          </div>
     )
}

export default TodoList