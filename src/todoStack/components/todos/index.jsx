import React, { Component } from 'react'
import ListView from './../ListViews'
import TableView from './../TableViews'
import Controller from '../../Controller'
import CreateTodoForm from './createForm'

import {Modal,ModalBody,ModalHeader} from 'reactstrap'
import shortid from 'shortid'

// import CreateTodoForm from './../todoForm'

export default class Todos extends Component {
    state ={
        todos:[
            {
            id:1,
            text:'sample 1',
            description:'',
            time:new Date(),
            isComplete:false,
            isSelect:false
            },
            {
                id:3,
                text:'testing...',
                description:'',
                time:new Date(),
                isComplete:false,
                isSelect:false
            },
            {
                id:4,
                text:'Love ...',
                description:'',
                time:new Date(),
                isComplete:false,
                isSelect:false
            },
            {
                id:2,
                text:'new sample 2',
                description:'',
                time:new Date(),
                isComplete:false,
                isSelect:false
            }
        ],
        isOpenForm : false,
        term:'',
        view : 'list',
        filter:'all',
    }
    toggleComplete= id =>{
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id===id)
        todo.isComplete = !todo.isComplete
        
        this.setState({todos})
    }
    toggleSelect= id =>{
        const todos = [...this.state.todos]
        const todo = todos.find(t => t.id===id)
        todo.isSelect = !todo.isSelect
       
        this.setState({todos})
    }
    handleSearch = val =>{
        this.setState({
            term:val
        })
    }
    toggleForm = ()=>{
        this.setState({
            isOpenForm :!this.state.isOpenForm
        })
    }
    createTodo = (todo) =>{
        todo.id = shortid.generate()
        todo.time = new Date()
        todo.isComplete = false
        todo.isSelect = false

        const todos = [todo,...this.state.todos]
        this.setState({todos})
        this.toggleForm()
    }
    changeView = evt =>{
        this.setState({
            view : evt.target.value
        })
    }
    handleFilter = val =>{
        this.setState({filter : val})
    }
    clearSelected = () =>{
        const todos = this.state.todos.filter(todo => !todo.isSelect)
        this.setState({todos})
    }
    clearCompleted = () =>{
        const todos = this.state.todos.filter(todo =>!todo.isComplete)
        this.setState({todos})
    }
    reset = () =>{
        // const todos = this.state.todos
        this.setState({
            isOpenForm : false,
            term:'',
            view : 'list',
            filter:'all',

        })
    }
    getView = () =>{
        let todos = this.performSearch()
        todos=this.performFilter(todos)
        return this.state.view === 'list' ? (
            <ListView 
                    todos={todos} 
                    toggleSelect={this.toggleSelect} 
                    toggleComplete={this.toggleComplete}
            />
        ):(
            <TableView 
            todos={todos}
            toggleSelect={this.toggleSelect} 
            toggleComplete={this.toggleComplete}
            />
        )
    }
    performSearch = () =>{
        return this.state.todos.filter(todo => todo.text.toLowerCase().includes(this.state.term.toLowerCase())
        )
    }
    performFilter = todos =>{
        const {filter} = this.state
        if(filter === 'completed'){
            return todos.filter(todo => todo.isComplete) 
        }else if(filter === 'running'){
            return todos.filter(todo => !todo.isComplete)
        }else{
            return todos
        }
    }
    render() {
        return (
            <div>
                <h1 className ='dispaly-4 text-center mb-5 '>Stack todo</h1> 
                <Controller 
                    term = {this.state.term}
                    toggleForm = {this.toggleForm}
                    handleSearch= {this.handleSearch}
                    view = {this.state.view}
                    handleFilter={this.handleFilter}
                    changeView = {this.changeView}
                    clearCompleted = {this.clearCompleted}
                    clearSelected = {this.clearSelected}
                    reset = {this.reset}
                />
                <div>
                 {this.getView()} 
                </div>
                <div>
                    <Modal toggle={this.toggleForm} isOpen = {this.state.isOpenForm}>
                        <ModalHeader toggle={this.toggleForm} >
                            Create New Todo
                        </ModalHeader>
                        <ModalBody>
                            <CreateTodoForm createTodo = {this.createTodo}/>
                        </ModalBody>

                    </Modal>
                </div>
            </div>
        );
    }
}

//  Todos
