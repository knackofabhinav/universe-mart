import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from '../src/contexts/theme-context';
import {setupMockServer} from "./api/mock.server"
import {CartProvider} from './contexts/cart-context';
import {ReducerProvider} from './contexts/reducer-context'

setupMockServer();

ReactDOM.render(
    <React.StrictMode>
    <ThemeProvider>
        <CartProvider>
        <ReducerProvider>
            <App />
        </ReducerProvider>
        </CartProvider>
    </ThemeProvider>
</React.StrictMode>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function to
// log results (for example: reportWebVitals(console.log)) or send to an
// analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
