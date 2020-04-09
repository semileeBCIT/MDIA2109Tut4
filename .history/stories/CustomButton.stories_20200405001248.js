import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';
import Form from '../comps/Forms';

export default {
    title:"Custom Button",
    component:CustomButton
};

export const MyCustomButton = () => <div>
<CustomButton/>
<Header />
</div>

export const PageWithCustomButtons = () => <div>
    <Header 
        fontSize={15}
        color="#ABC"
        onMouseOver={CancelClick}
    />

    <Header 
        fontSize={25}
        color="red"
        onMouseOver={OkClick}
    />
    <CustomButton 
        color="#999"
        text="Cancel"
        onClick= {CancelClick}
        />
    <CustomButton 
        color="#3F5"
        text="OK"
        onClick={OkClick}
    />
    <CustomButton 
        color="#F3F"
        text="Submit" 
    />
    <CustomButton 
        text="Menu" />
    
    <Form 
        text="Name"
    />
    <Form 
        text="Email"
    />
</div>

function CancelClick(){
    alert("cancel");
}


function OkClick(){
    alert("OK");
}