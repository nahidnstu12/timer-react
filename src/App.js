import React,{Component} from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

// import Todo from './todoList';
// import Timer from './timer';
// import Game from './TicTackToe/game'
import StackTodos from './todoStack/app'

library.add(faTrash)

class App extends Component{

render(){
  return (
    <div className="App">
      
     {/* <Timer/> */}
    
     {/* <Todo/> */}

     {/* <Game /> */}

     <StackTodos />

    </div>
  )
 }
}

export default App;
