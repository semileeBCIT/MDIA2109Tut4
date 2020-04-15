import {useEffect} from 'react';
import './account.css';
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
    <Input placeholder="search"/>
</div>
}

export default Account;