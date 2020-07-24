import React, { Component } from 'react'
import {Form,FormGroup,Label,Input,Button} from 'reactstrap'
import PropTypes from 'prop-types'

class CreateTodoForm extends Component {
    state = {
        text:'',
        description:''
    }
    handleChange = evt =>{
        this.setState({
            [evt.target.name]:evt.target.value
        })
    }
    handleSubmit = evt =>{
        evt.preventDefault()
        this.props.createTodo(this.state)
        evt.target.reset()
        this.setState({text:'',description:''})
    }
    render() {
        return (
           <Form onSubmit={this.handleSubmit}>
               <FormGroup>
                <Label>Enter task</Label>
                <Input 
                    placeholder='Write Something'
                    name='text'
                    value={this.state.text}
                    onChange={this.handleChange}
                />
               </FormGroup>
               <FormGroup>
                <Label>Enter Description</Label>
                <Input 
                    type ='textarea'
                    placeholder='Write Description'
                    name='description'
                    value={this.state.description}
                    onChange={this.handleChange}
                />
               </FormGroup>
               <Button type='submit'>Create Task</Button>
           </Form>
        )
    }
}

CreateTodoForm.propTypes = {
    createTodo:PropTypes.func.isRequired
}

export default CreateTodoForm
