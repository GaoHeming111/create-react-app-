import {FETCH_POSTS,NEW_POST} from './types'

// 分发操作
export const fetchPosts = () => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    // 对json进行解析
        .then(res=>res.json())
        .then(posts=>dispatch({
            // type是必须要有的
            type: FETCH_POSTS,
            payload: posts
        }));
};

export const createPost = postData => dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(postData)
    })
        .then(res=>res.json())
        .then(post=>dispatch({
            // type是必须要有的
            type: NEW_POST,
            payload: post
        }));
};
