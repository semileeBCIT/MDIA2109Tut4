import React from 'react';
import './chat.css';
import Header from '../Header';

const defaultimg = require('./default.png');

const Chat = ({}) => <div>
    <img src={defaultImg} />
    <Header text="Username"/>
</div>

Chat.defaultProps = {

}

export default Chat;