import React, { Component } from 'react'
import { Navbar, Nav, Brand, Link, Container } from 'react-bootstrap'
import logo from '../logo.png'

export default class Navigation extends Component {
    render() {
        return (
            <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar>{<a href="/cats" ><img id="logo" src={logo} /></a>}
                </Navbar>
                    <Nav className="mr-auto">
                    <Nav.Link href="/cats">Cats</Nav.Link>
                    <Nav.Link href="/newcat">New Cat</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}
