import React, { Component } from 'react';
import { BrowserRouter as Router }  from 'react-router-dom'; 
import { Switch, Route } from 'react-router'; 

import Articles from './Pages/article'; 
import Header   from './Component/header'; 
import Footer   from './Component/footer'; 
import Loading  from 'nprogress'; 

const WWWID = props => {
    let uri = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid"
    return (
       <div className="h-full">
       <Header/>
       <Articles uri={uri}/>
       <Footer/>
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
           <Router>
           <Switch>
           <Route path="/" exact component={WWWID} />
           </Switch>
           </Router>
        );
    }
}

export default App; 
