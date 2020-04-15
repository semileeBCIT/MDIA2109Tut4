import Link from 'next/link';
import Router from 'next/router';
import './app.css';

function ClickIndex(){

    document.querySelector("#mainapp").style.right = "-100%";
    setTimeout(function(){
      Router.push("/ChatPage");
  }, 1000)
}

const Index = () => <div id="mainapp">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap" rel="stylesheet"></link>
    <div onClick={ClickIndex}>Index</div>
    
    <Link href="/ChatPage"><button>Chats!</button></Link>
    <Link href="/Contact"><button>Contact Me</button></Link>
</div>

export default Index;