import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { view } from "react-easy-state";
import { Home } from "./components/Home";
import { Package } from "./components/Package";
import { About } from "./components/About";

const AppRouter = view(() => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about/">About</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={Home} />
            <Route path="/package/:packageName" component={Package} />
            <Route path="/about/" component={About} />
        </div>
    </Router>
));

export {
    AppRouter as App
};