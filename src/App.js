/* ReactJS */
import React, { Component, createContext } from 'react'
/* React Router */
import { BrowserRouter as Router }  from 'react-router-dom' 
import { Switch, Route } from 'react-router' 
/* My Component */
import Header   from './Component/header' 
import Footer   from './Component/footer' 
/* Pages */
import Articles from './Pages/article' 
/* Other */
import toSlug  from './Slugify'
import Lazy from './Component/Lazy' 
import { Provider, Consumer } from './AppContext'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            uri: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid",
            feed: [],
            isLoad: false
        }
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
                    item.slug = toSlug(item.title) 
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
        console.log(this.context)
        return (
            <Provider value={this.state}>
            <Router>
            <div className="h-full">
            <Header />
            <Switch>
            <Route path="/" exact component={Articles} />
            <Route path="/article/:id" exact component={Articles}/>
            </Switch>
            <Footer/>
            </div>
            </Router>
            </Provider>
        )
    }
}

export default App 
