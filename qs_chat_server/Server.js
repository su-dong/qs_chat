// import express
const express = require('express');
const knex = require('knex');
const bcrypt = require('bcrypt');
const cors = require('cors');
const res = require('express/lib/response');




const db = knex(
    {
        client: 'pg',
        connection:{
            host: '127.0.0.1',
            user: 'postgres',
            password: 'db2022935',
            database: 'qs_chat'
        }
    }
);



//create express server
const server = express();







// mid part: use
server.use(express.json());
server.use(cors());



// request handle

const outputs = server.get('/', function(input1, input2){
    input2.send('get get request');

});




// Handle register
server.post('/register', function(request, response){
    //get body information
    const name = request.body.name;
    const email = request.body.email;
    const password = request.body.password;


    db.transaction(trx => {
        trx.insert({
            password: password,
            email: email
        })
        .into('users_signin')
        .returning('email')
        .then(loginEmail => {
            return trx('users')
                .returning('*')
                .insert({
                    email: loginEmail[0].email,
                    name:name,
                })
                .then(user => {
                    response.json(user[0]);
                })
                .then(trx.commit)
                .catch(trx.rollback)
        })
    })
    .catch(err => response.status(400).json('unable to register'))
    
});

// Handle sign in
server.post('/signIn', (request, response) =>{
    
    const email = request.body.email;
    const storedPwd = request.body.password;
    console.log(request.body);

    console.log('In signIn with email = ', email);
    
   db.select('email', 'password').from ('users_signin')
        .where('email', '=', email).then(
            data =>{
                const isValid = (data[0].password === storedPwd );
                if(isValid){
                    return db.select('*').from('users').where('email', '=', email).then(
                        user =>{
                            response.json(user[0]);
                        }
                    ).catch(err => response.status(400).json('cant get user information'));
                }
                else{
                    response.status(400).json('wrong password or email');
                }
            }
        ).catch(rr => response.status(400).json('wrong password or email'))
});

// bind address and port

const serverReturn = server.listen(1000, () =>{
    var host = serverReturn.address().address;
    var port = serverReturn.address().port;

    console.log("The qs_chat server is hosting on %s : %s", host, port);
});