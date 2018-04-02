import React, 
       { Component } from 'react';
import Lazy          from '../Component/Lazy';
import CardLoading   from '../Component/cardloading';
import Loading  from 'nprogress'; 

const Card     = (props) => {
    return (
            <div className="card-ig" onClick={props.onClick}>
                <div className="card-img" 
                    style={{backgroundImage: '' }}
                    data-src={props.thumbnail_src }
                >
                </div>
            </div>        
           );
}

const CardList = props => {
    return (
            <div className="cards justify-around h-full">
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
        return fetch(url).then((res) => {
            return res.json();
        }).then((json) => {
            this.setState({
                feed: json.user.media.nodes, 
                isLoaded: true
            }); 
            //console.log(this.state.feed); 
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
                <CardLoading/>
            );
        }
        Loading.done(); 
        return (
                <div className="pages instagram">
                <CardList items={this.state.feed} />
                </div>
        );
    }
}

export default App;
