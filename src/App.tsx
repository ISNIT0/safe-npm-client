import * as React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { view } from "react-easy-state"
import { Home } from "./components/Home"
import { Package } from "./components/Package"
import { About } from "./components/About"
import { Package404 } from "./components/Package404"

import './App.less'

const AppRouter = view(() => (
    <Router>
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/package/:packageName" component={Package} />
            <Route path="/about/" component={About} />
            <Route path="/packagenotfound/" component={Package404} />
        </div>
    </Router>
))

export {
    AppRouter as App
}