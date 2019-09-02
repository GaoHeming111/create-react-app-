import React, { Component } from 'react';
import {sxAjax} from '../commons/ajax';
import { connect } from 'react-redux';
import { createPost } from "../redux/actions/postActions";
import '../style.css';

@connect(null, {createPost})

class PostForm extends Component {
    state = {
        title: '',
        body: ''
    };

    componentDidMount () {
        const params = {
            // startTime: '2019-03-07 09:45:00',
            // endTime: '2019-03-08 09:45:00',
        };
        return sxAjax.get(`/trandata`, params, {errorTip: false})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body,
        };
        // TODO 触发方法
        this.props.createPost(post);
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    render() {
        return (
            <div style={{width: '100%'}}>
                <h1>添加内容</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>title:</label>
                        <br/>
                        <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
                    </div>
                    <div>
                        <label>body:</label>
                        <br/>
                        <textarea name="body" onChange={this.handleChange} value={this.state.body} />
                    </div>
                    <button type="submit">提交</button>
                </form>
            </div>
        );
    }
}

export default PostForm;
