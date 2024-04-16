import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import login from '../../assets/login.png'
import './signin.css'
import { useNavigate } from 'react-router-dom';
import { useToast } from "@chakra-ui/react";


const SignIn = () => {
    const toast = useToast();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showP, setShowP] = useState(false)
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        try {
            e.preventDefault();
            toast({
                title: 'Please Wait !',
                status: 'info',
                duration: 2000,
                isClosable: true,
                position: "top-right",
            })
            const res = await axios.post(`http://localhost:9000/api/user/login`, { email, password });
            localStorage.setItem("user", JSON.stringify(res.data.user));
            toast({
                title: 'Logged In Successfully !',
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: "top-right",
            })
            navigate('/')
        } catch (er) {
            toast({
                title: er.response.data.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: "top-right",
            })
        }
    }
    return (
        <div className='auth'>
            <img src={login} alt='' />
            <form onSubmit={submitHandler} className='form' >
                <span className='header'>
                    <span>
                        <span className='heading'>Fill what we know </span>
                        <span className=' heading red'>!</span>
                    </span>
                </span>
                <input type='email' placeholder='Email' required onChange={(e) => setEmail(e.target.value)} />
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <input type={showP ? 'text' : 'password'} placeholder='Password' required onChange={(e) => setPassword(e.target.value)} />
                    <span class="material-symbols-outlined" style={{ marginLeft: '-50px', cursor: 'pointer' }} onClick={() => setShowP(!showP)}>
                        {showP ? 'visibility_off' : 'visibility'}
                    </span>
                </span>
                <button type='submit' className='button'>Sign In</button>
                <button type='submit' className='buttonnn' onClick={() => navigate('/signup')}>Sign Up</button>
            </form>
        </div>

    )
}

export default SignIn