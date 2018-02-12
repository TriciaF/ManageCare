import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import ManageCare from './components/manageCare';
import store from './store';
import './index.css';

ReactDOM.render(
    <Provider store={store}>
        {/* <Router> */}
            <ManageCare />
        {/* </Router> */}
    </Provider>,
    document.getElementById('root')
);
