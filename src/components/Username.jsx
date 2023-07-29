import React, {useState} from 'react';
import styled, {css} from 'styled-components';

const Form = styled.form`
    background-color: #45a29e;
    display: flex;
    flex-direction: column;
    padding: 10px;
    height: 100%;
`;
const Input = styled.input`
    padding: 10px;
    margin: 10px;
    border: 0;
    outline: none;
`;


const Button = styled.button`
    padding: 10px;
    margin: 10px;
    border: 0;
    background-color: #1f2833;
    color: white;
    cursor: pointer;
`

function Username(props){
    const [username, setUsername] = useState('');

    function usernameInput(event){
        setUsername(event.target.value);
    }
    function register(event){
        props.register(event, username);
    }
    return (
        <Form>
            <Input type="text" id='username' placeholder='Username' onChange={usernameInput} value={username}/>
            <Button onClick={register}>Register</Button>
        </Form>
    )
}

export default Username;