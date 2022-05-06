import React from "react";
import './Chat.css';
import SideBar from './SideBar.js'
import MessageSpace from "./MessageSpace";

const Chat = ()=>{
    
    const id = 111;
    const userName = "Jack";
    
    return(
        <div className="rowC">
    
            <SideBar id = {id}/>
            <MessageSpace userName={userName}/>
        </div>
        

    );
}

export default Chat

