import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import Signup from '../../assets/Signup.png'
import './signup.css'
import { useNavigate } from 'react-router-dom';
import { useToast } from "@chakra-ui/react";

const SignUp = () => {
    const toast = useToast();
    const [fName, setFname] = useState('')
    const [lName, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [Cpassword, setCpassword] = useState('')
    const [showP, setShowP] = useState(false)
    const [showCP, setShowCP] = useState(false)
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        try {
            e.preventDefault();
            if (Cpassword !== password) {
                toast({
                    title: "Confirm Password and Password are different !",
                    status: "warning",
                    duration: 5000,
                    isClosable: true,
                    position: "top-right",
                });
                return;
            }
            toast({
                title: 'Please Wait !',
                status: 'info',
                duration: 2000,
                isClosable: true,
                position: "top-right",
            })
            const res = await axios.post(`http://localhost:9000/api/user/register`, { fName, lName, email, password });
            toast({
                title: res.data.message,
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: "top-right",
            })
            navigate('/login')
        } catch (er) {
            toast({
                title: er.response.data.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: "top-right",
            })
            // console.log(er.response.data.message)
        }
    }
    return (
        <div className='auth'>
            <img src={Signup} alt='' />
            <form onSubmit={submitHandler} >
                <span className='header'>
                    <span>
                        <span className='heading'>Let us know </span>
                        <span className=' heading red'>!</span>
                    </span>
                    <span className='signIN' onClick={() => navigate('/login')}>
                        <span className='underline'>Sign  </span>
                        <span className='underline red'>In</span>
                    </span>
                </span>
                <input type='text' placeholder='First Name' required onChange={(e) => setFname(e.target.value)} />
                <input type='text' placeholder='Last Name' required onChange={(e) => setLname(e.target.value)} />
                <input type='email' placeholder='Enter Email' required onChange={(e) => setEmail(e.target.value)} />
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <input type={showP ? 'text' : 'password'} placeholder='Set Password' required onChange={(e) => setPassword(e.target.value)} />
                    <span class="material-symbols-outlined" style={{ marginLeft: '-50px', cursor: 'pointer' }} onClick={() => setShowP(!showP)}>
                        {showP ? 'visibility_off' : 'visibility'}
                    </span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center' }}>
                    <input type={showCP ? 'text' : 'password'} placeholder='Retype Password' required onChange={(e) => setCpassword(e.target.value)} />
                    <span class="material-symbols-outlined" style={{ marginLeft: '-50px', cursor: 'pointer' }} onClick={() => setShowCP(!showCP)}>
                        {showCP ? 'visibility_off' : 'visibility'}
                    </span>
                </span>
                <button type='submit' className='button'>Sign Up</button>
            </form>
        </div>

    )
}

export default SignUp