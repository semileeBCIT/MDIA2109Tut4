import {useState, useEffect} from 'react';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import './contact.css';

const Contact = () => { 

    //step 1 - create the state variable and the function to update it, and put a default inside
    const [header_text, setHeader] = useState("Contact me!");
    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector("#contact").style.left = 0;
        }, 50)
       
    }, []);

    //step 2 - connect the state variable to the UI
    return <div id="contact">
    <Header text={header_text} fontSize={24}/>
    <CustomButton text='email' onClick={()=>{
        //step 3 - connect the state function() to an interaction / figure out when you want to update the interface
        setHeader('Thanks for Contacting!');
    }} />
    
</div>
}

export default Contact;