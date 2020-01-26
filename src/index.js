import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware, bindActionCreators } from 'redux'
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

const feedback = (state = {}, action) => {
    console.log(action.payload);
    if (action.type === 'ADD_FEELING') {
        return {
            ...state,
            feels: action.payload
        }
    } else if (action.type === 'ADD_UNDERSTANDING') {
        return {
            ...state,
            understanding: action.payload
        }
    } else if (action.type === 'ADD_SUPPORT') {
        return {
            ...state,
            support: action.payload
        }
    } else if (action.type === 'ADD_COMMENTS') {
        return {
            ...state,
            comments: action.payload
        }
    }
    return state;
}



const storeInstance = createStore(
    combineReducers({
        feedback
        
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
