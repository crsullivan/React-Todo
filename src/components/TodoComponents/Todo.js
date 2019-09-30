import React from 'react';
import styled from 'styled-components';

const Div = styled.div `

`

const Todo = props => {
    console.log(props)
  return (
    <Div
    className={`item${props.task.done ? ' done' : ''}`}
    task={props.task} onClick={() => props.toggleItem(props.item.id)}
    >
      <p>{props.task}</p>
    </Div>
    
  );
};

export default Todo;
