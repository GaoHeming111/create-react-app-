import React, {Component} from 'react';
import PostForm from './PostForm';
import {connect} from 'react-redux';
import {fetchPosts} from "../redux/reducers/postReducer";

import '../style.css';

@connect(state => {
    let {
        items,
        item
    } = state.posts;
    return {
        items,
        item
    }
},{fetchPosts})

class Posts extends Component {
    componentDidMount () {
        this.props.fetchPosts();
    }

    componentWillReceiveProps (nextProps) {
        console.log(nextProps);
        if(nextProps.item){
            this.props.items.unshift(nextProps.item);
        }
    }

    render() {
        return (
            <div>
                <PostForm />
                <p>Posts</p>
                {
                    this.props.items.map((post,index)=>(
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


// 将最新的state映射到当前组件,通过mapStateToProps订阅store
// const mapStateToProps = state1 => ({
//     posts: state1.posts.items,
//     newPost: state1.posts.item,
// });

// connect组件连接，将当前组件和action方法文件连接
// connect接受两个参数，第二个参数里面可以包含多个方法
// export default connect(mapStateToProps,{fetchPosts})(Posts);
export default Posts;
