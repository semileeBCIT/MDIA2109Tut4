import React from 'react';
import './chatpage.css';
import Chat from '../../comps/Chat';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Input from '../../comps/Input';

const ChatPage = ({}) => <div>
    <div id="welcome">
        <Header fontSize={32} text="Welcome to my App!" />
    </div>
    <div id="chats">
        <Chat />
    </div>

</div>

ChatPage.defaultProps = {

}

export default ChatPage;