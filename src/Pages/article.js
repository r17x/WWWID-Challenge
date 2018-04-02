import React, { Component } from 'react'
import Loading  from 'nprogress' 
import CardList from '../Component/cards'
import CardLoading from '../Component/cardloading'
import Lazy from '../Component/Lazy'
import {getContext} from '../Component/AppContext'

class Articles extends Component {
    componentWillMount(){
        Loading.start() 
    }

    componentDidMount(){
        //console.log(this.props)
        Loading.done() 
    }

    componentWillUpdate(){
        Loading.start() 
    }

    componentDidUpdate(){
        Loading.done() 
        Lazy()
    }

    render() {
        let { isLoad, feed } = this.props

        if(isLoad && 'items' in feed ){
            return (
               <div className="pages" >
               <CardList items={feed.filter ? feed.itemFilter : feed.items} />
               </div>
            )
        }
        return (
            <CardLoading/>
        )
    }
}

Articles.defaultProps = {
    isLoad: false,
    feed: []
}

export default getContext(Articles)
