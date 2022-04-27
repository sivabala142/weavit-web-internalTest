import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './services/i18n';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeAxios } from './services/axios';

function render() {
    const container = document.getElementById('root');
    if (!container) {
        return null;
    }
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>,
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

(() => {
    initializeAxios();
    render();
})();
