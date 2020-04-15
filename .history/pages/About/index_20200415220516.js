import {useEffect} from 'react';
import './about.css';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';

const About = () => {
    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector("#aboutpage").style.left = 0;
        }, 50)
       
    }, []);

    return <div id="aboutpage">
    <Header text="About" fontSize={24}/>
    <CustomButton text='More Info' />
    
</div>
}

export default Contact;