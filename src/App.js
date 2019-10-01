import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'


const data = [
  {
    task:'Go Running',
    id:'1546',
    completed:false
  },
  {
    task:'Make Coffee',
    id:'181132',
    completed:false
  },
  {
    task:'Manage Existential Dread',
    id:'89354',
    completed:false
  }
]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor(){
    super();
    this.state = {
      list: data
    }
  }

  // * Toggle task 
    // loop through the array and to find our specific element to toggle !completed
  toggleTask = id => {
    console.log(id);

    this.setState({
      list: this.state.list.map(item => {
        if (item.id === id){
          return{
            ...item,
            completed: !item.completed
          }
        } else{
          return item;
        }
      })
    })
  }


  // * Add task
  addItem = taskName => {
    const newItem = {
      task: taskName,
      id:Date.now(),
      completed:false
    };
    this.setState({
      list: [...this.state.list, newItem]
    })
  }

  // * Clear finished tasks 
  clearFinished = () => {
    this.setState({
      list: this.state.list.filter(item => !item.completed)
    })
  }
  

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        <TodoList todoList={this.state.list} toggleTask={this.toggleTask} clearFinished={this.clearFinished} />
        
      </div>
    );
  }
}

export default App;