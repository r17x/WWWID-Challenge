import React, 
       { Component } from 'react';
import Lazy          from '../Component/Lazy';
import Loading  from 'nprogress'; 

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
            <div className="border-grey-lighter border-solid"  alt={props.caption} onClick={props.onClick}>
            <div className="card-img" 
            style={{backgroundImage: '' }}
            data-src={props.thumbnail_src }
            >
            </div>
            <div className="card-body">
            <div className="card-caption">
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
        let url     =  window.location.origin + '/ig.ri7nz.json';
        let cacheKey = url;
        let cached   = sessionStorage.getItem(cacheKey);

        return fetch(url).then((res) => {
            if (res.status === 200) {
                res.clone().text().then(content => {
                    sessionStorage.setItem(cacheKey, content); 
                }) 
            }
            return res.json();

        }).then((json) => {
            this.setState({
                feed: json.user.media.nodes, 
                isLoaded: true
            }); 
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
                <div className="flex flex-wrap justify-center ">
                <h3> Follow Me On Instagram <a href="//instagram.com/ri7nz/">@ri7nz</a></h3>
                <CardList items={this.state.feed} />
                </div>
               );
    }
}

export default App;
