import React, {useEffect, useState} from 'react';
import {io} from 'socket.io-client';
import Chat from './Chat';
import Send from './Send';
import Username from './Username';
import Onlineusers from './Onlineusers';

const socket = io.connect('http://localhost:3001');

function App(){
    const [scroll, setScroll] = useState(false);
    const [messages, setMessages] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {
        // To scroll to the latest chat automatically
        var elem = document.getElementById('container');
        elem.scrollTop = elem.scrollHeight;
    }, [scroll]);

    useEffect(() => {
        // Connected to server
        socket.on('connect', () => {
            console.log('id: '+socket.id);
        })
        // Receiving a message from server
        socket.on('receive', (name, msg) => {
            updateMessages(name, msg, false);
        })

        // Receiving the users online data
        socket.on('onlineUsers', (users) => {
            setOnlineUsers(users);
        })
    }, [])

    // Updating the chat 
    function updateMessages(name, msg, self){
        if(name == '') name = 'Anonymous';
        setScroll((prev) => !prev);
        setMessages((prev) => {
            return [...prev, {name: name, message: msg, self: self, time: getCurrentTime()}];
        })
    }

    // Sending a message to server
    function sendMessage(){
        let msg = document.getElementById('msg');
        // let name = document.getElementById('username').value;
        updateMessages('You', msg.value, true);
        socket.emit('send', username, msg.value);
        msg.value = '';
    }

    // Get current time
    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
      
        // Pad single-digit hours and minutes with leading zeros
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        return `${formattedHours}:${formattedMinutes}`;
      }
      
      // When the username is registered
      function register(event, username){
        event.preventDefault();
        console.log('submitted');
        setUsername(username);
        socket.emit('onlineUsers', {id: socket.id, name: username})
      }

    return (
        <div id='bigdaddy'>
        <div id="sidebar">
            {username == '' ? <Username register={register}></Username> : <Onlineusers onlineUsers={onlineUsers}></Onlineusers>}
        </div>
        <Chat messages = {messages}></Chat>
        {username != '' && <Send sendMessage={sendMessage}></Send>}
        </div>
    )
}

export default App;