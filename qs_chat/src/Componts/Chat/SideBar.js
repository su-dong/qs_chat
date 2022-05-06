import React from 'react'
import {ListGroup} from 'react-bootstrap';

export default function SideBar({id}) {

    const names = ["test1", "test1", "test1","test1","test1","test1","test1","test1","test1","test1"];
    var peopleList = [];
    var key = 1;
    names.forEach(name =>{
        peopleList.push(<ListGroup.Item variant="secondary" key = {key}>test</ListGroup.Item>)
        key += 1;
    })

   
    return (
        <div style={{width: '150px', height: '500px'}} className = 'd-flex flex-column border border-dark bg-light'>
            <ListGroup  className = 'd-flex flex-column overflow-auto'>
                <ListGroup.Item variant="primary" className='font-weight-bold'>People</ListGroup.Item>
                {peopleList}

            </ListGroup>
        </div>
    )
}
