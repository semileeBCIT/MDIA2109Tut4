import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';
import Form from '../comps/Forms';
import Input from '../comps/Input';
import Chat from '../comps/Chat';

export default {
    title:"My comps",
    component:CustomButton
};

export const MyCustomButton = () => <CustomButton/>;

export const MyCustomButtonWithOptions = () => <CustomButton
color="#999"
text="Cancel"
onClick={CancelClick}
/>;

export const MyHeader = () => <Header />;

export const MyInput = () => <Input />;

export const MyInputWithPlaceholder = () => <Input 
    placeholder="Custom placeholder"
/>;
export const MyChat = () => <Chat />;

export const MyForm = () => <Form />;

// export const PageWithCustomButtons = () => <div>
//     <Header 
//         fontSize={15}
//         color="#ABC"
//         onMouseOver={CancelClick}
//     />

//     <Header 
//         fontSize={25}
//         color="red"
//         onMouseOver={OkClick}
//     />
//     <CustomButton 
//         color="#999"
//         text="Cancel"
//         onClick= {CancelClick}
//         />
//     <CustomButton 
//         color="#3F5"
//         text="OK"
//         onClick={OkClick}
//     />
//     <CustomButton 
//         color="#F3F"
//         text="Submit" 
//     />
//     <CustomButton 
//         text="Menu" />
    
//     <Form 
//         text="Name"
//     />
//     <Form 
//         text="Email"
//     />
// </div>

// function CancelClick(){
//     alert("cancel");
// }


// function OkClick(){
//     alert("OK");
// }