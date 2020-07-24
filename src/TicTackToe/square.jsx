import React from 'react'

export const Square = (props) => {
    return (
        <div>
           <button className='square' onClick={props.onClick}>
               {props.value}
           </button> 
        </div>
    )
}
