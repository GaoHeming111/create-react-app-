// reducer作用： 返回最新的状态
// import {FETCH_POSTS,NEW_POST} from '../actions/types';
export const FETCH_POSTS = 'FETCH_POSTS';
export const NEW_POST = 'NEW_POST';

const initialState = {
    items: [],
    item: {}
};

// ---------------------------------action
// 方法分发操作
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


// ---------------------------------reducer
// reducer接受两个参数，第一个是state，第二个是action
export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}