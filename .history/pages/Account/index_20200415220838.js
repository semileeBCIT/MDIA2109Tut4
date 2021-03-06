import {useEffect} from 'react';
import './account.css';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';

const Account = () => {
    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector("#account").style.left = 0;
        }, 50)
       
    }, []);

    return <div id="account">
    <Header text="My Account" fontSize={24}/>
    <CustomButton text='Submit' />
    
</div>
}

export default Account;