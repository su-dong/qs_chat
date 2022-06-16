import React, {useEffect, useState} from 'react'
import { Form, InputGroup,Button } from 'react-bootstrap'
import io from 'socket.io-client'



//var socket = io("http://localhost:5000/");

export default function MessageSpace({userName}) {

    const [msgList, setMsgList] = useState([]);
    const [text, setText] = useState('');
    const [socket, setSocket] = useState(null);


    

    function handleSubmit(e){
        e.preventDefault();
        let newMessage = {name:userName, msgText:text};
        
        
        socket.emit('message', newMessage);
        console.log('sent', newMessage);

        setMsgList( oldMsg =>
            [...oldMsg, newMessage]
        );

        setText('');
        console.log(msgList)

        
    }

    
    

    useEffect(()  =>  {

        if(socket === null){
            setSocket(io("http://localhost:5000/"))
        }
        if(socket){
            socket.on('chatMessage', function (data) {
                console.log('got new message',data)
                setMsgList( oldMsg =>
                    [...oldMsg, data]
                );
            })
        }
    }, [socket])

   

    var index = 0;
    return (
        <div className='d-flex flex-column flex-grow-1 border-dark '>
            <div style = {{height:"425px"}} className='flex-grow-1 overflow-auto border-dark bg-light'>
                <div className = "d-flex flex-column align-items-start justify-content-end px-3 ">
                    {console.log('before', msgList)}
                    {msgList.map(                
                        currMessage =>{
                            console.log("current msg is ", currMessage)
                            
                            return(
                                <div key={index++} className = "my-1 d-flex flex-column">
                                    <div className='rounded px-2 py-1 border bg-info'> 
                                        {currMessage.msgText}
                                    </div>
                                    <div className='text-muted small'>
                                        {currMessage.name}
                                    </div>
                                </div>
                            )

                            
                        }
                    )}

                </div>
            </div>
            
            <Form onSubmit={handleSubmit}>
                <Form.Group className='bg-primary'>
                    <InputGroup>
                        <Form.Control 
                            as = "textarea" 
                            required 
                            value = {text}
                            onChange = {e => setText(e.target.value)}
                            style = {{height: '75px', resize : 'none'}}
                        />
                        
                        <Button type = "submit">Send</Button>
                    
                        
                        
                    </InputGroup>

                </Form.Group>
            
            </Form>
        </div>
    )
}
