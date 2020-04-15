import Link from 'next/link';
import Router from 'next/router';
import './app.css';

function ClickIndex(){
    if(confirm("Are you sure?")){
        //Move to ChatPage
    }
}

const Index = () => <div>
    <div onClick={ClickIndex}>Index</div>
    
    <Link href="/ChatPage"><button>Chats!</button></Link>
</div>

export default Index;