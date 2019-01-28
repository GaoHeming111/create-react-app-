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

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});
export default connect(mapStateToProps,{fetchPosts})(Posts);
