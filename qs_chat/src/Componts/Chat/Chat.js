import React, {useEffect} from "react";
import './Chat.css';
import SideBar from './SideBar.js'
import MessageSpace from "./MessageSpace";

const Chat = (props)=>{
    
    const id = 111;
    const userName = props.Name;


    useEffect(()  =>  {
        
    }, [])
    
    return(
        <div className="rowC">
    
            <MessageSpace userName={userName}/>
        </div>
        

    );
}

export default Chat

