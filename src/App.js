import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom'; 
import { Switch, Route } from 'react-router'; 

import Articles from './Pages/article.js'; 
import IG from './Pages/instagram.js'; 

const Header = props => {
    return (
            <div className="page-title flex-col">
               <h1>R I 7 N Z</h1>
               <div className="nav">
               <ul className="inline-flex list-reset">
                <li><NavLink to="/">Article</NavLink></li>
                <li><NavLink to="/instagram">Instagram</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                </ul>
                </div>
               <p align="center" className="font-light w-md text-sm"> 
                    Geek, Living the day by write code with linux  and listen Rock & Metal Music, Drinking Coffe, and Sacred Geometry Enthusias.
               </p>  
            </div>
    );
}

const Article = props => {
    return (
        <div>
        <Header/>
        <Articles/>
        </div>
    );
}
const Instagram = props => {
    return (
        <div>
        <Header/>
        <IG/>
        </div>
    );
}
class App extends Component {
    render(){
        return (
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Article} />
                        <Route path="/instagram" exact component={Instagram} />
                    </Switch>
                </BrowserRouter>
        );
    }
}

export default App; 
