import {useEffect} from 'react';
import './account.css';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Input from '../../comps/Input';

const Account = () => {
    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector("#account").style.left = 0;
        }, 50)
       
    }, []);

    return <div id="account">
    <Header text="My Account" fontSize={24}/>
    <CustomButton text='Submit' />
    <Input placeholder="ID" />
</div>
}

export default Account;