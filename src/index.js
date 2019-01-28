import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import * as serviceWorker from './serviceWorker';
import './style.css'
import Header from './pages/Header';


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
