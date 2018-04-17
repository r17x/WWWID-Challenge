import React, { Component } from 'react'
import Loading  from 'nprogress' 
import CardList, { CatList } from '../Component/cards'
import CardLoading from '../Component/cardloading'
import Lazy from '../Component/Lazy'
import {getContext} from '../Component/AppContext'

class Articles extends Component {
    componentWillUpdate(){
        Loading.start() 
    }

    componentDidUpdate(){
        Loading.done() 
        Lazy()
    }

    render() {
        let { isLoad, feed, single, catPage } = this.props,
            categories = 'categories' in feed ? [...feed.categories] : null

        if( catPage && categories )
            return (
               <div className="pages" >
                <CatList items={categories} />                    
               </div>
            )
            
        if(isLoad && 'items' in feed ){
            return (
               <div className="pages" >
               <CardList items={feed.filter ? feed.itemFilter : feed.items} single={single} />
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
