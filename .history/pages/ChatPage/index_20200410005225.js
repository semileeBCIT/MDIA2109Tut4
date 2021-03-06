import React, {useState} from 'react';
import './chatpage.css';
import Chat from '../../comps/Chat';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Input from '../../comps/Input';


// var welcome = "Welcome to my App!"
// function setWelcome(){
//     welcome_state = "Start with sending a message";
//     document.querySelector("#welcome").innerText = welcome_state;
// }

const ChatPage = ({}) => {

    const [welcome, setWelcome] = useState("Welcome to my App!");

    return <div>
        <div id="welcome">
            <Header fontSize={32} text={welcome} />
        </div>
        <div id="chats" onClick={()=>{
            setWelcome("Start with sending a message");
        }}>
            <Chat />
        </div>
        <div id="controls">
            {welcome}
            {<Input placeholder={welcome} />}
        </div>
    </div>
}

ChatPage.defaultProps = {

}

export default ChatPage;