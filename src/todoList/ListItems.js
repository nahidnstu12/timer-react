import React from 'react';
import './ListItems.style.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move'

function ListItems(props){
    
    const items = props.items;
    // console.log(props.items)
    // if(props.items){
    const listItems = items.map(item =>
   {
        return <div className="list" key={item.key}>
                <p>
                <input type='text' id={item.key} value={item.text} onChange={(e)=>{props.updateItem(item.key,e.target.value)}}/>
                <span>
                    <FontAwesomeIcon className='faicons' icon='trash' onClick={()=>props.deleteItem(item.key)}></FontAwesomeIcon>
                </span>
                
                </p>
              </div> 

    })    
// }   
    return <div>
    <FlipMove duration={400} easing='ease-in-out'>{listItems}</FlipMove>
        
    </div>;
}

export default ListItems