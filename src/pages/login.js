import { useRouter } from 'next/router.js';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login} from '../../store/features/accountSlice.js';
import styles from '../styles/Login.module.css'

const Login = () => {

    const users = useSelector((state) => state.auth.isAuthenticated);
    
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    console.log(users);
    // Accéder à l'état global du  auth

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login())
    
    };
    const handleLogin =()=>{
        if (email.length !== null && password.length >= 5 ) {
            console.log(login);
            router.push('/')
    } else{
        alert('Mot de passe doit contenir plus que 5 caracteres')
    }
}

    return (
        <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
            <label for="email-input">Email:</label>
            <input id="email-input" className={styles.formControl} type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div class={styles.formGroup}>
            <label for="password-input">Password:</label>
            <input id="password-input" className={styles.formControl} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className={styles.btn} type="submit" onClick={handleLogin}>
            Submit 
        </button>
    </form>
    
    );
};

export default Login;
