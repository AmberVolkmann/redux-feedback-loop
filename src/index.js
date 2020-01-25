import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const allTheFeels = (state = 0, action) => {
    console.log(action.payload);
    if (action.type === 'ADD_FEELING') {
        return action.payload
    }
    return state;
}

const  understandingRouter = (state = 0, action) => {
    console.log(action.payload);
    if (action.type === 'ADD_UNDERSTANDING') {
        return action.payload
    }
    return state;
}

const  supportRouter = (state = 0, action) => {
    console.log(action.payload);
    if (action.type === 'ADD_SUPPORT') {
        return action.payload
    }
    return state;
}

const  commentsRouter = (state = 0, action) => {
    console.log(action.payload);
    if (action.type === 'ADD_COMMENTS') {
        return action.payload
    }
    return state;
}



const storeInstance = createStore(
    combineReducers({
        allTheFeels,
        understandingRouter,
        supportRouter,
        commentsRouter
        
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
