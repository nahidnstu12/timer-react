import React from 'react'
import {ListGroup} from 'reactstrap'
import ListItem from './listItem'
import  PropTypes  from 'prop-types'

const ListView =({todos,toggleSelect,toggleComplete})=>(
        <ListGroup>
            {todos.map(todo =>(
                <ListItem
                    key={todo.id}
                    todo={todo}
                    toggleSelect={toggleSelect}
                    toggleComplete ={toggleComplete}
                />
            ))}
        </ListGroup>
)


ListView.propTypes ={
    todos : PropTypes.array.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired
    }
    

export default ListView
