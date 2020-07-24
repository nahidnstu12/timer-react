import React,{Component} from 'react';
import './timer.css';
import Btn from './btn'

class Timer extends Component{

    state = {
        count : 0
      }

      intervalId = null

      incrementCounter = ()=>{
       this.setState({count:this.state.count + 1})
      }

      decrementCounter = ()=>{
       if(this.state.count >0){
       this.setState({count:this.state.count - 1})
       }
      }

      startTimer = () =>{
       if(this.state.count > 0 && !this.intervalId){
        this.intervalId = setInterval(()=>{
         this.setState({count:this.state.count -1},()=>{
          if(this.state.count === 0){
           alert('Time finished')
           clearInterval(this.intervalId)
           this.intervalId = null 
          }
         })   
       },1000)
      }
     }

     stopTimer = ()=>{
      if(this.intervalId){
       clearInterval(this.intervalId)
       this.intervalId = null 
      }
     }

     resetTimer = () =>{
      this.setState({count: 0})
      clearInterval(this.intervalId)
      this.intervalId = null 
     }

    render(){
        return(
            <div>
                <h1 className='Heading'>Simple Timer</h1>
                <div className='Container-timer'>                
                <Btn text='-' type={this.decrementCounter}/>
                <span className='Text'>{this.state.count}</span>
                <Btn text='+' type={this.incrementCounter} />             
                </div>
                <div className='Container-timer'>
                <Btn text='start' type={this.startTimer}/>
                <Btn text='stop' type={this.stopTimer}/>
                <Btn text='reset' type={this.resetTimer}/>

                {/* <button className='Btn' onClick={this.decrementCounter}>-</button>
                <button className = 'Btn' onClick={this.incrementCounter}> + </button>
                <button className='Btn' onClick={this.startTimer}>Start</button>
                <button className='Btn' onClick={this.stopTimer}>Stop</button>
                <button className='Btn' onClick={this.resetTimer}>Reset</button> */}
               
                </div>
            </div>
        )
    }
}

export default Timer