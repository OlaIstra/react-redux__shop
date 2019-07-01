import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App/App';
import ErrorBoundry from './components/Error-boundary/Error-boundary'
import './main.css'

import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <Router>
                <div className='wrapper__for__app'>
                    <App></App>
                </div>
            </Router>
        </ErrorBoundry>
    </Provider>
    ,document.getElementById('root')
);

