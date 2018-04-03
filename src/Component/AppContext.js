import React , { createContext, Component} from 'react'

const AppContext = createContext()

export const { Provider, Consumer } = AppContext

export const filter = (params, data) => {
    let key = Object.keys(params)[0]
    let value = params[key]
    let { feed } = data 
    
    data.feed.filter = true
    data.feed.filterBy = key
    data.feed.itemFilter = feed.items.filter( e => {
        return  Array.isArray(e[key]) ? e[key].includes(value) :
            typeof e[key] === 'string' && e[key] === value
    } )

    return data 
}

export const getContext = Components => 
    class GetContext extends Component {
        render (){
            return (
            <AppContext.Consumer>
                { data =>{
                    let { match }  = this.props,
                        { params } = match,
                        { feed }   = data 
                    
                    if( Object.keys(params).length === 1 && 
                        'items' in feed){
                        data = filter(params, data)
                        data.single = 'slug' in params ? true:false
                    }else {
                        data.feed.filter = false 
                        data.single = 'slug' in params ? true:false
                    }

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
