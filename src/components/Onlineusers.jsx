import React from 'react';
import styled from 'styled-components';

const P = styled.p`
    border: 2px solid #1f2833;
    border-radius: 10px;
    padding: 15px;
    margin: 2px;
`

function Onlineusers(props){
    return (
        <div id='users'>
            <h2 style={{color: 'white', textAlign: 'center', backgroundColor: '#1f2833', borderRadius: '10px', padding: '10px'}}>Users Online</h2>
        <div>
            {(props.onlineUsers).map((e, i) => {
                return <P key={i}>{e.name}</P>
            })}
        </div>
        </div>
    )
}

export default Onlineusers;