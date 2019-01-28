import React, {Component} from 'react';
import '../style.css';
import {
    Link,
    BrowserRouter as Router,
    Route,
    Redirect
} from "react-router-dom";
import logo from "../img/logo1.jpg";
import Index from "./Index";
import Posts from "../components/Posts";

export default class Header extends Component {
    render() {
        return (
            <Router>
                <div className="wrap">
                    <div className="logo"><img src={logo} alt="logo" /></div>
                    <ul>
                        <li><Link to="/Index" style={{color:'black',textDecoration:'none'}}>首页</Link></li>
                        <li><Link to="/About" style={{color:'black',textDecoration:'none'}}>资讯</Link></li>
                        <li><Link to="/Life" style={{color:'black',textDecoration:'none'}}>生活</Link></li>
                        <li><Link to="/About" style={{color:'black',textDecoration:'none'}}>产品</Link></li>
                        <li><Link to="/Posts" style={{color:'black',textDecoration:'none'}}>Posts</Link></li>
                        <li><Link to="/About" style={{color:'black',textDecoration:'none'}}>公司简介</Link></li>
                    </ul>
                    {/*加上exact之后，表示严格模式，当渲染别的组件时不会干扰到Index组件*/}
                    <Route path="/Index" component={Index} />
                    <Route path="/Posts" component={Posts} />
                    {/* Redict默认跳转路径，有from和to两个属性 */}
                    {/*<Redirect from="/" to="/Index"/>*/}
                </div>
            </Router>
        );
    }
}
