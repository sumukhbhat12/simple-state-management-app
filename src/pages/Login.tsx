
import { useState } from 'react';
import { login, logout } from '../store';
import { useDispatch, useSelector } from 'react-redux';

export const Login = () => {
    const [newUserName, setNewUserName] = useState('');
    const dispatch = useDispatch();
    const username = useSelector((state: any) => state.user.value.username);
    return(
        <div>
            <h1>Login Page</h1>
            <h3>User: {username}</h3>
            <input type='text' onChange={(event) => { setNewUserName(event.target.value)}}/>
            <button onClick={() => dispatch(login({username: newUserName}))}>Login</button>
            <button onClick={() => dispatch(logout())}>Logout</button>

        </div>
    )
}