import React, {Component} from 'react';
import '../style.css';
import {
    Link
}from 'react-router-dom';

export default class Index extends Component {

    render() {
        return (
            <div>
                <Link to="/About">111111</Link>
            </div>
        );
    }
}
