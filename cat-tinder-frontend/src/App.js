import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import './App.css';
import { getCats } from './api'
import { createCat } from './api'

import Cats from './pages/Cats'
import NewCat from './pages/NewCat'
import Header from './components/Header'
import Navigation from './components/Navigation'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cats: []
        }
    }

    componentDidMount() {
        getCats()
            .then(APIcats => {
                this.setState({
                cats: APIcats
            })
        })
    }

    handleNewCat(newCatInfo) {
        createCat(newCatInfo)
        .then(successCat => {
        console.log("SUCCESS! New cat: ", successCat);
        })
    }


    render() {
        return (
            <div>
                <Navigation />
                <Header />
                    <Router>
                        <Switch>
                            <Route
                            exact path="/cats"
                            render={(props) =>
                            <Cats cats={ this.state.cats}/>
                            }
                            />
                            <Route
                            exact path="/newcat"
                            render={(props) =>
                            <NewCat {...props} handleNewCat={this.handleNewCat}/>
                            }
                            />
                        </Switch>
                    </Router>
            </div>
        )
    }
}
