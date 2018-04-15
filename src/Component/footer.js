import React from 'react';
import Icon  from 'react-ionicons'; 

const color = 'white',
      fSize = '30px';
const logoList = [
    {
        icon : 'logo-linkedin',
        alt : 'connect me (@ri7nz) on linkedin',
        fontSize: fSize,
        color: color,
        uri: 'https://www.linkedin.com/in/r-adysurya-agus-81083210a/',
    },
    {
        icon : 'logo-github',
        fontSize: fSize,
        color: color,
        alt : 'follow me (@ri7nz) on github',
        uri: 'https://www.github.com/ri7nz',
    },
    {
        icon : 'logo-facebook',
        fontSize: fSize,
        color: color,
        alt : 'Add me (@ri7nz) on facebook',
        uri: 'https://fb.me/ri7nz',
    },
    {
        alt : 'This made with Love',
        icon : 'md-heart'  ,
        fontSize: '35px',
        color: '#ED4956',
        beat: true
    },
    {
        alt : 'This made with NodeJs',
        icon : 'logo-nodejs',
        fontSize: fSize,
        color: '#43853d',
    },
    {
        icon : 'logo-sass',
        alt: "This Made with SAAS",
        fontSize: fSize,
        color: '#CF649A',
    },
];

const IconList = props => {
    return (
        <li>
        <a href={props.uri} rel="noopener" target="_blank" alt={props.alt}>
        <Icon {...props}></Icon>
        </a>
        </li>     
    ); 
}

const Footer = () => {
    return (
        <footer>
        <div className="footer-content"> 
        <ul className="social my-4" alt="Social Link">
        { logoList.map( (logo, index)  => <IconList {...logo} key={index} /> ) }   
        </ul>
        </div>
        </footer>
    );
}; 

export default Footer; 
