import React, { Component } from 'react';
import logo from './logo.svg';

const toText   = (content, limit=0, except=' ...') => {
    content = content.replace(/<[^>]+>/g, '');
    return content.substring(0,limit) + except;
}

const Card     = (props) => {
    return (
        <div className="card"  alt={props.title} onClick={props.onClick}>
            <div className="card-body">
                <h1 className="card-title text-black"> { props.title } </h1>
                <div className="card-caption">
                { toText( props.content, 200 ) }
                </div>
            </div> 
        </div>        
    );
}

const CardList = props => {
    return (
        <div className="cards">
            {props.items.map( (item,index) => <Card {...item} key={index}  /> )}
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
