import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoaderProvider } from './context/LoaderContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <LoaderProvider>
            <App />
        </LoaderProvider>
    </React.StrictMode>
);
