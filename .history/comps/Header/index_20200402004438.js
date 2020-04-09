//use the same component to change the fontSize
//change the text color of the header
//change the onMouseOver

import React from 'react';
import './header.css';
import { mydata } from '../../../../Mar23_Dynamics/tool1/comps/Menu/data';

const Header = ({fontSize, color, onMouseOver}) => <div 
    className='menu'>
    <div className='menuTitle'>{mydata.title}</div>
    <h1>Header</h1>
    <ul>
        <li>{mydata.item1}</li>
        <li>{mydata.item2}</li>
        <li>{mydata.item3}</li>
    </ul>
</div>

function MouseOver(){
    alert("mouse is over");
}

Header.defaultProps = {
    fontSize:12,
    color:"#000",
    onMouseOver:MouseOver
}

export default Header;