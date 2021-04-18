import React, {Component} from "react";
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import Home from 'page/home/index.jsx'
import {Redirect, Route, Router} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path='/' component={Home}/>
                    <Redirect from="*" to="/"/>
                </div>
            </Router>
        );
    }

}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
