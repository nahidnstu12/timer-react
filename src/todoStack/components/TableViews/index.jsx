import React from 'react'
import PropTypes from 'prop-types'
import {Table} from 'reactstrap'
import RowItem from './tblItem'

const TableView = ({todos,toggleSelect,toggleComplete}) => (   
       <Table>
        <thead>
            <tr>
                <th>#</th>
                <th>Todo</th>
                <th>Time</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>       
            {todos.map(todo =>(
                <RowItem
                key={todo.id}
                todo={todo}
                toggleSelect={toggleSelect}
                toggleComplete ={toggleComplete}
                /> 
            ))}
        
        </tbody>
       </Table>
    );


TableView.propTypes = {
    todos : PropTypes.array.isRequired,
    toggleSelect:PropTypes.func.isRequired,
    toggleComplete:PropTypes.func.isRequired
}

export default TableView
