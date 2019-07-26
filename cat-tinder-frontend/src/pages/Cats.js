import React, { Component } from 'react'
import {
    Col, Container, Row, ListGroup, Button, Item, Card, Body, Title, Subtitle, Text
} from 'react-bootstrap'

export default class Cats extends Component {

    handleClick = (e) => {
        console.log(e.target.parentNode)
    }

    render() {
        return (
            <Container>
                <Row>
                    {this.props.cats.map((cat, index) =>{
                        return (
                            <Col>
                            <Card key={index} style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>{cat.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Age: {cat.age}
                                    </Card.Subtitle>
                                    <Card.Text>{cat.enjoys}
                                    </Card.Text>
                                    <Button onClick={this.handleClick} size="sm" variant="outline-danger">Delete                               </Button>
                                </Card.Body>
                            </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        );
    }
}
