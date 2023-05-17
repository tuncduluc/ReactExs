import React, { useEffect, useRef } from "react";

function UncontrolledLogin({ onLogin, onReset }) {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    const handleLogin = (event) => {
        event.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        onLogin({ username, password });
      };
    
   
    
    const handleReset = (event) => {
        event.preventDefault();
        usernameRef.current.value = '';
        passwordRef.current.value = '';
        usernameRef.current.focus();
        onReset();
        };
    

    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    ref={usernameRef}
                    placeholder="Username"
                />
                <input 
                    type="password"
                    ref={passwordRef}
                    placeholder="Password"
                    />
                <button type="submit">Login</button>
                    

            </form>
            <button onClick={handleReset}>Reset</button>

        </div>
    )
}

export default UncontrolledLogin;