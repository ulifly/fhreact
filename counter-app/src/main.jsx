
import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';
import { FirstApp } from './FirstApp';
import './styles.css';

import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <CounterApp value= {0} /> */}
        <FirstApp />
    </React.StrictMode>
);