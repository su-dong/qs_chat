import React, {useEffect, useState} from 'react'
import { Form, InputGroup,Button } from 'react-bootstrap'


var testMsgBody = [{name:"aSender", msgText:"hello"}, {name:"otherSender", msgText:"hello"}];
var messages = testMsgBody;

export default function MessageSpace({userName}) {

    const [text, setText] = useState('');



    function handleSubmit(e){
        e.preventDefault();
        messages.push({name:userName, msgText:text})
        setText('')
    }

   

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
