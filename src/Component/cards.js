import React, { createElement } from 'react'
import { Link } from 'react-router-dom'
import Icon  from 'react-ionicons'; 

// case https://cdn-images-1.medium.com/max/50/0*9QQWzkq42oT_kJ7S.
// \/(max\/)(.+)\/
// get 50

export const toText   = (text, limit=0, except=' ...') => text 
       .split(/<\s*p[^>]*>([^<]*)<\s*\/\s*p\s*>/)
       .filter(v => v.length > 100)[0]
       .replace(/<[^>]+>/g, '')
       .substring(0,limit) + except

export const TagList = (props) => {
    let tag = createElement(
       'li', 
       { className: 'card-tags', rel: 'tag' }, 
       'text' in props  ? props.text : props.tag
    )
    return props.num >= props.limit ? '' : <Link to={'/categories/' + props.tag} alt={props.tag}>{tag}</Link>
}

export const Card    = (props) => {
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
                { props.categories.map( (tag, index) => <TagList key={index} num={index} limit={2} tag={tag}/>  ) } 
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
    return(
        <div className="categories">     
        {props.items.map( (item,index) => {
            let text = item.replace(/[^a-zA-Z0-9]+/g, ' ')
            return <TagList text={text} tag={item} key={index} /> 
        })}
        </div>
    )
}


export default CardList
