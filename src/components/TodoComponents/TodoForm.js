import React from 'react';

class ToDoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      itemAdder: ''
    };
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitItem = e => {
    e.preventDefault();
        
            this.props.addItem(this.state.itemAdder);
           
        
    };

//   clearDone = () => {
//     this.setState({
//       data: this.state.data.filter(item => !item.done)
//     });
//   };

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          value={this.itemAdder}
          name="itemAdder"
          onChange={this.handleChanges}
        />
        <button tyoe="submit">Add Todo</button>
        <button className="clear" onClick={this.clearDone}>Clear Done</button>
      </form>
    );
  }
}

export default ToDoForm;
