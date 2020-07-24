import React from 'react'
import {Square} from './square'

export const Board = (props) => {
    const renderSq = i =>
        <Square 
        value = {props.squares[i]}
        onClick = {()=>props.onClick(i)}
        />
    
    return (
        <div>
            <div className="board-row">
               {renderSq(0)}
               {renderSq(1)}
               {renderSq(2)}
            </div>
            <div className="board-row">
               {renderSq(3)}
               {renderSq(4)}
               {renderSq(5)}
            </div>
            <div className="board-row">
               {renderSq(6)}
               {renderSq(7)}
               {renderSq(8)}
            </div>

        </div>
    )
}
