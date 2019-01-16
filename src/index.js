import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link,
}from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './style.css'
import Index from './pages/Index';
import Login from './pages/Login';
import About from "./pages/About";
import Life from "./pages/Life";
import logo from "./img/logo1.jpg";

export default class All extends Component{
    render(){
        return (
            <div>
                <Router>
                    <div className="wrap">
                        <ul className="nav">
                            <li><Link to="/Index" style={{color:'white',textDecoration:'none'}} >返回首页<span style={{color:'orange'}}>欢迎来到格林涂料</span></Link></li>
                            <li><Link to="/Login" style={{color:'white',textDecoration:'none'}} >登陆/注册</Link></li>
                        </ul>
                        <div className="header">
                            <div><img src={logo} alt="logo" /></div>
                            <ul>
                                <li><Link to="/Index" style={{color:'black',textDecoration:'none'}}>首页</Link></li>
                                <li><Link to="/About" style={{color:'black',textDecoration:'none'}}>资讯</Link></li>
                                <li><Link to="/Life" style={{color:'black',textDecoration:'none'}}>生活</Link></li>
                                <li><Link to="/About" style={{color:'black',textDecoration:'none'}}>产品</Link></li>
                                <li><Link to="/About" style={{color:'black',textDecoration:'none'}}>装修建议</Link></li>
                                <li><Link to="/About" style={{color:'black',textDecoration:'none'}}>公司简介</Link></li>
                            </ul>
                        </div>
                        <Route path="/Login" component={Login} />
                        {/*加上exact之后，表示严格模式，当渲染别的组件时不会干扰到Index组件*/}
                        <Route path="/Index" component={Index} />
                        <Route path="/About" component={About} />
                        <Route path="/Life" component={Life} />
                        {/* Redict默认跳转路径，有from和to两个属性 */}
                        {/*<Redirect from="/About" to="/About1111"/>*/}
                    </div>
                </Router>
            </div>
        )
    }
}

ReactDOM.render(<All />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
