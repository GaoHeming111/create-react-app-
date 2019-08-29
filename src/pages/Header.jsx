import React, {Component, Fragment} from 'react';
import Posts from "../components/Posts";
import '../style.css';

export default class Header extends Component {
    render() {
        return (
            <Fragment>
                <Posts />
            </Fragment>
        );
    }
}
