import React, { Component } from 'react'
import './todo.style.css'
import ListItems from './ListItems'

class Todo extends Component{
    state = {
        items:[],
        currentItem :{
            text:'',
            key:''
        }
    }
    handleInput = this.handleInput.bind(this)
    addItem = this.addItem.bind(this)
    deleteItem = this.deleteItem.bind(this)
    updateItem = this.updateItem.bind(this)

    handleInput(e){
        this.setState({
            currentItem:{
                text:e.target.value,
                key:Date.now()
            }
        })
    }
    addItem(e){
        e.preventDefault()
        const newItm = this.state.currentItem
        // console.log(newItm)
        if(newItm.text !== ''){
            const newItems = [...this.state.items,newItm]
            // console.log(newItems)
            this.setState({
                items:newItems,
                currentItem:{
                    text:'',
                    key:''
                }
            })
        }
    }
    deleteItem(key){
        const filteredItm = this.state.items.filter(it => it.key!==key)
        this.setState({
            items:filteredItm
        })
    }
    updateItem(key,text){
        // console.log(`items:${this.state.items}`)
        const items = this.state.items
        items.map(it =>{
            // if(it.key === key){
            //     it.text = text
            // }
            return (it.key === key)? it.text=text:''
        })
        this.setState({
            items:items
        })
    }
    render(){
        return(
        <div className="Container">
            <header>
            <form id="to-do-form" onSubmit={this.addItem}>
            <input type="text" placeholder="Enter task" value={this.state.currentItem.text} onChange={this.handleInput}></input>
            <button type="submit" >Add</button>
            </form>  
            <ListItems items={this.state.items} deleteItem={this.deleteItem} updateItem={this.updateItem}/>     
            </header>
        </div>
        )
    }
}

export default Todo