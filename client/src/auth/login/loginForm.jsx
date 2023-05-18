import React from 'react';

function LoginForm ({ setUsername, setPassword, handleLogin, isLoggedIn })
{
    return (
        <div className='container'>
            <div className='form'>
                <h2>LOGIN</h2>
                <div className='formGroup'>
                    <label>Username:</label>
                    <input type='text' onChange={(e) => setUsername(e.target.value)}></input>
                </div>
                <div className='formGroup'>
                    <label>Password:</label>
                    <input type='password' onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className='buttons'>
                    <button onClick={handleLogin}>Login</button>
                </div>
                {isLoggedIn && 'User Logged in Rerouting'}
            </div>
        </div>
    );
};

export default LoginForm