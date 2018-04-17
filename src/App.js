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
import { Provider } from './Component/AppContext'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            uri: "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fwwwid",
            feed: [],
            isLoad: false,
        }
    }

    async componentDidMount(){
        const res = await fetch(this.state.uri),
              data = await res.json()

        let listCat = []
        data.items = data.items.map(item => {
           let parseDate = new Date(item.pubDate)
           item.slug = toSlug(item.title) 
           item.UTCpubDate = parseDate.toUTCString()
           item.humandate = parseDate.toDateString()
           item.image = item.thumbnail
           item.thumbnail = item.thumbnail.replace(/\/max\/(.+)\//g, '/max/350/')
           listCat.push(...item.categories) 
           return item
        })
        data.categories = [...new Set(listCat)]
        await this.setStateAsync({
            feed: data,
            isLoad: true 
        })
    }
    
    setStateAsync(state){
        return new Promise( res => {
            this.setState(state, res)
        }) 
    }

    render(){
        return (
            <Provider value={this.state}>
            <Router>
            <div className="h-full">
            <Header />
            <Switch>
            <Route path="/" exact component={Articles} />
            <Route path="/article/:slug" exact name="article" component={Articles}/>
            <Route path="/categories" exact name="categorieslist" component={Articles}/>
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
