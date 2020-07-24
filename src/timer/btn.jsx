import React,{Component} from 'react';
import './timer.css';


class Btn extends Component{

    render(){
        return(
            <button className='Btn' onClick={this.props.type}>{this.props.text}</button>
        )
    }
}

export default Btn
