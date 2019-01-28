import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import {
    BrowserRouter as Router,
    Route,
    Link,
}from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './style.css'
import Index from './pages/Index';
import Header from './pages/Header';
// import RouterWrap from './router/RouterWrap'
import Login from './pages/Login';
import About from "./pages/About";
import Posts from './components/Posts'

import logo from "./img/logo1.jpg";


export default class All extends Component{
    render(){
        return (
            // Provider包裹之后，所有的组件都可以拿到state数据
            <Provider store={store}>
                <Header />
            </Provider>
        )
    }
}

ReactDOM.render(<All />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
