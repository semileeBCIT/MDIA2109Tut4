import React from 'react';
import './chat.css';
import Header from '../Header';

const defaultImg = require('./default.png');

const Chat = ({msg}) => <div className="chat_card">
    <div class="chat_user">
        <img src={defaultImg} />
        <Header fontSize="100%" text="Username"/>
    </div>
    <div className="chat_msg">
        {msg}
    </div>
</div>

Chat.defaultProps = {
    msg:"Please type something!"
}

export default Chat;