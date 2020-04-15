import {useEffect} from 'react';
import './about.css';

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