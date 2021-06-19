import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Users from './Users'

class App extends Component {
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App
