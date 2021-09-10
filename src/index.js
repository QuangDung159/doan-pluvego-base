import react from 'react'
import ReactDOM from 'react-dom'
import '@Assets/css/main.css'
import App from './App'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);