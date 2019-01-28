import React, {Component} from 'react';
import '../style.css';
import {
    Link,
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import logo from "../img/logo1.jpg";
import Login from "../pages/Life";
import Index from "../pages/Index";
import About from "../pages/About";
import Posts from "../components/Posts";
import ReactDOM from "react-dom";
import All from "../index";

export default class RouterWrap extends Component {
    render() {
        return (
            <div>
                <Router>

                </Router>
            </div>
        );
    }
}
