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
    const [msg, setMsg] = useState("Pls type something!");
    const [resp, setResp] = useState("Let me respond to you!");

    return <div>
        <div id="welcome">
            <Header fontSize={32} text="Welcome to my App!" />
        </div>
        <div id="chats" onClick={()=>{
            setWelcome("Start with sending a message.");
        }}>
            <Chat name={"User 1"} msg={msg}/>
            <p />
            <Chat img={"https://library.kissclipart.com/20180908/zae/kissclipart-robot-icon-clipart-robot-computer-icons-asimo-11e71de5a93fb737.jpg"} name={"Chat Bot"} backgroundColor={"#FAB"} msg={resp}/>
        </div>
        <div id="controls">
            <Input onClick={(val)=>{
                setMsg(val);
                var new_resp = CheckResponse(val);
                setResp(new_resp);
                /*if(val === "hi"){
                    setResp("I love pie");
                }*/
            }}/>
        </div>
    </div>
}

function CheckResponse(inp){
    switch(inp.toLowerCase()){
        case "hi":
            return "I love pie";
        case "how are you?":
            return "great!";
        default:
            return "I don't understand what you are trying to say";
    }
}

ChatPage.defaultProps = {

}

export default ChatPage;