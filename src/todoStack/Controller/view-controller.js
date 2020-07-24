import React from 'react'
import PropTypes from 'prop-types'
import {CustomInput,Label} from 'reactstrap'

const ViewController = ({changeView,view}) => {
    return (
        <div className='d-flex'>
            <Label for='list-view' className='mr-4'>
                <CustomInput
                className = 'd-inline-block'
                id='list-view'
                type='radio'
                name='view'
                value='list'
                onChange={changeView}
                checked={view==='list'}
                />
                 ListView
            </Label>
            <Label for='table-view' className='mr-4'>
                <CustomInput
                className = 'd-inline-block'
                id='table-view'
                type='radio'
                name='view'
                value='table'
                onChange={changeView}
                checked={view==='table'}
                />
                TableView
            </Label>
        </div>
    )
}

ViewController.propTypes = {
    changeView : PropTypes.func.isRequired,
    view : PropTypes.string.isRequired

}

export default ViewController