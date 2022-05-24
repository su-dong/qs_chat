import React, {useEffect, useState} from 'react'
import { Form, InputGroup,Button } from 'react-bootstrap'
import io from 'socket.io-client'


var messages = [];
var socket = io("http://localhost:5000/");

export default function MessageSpace({userName}) {

    const [text, setText] = useState('');



    function handleSubmit(e){
        e.preventDefault();
        let newMessage = {name:userName, msgText:text};
        messages.push(newMessage);
        socket.emit('message', newMessage);
        console.log('sent', newMessage);
        setText('')
    }

    socket.on('message', function (data) {
        console.log(data)
        messages.push(data)
        console.log(messages)
    })

    useEffect(()  =>  {
        socket.on('message', function (data) {
            console.log(data)
            messages.push(data)
            console.log(messages)
        })
        // Async Action
      }, [messages])

   

    var index = 0;
    return (
        <div className='d-flex flex-column flex-grow-1 border-dark '>
            <div style = {{height:"425px"}} className='flex-grow-1 overflow-auto border-dark bg-light'>
                <div className = "d-flex flex-column align-items-start justify-content-end px-3 ">

                    {messages.map(
                        currMessage =>{
                            
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
