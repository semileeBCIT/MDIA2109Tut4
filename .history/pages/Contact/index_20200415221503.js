import {useEffect} from 'react';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import './contact.css';

const Contact = () => { 

    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector("#contact").style.left = 0;
        }, 50)
       
    }, []);

    return <div id="contact">
    <Header text="Contact me!" fontSize={24}/>
    <CustomButton text='email' />
    
</div>
}

export default Contact;