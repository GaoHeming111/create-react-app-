import React, {Component} from 'react';
import PostForm from './PostForm';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchPosts} from "../redux/actions/postActions";

import '../style.css';

class Posts extends Component {
    componentDidMount () {
        this.props.fetchPosts();
    }

    componentWillReceiveProps (nextProps) {
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        return (
            <div>
                <PostForm />
                <p>Posts</p>
                {
                    this.props.posts.map((post,index)=>(
                        <div key={index}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    ))
                }
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
};

// 将最新的state映射到当前组件
const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

// connect组件连接，将当前组件和action方法文件连接
// connect接受两个参数，第二个参数里面可以包含多个方法
export default connect(mapStateToProps,{fetchPosts})(Posts);
