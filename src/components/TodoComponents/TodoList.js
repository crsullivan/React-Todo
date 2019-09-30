// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import styled from 'styled-components';

const Div = styled.div `

`

const TodoList = props => {
    console.log(props)
    return(
       
        <Div>
            {props.data.map(item => (
                <Todo key={item.id} task={item.task} toggleItem={props.toggleItem} />
            ))}
            
        </Div>
    )
}

export default TodoList;