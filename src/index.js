import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './style.css'
//import 'typeface-roboto' 
import 'nprogress/nprogress.css' 
import registerServiceWorker from './registerServiceWorker'

render(
    <App />,
    document.getElementById('r00t')
)

registerServiceWorker()
