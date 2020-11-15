import React, { Component } from "react";

import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Devops from "./Devops";
import Contact from "./Contact";

class Main extends Component {
render() {
    return (
        <HashRouter>
            <div>
                <h1>A Single Page App</h1>
                <ul className="header">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/devops">Devops</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>                    
                    <Route path="/devops" component={Devops}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </div>
        </HashRouter>
        );
    }
}
export default Main;