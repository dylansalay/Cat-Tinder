import React, { Component } from 'react'
import { Col, Container, Row, Button, Card } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

export default class Cats extends Component {

    handleClick = (id) => {
        this.props.handleDeleteCat(id)
    }

    render() {
        return (
            <Container>
                <h4>Active cats</h4>
                <Row>
                    {this.props.cats.map((cat, index) =>{
                        return (
                            <Col key={index}>
                            <Card
                                key={index}
                                style={{ width: '18rem' }}
                                >
                                <Card.Body>
                                    <Card.Title>{cat.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Age: {cat.age}
                                    </Card.Subtitle>
                                    <Card.Text>{cat.enjoys}
                                    </Card.Text>
                                    <Button onClick={() => this.handleClick(cat.id)} size="sm" variant="outline-danger">Delete                               </Button>
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
