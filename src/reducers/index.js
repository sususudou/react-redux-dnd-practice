import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import { createStore,combineReducers} from 'redux'
import { Provider } from 'react-redux'
import itemReducer from './Item'
import boxesReducer from './boxesReducer'


const reducer = combineReducers({
    boxesReducer
})

export const store = createStore(reducer)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root')
)
