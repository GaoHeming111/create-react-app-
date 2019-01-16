import Life from '../pages/Life'
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { counter } from './redux';

//store
const store = createStore(counter, applyMiddleware(thunk));

//get inititalState
const init = store.getState();
console.log(init);

//store.subscribe所需的参数为
store.subscribe(render);
function render() {
    ReactDOM.render(
        (
            <Provider store = { store }>
                <Life />
            </Provider>
        ),
        document.getElementById('root')
    );
}
render();