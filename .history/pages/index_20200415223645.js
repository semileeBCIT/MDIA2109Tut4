import Link from 'next/link';
import Router from 'next/router';
import {FaSearchDollar} from 'react-icons/fa';
import {GiBurningTree} from 'react-icons/gi';
import {TiContacts} from 'react-icons/ti';
import './index.css';

function ClickIndex(){

    document.querySelector("#mainapp").style.right = "-100%";
    setTimeout(function(){
      Router.push("/ChatPage");
  }, 1000)
}

const Index = () => <div id="mainapp">
    <div onClick={ClickIndex}>Index</div>
    <FaSearchDollar />
    <Link href="/ChatPage"><button><GiBurningTree color="#ABC"/> Chats!</button></Link>
    <Link href="/Contact"><button><TiContacts color="#ABC"/> Contact Me</button></Link>
    <Link href="/About"><button>About</button></Link>
    <Link href="/Account"><button>Account</button></Link>
</div>

export default Index;