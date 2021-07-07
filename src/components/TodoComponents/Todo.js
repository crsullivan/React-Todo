import React from 'react';
import styled from 'styled-components';

const Div = styled.div `

`

const Todo = props => {
  return(
    <div>
    {
         props.todoList.map(item => {
              return(
                   <div 
                   className={`uncompleted${item.completed ? ' completed' : ''}`}
                    key={item.id} onClick={() => props.toggleTask(item.id)}>
                        <p>{item.task}</p>
                        <p>{item.completed}</p>
                   </div>
              )
         })
    }
    </div>
)
}
export default Todo