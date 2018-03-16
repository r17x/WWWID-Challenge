import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import { Switch, Route } from 'react-router'; 

import Articles from './Pages/article.js'; 
import IG       from './Pages/instagram.js'; 
import Header   from './Component/header.js'; 
import Loading  from 'nprogress'; 

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

const Projects = props => {
    return (
     <div>
        <Header/>
    </div>     
    );
}

class App extends Component {
    componentWillMount(){
        Loading.start(); 
    }
    componentDidMount(){
        Loading.done();  
    }
    render(){
        return (
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact component={Article} />
                        <Route path="/articles" exact component={Article} />
                        <Route path="/instagram" exact component={Instagram} />
                        <Route path="/projects" exact component={Projects} />
                    </Switch>
                </BrowserRouter>
        );
    }
}

export default App; 
