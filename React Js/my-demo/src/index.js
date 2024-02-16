import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './Components/Main'
import './style/stylesheet.css'
import {BrowserRouter as Router} from 'react-router-dom'
import {configureStore} from 'redux'
import { PostReducer } from './redux/Reducer'
import { Provider } from'react-redux'


const store = configureStore(PostReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        <Router>
                <Main/>
        </Router>
)

