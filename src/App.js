import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Card     = props => {
    return (
        <div className="card" alt={props.title}>
            <div className="card-body">
                { props.content.substring(0,200) }
            </div> 
        </div>        
    );
}

const CardList = props => {
    return (
        <div>
            {props.items.map( item => <Card {...item} /> )}
        </div> 
    );
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        feed    : [],
        isLoaded: false,
    };
  }  
  componentDidMount(){
      let url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid';

      fetch(url).
          then((res) => {
            console.log(res); 
            if (res.status === 200) 
                return res.json();
            
          }).
          then((json) => {
            this.setState({feed: json, isLoaded: true}); 
            console.log(this.state.feed); 
          });
  
  }
  render() {
    if(! this.state.isLoaded){
        return "<h1>Loading...</h1>"; 
    }

    return (
        <div className="article">
            <CardList items={this.state.feed.items} />
        </div>
    );
  }
}

export default App;
