import React from 'react';


class TodoForm extends React.Component{
     constructor(){
          super();
          this.state = {
               todoItem: ""
          };
     }

     handleChanges = event => {
          this.setState({
               [event.target.name]: event.target.value
          })
     }

     submitItem = event => {
          event.preventDefault();
          this.props.addItem(this.state.todoItem);
     }
 

     render(){
          return(
               <form onSubmit={this.submitItem}>
                    <input 
                    type="text"
                    name="todoItem"
                    value={this.todoItem}
                    onChange={this.handleChanges}
                    />

                    <button>Add</button>
               </form>
          )
     }
}

export default TodoForm