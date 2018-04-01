import React, { createElement } from 'react'
import { Link } from 'react-router-dom'

const toText   = (content, limit=0, except=' ...') => {
    content     = content.split(/<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/)
    content     = content.filter((v) => {
        return v.length > 100 
    })
    content   = content[0].replace(/<[^>]+>/g, '')
    return content.substring(0,limit) + except
}

const TagList = (props) => {
    if (props.num >=2){
        return '' 
    }
    return createElement('li', { className: 'card-tags' }, props.tag);
}
const Card     = (props) => {
    return (
            <div className="card" role="Listitem"  alt={props.title} >
            <div className="card-img" role="img" 
            style={{backgroundImage: '' }}
            data-src={props.thumbnail }
            >
            </div>
            <div className="card-body">
            <Link to={'article'} param={props.slug} alt={props.title}>
            <h1 className="card-title text-black"> { props.title } </h1>
            </Link>
            <div className="card-caption">
            { toText( props.content, 200 ) }
            </div>
            <div className="card-footer">
                <ul>
                { props.categories.map( (tag, index) => <TagList key={index} num={index} tag={tag}/>  ) } 
                </ul>
                <div className="author" rel="author">{props.author}</div>
            </div>
            </div> 
            </div>        
           )
}

const CardList = props => {
    return (
            <div className="cards">
            {props.items.map( (item,index) => <Card {...item} key={index}  /> )}
            </div> 
           )
}

export default CardList
