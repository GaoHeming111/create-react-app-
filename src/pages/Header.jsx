import React, {Component} from 'react';
import '../style.css';
import {
    Link,
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";
import RouterWrap from '../router/RouterWrap';
import logo from "../img/logo1.jpg";
import Login from "./Life";
import Index from "./Index";
import About from "./About";
import Posts from "../components/Posts";

export default class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div><img src={logo} alt="logo" /></div>
                    <div className="header">
                        <ul>
                            <li><Link to="/Index" style={{color:'black',textDecoration:'none'}}>首页</Link></li>
                            <li><Link to="/About" style={{color:'black',textDecoration:'none'}}>资讯</Link></li>
                            <li><Link to="/Life" style={{color:'black',textDecoration:'none'}}>生活</Link></li>
                            <li><Link to="/About" style={{color:'black',textDecoration:'none'}}>产品</Link></li>
                            <li><Link to="/Posts" style={{color:'black',textDecoration:'none'}}>Posts</Link></li>
                            <li><Link to="/About" style={{color:'black',textDecoration:'none'}}>公司简介</Link></li>
                        </ul>
                    </div>
                    <Route path="/Login" component={Login} />
                    {/*加上exact之后，表示严格模式，当渲染别的组件时不会干扰到Index组件*/}
                    <Route path="/Index" component={Index} />
                    <Route path="/About" component={About} />
                    <Route path="/Posts" component={Posts} />
                    {/* Redict默认跳转路径，有from和to两个属性 */}
                    <Redirect from="/" to="/Index"/>
                </div>
            </Router>
        );
    }
}
