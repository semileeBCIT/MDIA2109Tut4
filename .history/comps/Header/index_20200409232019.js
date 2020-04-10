//use the same component to change the fontSize
//change the text color of the header
//change the onMouseOver

import React from 'react';
import './header.css';

const Header = ({fontSize, color, onMouseOver}) => <div
    style={{color:color, fontSize:fontSize }}
    className='header'
    onMouseOver={onMouseOver}
    >
    <h1>{text}</h1>
</div>

function MouseOver(){
    alert("mouse is over");
}

Header.defaultProps = {
    fontSize:12,
    color:"#000",
    onMouseOver:MouseOver
    text:"Header"
}

export default Header;