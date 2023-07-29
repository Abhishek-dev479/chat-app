import React from 'react';

function Send(props){
    function messageClick(event){
        event.preventDefault();
        props.sendMessage();
    }
    return (
        <form id='sendMessage'>
            <input type="text" id='msg' placeholder='Message'/>
            <button onClick={messageClick} id='send'>send message</button>
        </form>
    )
}

export default Send;