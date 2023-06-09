import React, { useState } from "react";

function Login({ onLogin, onReset }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = () => {
        onLogin({ username, password });
    }

    const handleReset = () => {
        setUsername('');
        setPassword('');
        onReset()
      
    };

    const disabled = !username || !password;
    return (
        <div>
            <input 
                type="text"
                value={username}
                onChange= {event => setUsername(event.target.value)}/>
                
                
            <input
            type="password"
             placeholder="Password"
            value={password}
            onChange= {event => setPassword(event.target.value)}/>

            <button onClick={handleLogin} disabled={disabled}>Login</button>
            <button onClick={handleReset} disabled={!username && !password}>reset</button>
        </div>
    )
}

export default Login;
