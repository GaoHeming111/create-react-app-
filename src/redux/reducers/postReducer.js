// reducer作用： 返回最新的状态
import {FETCH_POSTS,NEW_POST} from '../actions/types';

const initialState = {
    items: [],
    item: {}
};

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
