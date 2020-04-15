import React, {useState, useEffect} from 'react';
import './cb.css';


//Made the UI
const CustomButton = ({text, color, onClick}) => <div 
    style={{textColor:color, boxShadow:"1px 1px 5px " + color}}
    className="custom_button_box"
    onClick={onClick}
    >
    <div className="custom_button_box_inner">
        {text}
    </div>
</div>

CustomButton.defaultProps = {
    text:"Default Button",
    color:"#DAB",
    onClick:ButtonClick
}

export default CustomButton;

function ButtonClick(){
    // alert("Clicked");
    //document.query...style.width = "100px";
}



