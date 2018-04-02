import React , { createContext, Component} from 'react'

const AppContext = createContext()

export const { Provider, Consumer } = AppContext

export const getContext = Components => 
    class GetContext extends Component {
        render (){
            return (
            <AppContext.Consumer>
                { data =>{
                    let { match } = this.props
                    let { params } = match
                    let { feed } = data 

                    if( Object.keys(params).length > 0 && 'cat' in params){
                        if ('items' in feed){
                            data.feed.filter = true
                            data.feed.itemFilter = feed.items.filter( e => {
                                console.log(params)
                                console.log(e.categories)
                                return e.categories.includes(params.cat)
                            } )
                        }
                    }
                    else data.feed.filter = false 

                    return ( <Components 
                        {...data}
                    /> )
                    }
                }
            </AppContext.Consumer>
            )
        } 
    }

export default AppContext
