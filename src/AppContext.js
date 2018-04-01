import React , { createContext, Component} from 'react'

const AppContext = createContext()

export const { Provider, Consumer } = AppContext

export const getContext = Components => 
    class GetContext extends Component {
        render (){
            return (
            <AppContext.Consumer>
                { data =>
                    <Components 
                        {...data}
                    />
                }
            </AppContext.Consumer>
            )
        } 
    }

export default AppContext
