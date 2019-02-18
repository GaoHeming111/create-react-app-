// combineReducers将所有的reducer合并为一个，所以在store中直接引这一个就行了
import {combineReducers} from 'redux';
import postReducer from './postReducer';

export default combineReducers({
    posts: postReducer

})