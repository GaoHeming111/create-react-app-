import {applyMiddleware, createStore, compose} from "redux";
import rootReducer from './reducers/index';
// thunk作用是异步的分发action
import thunk from 'redux-thunk';
// 中间件
const middleware = [thunk];

const initialState = {};

// store的三个参数：reducer,state,中间件
// applyMiddleware将所有中间件组成一个数组并依次执行
// store收到action之后，必须给出一个新的state，而这个计算的过程就是reducer实现的
export const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);