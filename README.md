# QS Chat

This is a real-time chatting room, users can register with their email to join the room. Registered users' information will be stored in database, they can just log in with the registered account.



## Structure

### Front-end

The front-end side is implemented by react. It contains three main pages (register, home, chatting). 

- The home page allows users to login in their account.
- The register page allows new users to register their account with email.
- The chatting page shows the chatting room. 

### Back-end

The back-end side implemented by two servers and one two databases.

#### Servers

- a server handle http requests. It deal with users register and log in accounts.
- a server hold for socket.io. It deal with chatting messages. 

#### Databases

Two related databases are used to store users' information. That is shown following.

![tables](https://raw.githubusercontent.com/su-dong/qs_chat/main/Pics/tables.png)












## How to run

### Default Values

- default socket running on localhost:5000.
- default server running on localhost:1000.
- default database running on localhost. Please change database information in the top of 'Server.js'.

### Running

#### The Front-end App

- enter the '/qs_chat' folder, then use command `npm start`. The front-end app will run on 'localhost:3000'

#### The Back-end Apps

- enter the '/qs_chat_server' folder, then use command `npm start` to run the server. Then, use command `node SocketServer.js`to run the socket server.

### Using

#### New user

- register an account in the register page that is shown as following.![register](https://raw.githubusercontent.com/su-dong/qs_chat/main/Pics/register.png)After register, it will automatically enter chatting room.

  #### Returning Users

  - Returning Users can login on the home page use their account that is shown as following.![](https://raw.githubusercontent.com/su-dong/qs_chat/main/Pics/SignIn.png)



#### Chatting

- Users can chat in the chatting page that is shown as following.![test1_chat](https://raw.githubusercontent.com/su-dong/qs_chat/main/Pics/test1_chat.png)

![](https://raw.githubusercontent.com/su-dong/qs_chat/main/Pics/Chating.png)

#### Exit

- Users can click 'sign_out' to leave the chatting room.
