import React, { Component } from 'react'
import { Form, Group, Label, Control, Button, Check } from 'react-bootstrap'
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom'


export default class NewCat extends Component {
    constructor(props){
        super(props)
        this.state = {
            form: {
                id: '',
                name: '',
                age: '',
                enjoys: ''
            }
        }
    }

    handleChange = (event) => {
        let { form } = this.state
        form[event.target.name] = event.target.value
        this.setState({ form: form })
    }

    handleClick = () => {
        this.props.handleNewCat(this.state.form)
    }

    render() {
        return (
            <div>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    name="name"
                    type="text"
                    placeholder="Enter name"
                    onChange={this.handleChange}
                    value={this.state.form.name}
                />
              </Form.Group>

              <Form.Group controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                    name="age"
                    type="number"
                    placeholder="Enter age"
                    onChange={this.handleChange}
                    value={this.state.form.age}
                />
              </Form.Group>

              <Form.Group controlId="enjoys">
                <Form.Label>Enjoys</Form.Label>
                <Form.Control
                    name="enjoys"
                    type="text"
                    placeholder="Enter enjoys"
                    onChange={this.handleChange}
                    value={this.state.form.enjoys}
                />
              </Form.Group>

              <Button onClick={this.handleClick} variant="primary" type="submit">
                Create Cat Profile
              </Button>
            </Form>

            {this.props.success && <Redirect to="/cats" />}
            </div>
        )
    }
}
