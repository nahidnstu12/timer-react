import React, { Component } from 'react'
import {Board} from './board'
import './game.style.css'


const calculteWinner = squares => {

    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    
    for (let i = 0;i<lines.length;i++){
        const [a,b,c] = lines[i]
        // console.log(b)
        if(squares[a] && squares[a]===squares[b] && squares[a] === squares[c]){
            return squares[a]
        }
    }
    return null
}
export default class Game extends Component {
    state = {
        history :[{squares : Array(9).fill(null)}],
        stepNum: 0,
        player1 : true,

    }
    handleClick = i => {
        const history = this.state.history.slice(0,this.state.stepNum+1)
        const current = history[history.length - 1]
        const squares = current.squares.slice()
        // console.log(history)

        if(calculteWinner(squares) || squares[i]){
            // console.log(squares[i])
            return;
        }
       
        squares[i] = this.state.player1 ? 'x' : 'o'
        // console.log(squares[i])

        this.setState({
            history : history.concat([{squares}]),
            stepNum :history.length,
            player1: !this.state.player1
        })
    }
    jumpTo = steps =>{
        this.setState({
            stepNum :steps,
            player1 :steps%2 === 0
        })
    }
    
    render() {
        const history = this.state.history
        const current = history[this.state.stepNum]
        const winner = calculteWinner(current.squares)
        // console.log('winner:'+winner)
        // console.log('winner:'+history)
        const moves = history.map((_,move)=>{
            const descript = move ? `Go to #${move}`:`Go to game start`
            // console.log(descript)
            return(
                <li key={move}>
                    <button onClick={()=>this.jumpTo(move)}>{descript}</button>
                </li>
            )
        })
        let status = ''
        if(winner){
            status = `Winner: ${winner}`
        }else{
            status = `Next player : ${this.state.player1 ?'x':'o'}`
        }
        return (
        <div className = 'game'>
        <div className='game-bord'>
           <h1>Tic Tac Toe</h1>
               <Board onClick={this.handleClick} squares={current.squares}/> 
        </div>
        <div className='game-info'>
            <div>{status}</div>
            <ol>{moves}</ol>
        </div>
        </div>

        )
    }
}
