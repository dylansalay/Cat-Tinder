import React, { Component } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

export default class Header extends Component {
    render() {
        return (
            <Jumbotron fluid>
                <Container>
                    <h1>Cat Tinder</h1>
                    <p>
                    Welcome to Cat Tinder, the site for matching cats with other cats.
                    </p>
                </Container>
            </Jumbotron>
        )
    }
}
