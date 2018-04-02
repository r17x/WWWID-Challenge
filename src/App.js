/* ReactJS */
import React, { Component } from 'react'
/* React Router */
import { BrowserRouter as Router }  from 'react-router-dom' 
import { Switch, Route } from 'react-router' 
/* My Component */
import Header   from './Component/header' 
import Footer   from './Component/footer' 
/* Pages */
import Articles from './Pages/article' 
/* Other */
import toSlug  from './Component/Slugify'
import Lazy from './Component/Lazy' 
import { Provider } from './Component/AppContext'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            uri: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid",
            feed: [],
            isLoad: false,
            query: this.filters
        }
    }

    filters(param){
        console.log(this.state.feed)  
    }
    componentDidMount(){
        this.fetchCache()
    }
    
    componentDidUpdate(){
        Lazy() 
    }

    fetchCache(){
        let url      = this.state.uri
        let cacheKey = url
        let cached   = sessionStorage.getItem(cacheKey)

        if ( cached === null ){
            fetch(url).then((res) => {
                if (res.status === 200) {
                    return res.json()
                }
            }).then( json => {
                json.items.map( item => {
                    let parseDate = new Date(item.pubDate)
                    item.slug = toSlug(item.title) 
                    item.UTCpubDate = parseDate.toUTCString()
                    item.humandate = parseDate.toDateString()
                    return item
                })
                sessionStorage.setItem(cacheKey, JSON.stringify(json))
                this.setState({
                    isLoad: true,
                    feed: json
                })
            })
            console.log(`Feed Load From ${cacheKey}`)
            return
        }

        this.setState({
            isLoad: true,
            feed: JSON.parse(cached)  
        })
        console.log(`Feed Load From SessionStorage`)
    }

    render(){
        return (
            <Provider value={this.state}>
            <Router>
            <div className="h-full">
            <Header />
            <Switch>
            <Route path="/" exact component={Articles} />
            <Route path="/article/:title" exact name="article" component={Articles}/>
            <Route path="/categories/:categories" exact name="categories" component={Articles}/>
            <Route path="/author/:author" exact name="author" component={Articles}/>
            </Switch>
            <Footer/>
            </div>
            </Router>
            </Provider>
        )
    }
}

export default App 
