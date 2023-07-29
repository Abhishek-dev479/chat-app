import React, {useState}  from "react";

function Message(props){
    const [time, setTime] = useState();

    console.log(props.self);
    return (
        <div id="box" style={ props.self ? {justifyContent: 'flex-end'} : null}>
            <div id="message" style={props.self ? {backgroundColor: 'darkblue'}: null}>
                    <div id="details">
                        <span id="name">{props.name}</span>
                        <span id="time">{props.time}</span>
                    </div>
                    <span id="text">{props.message}</span>
            </div>
        </div>
    )
}

export default Message;