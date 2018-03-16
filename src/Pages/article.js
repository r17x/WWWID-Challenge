import React, { Component } from 'react';
import Loading  from 'nprogress'; 
import Lazy from '../Component/Lazy'; 

const toText   = (content, limit=0, except=' ...') => {
    content     = content.split(/<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/);
    content     = content.filter((v) => {
        return v.length > 100; 
    });

    content   = content[0].replace(/<[^>]+>/g, '');
    return content.substring(0,limit) + except;
}

const Card     = (props) => {
    return (
            <div className="card"  alt={props.title} onClick={props.onClick}>
            <div className="card-img" 
            style={{backgroundImage: '' }}
            data-src={props.thumbnail }
            >
            </div>
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

    fetchCache(){
        let url     = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40ri7nz';
        let cacheKey = url;
        let cached   = sessionStorage.getItem(cacheKey);

        if (cached !== null){
            this.setState({
                feed: JSON.parse(cached),
                isLoaded: true,
                isCached: true,
                isFetched: false,
            }); 
            return; 
        }
        return fetch(url).then((res) => {
            if (res.status === 200) {
                res.clone().text().then(content => {
                    sessionStorage.setItem(cacheKey, content); 
                }) 
            }
            return res.json();

        }).then((json) => {
            this.setState({feed: json, isLoaded: true}); 
            console.log(this.state.feed); 
        });
    }
    componentWillMount(){
        Loading.start(); 
    }
    componentDidMount(){
        this.fetchCache(); 
    }

    componentDidUpdate(){
        Lazy();
    }

    render() {
        if(! this.state.isLoaded ){
            return (
                    <div className="card"  alt="Loading content ...">
                    <div className="card-img" >
                    </div>
                    <div className="card-body">
                    <h1 className="card-title bg-blue-dark text-blue-dark">wkwkwkwkwkwkwkkw</h1>
                    <div className="text-blue-dark bg-blue-dark card-caption">
                    {'wk'.repeat(170)}
                    </div>
                    </div> 
                    </div>        
                   );
        }
        Loading.done(); 
        return (
                <div className="article">
                <CardList items={this.state.feed.items} />
                </div>
               );
    }
}

export default App;
