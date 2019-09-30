import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import ToDoForm from './components/TodoComponents/TodoForm';
import styled from 'styled-components';

const Div = styled.div `

`

const toDoData = [
  {
    task: 'Walk the Dog',
    id: 565186156,
    done: false
  },
  {
    task: 'Organize Garage',
    id: 1528817077286,
    done: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    done: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor() {
    super();
    this.state = {
      task: 'Connor',
      data: toDoData
    };
  }

  toggleItem = id => {
    this.setState({
      data: this.state.data.map(item => {
        if(item.id === id) {
          return {
            task: item.task,            
            done: !item.done
          };
      }
      else {
        return item;
      }
      })
    });
  };

  addItem = itemName => {
    const newItem = {
      task:itemName,
      id: Date.now(),
      done: false
    };
    this.setState({
      data: [...this.state.data, newItem]
    });
  };

  

  render() {
    return (
      <Div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <ToDoForm addItem={this.addItem} />
        </div>
        <TodoList 
          data={this.state.data}
          toggleItem={this.toggleItem}
        />
      </Div>
    );
  }
}

export default App;
