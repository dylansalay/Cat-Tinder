import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import { getCats } from './api'
import { createCat } from './api'
import { deleteCat } from './api'

import Cats from './pages/Cats'
import NewCat from './pages/NewCat'
import Header from './components/Header'
import Navigation from './components/Navigation'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cats: [],
            success: false
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

    // componentDidUpdate() {
    //     getCats()
    //         .then(APIcats => {
    //             this.setState({
    //             cats: APIcats
    //         })
    //     })
    // }

    handleNewCat = (newCatInfo) => {
        createCat(newCatInfo)
        .then(successCat => {
            console.log("Added: ", successCat);
            if (typeof successCat.id === 'number') {
                let successStatus = this.state.success
                successStatus = true
                this.setState({ success: successStatus})
                console.log(this.state.success);
            }
        })
    }

    handleDeleteCat = (id) => {
        deleteCat(id)
        .then(deleteCat => {
            console.log("Deleted: ", deleteCat);
            this.setState({ cats: deleteCat})
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
                            <Cats
                                cats={ this.state.cats}
                                handleDeleteCat={this.handleDeleteCat}
                                deleteSuccess={this.state.deleteSuccess}
                            />
                            }
                            />
                            <Route
                            exact path="/newcat"
                            render={(props) =>
                            <NewCat {...props}
                                handleNewCat={this.handleNewCat}
                                success={this.state.success}
                            />
                            }
                            />
                        </Switch>
                    </Router>
            </div>
        )
    }
}
