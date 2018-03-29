import React from 'react';
import Icon  from 'react-ionicons'; 

const color = 'white',
      fSize = '30px';
const logoList = [
    {
        icon : 'logo-linkedin',
        fontSize: fSize,
        color: color,
        uri: 'https://www.linkedin.com/in/r-adysurya-agus-81083210a/',
    },
    {
        icon : 'logo-github',
        fontSize: fSize,
        color: color,
        uri: 'https://www.github.com/ri7nz',
    },
    {
        icon : 'logo-facebook',
        fontSize: fSize,
        color: color,
        uri: 'https://fb.me/ri7nz',
    },
    {
        icon : 'md-heart',
        fontSize: '35px',
        color: '#ED4956',
        beat: true
    },
    {
        icon : 'logo-nodejs',
        fontSize: fSize,
        color: '#43853d',
    },
    {
        icon : 'logo-python',
        fontSize: fSize,
        color: 'orange',
    },
    {
        icon : 'logo-sass',
        fontSize: fSize,
        color: '#CF649A',
    },
];

const IconList = props => {
    return (
        <li keys>
        <a href={props.uri} rel="noopener" target="_blank" alt={props.uri}>
        <Icon {...props}></Icon>
        </a>
        </li>     
    ); 
}

const Footer = () => {
    return (
        <footer>
        <div className="footer-content"> 
        <ul className="social my-4">
        { logoList.map( (logo, index)  => <IconList {...logo} key={index} /> ) }   
        </ul>
        </div>
        </footer>
    );
}; 

export default Footer; 
