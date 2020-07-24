import React from 'react'
import PropTypes from 'prop-types'
import {Button,ButtonGroup} from 'reactstrap'

const BulkController = ({clearSelected,clearCompleted,reset}) => {
    return (
        <ButtonGroup>
            <Button color ='danger' onClick={clearSelected}>ClearSelected</Button>
            <Button color ='danger' onClick={clearCompleted}>ClearCompleted</Button>
            <Button color ='danger' onClick={reset}>Reset</Button>
        </ButtonGroup>
    )
}

BulkController.propTypes = {
    clearSelected : PropTypes.func.isRequired,
    clearCompleted : PropTypes.func.isRequired,
    reset : PropTypes.func.isRequired
}

export default BulkController
