import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/App';
import "./assets/css/global.css";

ReactDOM.render(
    <App hi="Mario" />, 
    document.getElementById('root')
);
