import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter as Router } from 'react-router-dom'; 
import App from './App';

const rootElement = document.getElementById("root");
const app = (
    <Router>
        <App />
    </Router>
)

ReactDOM.render(app, rootElement);