import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';
import registerServiceWorker from './registerServiceWorker';


const Header = props => {
    return (
            <div className="page-title flex-col">
               <h1>#Ri7NZ | WWWID Challenge</h1>
               <h3 className="font-light"> <a href="https://medium.com/wwwid/tantangan-web-developer-untuk-membuat-aplikasi-web-bisa-digunakan-kurang-dari-5-detik-70bb7431741d"> Read : Tantangan Web Developer Untuk Membuat Aplikasi Web Bisa Digunakan Kurang Dari 5 Detik </a></h3>  
            </div>
    );
}
ReactDOM.render(
        <div>
            <Header />
            <App />
        </div>
, document.getElementById('r00t'));
registerServiceWorker();
