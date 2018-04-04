import React, { createElement } from 'react'
import { Link } from 'react-router-dom'
import Icon  from 'react-ionicons'; 

const toText   = (content, limit=0, except=' ...') => {
    content     = content.split(/<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/)
        content     = content.filter((v) => {
            return v.length > 100 
        })
    content   = content[0].replace(/<[^>]+>/g, '')
        return content.substring(0,limit) + except
}

export const TagList = (props) => {
    if (props.num >=2){
        return '' 
    }
    let tag = createElement('li', { className: 'card-tags', rel: 'tag' }, props.tag)
        return <Link to={'/categories/' + props.tag} alt={props.tag}>{tag}</Link>
}
const Card     = (props) => {
    return (
            <div className={ props.single ? "card single" : "card" } role="Listitem"  alt={props.title} >
            <div className="card-img" role="img" 
            style={{backgroundImage: '' }}
            data-src={props.thumbnail }
            >
            </div>
            <div className="card-body">
            <Link to={'/article/'+props.slug}alt={props.title}>
            <h1 className="card-title text-black"> { props.title } </h1>
            </Link>
            <div className="card-caption" 
            dangerouslySetInnerHTML={{
                __html: props.single ? props.content :  toText( props.content, 200 ) 
            }}>
            </div>
            <div className="card-footer">
            <ul>
            { props.categories.map( (tag, index) => <TagList key={index} num={index} tag={tag}/>  ) } 
            </ul>
            <div className="meta">
            <Link to={ "/author/" + props.author } alt={"Feed By @" + props.author}>
            <label className="author" rel="author" alt={props.author}>
            <Icon icon={'ios-contact'} color={'#20232a'}></Icon> 
            {props.author}
            </label>
                </Link>
                <label className="pubDate" alt={props.humandate}>
                <Icon icon={'ios-calendar-outline'} color={'#20232a'}></Icon>
                {props.humandate}
            </label>
                </div>
                </div>
                </div> 
                </div>        
                )
}

const CardList = props => {
    return (
            <div className="cards">
            {props.items.map( (item,index) => <Card {...item} key={index}  single={props.single}/> )}
            </div> 
           )
}

export const CatList = props => {
    const filterItems = (text) => {
        let items = 'filter' in props.items && text ? props.items.filter( i => {
            return i.match(new RegExp(`${text}.*`)) !== null  
        } ) : props.items 
              return items
    }
    const state = { filter: filterItems() }
    const onChange = e => {
        state.filter = filterItems(e.target.value)
    }

    return(
            <div className="categories">     
            <input type="text" onChange={onChange} placeholder="Search..." className="text-md mb-4 border-2 border-solid rounded-full tracking-wide text-blue-light  p-4 border-grey-lighter w-full md:w-2/3  lg:w-2/3 mb-2 "/>
            {state.filter.map( (item,index) => {
                                                   item = item.replace(/[^a-zA-Z0-9]+/g, ' ')
                                                       return <TagList tag={item} key={index} /> 
                                               })}
            </div>
          )
}


export default CardList
