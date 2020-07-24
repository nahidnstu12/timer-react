import React from 'react'
import PropTypes from 'prop-types'
import {CustomInput,Button} from 'reactstrap'

const RowItem = ({todo,toggleSelect,toggleComplete}) => {
    return (
        <tr>
        <th scope='row'>
            <CustomInput 
                 type='checkbox'
                 id={todo.id}
                 checked={todo.isSelect}
                 onChange={()=>toggleSelect(todo.id)}
             />
        </th>
        <th>{todo.text}</th>
        <th>{todo.time.toDateString()}</th>
        <th>
        <Button
            className='ml-auto'
            color={todo.isComplete ? 'danger' : 'success'}
            onClick={()=>toggleComplete(todo.id)}
            >
            {todo.isComplete ? 'Completed' : 'Running'}
        </Button>
        </th>
        </tr>
    )
}

RowItem.propTypes = {
    todo : PropTypes.object.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired
}

export default RowItem
