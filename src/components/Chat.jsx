import React from 'react';
import Message from './Message';

function Chat(props){
    return (
        <div id='container'>
            {(props.messages).map((e, i) => {
                return <Message key={i} name={e.name} message={e.message} self={e.self} time={e.time}></Message>
            })}
        </div>
    )
}

export default Chat;