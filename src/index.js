import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto'; 
import 'nprogress/nprogress.css'; 
import 'ionicons/dist/css/ionicons.min.css'; 



ReactDOM.render(
        <div>
            <App />
        </div>
, document.getElementById('r00t'));

registerServiceWorker();
